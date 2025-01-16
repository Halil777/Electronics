import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MainSwiper: React.FC<{ banners: any[] }> = ({ banners }) => {
  return (
    <Box sx={{ overflow: "hidden", mb: 1 }}>
      <Box
        sx={{
          height: {
            lg: "380px",
            md: "380px",
            sm: "200px",
            xs: "150px",
          },
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]} // Enable autoplay and navigation modules
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={false}
          speed={4000} // Transition speed for the slide (in milliseconds)
          loop={true} // Enable infinite scrolling
          // navigation // Add navigation arrows
          // className="gallery-thumbs-small"
          style={{ height: "100%", cursor: "pointer" }}
        >
          {banners && Array.isArray(banners)
            ? banners.map((banner, index) => (
                <SwiperSlide
                  key={`small_banners_image_key${index}`}
                  style={{ height: "100%" }}
                >
                  {/* <Box
                  sx={{
                    height: {
                      lg: "380px",
                      md: "380px",
                      sm: "200px",
                      xs: "200px",
                    },
                  }}
                >
                <img
                  src={banner.imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  // placeholderSrc={blurHashToBase64(banner.blurhash) || ""}
                  // effect="blur"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                </Box> */}

                  {/* <img
                    src={banner.imageUrl}
                    alt="Category"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  /> */}
                  <LazyLoadImage
                    src={banner.imageUrl}
                    alt={`Banner ${index + 1}`}
                    placeholderSrc={blurHashToBase64(banner.blurhash) || ""}
                    effect="blur"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  {/* <Box
                    sx={{
                      height: {
                        lg: "380px",
                        md: "380px",
                        sm: "200px",
                        xs: "200px",
                      },
                    }}
                  >
                    <LazyLoadImage
                      src={banner.imageUrl}
                      alt={`Banner ${index + 1}`}
                      placeholderSrc={blurHashToBase64(banner.blurhash) || ""}
                      effect="blur"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box> */}
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </Box>
    </Box>
  );
};

export default MainSwiper;

// Helper function (if required)
const blurHashToBase64 = (blurhash: string) => {
  // Convert your blurhash to base64 here if necessary
  // blurhash;
  console.log(blurhash);
  return "";
};
