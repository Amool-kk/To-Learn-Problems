import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("/tags", {
        method: "GET",
      });
      const json = await response.json();
      setData([...json]);
    };
    fetchTags();
    console.log(data);
    return;
  }, []);
  return (
    <>
      <div className="container">
        <div className="tags">
          {data &&
            data.map((item, index) => {
              return (
                <div className="tag" key={item._id}>
                  <h2 className="tag-title">{item.tag}</h2>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
