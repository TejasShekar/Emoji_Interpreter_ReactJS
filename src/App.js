import {useState} from "react";
import "../src/App.css";

const emojis = `๐ Grinning Face,๐ Grinning Face with Big Eyes,๐ Grinning Face with Smiling Eyes,๐ Beaming Face with Smiling Eyes,๐ Grinning Squinting Face,๐ Grinning Face with Sweat,๐คฃ Rolling on the Floor Laughing,๐ Face with Tears of Joy,๐ Slightly Smiling Face,๐ Upside-Down Face,๐ Winking Face,๐ Smiling Face with Smiling Eyes,๐ Smiling Face with Halo,๐ฅฐ Smiling Face with Hearts,๐ Smiling Face with Heart-Eyes,๐คฉ Star-Struck,๐ Face Blowing a Kiss,๐ Kissing Face,๐ Kissing Face with Closed Eyes,๐ Kissing Face with Smiling Eyes,๐ Face Savoring Food,๐ Face with Tongue,๐ Winking Face with Tongue,๐คช Zany Face,๐ Squinting Face with Tongue,๐ค Money-Mouth Face,๐ค Smiling Face with Open Hands,๐คญ Face with Hand Over Mouth,๐คซ Shushing Face,๐ค Thinking Face,๐ค Zipper-Mouth Face,๐คจ Face with Raised Eyebrow,๐ Neutral Face,๐ Expressionless Face,๐ถ Face Without Mouth,๐ Smirking Face,๐ Unamused Face,๐ Face with Rolling Eyes,๐ฌ Grimacing Face,๐คฅ Lying Face,๐ Relieved Face,๐ Pensive Face,๐ช Sleepy Face,๐คค Drooling Face,๐ด Sleeping Face,๐ท Face with Medical Mask,๐ค Face with Thermometer,๐ค Face with Head-Bandage,๐คข Nauseated Face,๐คฎ Face Vomiting,๐คง Sneezing Face,๐ฅต Hot Face,๐ฅถ Cold Face,๐ฅด Woozy Face,๐ต Face with Crossed-Out Eyes,๐คฏ Exploding Head,๐ค  Cowboy Hat Face,๐ฅณ Partying Face,๐ Smiling Face with Sunglasses,๐ค Nerd Face,๐ง Face with Monocle,๐ Confused Face,๐ Worried Face,๐ Slightly Frowning Face,๐ฎ Face with Open Mouth,๐ฏ Hushed Face,๐ฒ Astonished Face,๐ณ Flushed Face,๐ฅบ Pleading Face,๐ฆ Frowning Face with Open Mouth,๐ง Anguished Face,๐จ Fearful Face,๐ฐ Anxious Face with Sweat,๐ฅ Sad but Relieved Face,๐ข Crying Face,๐ญ Loudly Crying Face,๐ฑ Face Screaming in Fear,๐ Confounded Face,๐ฃ Persevering Face,๐ Disappointed Face,๐ Downcast Face with Sweat,๐ฉ Weary Face,๐ซ Tired Face,๐ฅฑ Yawning Face,๐ค Face with Steam From Nose,๐ก Enraged Face,๐  Angry Face,๐ Waving Hand / Hey,๐ค Raised Back of Hand,โ Raised Hand,๐ Vulcan Salute,๐ Ok/ Superb,๐ค Fingers crossed,๐ค Love-You Gesture,๐ค Call Me Hand,๐ Thumbs Up / OK,๐ Thumbs Down / Not OK,๐ Clapping Hands,๐ High-Five,๐ค Handshake,๐ Person With Folded Hands / Greetings / Welcome,โ Victory Hand / Peace`;

const tempArr = emojis.split(",");
const emojiDictionary = {};
for (let emoji of tempArr) {
  const temp = emoji.replace(" ", ":").split(":");
  emojiDictionary[temp[0]] = temp[1];
}

const emojisList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(e) {
    const userInput = e.target.value;
    const meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      setMeaning(
        "Sorry, I currently don't know the meaning of this emoji yet !"
      );
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    const meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <div>
        {emojisList.map(function (emoji) {
          return (
            <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </span>
          );
        })}
      </div>
      <footer>
        Made by
        <a
          id="portfolio"
          href="https://portfolio-of-tejas.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          TejasxShekar
        </a>
      </footer>
    </div>
  );
}
