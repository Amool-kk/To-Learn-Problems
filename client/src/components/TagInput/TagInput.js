import { useState } from "react";
import "./TagInput.css";

const TagInput = () => {
  const [tags, setTags] = useState([]);

  const removeTags = (removeIndex) => {
    setTags(
      tags.filter((tag, index) => {
        return index !== removeIndex;
      })
    );
  };
  const addTags = (e) => {
    if (e.keyCode === 32) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };
  return (
    <div className="types-input">
      <ul className="types">
        {tags.map((tag, index) => {
          return (
            <li key={index} className="type">
              <div>
                <span className="type-title">{tag}</span>
                <span>
                  <i
                    className="material-icons close-icon"
                    onClick={() => {
                      removeTags(index);
                    }}
                  >
                    close
                  </i>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <input type="text" onKeyUp={addTags} />
    </div>
  );
};

export default TagInput;
