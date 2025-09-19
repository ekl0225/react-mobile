import Bracelet from "../assets/brace.png";
import Cave from "../assets/cave.png";
import Mountain from "../assets/moutain.png";
import PeachBlossom from "../assets/peachblossom.png";
import RoseWater from "../assets/rosewater.png";
import Tea from "../assets/tea.png";

const MoodBoardData = [
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
    layout: {
      leftColumnClass: "LeftColumn",
      rightColumnClass: "RightColumn",
      archBoxClass: "",
      quoteBoxPosition: "right",
      moveImageIndexToRight: null,
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
    layout: {
      leftColumnClass: "LeftColumn",
      rightColumnClass: "RightColumn",
      archBoxClass: "",
      quoteBoxPosition: "right",
      moveImageIndexToRight: null,
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
    layout: {
      leftColumnClass: "LeftColumn RosewaterLayout",
      rightColumnClass: "RightColumn",
      archBoxClass: "RosewaterArch",
      quoteBoxPosition: "left",
      moveImageIndexToRight: 1, // flytt andre bildet til høyre
    },
  },
];


export default MoodBoardData;
