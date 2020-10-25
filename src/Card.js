import React, { useState } from "react";

function Card(props) {
  const { img, title, price, article } = props;
  const [show, setShow] = useState(true);
  const [text, setText] = useState(article.substring(0, 201) + "...");
  const [isMore, setIsMore] = useState(true);

  return (
    <>
      {show ? (
        <div className="card">
          <img src={img} alt="" />
          <div className="card-name">
            <h2 className="card-title">{title}</h2>
            <h2 className="card-price">$ {price}</h2>
          </div>

          {article.length > 300 ? (
            <p className="article mb">
              {text}
              {isMore ? (
                <button
                  className="readmore-btn"
                  onClick={() => {
                    setText(article);
                    setIsMore(!isMore);
                  }}
                >
                  Read more
                </button>
              ) : (
                <button
                  className="readmore-btn"
                  onClick={() => {
                    setText(article.substring(0, 201) + "...");
                    setIsMore(!isMore);
                  }}
                >
                  See less
                </button>
              )}
            </p>
          ) : (
            console.log("hi")
          )}
          <button className="btn mb" onClick={() => setShow(!show)}>
            Not interested
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Card;
