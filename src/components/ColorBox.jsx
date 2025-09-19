import { useState } from "react";
import styles from "./ColorBox.module.css";

function ColorBox({ hex, name, className }) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setCopyError(false);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      setCopyError(true);
    } finally {
      // Tilbakestill status etter 1.2 sekunder
      setTimeout(() => {
        setCopied(false);
        setCopyError(false);
      }, 1200);
    }
  };

  const renderLabel = () => {
    if (copyError) return "Failed!";
    if (copied) return "Copied!";
    return "Copy";
  };

  return (
    <div className={styles.ColorItem}>
      <div
        className={`${styles.ColorBox} ${className || ""}`}
        style={{ backgroundColor: hex }}
        onClick={handleClick}
      >
        <span className={styles.CopyLabel}>{renderLabel()}</span>
      </div>

      <p className={styles.ColorText}>{hex}</p>

      {Array.isArray(name) ? (
        name.map((line, i) => (
          <p key={i} className={styles.ColorText}>
            {line}
          </p>
        ))
      ) : (
        <p className={styles.ColorText}>{name}</p>
      )}
    </div>
  );
}

export default ColorBox;
