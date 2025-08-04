import { useState } from "react";
import styles from "./ColorBox.module.css";

function ColorBox({ hex, name, className }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className={styles.ColorItem}>
      <div
        className={`${styles.ColorBox} ${className || ""}`}
        style={{ backgroundColor: hex }}
        onClick={handleClick}
      >
        <span className={styles.CopyLabel}>{copied ? "Copied!" : "Copy"}</span>
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
