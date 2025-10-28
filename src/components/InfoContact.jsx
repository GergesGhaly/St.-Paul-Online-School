import React from "react";
import { useTranslation } from "react-i18next";

const styles = {
  redText: {
    color: "red",
    fontWeight: "bold",
    fontSize: "20px",
  },
  link: {
    color: "#0000EE",
    textDecoration: "underline",
  },
  smallerText: {
    fontSize: "14px",
    textAlign: "center",
    marginTop: "30px",
  },
};

const InfoContact = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        {t("inquiry_email")}: <br />
        <a href="mailto:stpaulserviceschool@gmail.com" style={styles.redText}>
          stpaulserviceschool@gmail.com
        </a>
      </p>

      <div style={styles.smallerText}>
        For any enquiry please contact us{" "}
        <a
          href="mailto:stpaulserviceschool@gmail.com?subject=Enquiry"
          style={styles.link}
        >
          here
        </a>
      </div>
    </>
  );
};

export default InfoContact;
