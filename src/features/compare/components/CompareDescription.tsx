import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  compareDescriptionTitle,
  firstRowBox,
  secondRowBox,
} from "../styles/compareDescription";
import { compareGridSize } from "../utils/compareSize";

const CompareDescription: FC = () => {
  return (
    <>
      <Box sx={firstRowBox}>
        <Typography sx={compareDescriptionTitle}>ady</Typography>
        <Grid container>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={secondRowBox}>
        <Typography sx={compareDescriptionTitle}>ady</Typography>
        <Grid container>
          <Grid size={compareGridSize}>
            <Box sx={{ ...secondRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...secondRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...secondRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...secondRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={firstRowBox}>
        <Typography sx={compareDescriptionTitle}>ady</Typography>
        <Grid container>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
                assumenda numquam voluptatem eveniet corporis eum, ipsa
                doloribus culpa quo vitae eos voluptatum impedit consequuntur
                nobis. Nihil enim numquam quidem voluptate.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={secondRowBox}>
        <Typography sx={compareDescriptionTitle}>ady</Typography>
        <Grid container>
          <Grid size={compareGridSize}>
            <Box sx={{ ...secondRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...secondRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...secondRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...secondRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={firstRowBox}>
        <Typography sx={compareDescriptionTitle}>ady</Typography>
        <Grid container>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}>
              <Typography fontSize="14px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
                assumenda numquam voluptatem eveniet corporis eum, ipsa
                doloribus culpa quo vitae eos voluptatum impedit consequuntur
                nobis. Nihil enim numquam quidem voluptate.
              </Typography>
            </Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
          <Grid size={compareGridSize}>
            <Box sx={{ ...firstRowBox, minHeight: "65px" }} p={1}></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CompareDescription;
