import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalVideos = 4;
  const backgroundVideoRef = useRef(null);
  const expandingVideoRef = useRef(null);
  const carouselRef = useRef(null);
  const thumbnailRefs = useRef([]);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleBackgroundLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
    setIsLoading(false);
  };

  // Get the visible thumbnails in the carousel (4 videos starting from current)
  const getVisibleVideos = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentVideoIndex + i) % totalVideos;
      visible.push(index);
    }
    return visible;
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // The first (leftmost) thumbnail will expand
    const expandingIndex = currentVideoIndex;
    const expandingThumbnail = thumbnailRefs.current[expandingIndex];

    if (!expandingThumbnail || !expandingVideoRef.current) {
      setIsAnimating(false);
      return;
    }

    // Set up expanding video
    expandingVideoRef.current.src = getVideoSrc(expandingIndex);

    // Get thumbnail position
    const rect = expandingThumbnail.getBoundingClientRect();

    // Position expanding video exactly on thumbnail
    gsap.set(expandingVideoRef.current, {
      visibility: "visible",
      position: "fixed",
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      borderRadius: "8px",
      zIndex: 100,
    });

    // Update current index immediately (moves thumbnail to end)
    const nextIndex = (currentVideoIndex + 1) % totalVideos;
    setCurrentVideoIndex(nextIndex);

    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Update background video
        if (backgroundVideoRef.current) {
          backgroundVideoRef.current.src = getVideoSrc(expandingIndex);
        }

        // Hide expanding video
        gsap.set(expandingVideoRef.current, { visibility: "hidden" });

        setIsAnimating(false);
      },
    });

    // Animate carousel sliding left
    tl.to(
      carouselRef.current,
      {
        x: -92, // thumbnail width + gap
        duration: 0.6,
        ease: "power2.out",
      },
      0
    );

    // Expand thumbnail to fullscreen
    tl.to(
      expandingVideoRef.current,
      {
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        duration: 1.2,
        ease: "power2.inOut",
      },
      0.3
    );

    // Reset carousel position
    tl.set(carouselRef.current, { x: 0 }, 1.1);
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Move to previous index first
    const prevIndex = (currentVideoIndex - 1 + totalVideos) % totalVideos;
    const expandingIndex = (prevIndex + 3) % totalVideos; // Last visible thumbnail

    setCurrentVideoIndex(prevIndex);

    // Small delay to let DOM update
    setTimeout(() => {
      const expandingThumbnail = thumbnailRefs.current[expandingIndex];

      if (!expandingThumbnail || !expandingVideoRef.current) {
        setIsAnimating(false);
        return;
      }

      expandingVideoRef.current.src = getVideoSrc(expandingIndex);

      const rect = expandingThumbnail.getBoundingClientRect();

      gsap.set(expandingVideoRef.current, {
        visibility: "visible",
        position: "fixed",
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        borderRadius: "8px",
        zIndex: 100,
      });

      // Animate carousel sliding from right
      gsap.fromTo(
        carouselRef.current,
        { x: 92 },
        { x: 0, duration: 0.6, ease: "power2.out" }
      );

      // Expand to fullscreen
      gsap.to(expandingVideoRef.current, {
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        duration: 1.2,
        ease: "power2.inOut",
        delay: 0.3,
        onComplete: () => {
          if (backgroundVideoRef.current) {
            backgroundVideoRef.current.src = getVideoSrc(expandingIndex);
          }

          gsap.set(expandingVideoRef.current, { visibility: "hidden" });
          setIsAnimating(false);
        },
      });
    }, 50);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 2) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useEffect(() => {
    if (isMobile) {
      setIsLoading(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isMobile]);

  useGSAP(
    () => {
      if (!isLoading) {
        gsap.fromTo(
          "#designing-text",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      }
    },
    { dependencies: [isLoading], revertOnUpdate: true }
  );

  const getVideoSrc = (index) => {
    return `/videos/h_${index}.mp4`;
  };

  const getImageSrc = (index) => {
    const imageMap = {
      0: "/img/gallery-1.png",
      1: "/img/gallery-2.png",
      2: "/img/gallery-3.png",
      3: "/img/gallery-4.png",
    };
    return imageMap[index] || imageMap[0];
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
              {/* Background Video */}
              <video
                ref={backgroundVideoRef}
                src={getVideoSrc(currentVideoIndex)}
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                onLoadedData={handleBackgroundLoaded}
                className="absolute left-0 top-0 z-10 size-full object-cover object-center"
              />

              {/* Expanding Video Overlay */}
              <video
                ref={expandingVideoRef}
                loop
                muted
                playsInline
                webkit-playsinline="true"
                className="invisible absolute z-[100] object-cover"
              />

              {/* Carousel Container */}
              <div className="absolute bottom-8 right-8 z-50">
                <div
                  ref={carouselRef}
                  className="flex gap-3 mb-4"
                  style={{ width: "368px" }}
                >
                  {getVisibleVideos().map((videoIndex, i) => (
                    <div
                      key={`${videoIndex}-${currentVideoIndex}`}
                      ref={(el) => (thumbnailRefs.current[videoIndex] = el)}
                      className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 border-white/30"
                    >
                      <video
                        src={getVideoSrc(videoIndex)}
                        loop
                        muted
                        preload="metadata"
                        playsInline
                        webkit-playsinline="true"
                        className="h-full w-full object-cover"
                        onLoadedData={handleVideoLoad}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-xs text-white">
                        {videoIndex + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {isMobile && (
            <div
              className="absolute left-0 top-0 z-10 size-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${getImageSrc(currentVideoIndex)})`,
              }}
            />
          )}

          {/* Overlay */}
          <div className="absolute left-0 top-0 z-20 size-full bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 top-0 z-40 size-full">
          <div className="mt-60 md:ml-12 px-8 sm:px-16">
            <h1
              id="designing-text"
              className="display-font hero-heading !text-blue-gray-200 text-shadow-soft-xl"
            >
              designing
            </h1>
            <p
              id="architecture-description"
              className="mb-5 max-w-84 font-body text-white text-xl text-shadow-soft-lg"
            >
              Crafting Spaces that Inspire <br /> Architecture Beyond Boundaries
            </p>
            <Button
              id="view-portfolio"
              title="View Portfolio"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-sage-500 flex-center gap-2 hover:bg-sage-600 transition-colors mb-4"
            />

            {/* Navigation Arrows */}
            {!isMobile && (
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  disabled={isAnimating}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <IoIosArrowBack size={20} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={isAnimating}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <IoIosArrowForward size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
