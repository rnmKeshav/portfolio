import React from "react";

const DesignationCard = (props) => {
  let {designation, company, time, description} = props;

  return (
    <div className="card">
      <div className="designation">{designation}</div>
      <div className="company">{company}</div>
      <div className="time">{time}</div>
      <div className="description">
        {description}
      </div>
    </div>
  );
}

export default DesignationCard;
