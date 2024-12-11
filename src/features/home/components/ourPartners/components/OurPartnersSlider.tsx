import { FC } from "react";
import Slider from "react-slick";

const OurPartnersSlider: FC = () => {
  const images = [
    "./partners/partners1.png",
    "./partners/partners2.png",
    "./partners/partners3.png",
    "./partners/partners2.png",
    "./partners/partners3.png",
    "./partners/partners2.png",
    "./partners/partners3.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Set autoplay interval in milliseconds
    responsive: [
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // sm screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // xs screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              style={{
                width: "192px",
                height: "80px",
                objectFit: "contain",
                marginLeft: "20px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurPartnersSlider;
