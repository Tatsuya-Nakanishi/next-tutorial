import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [array, setArray] = useState([]);
  const [text, setText] = useState("");
  const [isSmorker, setIsSmorker] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value.trim());
  };
  const handleClick = () => {
    let addText = `俺「${text}」`;
    const miri = "みりちゃん";
    if (text.includes("タバコ") || text.includes("たばこ")) {
      addText += `${miri}「嫌い。近寄らないで。」`;
      setIsSmorker(true);
    } else if (text.includes("もう吸いません")) {
      addText += `${miri}「許す。大好き。イケメン。」`;
      setIsSmorker(false);
    } else if (isSmorker) {
      addText += `${miri}「もう何言っても無理。」`;
    }

    setArray((prevArray) => [...prevArray, addText]);
    setText("");
  };

  useEffect(() => {
    if ((text === "タバコ" || text === "たばこ") && !isSmorker) {
      alert("タバコはダメ。吸ったら許さないから。");
    }
  }, [text]);

  return (
    <>
      <Head>
        <title>みりちゃんタバコチェッカー</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ textAlign: "center" }}>
        <h2>みりちゃんタバコチェッカー</h2>
        <img
          src="https://1.bp.blogspot.com/-nYlEwgraHwU/XBRfGn-bkzI/AAAAAAABQ2U/K3VYUD7OTVgdi1jBUkOFznDumkURCzhTgCLcBGAs/s800/kinshi_mark_tabako_kinen.png"
          width="150px"
          height="150px"
        ></img>
        <br />
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleClick} style={{ height: "24px" }}>
          送信
        </button>
        {array.map((item) => {
          return (
            <p key={item} style={{ textAlign: "center" }}>
              {item}
            </p>
          );
        })}
      </div>
    </>
  );
}
