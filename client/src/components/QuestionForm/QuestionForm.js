import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useCallback, useContext, useEffect, useState } from "react";
import "./QuestionForm.css";
import ToggleTag from "../ToggleTag/ToggleTag";

const QuestionForm = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [questionLink, setQuestionLink] = useState("");
  const [answerLink, setAnswerLink] = useState("");
  const [tags, setTags] = useState([]);
  const [level, setLevel] = useState("");
  const [hint, setHint] = useState("");
  const [types, setTypes] = useState(["array"]);

  const [entry, setEntry] = useState("");

  useEffect(() => {
    fetchTags()
  }, [])

  const fetchTags = useCallback(async () => {
    const res = await fetch('/tags', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await res.json();
    console.log(json)

    if (res.status === 200) {
      setTypes(json);
    } else {
      setTypes([]);
    }
  }, [setTypes])

  const addTags = (type) => {
    setTags([type, ...tags]);
  };
  // console.log(tags);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(title, tags, questionLink, answerLink, hint, level)
    if (title && questionLink && answerLink && hint && tags && level) {
      const newQuestion = {
        title,
        tags,
        questionLink,
        answerLink,
        hint,
        level,
      };
      console.log(tags);
      const response = await fetch("/questions", {
        method: "POST",
        body: JSON.stringify(newQuestion),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
      if (response.status === 200) {
        setEntry([...entry, newQuestion]);
        toast.success("Problem added successfully...", {
          position: "top-center",
        });
        setTitle("");
        setQuestionLink("");
        setAnswerLink("");
        setTags([]);
        setLevel("");
        setHint("");
        navigate('/problems');
      }
    } else {
      toast.error("Fields can't be empty");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h2>Add a problem</h2>

      <label>Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="title"
      />
      <label>Question link</label>
      <input
        type="text"
        onChange={(e) => setQuestionLink(e.target.value)}
        value={questionLink}
        className="question-link"
      />
      <label>Answer link</label>
      <input
        type="text"
        onChange={(e) => setAnswerLink(e.target.value)}
        value={answerLink}
        className="answer-link"
      />
      <label>Level</label>
      <input
        type="text"
        onChange={(e) => setLevel(e.target.value)}
        value={level}
        className="level"
      />
      <label>Hint</label>
      <input
        type="text"
        onChange={(e) => setHint(e.target.value)}
        value={hint}
        className="hint"
      />
      <label>Tags</label>
      <div className="types-container">
        {types.map((type, index) => {
          return (
            <ToggleTag
              tag={type.tag}
              key={index}
              onClick={() => {
                addTags(type._id);
              }}
            />
          );
        })}
      </div>
      <button type="submit">Add problem</button>
      <ToastContainer />
    </form>
  );
};

export default QuestionForm;
