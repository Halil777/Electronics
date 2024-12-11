import { FC, useState } from "react";
import { Box, Button, Checkbox, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { auctionParticipateButton } from "../../auction/styles/auctionStyles";

const PaymentOptionSelector: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation once
    threshold: 0.2, // Start animation when 20% of the element is in view
  });

  // Handle the option change
  const handleOptionChange = (option: string) => {
    setSelectedOption(option === selectedOption ? null : option); // Toggle selection
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          mt: 5,
        }}
      >
        Töleg görnüşini saýlaň
      </Typography>
      <Grid container spacing={2} my={3} ref={ref}>
        {[
          "Eltip berende töleg",
          "Kart bilen hasaplaşyk",
          "Altyn Asyr",
          "TFEB",
          "Senagat bank",
        ].map((option, index) => (
          <Grid key={option} size={{ lg: 2.3, md: 4, sm: 6, xs: 12 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Initial state for animation
              animate={{
                opacity: inView ? 1 : 0, // Fade in when in view
                y: inView ? 0 : 20, // Slide in from bottom
              }}
              transition={{
                duration: 0.5 + index * 0.2, // Different animation times for each option
                ease: "easeOut",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "35px",
                  padding: 1,
                  borderRadius: "2px",
                  border: "1px solid #2E2F38",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  //   backgroundColor:
                  //     selectedOption === option ? "#D3D3D3" : "transparent", // Highlight selected option
                }}
                onClick={() => handleOptionChange(option)} // Handle click to select/deselect option
              >
                <Checkbox
                  checked={selectedOption === option}
                  sx={{
                    transform: "scale(0.8)",
                    padding: "0px",
                  }}
                />
                <Typography sx={{ fontSize: "14px" }}>{option}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="flex-end">
        <Button
          sx={{ ...auctionParticipateButton, width: "250px" }}
          variant="contained"
          fullWidth
        >
          Sargyt etmek
        </Button>
      </Stack>
    </>
  );
};

export default PaymentOptionSelector;
