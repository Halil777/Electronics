import { FC } from "react";
import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const DeliveryAddress: FC = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          mt: 5,
        }}
      >
        Eltip berme adresi
      </Typography>
      <Grid container spacing={2} my={3}>
        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
          <TextField
            id="outlined-basic"
            label="Ady"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#D2D2D2", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#D2D2D2", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D2D2D2", // Border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D2D2D2", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#D2D2D2", // Label color when focused
              },
            }}
          />
        </Grid>
        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
          <TextField
            id="outlined-basic"
            label="Familiýasy"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#D2D2D2", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#D2D2D2", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D2D2D2", // Border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D2D2D2", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#D2D2D2", // Label color when focused
              },
            }}
          />
        </Grid>
        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
          <TextField
            id="outlined-basic"
            label="Adres"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#D2D2D2", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#D2D2D2", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D2D2D2", // Border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D2D2D2", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#D2D2D2", // Label color when focused
              },
            }}
          />
        </Grid>
        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
          <TextField
            id="outlined-basic"
            label="Welaýat"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#D2D2D2", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#D2D2D2", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D2D2D2", // Border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D2D2D2", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#D2D2D2", // Label color when focused
              },
            }}
          />
        </Grid>
        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
          <TextField
            id="outlined-basic"
            label="Şäher / Etrap"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#D2D2D2", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#D2D2D2", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D2D2D2", // Border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D2D2D2", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#D2D2D2", // Label color when focused
              },
            }}
          />
        </Grid>
        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
          <TextField
            id="outlined-basic"
            label="Telefon"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#D2D2D2", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#D2D2D2", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D2D2D2", // Border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D2D2D2", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#D2D2D2", // Label color when focused
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DeliveryAddress;
