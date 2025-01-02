// import React, { useRef, useState, useEffect } from "react";
// import Slider from "react-slick";
// import { Box } from "@mui/material";
// import axiosInstance from "../../../../../api/instance";

// // Slick settings
// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: true,
//   nextArrow: <div className="swiper-button-next" />,
//   prevArrow: <div className="swiper-button-prev" />,
// };

// const BannerSwiper: React.FC = () => {
//   const [banners, setBanners] = useState<string[]>([]); // State to store banner URLs
//   const mainSliderRef = useRef<Slider | null>(null); // Main slider reference
//   const thumbsSliderRef = useRef<Slider | null>(null); // Thumbnail slider reference

//   // Fetch banner images
//   useEffect(() => {
//     const fetchBanners = async () => {
//       try {
//         const response = await axiosInstance.post("/banners/all");
//         if (response?.data && response?.data.banners) {
//           setBanners(
//             response?.data.banners.map(
//               (banner: { image: string }) => banner.image
//             )
//           );
//         }
//       } catch (error) {
//         console.error("Failed to fetch banners:", error);
//       }
//     };

//     fetchBanners();
//   }, []);

//   if (!banners.length) {
//     return <div>Loading...</div>; // Loading state
//   }

//   return (
//     <div>
//       {/* Main Slider */}
//       <Slider
//         {...settings}
//         ref={mainSliderRef}
//         asNavFor={thumbsSliderRef.current || undefined} // Link with thumbnail slider
//       >
//         {banners?.map((image: string, index) => (
//           <div key={index}>
//             <Box
//               sx={{
//                 height: { lg: "380px", md: "380px", sm: "200px", xs: "200px" },
//               }}
//             >
//               <img
//                 src={`${axiosInstance.defaults.baseURL}/${image}`} // Corrected URL
//                 alt={`Banner ${index + 1}`}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </Box>
//           </div>
//         ))}
//       </Slider>

//       {/* Thumbs Slider */}
//       <Slider
//         {...{
//           ...settings,
//           slidesToShow: 2, // Show 2 thumbnails
//           slidesToScroll: 1,
//           focusOnSelect: true, // Enable selecting thumbnails
//           asNavFor: mainSliderRef.current || undefined, // Link with main slider
//         }}
//         ref={thumbsSliderRef}
//         className="gallery-thumbs-small"
//       >
//         {banners.map((image, index) => (
//           <div
//             key={`small_banners_image_key${index}`}
//             style={{ marginRight: "10px" }}
//           >
//             <img
//               src={`${axiosInstance.defaults.baseURL}/${image}`} // Corrected URL
//               alt={`Thumbnail ${index + 1}`}
//               style={{
//                 width: "100%",
//                 height: "180px",
//                 objectFit: "cover",
//               }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default BannerSwiper;

const BannerSwiper = () => {
  return <div>???</div>;
};

export default BannerSwiper;
