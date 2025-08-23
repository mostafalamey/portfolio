import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

// Custom hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice =
        /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase()
        );
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [loadedVideo, setLoadedVideo] = useState(1);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const miniVideoRef = useRef(null);
  const pendingIndexRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  // When the full-screen/background video loads we should stop showing the loader
  const handleBackgroundLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
    // explicitly hide loading overlay as soon as the background video is ready
    setIsLoading(false);
  };

  const handleVideoLoaded = (index) => {
    const idx = typeof index === "number" ? index : currentIndex;
    setLoadedVideo(idx % totalVideos);
  };

  const upcomingVideoIndex = (currentIndex + 1) % totalVideos;

  const handleMiniVideoClick = () => {
    // Start the expand animation but don't switch the background yet
    setHasClicked(true);
    // store the target index so we can commit it after the animation
    pendingIndexRef.current = upcomingVideoIndex;
    // immediately update the current index so mini video shows next video
    setCurrentIndex(upcomingVideoIndex);
    // ensure the overlay video element uses the correct src for the expanding playback
    if (nextVideoRef.current) {
      nextVideoRef.current.src = getVideoSrc(pendingIndexRef.current);
    }
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 2) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  // Fallback: if for some reason videos never fire load events (mobile autoplay restrictions),
  // hide the loader after a short timeout so the page is usable.
  useEffect(() => {
    // On mobile, skip video loading entirely and hide loader immediately
    if (isMobile) {
      setIsLoading(false);
      return;
    }

    const t = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(t);
  }, [isMobile]);

  useGSAP(
    () => {
      // Animate the "designing" text on page load
      if (!isLoading) {
        gsap.fromTo(
          "#designing-text",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.3,
            ease: "power2.out",
          }
        );

        gsap.fromTo(
          "#architecture-text",
          {
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      }

      // GSAP animations can be added here
      // Use hasClicked so we wait to commit state until after animation
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => {
            // commit the pending index to the background video now that expand finished
            if (pendingIndexRef.current !== null) {
              handleVideoLoaded(pendingIndexRef.current);
              pendingIndexRef.current = null;
              nextVideoRef.current && nextVideoRef.current.play();
            }
            // allow future clicks
            setHasClicked(false);
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [hasClicked, isLoading], revertOnUpdate: true }
  );

  const getVideoSrc = (Index) => {
    // Use absolute path for files in Vite `public/` so assets resolve correctly
    return `/videos/h_${Index}.mp4`;
  };

  const getImageSrc = (Index) => {
    // Use existing gallery images as fallback for mobile
    const imageMap = {
      0: "/img/gallery-1.png",
      1: "/img/gallery-2.png",
      2: "/img/gallery-3.png",
      3: "/img/gallery-4.png",
      4: "/img/gallery-5.png",
      5: "/img/gallery-6.png",
    };
    return imageMap[Index] || imageMap[1];
  };

  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="absolute-center z-[100] h-dvh w-screen overflow-hidden bg-cream-100">
          <div className="three-body absolute-center">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-stone-200"
      >
        <div>
          {!isMobile && (
            <>
              <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div
                  onClick={handleMiniVideoClick}
                  className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                >
                  <video
                    ref={miniVideoRef}
                    src={getVideoSrc(upcomingVideoIndex)}
                    loop
                    muted
                    preload="metadata"
                    playsInline
                    // include webkit-playsinline for older iOS Safari
                    webkit-playsinline="true"
                    id="current-video"
                    className="size-64 origin-center scale-150 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                  />
                </div>
              </div>
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex)}
                loop
                muted
                preload="metadata"
                playsInline
                webkit-playsinline="true"
                id="next-video"
                className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                // onLoadedData={handleVideoLoad}
              />
              <video
                src={getVideoSrc(loadedVideo)}
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                onLoadedData={handleBackgroundLoaded}
                className={`absolute left-0 top-0 z-10 size-full object-cover object-center`}
              />
            </>
          )}
          {isMobile && (
            <div
              className="absolute left-0 top-0 z-10 size-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${getImageSrc(currentIndex)})`,
              }}
            />
          )}
          {/* Semi-transparent black overlay using rgba */}
          <div
            className="absolute left-0 top-0 z-20 size-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          ></div>
        </div>
        <h1
          id="architecture-text"
          className="display-font hero-heading !text-6xl absolute bottom-5 right-5 z-40 !text-stone-200 text-shadow-soft-xl"
        >
          Architecture
        </h1>
        <div className="absolute bottom-0 left-0 top-0 z-40 size-full">
          <div className="mt-60 md:ml-12 px-8 sm:px-16">
            <h1
              id="designing-text"
              className="display-font hero-heading !text-blue-gray-200 text-shadow-soft-xl"
            >
              designing
            </h1>
            <p className="mb-5 max-w-84 font-body text-white text-xl text-shadow-soft-lg">
              Crafting Spaces that Inspire <br /> Architecture Beyond Boundaries
            </p>
            <Button
              id="view-portfolio"
              title="View Portfolio"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-sage-500 flex-center gap-2 hover:bg-sage-600 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
