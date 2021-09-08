import HeroVideoStyles from "../styles/HeroVideoStyles.module.css";

const HeroVideo = () => {
  return (
    <div className="container">
      <div className={HeroVideoStyles.header}>
        <h1>As seen on BlogTO</h1>
        {/* <Image src={"/line.svg"} width="70" height="10" /> */}
      </div>
      <div className="sectionOrange">
        <div className={HeroVideoStyles.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UtPprUWteeo"
            title="Baker Rae x Cafe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding;"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
