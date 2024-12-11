import { Avatar, Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import {
  feedbackAvatar,
  feedbackMessage,
  feedbackTypeText,
} from "../styles/feedbackStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackBox: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: any) => (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "#D9D9D9",
          borderRadius: "50%",
          cursor: "pointer",
          paddingLeft: "-10px",
        }}
      ></div>
    ),
  };

  return (
    <>
      <Slider {...settings}>
        <Box>
          <Stack direction="row" justifyContent="center" my={4}>
            <img src="./icons/“.svg" alt="feedback icon" />
          </Stack>
          <Typography sx={feedbackMessage}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text...
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2} my={5}>
            <Avatar
              sx={feedbackAvatar}
              alt="Halil Gayypov"
              src="./images/banner1.png"
            />
            <Stack>
              <Typography sx={feedbackMessage}>Ata Atayew</Typography>
              <Typography sx={feedbackTypeText}>Musderi</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" justifyContent="center" my={4}>
            <img src="./icons/“.svg" alt="feedback icon" />
          </Stack>
          <Typography sx={feedbackMessage}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text...
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2} my={5}>
            <Avatar
              sx={feedbackAvatar}
              alt="Halil Gayypov"
              src="./images/banner1.png"
            />
            <Stack>
              <Typography sx={feedbackMessage}>Ata Atayew</Typography>
              <Typography sx={feedbackTypeText}>Musderi</Typography>
            </Stack>
          </Stack>
        </Box>
      </Slider>
    </>
  );
};

export default FeedbackBox;
