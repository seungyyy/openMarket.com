import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styled from '@emotion/styled/';

export const ImgCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <Div>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </Div>
      {loaded && instanceRef.current && (
        <Dots>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </Dots>
      )}
    </>
  );
};

function Arrow(props) {
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}




const Div = styled.div`
  margin-top: 91px;
  position: relative;
  .number-slide1,
  .number-slide2,
  .number-slide3,
  .number-slide4,
  .number-slide5,
  .number-slide6 {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 500px;
  }
  .number-slide1 {
    background: rgb(64, 175, 255);
    background: linear-gradient(128deg, rgba(64, 175, 255, 1) 0%, rgba(63, 97, 255, 1) 100%);
  }

  .number-slide2 {
    background: rgb(255, 75, 64);
    background: linear-gradient(128deg, rgba(255, 154, 63, 1) 0%, rgba(255, 75, 64, 1) 100%);
  }

  .number-slide3 {
    background: rgb(182, 255, 64);
    background: linear-gradient(128deg, rgba(182, 255, 64, 1) 0%, rgba(63, 255, 71, 1) 100%);
    background: linear-gradient(128deg, rgba(189, 255, 83, 1) 0%, rgba(43, 250, 82, 1) 100%);
  }

  .number-slide4 {
    background: rgb(64, 255, 242);
    background: linear-gradient(128deg, rgba(64, 255, 242, 1) 0%, rgba(63, 188, 255, 1) 100%);
  }

  .number-slide5 {
    background: rgb(255, 64, 156);
    background: linear-gradient(128deg, rgba(255, 64, 156, 1) 0%, rgba(255, 63, 63, 1) 100%);
  }
  .number-slide6 {
    background: rgb(64, 76, 255);
    background: linear-gradient(128deg, rgba(64, 76, 255, 1) 0%, rgba(174, 63, 255, 1) 100%);
  }
  .arrow {
    width: 16px;
    height: 16px;
    position: absolute;
    padding: 1em;
    top: 50%;
    transform: translateY(-8px);
    fill: #222;
    cursor: pointer;
  }

  .arrow--left {
    left: 58px;
  }

  .arrow--right {
    right: 58px;
  }

`;

const Dots = styled.div`
  position: absolute;
  display: flex;
  top: 55%;
  left: 50%;
  transform: translateX(-60px);
  justify-content: center;
  .dot {
    border: none;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }
`;
