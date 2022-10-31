import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import "./QuestionDetails.css";

const QuestionDetails = ({ questions }) => {
  console.log(questions);
  return (
    <section className="question-container">
      <div className="question-cards">
        {questions.map((question) => {
          return (
            <article key={question._id} className="question-card">
              <div className="description">
                <h2 className="title">{question.title}</h2>
                <div className="links">
                  <a href={question.questionLink}>
                    <h3>Question</h3>
                  </a>
                  <a href={question.answerLink}>
                    <h3>Solution</h3>
                  </a>
                </div>
                <div className="hints">
                  <p>
                    <strong>Hint: </strong>
                    {question.hint}
                  </p>
                  <p>
                    <strong>Level: </strong>
                    {question.level}
                  </p>
                </div>

                <div className="buttons">
                  {question.tags.map((item, index) => {
                    return (
                      <button key={index} className="btn">
                        <h4>{item.tag}</h4>
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default QuestionDetails;
