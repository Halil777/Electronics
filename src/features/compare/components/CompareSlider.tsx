import { FC, useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
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
import {
  useAppDispatch,
  useAppSelector,
} from "../../../components/redux/customHook";
import { removeProduct } from "../../../components/redux/ProductSlice";

const CompareSlider: FC = () => {
  const [currentImages, setCurrentImages] = useState<{ [key: string]: string }>(
    {}
  );
  const dispatch = useAppDispatch();
  const compareProducts = useAppSelector((state) => state.compare.products);
  console.log(compareProducts);

  const handleImageClick = (productId: string, image: string) => {
    setCurrentImages((prevImages) => ({
      ...prevImages,
      [productId]: image,
    }));
  };

  return (
    <Box sx={compareSliderBox}>
      <Grid container>
        {compareProducts.length > 0 ? (
          compareProducts.map((elem) => {
            const selectedImage = currentImages[elem.id] || elem.images[0]; // Default to the first image if none selected
            return (
              <Grid key={elem.id} size={compareGridSize}>
                <Box sx={compareItemsCardBox}>
                  <Stack direction="row" alignItems="center">
                    <input
                      type="text"
                      placeholder="Gözleg"
                      className="compareSearchInput"
                    />
                    <IconButton
                      onClick={() => dispatch(removeProduct(elem.id))}
                    >
                      <img
                        src="/images/Delete.png"
                        style={{ width: 20, height: 20 }}
                        alt="delete"
                      />
                    </IconButton>
                  </Stack>
                  <Box sx={compareImagebox}>
                    <img
                      src={selectedImage}
                      className="compareSliderImage"
                      alt="compare current image"
                    />
                  </Box>
                  <Box sx={compareDotsBox}>
                    {elem?.images.map((image, index) => (
                      <Box
                        key={index}
                        sx={
                          image === currentImages[elem.id]
                            ? compareActiveDots
                            : comparePassiveDots
                        }
                      />
                    ))}
                  </Box>

                  <Box sx={compareDotsBox}>
                    {elem?.images.map((image, index) => (
                      <Box
                        key={index}
                        sx={compareExtraImageBox}
                        onClick={() => handleImageClick(String(elem.id), image)} // Pass product id and clicked image
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
            );
          })
        ) : (
          <Box sx={compareSliderBox}>
            <Grid container>
              <Grid size={compareGridSize}>
                <Box sx={compareItemsCardBox}>
                  <input
                    type="text"
                    placeholder="Gözleg"
                    className="compareSearchInput"
                  />
                  <Box sx={compareImagebox}>Deňeşdirmek üçin haryt goşun</Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default CompareSlider;
