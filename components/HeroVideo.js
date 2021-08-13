import HeroVideoStyles from "../styles/HeroVideoStyles.module.css";

const HeroVideo = () => {
  return (
    <div className="sectionOrange">
      <div className="container">
        <div className={HeroVideoStyles.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UtPprUWteeo"
            title="Baker Rae x Cafe"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding;"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
