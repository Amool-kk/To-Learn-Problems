import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import "./QuestionForm.css";

const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [questionLink, setQuestionLink] = useState("");
  const [answerLink, setAnswerLink] = useState("");
  const [tags, setTags] = useState([]);
  const [level, setLevel] = useState("");
  const [hint, setHint] = useState("");

  const [entry, setEntry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && questionLink && answerLink && hint && tags && level) {
      const newQuestion = {
        title,
        questionLink,
        answerLink,
        hint,
        tags,
        level,
      };

      const response = await fetch("/questions", {
        method: "POST",
        body: JSON.stringify(newQuestion),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
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
    } else {
      toast.error("Fields can't be empty");
    }
  };

  //add tags
  const addTags = () => {};
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
      <input
        type="text"
        onKeyUp={addTags}
        value={tags}
        className="question-tags"
      />
      <button type="submit">Add problem</button>
      <ToastContainer />
    </form>
  );
};

export default QuestionForm;
