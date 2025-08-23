import React, { useEffect, useRef, useState } from "react";

const NewHero = () => {
  const getImageSrc = (index) => {
    const imageMap = {
      0: "/img/gallery-1.png",
      1: "/img/gallery-2.png",
      2: "/img/gallery-3.png",
      3: "/img/gallery-4.png",
      4: "/img/gallery-5.png",
    };
    return imageMap[index] || imageMap[0];
  };

  // Properly initialize React refs
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const thumbnailRef = useRef(null);

  // Auto-play state and refs
  const autoPlayTimer = useRef(null);
  const inactivityTimer = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const timeRunning = 2000;
  const autoPlayInterval = 10000; // 10 seconds between auto transitions
  const inactivityDelay = 6000; // 6 seconds of inactivity before auto-play starts
  let runTimeOut;

  // Auto-play functions
  const startAutoPlay = () => {
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    setIsAutoPlaying(true);
    autoPlayTimer.current = setInterval(() => {
      handleNext(true); // Pass true to indicate auto-play
    }, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
      autoPlayTimer.current = null;
    }
    setIsAutoPlaying(false);
  };

  const resetInactivityTimer = () => {
    // Clear existing timers
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    stopAutoPlay();

    // Start new inactivity timer
    inactivityTimer.current = setTimeout(() => {
      startAutoPlay();
    }, inactivityDelay);
  };

  const handleNext = (isAutoPlay = false) => {
    if (!listRef.current || !thumbnailRef.current || !carouselRef.current)
      return;

    // Reset inactivity timer only for manual interactions
    if (!isAutoPlay) {
      resetInactivityTimer();
    }

    // Get current items
    const items = listRef.current.querySelectorAll(".item");
    const thumbnails = thumbnailRef.current.querySelectorAll(".item");

    if (items.length === 0 || thumbnails.length === 0) return;

    // Logic for handling next button click
    listRef.current.appendChild(items[0]);
    thumbnailRef.current.appendChild(thumbnails[0]);
    carouselRef.current.classList.add("next");

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove("next");
      }
    }, timeRunning);
  };

  const handlePrev = () => {
    if (!listRef.current || !thumbnailRef.current || !carouselRef.current)
      return;

    // Reset inactivity timer for manual interaction
    resetInactivityTimer();

    // Get current items
    const items = listRef.current.querySelectorAll(".item");
    const thumbnails = thumbnailRef.current.querySelectorAll(".item");

    if (items.length === 0 || thumbnails.length === 0) return;

    // Logic for handling previous button click
    listRef.current.prepend(items[items.length - 1]);
    thumbnailRef.current.prepend(thumbnails[thumbnails.length - 1]);
    carouselRef.current.classList.add("prev");

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove("prev");
      }
    }, timeRunning);
  };

  // Initialize auto-play and cleanup timers
  useEffect(() => {
    // Start the inactivity timer when component mounts
    resetInactivityTimer();

    // Add event listeners to detect user activity
    const handleUserActivity = () => {
      resetInactivityTimer();
    };

    // Listen for mouse movements and clicks on the carousel
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("mousemove", handleUserActivity);
      carouselElement.addEventListener("click", handleUserActivity);
      carouselElement.addEventListener("mouseenter", stopAutoPlay);
      carouselElement.addEventListener("mouseleave", resetInactivityTimer);
    }

    return () => {
      // Cleanup all timers
      if (runTimeOut) clearTimeout(runTimeOut);
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);

      // Remove event listeners
      if (carouselElement) {
        carouselElement.removeEventListener("mousemove", handleUserActivity);
        carouselElement.removeEventListener("click", handleUserActivity);
        carouselElement.removeEventListener("mouseenter", stopAutoPlay);
        carouselElement.removeEventListener("mouseleave", resetInactivityTimer);
      }
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div ref={listRef} className="list">
        <div className="item">
          <img src={getImageSrc(0)} alt="Hero Background" />
          <div className="content">
            <div className="author">Sodic</div>
            <div className="title">Beverly Hills</div>
            <div className="topic">Residential</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="buttons">
              <button>View Project</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={getImageSrc(1)} alt="Hero Background" />
          <div className="content">
            <div className="author">Dorra</div>
            <div className="title">Avenu 22</div>
            <div className="topic">Commercial</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="buttons">
              <button>View Project</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={getImageSrc(2)} alt="Hero Background" />
          <div className="content">
            <div className="author">New Giza</div>
            <div className="title">NG University</div>
            <div className="topic">Public & Cultural</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="buttons">
              <button>View Project</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={getImageSrc(3)} alt="Hero Background" />
          <div className="content">
            <div className="author">Mabany Edris</div>
            <div className="title">Gate Plaza</div>
            <div className="topic">Commercial</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="buttons">
              <button>View Project</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={getImageSrc(4)} alt="Hero Background" />
          <div className="content">
            <div className="author">Mabany Edris</div>
            <div className="title">Gate Plaza</div>
            <div className="topic">Commercial</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="buttons">
              <button>View Project</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail" ref={thumbnailRef}>
        <div className="item shadow-soft-lg">
          <img src={getImageSrc(1)} alt="Thumbnail 2" />
          <div className="content">
            <div className="title">Thumbnail 2</div>
            <div className="des">A brief description of Thumbnail 2.</div>
          </div>
        </div>
        <div className="item shadow-soft-lg">
          <img src={getImageSrc(2)} alt="Thumbnail 3" />
          <div className="content">
            <div className="title">Thumbnail 3</div>
            <div className="des">A brief description of Thumbnail 3.</div>
          </div>
        </div>
        <div className="item shadow-soft-lg">
          <img src={getImageSrc(3)} alt="Thumbnail 4" />
          <div className="content">
            <div className="title">Thumbnail 4</div>
            <div className="des">A brief description of Thumbnail 4.</div>
          </div>
        </div>
        <div className="item shadow-soft-lg">
          <img src={getImageSrc(4)} alt="Thumbnail 4" />
          <div className="content">
            <div className="title">Thumbnail 4</div>
            <div className="des">A brief description of Thumbnail 4.</div>
          </div>
        </div>
        <div className="item shadow-soft-lg">
          <img src={getImageSrc(0)} alt="Thumbnail 1" />
          <div className="content">
            <div className="title">New Slider</div>
            <div className="des">A brief description of the new slider.</div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button className="prev" onClick={handlePrev}>
          {"<"}
        </button>
        <button className="next" onClick={handleNext}>
          {">"}
        </button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default NewHero;
