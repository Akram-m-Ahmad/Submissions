import React from "react";

export default function home(props) {
  return (
    <div>
      <h2 className="topic">
        <span>L</span>
        <span>A</span>
        <span>M</span>
        <span>B</span>
        <span>A</span>
      </h2>
      <p className="underImg">Lamba</p>

      <a href="#portfolio">
        {" "}
        <div className="arrow-down">
          <div className="leftt" />
          <div className="rightt" />
        </div>
      </a>
    </div>
  );
}
