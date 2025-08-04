import { useState } from "react";
import styles from "./MoodBoards.module.css";

// Import av bilder
import Bracelet from "../assets/brace.png";
import Cave from "../assets/cave.png";
import Mountain from "../assets/moutain.png";
import PeachBlossom from "../assets/peachblossom.png";
import RoseWater from "../assets/rosewater.png";
import Tea from "../assets/tea.png";

// Moodboard-data med unike farger og bilder
const moodboardData = [
  {
    name: "Spring",
    archColor: "var(--preset-spring-golden-clover)",
    textColor: "var(--preset-spring-peach-blossom)",
    palette: [
      "var(--preset-spring-olive-petal)",
      "var(--preset-spring-golden-clover)",
      "var(--preset-spring-arctic-daisy)",
      "var(--preset-spring-rose-blush)",
      "var(--preset-spring-peach-blossom)",
    ],
    images: [PeachBlossom, Mountain],
  },
  {
    name: "Royal",
    archColor: "var(--preset-royal-sapphire)",
    textColor: "var(--preset-royal-quicksand)",
    palette: [
      "var(--preset-royal-sapphire)",
      "var(--preset-royal-royal-blue)",
      "var(--preset-royal-quicksand)",
      "var(--preset-royal-swan-wing)",
      "var(--preset-royal-shellstone)",
    ],
    images: [Bracelet, Tea],
  },
  {
    name: "Rosewater",
    archColor: "var(--preset-rosewater-copper-rose)",
    textColor: "var(--preset-rosewater-plum-wine)",
    palette: [
      "var(--preset-rosewater)",
      "var(--preset-rosewater-copper-rose)",
      "var(--preset-rosewater-dusty-rose)",
      "var(--preset-rosewater-china-doll)",
      "var(--preset-rosewater-plum-wine)",
    ],
    images: [RoseWater, Cave],
  },
];

function MoodBoards() {
  const [current, setCurrent] = useState(0);
  const mood = moodboardData[current];

  return (
    <div
      className={styles.MoodBoardWrapper}
      style={{ backgroundColor: mood.backgroundColor }}
    >
      <h1 className={styles.Heading}>Today's Mood: {mood.name}</h1>

      <div className={styles.Board}>
        <div className={styles.LeftColumn}>
          {mood.images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${mood.name} image ${index + 1}`}
              className={styles.ImageBox}
            />
          ))}
        </div>

        <div className={styles.RightColumn}>
          <div
            className={styles.ArchBox}
            style={{
              backgroundColor: mood.archColor,
              color: mood.textColor,
            }}
          >
            <p>{mood.name}</p>
          </div>
        </div>
      </div>

      <div className={styles.Palette}>
        {mood.palette.map((color, index) => (
          <div
            key={index}
            className={styles.Swatch}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>

      <button
        onClick={() => setCurrent((current + 1) % moodboardData.length)}
        className={styles.SwitchButton}
      >
        Switch Mood
      </button>
    </div>
  );
}

export default MoodBoards;
