export const auctionBox = {
  position: "relative", // For positioning child elements
  padding: "20px",
  border: "1px solid #C3000E", // Main border for the box
  borderTop: "none", // Remove the top border to replace it with custom pseudo-elements
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "33%", // Left side border width
    height: "1px",
    background: "#C3000E", // Border color
  },
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "33%", // Right side border width
    height: "1px",
    background: "#C3000E", // Border color
  },
};

export const autioncardBox = {
  border: "1px solid #D2D2D2",
  borderRadius: "2px",
  width: "100%",
  padding: "10px",
};

export const auctionDateBox = {
  background: "#2E2F38",
  color: "#fff",
  fontSize: "16px",
  fontWeight: 400,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "2px",
  border: "none",
  outline: "none",
  width: "30px",
  height: "30px",
};

export const auctionIndexNumerBox = {
  background: "#E0E0E0",
  color: "#2E2F38",
  fontSize: "12px",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "2px",
  border: "none",
  outline: "none",
  width: "59px",
  height: "20px",
};

export const autionProductTitle = {
  fontWeight: 400,
  fontSize: "12px",
};

export const auctionParticipateButton = {
  color: "#2E2F38",
  fontWeight: 700,
  fontSize: "12px",
  background: "#E0E0E0",
  borderRadius: "2px",
  textTransform: "none",
};

// Auction Details styles starts here ....................................
export const auctionDetailProductTitle = {
  color: "#000",
  fontSize: "20px",
  fontWeight: 700,
};

export const auctionDetailProductSubtitle = {
  fontSize: "20px",
  fontWeight: 400,
};

export const auctionDetailDateBox = {
  background: "#2E2F38",
  color: "#fff",
  fontSize: "46px",
  fontWeight: 400,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  border: "none",
  outline: "none",
  width: "88px",
  height: "88px",
};

export const auctionDetailCurrentSmallPicture = {
  background: "#D2D2D2",
  width: "100%",
  height: "126px",
  padding: "10px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

export const auctionDetailNextSmallPicture = {
  background: "transparent",
  width: "100%",
  height: "126px",
  padding: "10px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #d2d2d2",
  cursor: "pointer",
};

export const auctionDetailCurrentBigPicture = {
  width: "100%",
  height: "446px",
  padding: "20px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #d2d2d2",
};

export const auctionSmallBox = {
  position: "relative", // For positioning child elements
  padding: "20px",
  border: "1px solid #C3000E", // Main border for the box
  borderTop: "none", // Remove the top border to replace it with custom pseudo-elements
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "25%", // Left side border width
    height: "1px",
    background: "#C3000E", // Border color
  },
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "25%", // Right side border width
    height: "1px",
    background: "#C3000E", // Border color
  },
};

export const auctionDetailRecomendationTitle = {
  fontSize: "18px",
  fontWeight: 600,
};

export const auctionDetailIconButton = {
  width: "40px",
  height: "40px",
  borderRadius: "5px",
  border: "1px solid #2E2F38",
  opacity: 0.5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
};

export const auctionDetailCost = {
  fontSize: "40px",
  fontWeight: 700,
};

export const auctionDetailRecomendationButton = {
  background: "#E0E0E0",
  textTransform: "none",
  fontSize: "18px",
  color: "#2E2F38",
  fontWeight: 700,
  height: "53px",
  borderRadius: "6px",
};

// auction detail proporties styles starts here .......
export const auctionDetailProportiesBgBox = {
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "16px",
  background: "#E0E0E04D",
  color: "#000",
  fontWeight: 600,
  borderRadius: "2px",
  padding: "0px 20px 0px 20px",
};

export const auctionDetailProportiesBox = {
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "16px",
  color: "#000",
  fontWeight: 600,
  borderRadius: "2px",
  padding: "0px 20px 0px 20px",
};
