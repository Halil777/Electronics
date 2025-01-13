import { FC, useState } from "react";
import { Box, Checkbox, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DeliveryType: FC = () => {
  // Scroll animation using useInView hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // State to keep track of selected card
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  // Function to handle checkbox change
  const handleCheckboxChange = (cardId: number) => {
    setSelectedCard((prev) => (prev === cardId ? null : cardId)); // Deselect if already selected
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
        Eltip bermegiň görnüşini saýlaň
      </Typography>
      <Grid container spacing={2} my={3}>
        {/* Card 1: Ekspress hyzmat */}
        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <Paper
              elevation={4}
              sx={{
                width: "100%",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#E0E0E0",
                  width: "100%",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>
                  Ekspress hyzmat
                </Typography>
                <Checkbox
                  checked={selectedCard === 1}
                  onChange={() => handleCheckboxChange(1)}
                  sx={{
                    transform: "scale(0.8)", // Scale the size of the checkbox
                    padding: "0px", // Reduce padding around the checkbox
                  }}
                />
              </Box>
              <Stack direction="row" p={3} spacing={3}>
                <img src="/icons/express.svg" alt="express type" />
                <Stack spacing={1}>
                  <Typography
                    sx={{ fontSize: "14px", color: "#0470C4", fontWeight: 600 }}
                  >
                    Ekspress hyzmat
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    Eltip berme hyzmaty 2 sagadyň dowamynda
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>

        {/* Card 2: Türkmen poçta */}
        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1.2 }}
          >
            <Paper
              elevation={4}
              sx={{
                width: "100%",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#E0E0E0",
                  width: "100%",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>Türkmen poçta</Typography>
                <Checkbox
                  checked={selectedCard === 2}
                  onChange={() => handleCheckboxChange(2)}
                  sx={{
                    transform: "scale(0.8)", // Scale the size of the checkbox
                    padding: "0px", // Reduce padding around the checkbox
                  }}
                />
              </Box>
              <Stack direction="row" p={3} spacing={3}>
                <img src="/icons/mail.svg" alt="express type" />
                <Stack spacing={1}>
                  <Typography
                    sx={{ fontSize: "14px", color: "#86BF93", fontWeight: 600 }}
                  >
                    Türkmen poçta
                  </Typography>
                  <Typography sx={{ fontSize: "14px", width: "70%" }}>
                    Türkmen poçta hyzmaty
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>

        {/* Card 3: Kurýer hyzmaty */}
        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1.5 }}
          >
            <Paper
              elevation={4}
              sx={{
                width: "100%",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#E0E0E0",
                  width: "100%",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>
                  Kurýer hyzmaty
                </Typography>
                <Checkbox
                  checked={selectedCard === 3}
                  onChange={() => handleCheckboxChange(3)}
                  sx={{
                    transform: "scale(0.8)", // Scale the size of the checkbox
                    padding: "0px", // Reduce padding around the checkbox
                  }}
                />
              </Box>
              <Stack direction="row" p={3} spacing={3}>
                <img src="/icons/courier.svg" alt="express type" />
                <Stack spacing={1}>
                  <Typography
                    sx={{ fontSize: "14px", color: "#D0A35C", fontWeight: 600 }}
                  >
                    Kurýer hyzmaty
                  </Typography>
                  <Typography sx={{ fontSize: "14px", width: "80%" }}>
                    Aşgabat şäher içinde mugt
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>

        {/* Card 4: Baryp almak */}
        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1.8 }}
          >
            <Paper
              elevation={4}
              sx={{
                width: "100%",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  background: "#E0E0E0",
                  width: "100%",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>Baryp almak</Typography>
                <Checkbox
                  checked={selectedCard === 4}
                  onChange={() => handleCheckboxChange(4)}
                  sx={{
                    transform: "scale(0.8)", // Scale the size of the checkbox
                    padding: "0px", // Reduce padding around the checkbox
                  }}
                />
              </Box>
              <Stack direction="row" p={3} spacing={2}>
                <img src="/icons/walk.svg" alt="express type" />
                <Stack spacing={1}>
                  <Typography
                    sx={{ fontSize: "14px", color: "#0470C4", fontWeight: 600 }}
                  >
                    Baryp almak
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    182, Bitarap Türkmenistan şaýoly, “Elektonika dünýäsi”
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
};

export default DeliveryType;
