import { useState } from "react";
import styles from "./MoodBoards.module.css";

import Bracelet from "../assets/brace.png";
import Cave from "../assets/cave.png";
import Mountain from "../assets/moutain.png";
import PeachBlossom from "../assets/peachblossom.png";
import RoseWater from "../assets/rosewater.png";
import Tea from "../assets/tea.png";

const moodboardData = [
  {
    name: "Spring",
    headingColor: "var(--preset-spring-olive-petal)",
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
    font: "var(--preset-font-playwrite)",
    quoteBox: {
      heading: "New Beginnings",
      quote:
        "Spring is known for renewal and growth in both nature and culture.",
    },
  },
  {
    name: "Royal",
    headingColor: "var(--preset-royal-shellstone)",
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
    font: "var(--preset-font-notoserif)",
    quoteBox: {
      heading: "Timeless Elegance in Every Shade",
      quote:
        "Royal Blue pairs well with gold and silver, enhancing its regal and luxurious feel.",
    },
  },
  {
    name: "Rosewater",
    headingColor: "var(--preset-rosewater-china-doll)",
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
    font: "var(--preset-font-dancingscript)",
    quoteBox: {
      heading: "Soft Elegance",
      quote: "In the quiet moments, beauty whispers softly.",
    },
  },
];

function MoodBoards() {
  const [current, setCurrent] = useState(0);
  const mood = moodboardData[current];

  return (
    <div className={styles.MoodBoardWrapper}>
      <h1 className={styles.Heading} style={{ color: mood.headingColor }}>
        Today's Mood: {mood.name}
      </h1>

      <div className={styles.Board} style={{ backgroundColor: mood.archColor }}>
        <div className={styles.LeftColumn}>
          {/* Rosewater: show quote box here */}
          {mood.name === "Rosewater" && (
            <div className={styles.QuoteBox} style={{ fontFamily: mood.font }}>
              <h2>{mood.quoteBox.heading}</h2>
              <p>{mood.quoteBox.quote}</p>
            </div>
          )}

          {mood.images.map((imgSrc, index) => {
            if (mood.name === "Rosewater" && index === 1) {
              // Move second image to right for Rosewater
              return null;
            }
            return (
              <img
                key={index}
                src={imgSrc}
                alt={`${mood.name} image ${index + 1}`}
                className={styles.ImageBox}
              />
            );
          })}
        </div>

        <div className={styles.RightColumn}>
          <div
            className={styles.ArchBox}
            style={{
              backgroundColor: mood.archColor,
              color: mood.textColor,
              fontFamily: mood.font,
              fontSize: mood.name === "Rosewater" ? "1.6rem" : "1.2rem",
            }}
          >
            <p>{mood.name}</p>
          </div>

          {/* Rosewater: move second image here */}
          {mood.name === "Rosewater" && (
            <img
              src={mood.images[1]}
              alt={`${mood.name} image 2`}
              className={styles.ImageBox}
            />
          )}

          {/* Spring and Royal: show quote box under ArchBox */}
          {mood.name !== "Rosewater" && (
            <div className={styles.QuoteBox} style={{ fontFamily: mood.font }}>
              <h2>{mood.quoteBox.heading}</h2>
              <p>{mood.quoteBox.quote}</p>
            </div>
          )}

          <div className={styles.InnerPalette}>
            {mood.palette.map((color, index) => (
              <div
                key={index}
                className={styles.Swatch}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
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
