import { FC, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  compareActiveDots,
  compareDotsBox,
  compareExtraImageBox,
  compareImagebox,
  compareItemsCardBox,
  comparePassiveDots,
  compareSliderBox,
} from "../styles/compareSlider";
import "../styles/compareSlider.css";
import { compareGridSize } from "../utils/compareSize";

const CompareSlider: FC = () => {
  const [currentImage, setCurrentImage] = useState("./images/auction1.png");
  const [activeIndex, setActiveIndex] = useState(0);

  const extraImages = [
    "./images/auction1.png",
    "./images/banner1.png",
    "./images/auction1.png",
    "./images/banner2.png",
    "./images/auction1.png",
  ];

  const handleImageClick = (index: number) => {
    // Swap image
    setCurrentImage(extraImages[index]);
    setActiveIndex(index);
  };

  return (
    <Box sx={compareSliderBox}>
      <Grid container>
        <Grid size={compareGridSize}>
          <Box sx={compareItemsCardBox}>
            <input
              type="text"
              placeholder="Gözleg"
              className="compareSearchInput"
            />
            <Box sx={compareImagebox}>
              <img
                src={currentImage}
                className="compareSliderImage"
                alt="compare current image"
              />
            </Box>
            <Box sx={compareDotsBox}>
              {extraImages.map((_, index) => (
                <Box
                  key={index}
                  sx={
                    index === activeIndex
                      ? compareActiveDots
                      : comparePassiveDots
                  }
                />
              ))}
            </Box>
            <Box sx={compareDotsBox}>
              {extraImages.map((image, index) => (
                <Box
                  key={index}
                  sx={compareExtraImageBox}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image}
                    className="compareSliderImage"
                    alt={`compare extra image ${index}`}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid size={compareGridSize}>
          <Box sx={compareItemsCardBox}>
            <input
              type="text"
              placeholder="Gözleg"
              className="compareSearchInput"
            />
            <Box sx={compareImagebox}>
              <img
                src={currentImage}
                className="compareSliderImage"
                alt="compare current image"
              />
            </Box>
            <Box sx={compareDotsBox}>
              {extraImages.map((_, index) => (
                <Box
                  key={index}
                  sx={
                    index === activeIndex
                      ? compareActiveDots
                      : comparePassiveDots
                  }
                />
              ))}
            </Box>
            <Box sx={compareDotsBox}>
              {extraImages.map((image, index) => (
                <Box
                  key={index}
                  sx={compareExtraImageBox}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image}
                    className="compareSliderImage"
                    alt={`compare extra image ${index}`}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompareSlider;
