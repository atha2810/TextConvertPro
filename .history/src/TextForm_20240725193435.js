import React, { useState } from "react";
import "./css/TextForm"
export default function TextForm(props) {
  const textCapitalize = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const textLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const textCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const textRepeat = () => {
    let newText = text.repeat(5);
    setText(newText);
  };

  const textClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = e => {
    setText(e.target.value);
  };
  const [text, setText] = useState("Start writing or paste your text here...");
  //setText("New Text");
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="mx-5" style={{ width: "69%" }}>
          <label
            htmlFor="myBox"
            className="form-label mt-4"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              width: "69%",
            }}
          >
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="15"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "Black" : "white",
              color: props.mode === "dark" ? "white" : "black",
              width: "100%",
            }}
          ></textarea>
        </div>
        <div
          className="container"
          style={{
            width: "30%",
            marginTop: "90px",
          }}
        >
          <div>
            <button
              type="button"
              className="btn btn-primary my-2"
              onClick={textCapitalize}
            >
              UpperCase
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2 my-2"
              onClick={textLowercase}
            >
              LowererCase
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2 my-2"
              onClick={textCopy}
            >
              Copy
            </button>
            <button
              type="button"
              className="btn btn-warning mx-2 my-2"
              onClick={textRepeat}
            >
              Repeat 5 times
            </button>
            <button
              type="button"
              className="btn btn-danger mx-2 my-2"
              onClick={textClear}
            >
              Clear
            </button>
          </div>
          <div
            style={{
              marginTop: "10px",
              border: "5px solid black",
              padding: "5px",
            }}
          >
            <h2
              style={{
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Text Counter :
            </h2>

            <h5
              style={{
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <b>
                {
                  text.split(" ").filter(el => {
                    return el.length !== 0;
                  }).length
                }{" "}
              </b>
              words and <b>{text.length}</b> Characters
            </h5>
          </div>

          <div
            style={{
              marginTop: "10px",
              border: "5px solid black",
              padding: "5px",
            }}
          >
            <h2
              style={{
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Reading time :
            </h2>
            <h4 style={{ color: props.mode === "dark" ? "white" : "black" }}>
              <b>{0.008 * text.split(" ").length}</b> minutes
            </h4>{" "}
            {/* 0.008 seconds to read a word*/}
          </div>
        </div>
      </div>
      <div className="mx-5 my-3">
        {" "}
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Contents
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text}
        </p>
      </div>
    </>
  );
}
