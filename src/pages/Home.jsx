import styles from "./Home.module.css";
import flowerWhite from "../assets/white-flowers-no-back.png";
import ColorBox from "../components/ColorBox";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className={styles.Main}>
      <div className={styles.MobileOnly}>
        <div className={styles.Intro}>
          <img
            className={styles.WhiteFlowersMobile}
            src={flowerWhite}
            alt="White Flowers"
          />
          <div className={styles.IntroText}>
            <p className={styles.HeroTypewriter}>
              Hei, jeg heter <span id={styles.Meaculpa}>E</span>milia. <br />
              <Typewriter
                words={[
                  "Jeg er frontend utvikler og designentusiast🎨. Jeg elsker å skape digitale løsninger som både ser bra ut og fungerer sømløst. Gjennom kreativ koding og godt design bringer jeg ideer til live i nettleseren.",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </p>
          </div>
        </div>
      </div>

      <div className={styles.Hero}>
        <div className={styles.Fonts}>
          <div className={styles.NormalText}>
            <p>Font-1</p>
            <div className={styles.InstrumentSerif}>
              <p>Lorem Ipsum</p>
            </div>
            <p>Instrument Serif</p>
          </div>
          <div className={styles.NormalText}>
            <p>Font-2</p>
            <div className={styles.Italianno}>
              <p>Lorem Ipsum</p>
            </div>
            <p>Italianno</p>
          </div>
        </div>

        <div className={styles.DesktopOnly}>
          <div className={styles.Intro}>
            <img
              className={styles.WhiteFlowers}
              src={flowerWhite}
              alt="White Flowers"
            />
            <div className={styles.IntroText}>
              <p className={styles.HeroTypewriter}>
                Hei, jeg heter <span id={styles.Meaculpa}>E</span>milia. <br />
                <Typewriter
                  words={[
                    "Jeg er frontend utvikler og designentusiast🎨. Jeg elsker å skape digitale løsninger som både ser bra ut og fungerer sømløst. Gjennom kreativ koding og godt design bringer jeg ideer til live i nettleseren.",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1500}
                />
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ColorPalette}>
          <div className={styles.PrimaryColors}>
            <div className={styles.Title}>
              <p>Primary Colors</p>
              <p className={styles.HelpText}>
                Klikk på en farge for å kopiere hex-koden
              </p>
            </div>
            <div className={styles.Colors}>
              <ColorBox
                hex="#2B2B1B"
                name="Pine Tree"
                className={styles.Pinetree}
              />
              <ColorBox hex="#A88176" name={["Burnished", "Brown"]} />
              <ColorBox hex="#D79B87" name="Tumbleweed" />
              <ColorBox hex="#EDCFBE" name="Dust Storm" />
              <ColorBox hex="#CDB4B2" name="Silver Pink" />
            </div>
          </div>

          <div className={styles.SecondaryColors}>
            <div className={styles.Title}>
              <p>Secondary Colors</p>
            </div>
            <div className={styles.Colors}>
              <ColorBox hex="#FAF7EF" name="Floral White" />
              <ColorBox hex="#32372C" name="Black Olive" />
              <ColorBox hex="#121314" name="Carbon Black" />
            </div>
          </div>
        </div>
        <img
          className={`${styles.CornerFlowerMobile} ${styles.CornerFlower}`}
          src={flowerWhite}
          alt="White-Flowers"
        />
      </div>
    </div>
  );
}

export default Home;
