// src/components/RegisterModal.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  Box,
  Input,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const RegisterModal = ({
  open,
  onClose,
  onSwitchToLogin,
  onSwitchToForgot,
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography variant="h6" align="center">
          {t("register")}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            mt={1}
            sx={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <Input
              placeholder={t("username")}
              fullWidth
              sx={{
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                py: 1.2,
                textAlign: isArabic ? "right" : "left",
                "&::placeholder": { color: "gray", opacity: 1 },
              }}
            />

            <Input
              placeholder={t("email")}
              type="email"
              fullWidth
              sx={{
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                py: 1.2,
                textAlign: isArabic ? "right" : "left",
                "&::placeholder": { color: "gray", opacity: 1 },
              }}
            />

            <Input
              placeholder={t("password")}
              type="password"
              fullWidth
              sx={{
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                py: 1.2,
                textAlign: isArabic ? "right" : "left",
                "&::placeholder": { color: "gray", opacity: 1 },
              }}
            />

            <Input
              placeholder={t("confirm_password")}
              type="password"
              fullWidth
              sx={{
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                py: 1.2,
                textAlign: isArabic ? "right" : "left",
                "&::placeholder": { color: "gray", opacity: 1 },
              }}
            />

            <Button variant="contained" fullWidth>
              {t("register")}
            </Button>

            <Typography align="center" sx={{ mt: 1 }}>
              {t("already_member")}{" "}
              <Typography
                component="span"
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={onSwitchToLogin}
              >
                {t("login")}
              </Typography>
            </Typography>
          </Box>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
