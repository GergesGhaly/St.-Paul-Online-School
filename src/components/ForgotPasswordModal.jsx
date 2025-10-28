// src/components/ForgotPasswordModal.jsx
import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, Typography, Box, Input } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ForgotPasswordModal = ({ open, onClose, onSwitchToLogin }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography variant="h6" align="center">
          {t("forgot_password")}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box display="flex" flexDirection="column" gap={2} mt={1} sx={{ direction: isArabic ? "rtl" : "ltr" }}>
            
            <Input
              placeholder={t("username")}
              fullWidth
              sx={{
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                py: 1.2,
                textAlign: isArabic ? "right" : "left",
                "&::placeholder": { color: "gray" },
              }}
            />

            <Input
              placeholder={t("email")}
              fullWidth
              sx={{
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                py: 1.2,
                textAlign: isArabic ? "right" : "left",
                "&::placeholder": { color: "gray" },
              }}
            />

            <Button variant="contained" fullWidth>
              {t("send")}
            </Button>

            <Typography align="center" sx={{ mt: 2 }}>
              {t("remember_password")}{" "}
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

export default ForgotPasswordModal;
