import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "😑": "Annoyed",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "👋": "Waving Hand / Hey",
  "🤚": "Raised Back of Hand",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "Ok/ Superb",
  "🤞": "Fingers crossed",
  "🤟": "Love-You Gesture",
  "🤙": "Call Me Hand",
  "👍": "Thumbs Up / OK",
  "👎": "Thumbs Down / Not OK",
  "👊": "Oncoming Fist",
  "👏": "Clapping Hands",
  "🙌": "High-Five",
  "🤝": "Handshake",
  "🙏": "Person With Folded Hands / Greetings / Welcome",
  "✌": "Victory Hand / Peace"
};

var emojisList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(e) {
    var userInput = e.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, I currently don't know the meaning of this emoji yet !";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
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
