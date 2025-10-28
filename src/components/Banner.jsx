import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useTranslation } from "react-i18next";

const marqueeRTL = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Banner = () => {
  const { t } = useTranslation();
  const message = t("registration_open"); // استخدام i18n
  const iconUrl = "https://ext.same-assets.com/235262648/2238306980.png";

  return (
    <Box component="section" sx={{ width: "100%" }}>
      {/* الشريط الرئيسي */}
      <Box
        sx={{
          backgroundColor: "#0000FF",
          padding: "10px 0",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            display: "block",
            whiteSpace: "nowrap",
            animation: `${marqueeRTL} 20s linear infinite`,
            fontSize: "25px",
            color: "#FFFF00",
            fontWeight: "bold",
            padding: "5px 0",
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {message}
        </Typography>

        {/* الشريط الثانوي */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
            color: "#FFFFFF",
            whiteSpace: "nowrap",
            animation: `${marqueeRTL} 25s linear infinite`,
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <Box
                component="img"
                src={iconUrl}
                alt=""
                aria-hidden="true"
                sx={{ width: "20px", height: "25px" }}
              />
              <span>{message}</span>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
