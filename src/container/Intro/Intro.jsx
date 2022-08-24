import React from "react";
import { BsDisplay, BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { bar } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={bar}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div
        className={`${
          playVideo ? "hidden" : null
        } app__video-overlay flex__center`}
        onClick={handleVideo}
      >
        <div className="app__video-overlay_circle  flex__center">
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
