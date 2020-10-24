import React from "react";

function Card(props) {
  const { img, title, price, article } = props;
  const [show, setShow] = React.useState(false);

  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-name">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-price">$ {price}</h2>
      </div>
      <p className="article mb">{article}</p>
      <button className="btn mb" onClick={() => setShow(!show)}>
        Not interested
      </button>
    </div>
  );
}

export default Card;
