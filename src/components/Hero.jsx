import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      sx={{ direction: isArabic ? "rtl" : "ltr", my: 4 }}
    >
      {/* العنوان الرئيسي */}
      <Typography
        variant="h3"
        sx={{
          textAlign: isArabic ? "right" : "left",
          fontSize: { xs: "28px", md: "40px" },
          padding: { xs: "20px", md: "50px" }, // <= هنا
          fontWeight: "bold",
          color: "#000",
        }}
      >
        {t("school_name")}
      </Typography>

      {/* المحتوى الرئيسي */}
      <Grid
        container
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "70% 30%" },
          padding: 0,
        }}
      >
        {/* النصوص */}
        <Box
          sx={{
            padding: { xs: "20px", md: "50px" }, // <= هنا
            textAlign: isArabic ? "right" : "left",
            fontSize: "25px",
            lineHeight: 1.8,
          }}
        >
          <Typography component="p" sx={{ mb: 3, fontSize: "inherit" }}>
            {t("verse")}
          </Typography>

          <Typography sx={{ mb: 3, fontSize: "inherit" }}>
            {t("registration_open")}
          </Typography>

          <Typography sx={{ mb: 3, fontSize: "inherit" }}>
            {t("telegram_follow")}
            <br />
            <Link
              href="https://t.me/+AYjkHyCNZ2gyYjM8"
              target="_blank"
              sx={{ color: "#0000EE", "&:hover": { color: "#551A8B" } }}
            >
              {t("click_here")}
            </Link>
          </Typography>

          <Typography sx={{ mb: 3, fontSize: "inherit" }}>
            <strong style={{ color: "red" }}>{t("new_members_title")}</strong>
            <br />
            {t("new_members_text")}
            <br />
            <Link
              href="https://drive.google.com/drive/folders/1jwWmTuqhUfGNyOAp6tEOakVMybnV38Bl?usp=share_link"
              target="_blank"
              sx={{ color: "#0000EE", "&:hover": { color: "#551A8B" } }}
            >
              {t("click_here")}
            </Link>
          </Typography>

          <Typography sx={{ mb: 3, fontSize: "inherit" }}>
            {t("contact_whatsapp")}
            <Link
              href="https://wa.me/+201007626915"
              target="_blank"
              sx={{ color: "#0000EE", "&:hover": { color: "#551A8B" } }}
            >
              {t("click_here")}
            </Link>
          </Typography>
        </Box>

        {/* الصورة */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: { xs: "20px", md: "50px" },
            pt: "50px",
          }}
        >
          <Box
            component="img"
            src={
              isArabic
                ? "https://ext.same-assets.com/235262648/4071718098.jpeg"
                : "https://stpaulservice.com/stpaulonlineservice/system_images/new_online_image.jpg"
            }
            alt={t("school_name")}
            sx={{
              width: { xs: "280px", md: "320px" },
              height: { xs: "220px", md: "250px" },
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
