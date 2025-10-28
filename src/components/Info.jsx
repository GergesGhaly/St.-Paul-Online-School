import React from "react";
import { Box } from "@mui/material";
import InfoIntro from "./InfoIntro";
import InfoCourseDetails from "./InfoCourseDetails";
import InfoRequirements from "./InfoRequirements";
import InfoRegisterNotes from "./InfoRegisterNotes";
import InfoContact from "./InfoContact";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        px: { xs: 2, md: 6 }, // padding أفقياً: 20px على الشاشات الصغيرة، 50px على الكبيرة
        py: { xs: 2, md: 6 }, // padding عمودياً
        textAlign: isArabic ? "right" : "left",
        fontSize: "25px",
        lineHeight: 1.8,
        backgroundColor: "#fff",
        gap: 4, // 30px تقريبا
      }}
    >
      <InfoIntro />
      <InfoCourseDetails />
      <InfoRequirements />
      <InfoRegisterNotes />
      <InfoContact />
    </Box>
  );
};

export default Info;
