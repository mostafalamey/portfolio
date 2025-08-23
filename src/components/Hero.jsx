import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
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
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  useGSAP(
    () => {
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
            // commit the pending index now that expand finished
            if (pendingIndexRef.current !== null) {
              setCurrentIndex(pendingIndexRef.current);
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
    { dependencies: [hasClicked], revertOnUpdate: true }
  );

  useGSAP(() => {
    // GSAP animations can be added here
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (Index) => {
    // Use absolute path for files in Vite `public/` so assets resolve correctly
    return `/videos/h_${Index}.mp4`;
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="absolute-center z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body absolute-center">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-100"
      >
        <div>
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
            className={`absolute left-0 top-0 size-full object-cover object-center`}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
          G<b>a</b>ming
        </h1>
        <div className="absolute bottom-0 left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-500 flex-center gap-2"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
