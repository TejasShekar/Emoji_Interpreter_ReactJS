import {useState} from "react";
import "../src/App.css";

const emojis = `😀 Grinning Face,😃 Grinning Face with Big Eyes,😄 Grinning Face with Smiling Eyes,😁 Beaming Face with Smiling Eyes,😆 Grinning Squinting Face,😅 Grinning Face with Sweat,🤣 Rolling on the Floor Laughing,😂 Face with Tears of Joy,🙂 Slightly Smiling Face,🙃 Upside-Down Face,😉 Winking Face,😊 Smiling Face with Smiling Eyes,😇 Smiling Face with Halo,🥰 Smiling Face with Hearts,😍 Smiling Face with Heart-Eyes,🤩 Star-Struck,😘 Face Blowing a Kiss,😗 Kissing Face,😚 Kissing Face with Closed Eyes,😙 Kissing Face with Smiling Eyes,😋 Face Savoring Food,😛 Face with Tongue,😜 Winking Face with Tongue,🤪 Zany Face,😝 Squinting Face with Tongue,🤑 Money-Mouth Face,🤗 Smiling Face with Open Hands,🤭 Face with Hand Over Mouth,🤫 Shushing Face,🤔 Thinking Face,🤐 Zipper-Mouth Face,🤨 Face with Raised Eyebrow,😐 Neutral Face,😑 Expressionless Face,😶 Face Without Mouth,😏 Smirking Face,😒 Unamused Face,🙄 Face with Rolling Eyes,😬 Grimacing Face,🤥 Lying Face,😌 Relieved Face,😔 Pensive Face,😪 Sleepy Face,🤤 Drooling Face,😴 Sleeping Face,😷 Face with Medical Mask,🤒 Face with Thermometer,🤕 Face with Head-Bandage,🤢 Nauseated Face,🤮 Face Vomiting,🤧 Sneezing Face,🥵 Hot Face,🥶 Cold Face,🥴 Woozy Face,😵 Face with Crossed-Out Eyes,🤯 Exploding Head,🤠 Cowboy Hat Face,🥳 Partying Face,😎 Smiling Face with Sunglasses,🤓 Nerd Face,🧐 Face with Monocle,😕 Confused Face,😟 Worried Face,🙁 Slightly Frowning Face,😮 Face with Open Mouth,😯 Hushed Face,😲 Astonished Face,😳 Flushed Face,🥺 Pleading Face,😦 Frowning Face with Open Mouth,😧 Anguished Face,😨 Fearful Face,😰 Anxious Face with Sweat,😥 Sad but Relieved Face,😢 Crying Face,😭 Loudly Crying Face,😱 Face Screaming in Fear,😖 Confounded Face,😣 Persevering Face,😞 Disappointed Face,😓 Downcast Face with Sweat,😩 Weary Face,😫 Tired Face,🥱 Yawning Face,😤 Face with Steam From Nose,😡 Enraged Face,😠 Angry Face,👋 Waving Hand / Hey,🤚 Raised Back of Hand,✋ Raised Hand,🖖 Vulcan Salute,👌 Ok/ Superb,🤞 Fingers crossed,🤟 Love-You Gesture,🤙 Call Me Hand,👍 Thumbs Up / OK,👎 Thumbs Down / Not OK,👏 Clapping Hands,🙌 High-Five,🤝 Handshake,🙏 Person With Folded Hands / Greetings / Welcome,✌ Victory Hand / Peace`;

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
          href="https://tejasshekar.netlify.app/"
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
