import React from "react";
import "./ToggleTag.css";

const ToggleTag = ({ tag, onClick }) => {
  return (
    <div>
      <label>
        <input type="checkbox" name="types" value="array" />
        <span className="type" onClick={onClick}>
          {tag}
        </span>
      </label>
    </div>
  );
};

export default ToggleTag;
