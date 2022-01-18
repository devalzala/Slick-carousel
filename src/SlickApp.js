import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./SlickApp.css";

const photos = [
  {
    name : "Photo 1",
    url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    name : "Photo 2",
    url: "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    name : "Photo 3",
    url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    name : "Photo 4",
    url: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  }
]

const SlickApp = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 3000,
    slideToShow: 1,
    arrows: true,
    slideToScroll: 1,
    className: "slides",
    autoplay: true
  }

  const lava = {
    dots: true,
    fade: true,
    speed: 500,
    slideToShow: 3,
    slideToScroll: 3,
    arrows: true
  }
  return (
    <div className='App'>
    <Slider {...settings}>
    {photos.map((photo) => {
      return(
        <div>
          <img width="100%" height="60%" src={photo.url} alt='Cars Photos'/>
        </div>
    )
    })}
    </Slider>
    <div className='App_2'>
    <Slider {...lava}>
      {photos.map((photo) => {
        return(
          <div>
            <img width="100%" alt='Photos' src={photo.url} />
          </div>
        )
      })}
    </Slider>
    </div>
    </div>
  )
}

export default SlickApp;
