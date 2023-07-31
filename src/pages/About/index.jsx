import ImageWithText from "../../components/ImageWithText";
import landscape2 from "../../assets/images/landscape2.png";
import aboutData from "../../about.json";
import styles from "./About.module.css";
import Collapse from "../../components/Collapse";

function About() {
  return (
    <main>
      <ImageWithText imageSrc={landscape2} text="" brightness={100} />
      <article className={styles.container}>
        {aboutData.map((data, index) => (
          <Collapse key={index} title={data.title}>
            <p>{data.content}</p>
          </Collapse>
        ))}
      </article>
    </main>
  );
}

export default About;
