import { FC } from "react";
import Slider from "react-slick";
import { usePartner } from "../../../../../hooks/partners/usePartner";
import "./partners.css";

const OurPartnersSlider: FC = () => {
  const { partners, isLoading, isError } = usePartner(); // Use the custom hook

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return (
      <div style={{ padding: "20px" }}>
        <>Loading...</>
      </div>
    );
  }

  if (isError) {
    return <div style={{ padding: "20px" }}>Error loading partners.</div>;
  }

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <Slider {...settings}>
        {partners &&
          Array.isArray(partners) &&
          partners.map((partner: any) => (
            <div key={partner.id} className="partnersImgBox">
              <img src={partner.imageUrl} alt={`Partner ${partner.id}`} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default OurPartnersSlider;
