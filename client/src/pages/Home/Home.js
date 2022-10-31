import React, { useState, useEffect } from "react";
import Slider from 'react-slider-modal';
import 'animate.css/animate.min.css'
import "./Home.css";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [slideShow, setSlideShow] = useState(false)
  const [questionArray,setQuestionArray] = useState([])

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("/tags", {
        method: "GET",
      });
      const json = await response.json();
      console.log(json)
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
                  <h2 className="tag-title" onClick={() => { setSlideShow(!slideShow); setQuestionArray(item.questions) }} >{item.tag}</h2>
                </div>
              );
            })}
        </div>
      </div>

      <Slider id="demoID3" className="" direction="top"
        size="medium"
        animation="slide"
        closeModal={(e) => { setSlideShow(e) }}
        toggle={slideShow}
        closeIcon={() => { setSlideShow(false) }}
        direction="right" >
        <div className="slider-container">
          <div className="sliderHeader">Create Lead</div>
          <div className="sliderBody">
            <div className="sliderLeftBox">
              Hello World
            </div>
            <div className="sliderRightBox">
              {questionArray.map((items,i)=>(
                <div>
                  {items.questionLink}
                </div>
              ))}
            </div>
          </div>
          <div className="sliderFooter">
            <button className="btn btn-primary"
              onClick={() => setSlideShow(false)}>Cancel</button>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Home;
