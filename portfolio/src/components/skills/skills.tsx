import './skills.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
      };
  return (
    <div className="skills">
        <h2>skills</h2>
        <Slider {...settings} className='logo'>
          <div className="carousel-slide">
            <i className='bx bxl-react'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-typescript'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-javascript'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-tailwind-css'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-html5'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-css3'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-github'/>
          </div>
          <div className="carousel-slide">
            <i className='bx bxl-git'/>
          </div>
        </Slider>
    </div>
  )
}
