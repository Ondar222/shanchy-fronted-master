import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const DemoCarousel = () => {
  return (
  <div >
    <Carousel
      showArrows={true}
      axis="horizontal"
      width="80%"
      swipeable={true}

      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
    >
      <div>
        <img src="/Шанчы.jpg" />
        <p className="legend">Предупреждение о неблагоприятных явлениях погоды от 30 января 2023г.</p>
      </div>
      <div>
        <img src="/N.jpg" />
        <p className="legend">Слайдер два</p>
      </div>
    </Carousel>
  </div>
    
  );
};
export default DemoCarousel;

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls
