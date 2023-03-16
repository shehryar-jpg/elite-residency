import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import VIDEO_PATH from "../images/construction-footage.mp4";
import { Fade } from "react-reveal";

const ConstructionVideo = () => {
  const playerRef = useRef(null);
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const size = useWindowSize();

  return (
    <>
      <Fade bottom distance="3%" duration={900}>
        <div className="mx-auto overflow-hidden  mt-16 ">
          <ReactPlayer
            ref={playerRef}
            url={VIDEO_PATH}
            controls={false}
            loop={true}
            playing={true}
            volume={0}
            width={size.width}
            height={size.width / 1.78}
          />
        </div>
      </Fade>
    </>
  );
};

export default ConstructionVideo;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
