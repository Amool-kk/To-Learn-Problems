import { useContext, useEffect, useReducer, useState } from "react";

import QuestionForm from "../../components/QuestionForm/QuestionForm";

import QuestionDetails from "../../components/QuestionDetails/QuestionDetails";

const Problems = () => {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("/questions", {
        method: "GET",
      });
      const json = await response.json();
      setData(json);
    };
    fetchQuestions();
  }, []);
  // console.log(data);
  return (
    <div className="problem-page">
      <div className="questions"></div>
      {/* {login && <QuestionForm />} */}
      <QuestionForm />
      <QuestionDetails questions={[...data]} />
    </div>
  );
};
export default Problems;
