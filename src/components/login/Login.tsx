import { FC, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Stack,
  Button,
  Checkbox,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: FC<LoginProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("register");

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: { lg: "420px", md: "420px", sm: "100%", xs: "100%" },
          height: "100%",
          position: "fixed",
        },
      }}
    >
      <>
        <Stack direction={"row"} justifyContent="flex-end" p={3}>
          <IconButton onClick={onClose}>
            <ClearIcon />
          </IconButton>
        </Stack>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: "10%",
          }}
        >
          <Stack direction="row" width={"100%"} spacing={2} mb={4}>
            <Button
              variant="contained"
              onClick={() => setActiveTab("login")}
              sx={{
                textTransform: "none",
                background: activeTab === "login" ? "#E0E0E0" : "#F5F5F5",
                color: activeTab === "login" ? "#2E2F38" : "#929292",
                fontWeight: activeTab === "login" ? 700 : 400,
                width: "50%",
                height: "40px",
                borderRadius: "4px",
              }}
            >
              Ulgama gir
            </Button>
            <Button
              variant="contained"
              onClick={() => setActiveTab("register")}
              sx={{
                textTransform: "none",
                background: activeTab === "register" ? "#E0E0E0" : "#F5F5F5",
                color: activeTab === "register" ? "#2E2F38" : "#929292",
                fontWeight: activeTab === "register" ? 700 : 400,
                width: "50%",
                height: "40px",
                borderRadius: "4px",
              }}
            >
              Agza bol
            </Button>
          </Stack>

          {/* Conditional Inputs */}
          {activeTab === "login" ? (
            <>
              <Stack spacing={3} width="100%">
                <input
                  type="text"
                  placeholder="Ady"
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "none",
                    outline: "none",
                    borderRadius: "4px",
                    paddingLeft: "12px",
                    fontSize: "16px",
                    background: "#F5F5F5",
                  }}
                />
                <input
                  type="text"
                  placeholder="Parol"
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "none",
                    outline: "none",
                    borderRadius: "4px",
                    paddingLeft: "12px",
                    fontSize: "16px",
                    background: "#F5F5F5",
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                my={2}
              >
                <Typography
                  fontSize="14px"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Açar sözi unutdym
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  background: "#E0E0E0",
                  color: "#2E2F38",
                  fontWeight: 700,
                  width: "100%",
                  height: "50px",
                  borderRadius: "4px",
                }}
              >
                Girmek
              </Button>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                my={2}
              >
                <Typography fontSize="14px">Hasabyňyz ýok bolsa</Typography>
                <Typography
                  onClick={() => setActiveTab("register")}
                  fontSize="14px"
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                  agza boluň
                </Typography>
              </Stack>
            </>
          ) : (
            <>
              <Stack spacing={1} width="100%">
                <input
                  type="text"
                  placeholder="Ady"
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "none",
                    outline: "none",
                    borderRadius: "4px",
                    paddingLeft: "12px",
                    fontSize: "16px",
                    background: "#F5F5F5",
                  }}
                />
                <input
                  type="text"
                  placeholder="+993"
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "none",
                    outline: "none",
                    borderRadius: "4px",
                    paddingLeft: "12px",
                    fontSize: "16px",
                    background: "#F5F5F5",
                  }}
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "none",
                    outline: "none",
                    borderRadius: "4px",
                    paddingLeft: "12px",
                    fontSize: "16px",
                    background: "#F5F5F5",
                  }}
                />
                <input
                  type="text"
                  placeholder="Parol"
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "none",
                    outline: "none",
                    borderRadius: "4px",
                    paddingLeft: "12px",
                    fontSize: "16px",
                    background: "#F5F5F5",
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                my={2}
              >
                <Checkbox
                  sx={{
                    transform: "scale(0.8)", // Scale the size of the checkbox
                    padding: "0px", // Reduce padding around the checkbox
                  }}
                />
                <Typography fontSize="14px">Bildiriş almaga razymy?</Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  background: "#E0E0E0",
                  color: "#2E2F38",
                  fontWeight: 700,
                  width: "100%",
                  height: "50px",
                  borderRadius: "4px",
                }}
              >
                Registrasiýa
              </Button>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                my={2}
              >
                <Typography fontSize="14px">
                  Siziň öňden hasabyňyz bar!
                </Typography>
                <Typography
                  onClick={() => setActiveTab("login")}
                  fontSize="14px"
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                  Ulgama girmek
                </Typography>
              </Stack>
            </>
          )}
        </Box>
      </>
    </Drawer>
  );
};

export default Login;
