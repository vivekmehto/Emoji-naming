import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "😭": "Loudly Crying Face",
  "🥺": "Pleading Face",
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🔥": "Fire",
  "😊": "Smiling Face with Smiling Eyes",
  "🥰": "Smiling Face with Hearts",
  "🤣": "Rolling on the Floor Laughing",
  "😍": "Smiling Face with Heart-Eyes",
  "🙏": "Folded Hands",
  "💕": "Two Hearts",
  "😘": "Face Blowing a Kiss",
  "👍": "Thumbs Up"
};

const emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        "We don't have this is our database. we will update this soon :)";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji name</h1>
      <p>Type any emoji and we will try to guess:</p>
      <input onChange={emojiInputHandler}></input>

      <h2>{meaning} </h2>

      <p>You can select emojis from here also:</p>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
