import { makeStyles } from "@mui/styles";
import React, { useEffect, useState, useRef } from "react";
import "./Slideshow.scss";

const delay = 2500;

const Slideshow = ({ images = [] }) => {
  const useStyles = makeStyles((theme) => {
    return {
      img: { ...theme.img },
    };
  });
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} className={classes.img} />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
