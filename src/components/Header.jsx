// src/components/Header.jsx
import React, { useState } from "react";
import { Button, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [modalType, setModalType] = useState(null);

  const handleClose = () => setModalType(null);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#336699",
          borderBottom: "1px solid #ccc",
          boxShadow: "none",
          paddingY: "8px ",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" fontWeight="bold">
            {t("service_name")}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button color="inherit" onClick={toggleLanguage}>
              {i18n.language === "ar" ? "English" : "العربية"}
            </Button>

            {/* <Button color="primary" href="#about" sx={{ fontWeight: "bold" }}>
              {t("about")}
            </Button> */}

            <Button
              variant="contained"
              color="primary"
              onClick={() => setModalType("login")}
            >
              {t("login")}
            </Button>

            {/* زر تبديل اللغة */}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modals */}
      <LoginModal
        open={modalType === "login"}
        onClose={handleClose}
        onSwitchToRegister={() => setModalType("register")}
        onSwitchToForgot={() => setModalType("forgot")}
      />

      <RegisterModal
        open={modalType === "register"}
        onClose={handleClose}
        onSwitchToLogin={() => setModalType("login")}
        onSwitchToForgot={() => setModalType("forgot")}
      />

      <ForgotPasswordModal
        open={modalType === "forgot"}
        onClose={handleClose}
        onSwitchToLogin={() => setModalType("login")}
      />
    </>
  );
};

export default Header;
