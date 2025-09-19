import { useState } from "react";
import styles from "./MoodBoards.module.css";
import MoodBoardData from "../components/MoodBoardData";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import React from "react";


function MoodBoards() {
  const [current, setCurrent] = useState(0);
  const mood = MoodBoardData[current];
  const layout = mood.layout;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const getClassName = (classString) =>
    classString
      .split(" ")
      .map((cls) => styles[cls])
      .filter(Boolean)
      .join(" ");

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((current + 1) % MoodBoardData.length),
    onSwipedRight: () =>
      setCurrent((current - 1 + MoodBoardData.length) % MoodBoardData.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  function ImageModal({ src, onClose }) {
    return (
      <div className={styles.ModalOverlay} onClick={onClose}>
        <div
          className={styles.ModalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={src} alt="Enlarged" className={styles.ModalImage} />
          <button onClick={onClose} className={styles.CloseButton}>
            ×
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.Main} {...handlers}>
      <h1 className={styles.Heading} style={{ color: mood.headingColor }}>
        Today's Mood: {mood.name}
      </h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={styles.Board}
          style={{ backgroundColor: mood.archColor }}
        >
          <div className={getClassName(layout.leftColumnClass)}>
            {layout.quoteBoxPosition === "left" && (
              <div
                className={styles.QuoteBox}
                style={{ fontFamily: mood.font }}
              >
                <h2>{mood.quoteBox.heading}</h2>
                <p>{mood.quoteBox.quote}</p>
              </div>
            )}

           {mood.images.map((imgSrc, index) => {
  if (layout.moveImageIndexToRight === index) return null;

  return (
    <React.Fragment key={index}>
      <img
        src={imgSrc}
        alt={`${mood.name} image ${index + 1}`}
        className={styles.ImageBox}
        onClick={() => {
          setModalImage(imgSrc);
          setModalOpen(true);
        }}
      />
      {index === 0 && (
        <p className={styles.ImageHint}>Click for full picture</p>
      )}
    </React.Fragment>
  );
})}

          </div>

          <div className={getClassName(layout.rightColumnClass)}>
            <div
              className={`${styles.ArchBox} ${getClassName(
                layout.archBoxClass
              )}`}
              style={{
                backgroundColor: mood.archColor,
                color: mood.textColor,
                fontFamily: mood.font,
              }}
            >
              <p>{mood.name}</p>
            </div>

            {layout.moveImageIndexToRight !== null && (
              <img
                src={mood.images[layout.moveImageIndexToRight]}
                alt={`${mood.name} image ${
                  layout.moveImageIndexToRight + 1
                }`}
                className={styles.ImageBox}
                onClick={() => {
                  setModalImage(mood.images[layout.moveImageIndexToRight]);
                  setModalOpen(true);
                }}
              />
            )}

            {layout.quoteBoxPosition === "right" && (
              <div
                className={styles.QuoteBox}
                style={{ fontFamily: mood.font }}
              >
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
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setCurrent((current + 1) % MoodBoardData.length)}
        className={styles.SwitchButton}
      >
        Switch Mood
      </button>

      {modalOpen && (
        <ImageModal src={modalImage} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}

export default MoodBoards;
