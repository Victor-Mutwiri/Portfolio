import './skills.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000
      };
  return (
    <div className="skills">
        <Slider {...settings} className='logo'>
          <div className="carousel-slide">
            <i className='bx bxl-typescript'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-react'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-javascript'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-tailwind-css'/>
          </div>
        </Slider>
    </div>
  )
}
