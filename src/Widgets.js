import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLP8s7Guuo-zxb3S6KnfxrkGhMMI_iNcU0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Widgets;
