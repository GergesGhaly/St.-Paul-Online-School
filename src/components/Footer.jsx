import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        display: "flex",          // استخدم flexbox
        justifyContent: "center", // يوسّط أفقيًا
        alignItems: "center",     // يوسّط عموديًا
        backgroundColor: "#fff",
        color: "#336699",
        fontWeight: "bold",
        padding: "20px",
        borderTop: "1px solid #ccc",
        mt: "auto",
        textAlign: "center",      // احتياطي للنصوص
      }}
    >
      <Typography variant="body1">{t("copyright")}</Typography>
    </Box>
  );
};

export default Footer;
