import React from "react";

const HeroVideo = () => {
  return (
    <div className="container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UtPprUWteeo"
        title="Baker Rae x Cafe"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default HeroVideo;
