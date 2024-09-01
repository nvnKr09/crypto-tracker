import React, { useState } from "react";
import "./styles.css";

const CoinInfo = ({ heading, desc }) => {
  const [expanded, setExpanded] = useState(false);

  const shortDesc = desc.slice(0, 220) + "..." + "<span> Read More...</span>";
  const longDesc = desc + "<span> Read Less </span>";

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 220 ? (
        <p
          onClick={() => setExpanded(!expanded)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !expanded ? shortDesc : longDesc }}
        />
      ) : (
        <p
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}
    </div>
  );
};

export default CoinInfo;
