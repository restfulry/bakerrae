import Image from "next/image";
import Link from "next/link";
import HeroVideoStyles from "../styles/HeroVideoStyles.module.css";

const HeroVideo = () => {
  return (
    <div className="container">
      <div className={HeroVideoStyles.heroVidWrapper}>
          <div className={HeroVideoStyles.header}>
            <h1>As seen on</h1>
            <Image src={"/line.svg"} width="70" height="10" />
          </div>
        <div className={HeroVideoStyles.content}>
          <div className={HeroVideoStyles.feature}>
            <div className="sectionOrange">
              <div className={HeroVideoStyles.video}>
                <iframe
                  width="500"
                  height="500"
                  src="https://www.youtube.com/embed/UtPprUWteeo"
                  title="Baker Rae x Cafe"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className={HeroVideoStyles.feature}>
            <div className="sectionOrange">
                <div className={HeroVideoStyles.video}>
                    <div className={HeroVideoStyles.imageWrapper}>
                      <Image src="/torontolife-min-square.jpg" width="500" height="500" alt="pic"/>
                    </div>
              </div>
            </div>
          </div>
          <div className={HeroVideoStyles.feature}>
            <div className="sectionOrange">
              <div className={HeroVideoStyles.video}>
                <iframe
                  width="500"
                  height="500"
                  src="https://www.youtube.com/embed/AfFafa_9Bds"
                  title="Baker Rae on Omni"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
