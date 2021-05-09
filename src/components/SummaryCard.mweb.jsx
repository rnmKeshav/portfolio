import React from "react";

const SummaryCard = (props) => {
  let {image_url, text, image_styles} = props;

  return (
    <div className="card">
      <div className="image pure-u-1-3 u-v-middle">
        <img src={image_url} style={image_styles} alt="Keshav Kumar, @rnmkeshav"></img>
      </div>
      <div className="text pure-u-2-3 u-v-middle" >{text}</div>
    </div>
  );
}

export default SummaryCard;
