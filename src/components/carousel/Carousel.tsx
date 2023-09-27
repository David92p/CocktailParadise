import React from "react";
import Slider from "react-slick";
import { Drink } from ".."; //Components
import { Card } from ".."; //Interfaces
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CardsCarousel {
  cards: Card[];
}

const Next = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    />
  );
};

const Prev = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    />
  );
};

const Carousel: React.FC<CardsCarousel> = ({ cards }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: cards.length >= 4 ? 4 : cards.length,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: cards.length >= 3 ? 3 : cards.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: cards.length >= 2 ? 2 : cards.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center py-10">
      <Slider {...settings} className="w-[80%]">
        {cards.map((card: Card) => (
          <Drink {...card} key={card.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
