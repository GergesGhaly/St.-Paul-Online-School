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

const LoginModal = ({
  open,
  onClose,
  onSwitchToRegister,
  onSwitchToForgot,
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography variant="h6" align="center">
          {t("member_login")}
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
              
              }}
            />

            <Input
              type="password"
              placeholder={t("password")}
              fullWidth
              sx={{
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                py: 1.2,
                textAlign: isArabic ? "right" : "left",
              
              }}
            />

            <Button variant="contained" fullWidth>
              {t("login")}
            </Button>

            <Typography
              align="center"
              sx={{ mt: 1, cursor: "pointer", color: "primary.main" }}
              onClick={onSwitchToForgot}
            >
              {t("forgot_password")}
            </Typography>

            <Typography align="center">
              {t("new_member")}{" "}
              <Typography
                component="span"
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={onSwitchToRegister}
              >
                {t("register")}
              </Typography>
            </Typography>
          </Box>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
