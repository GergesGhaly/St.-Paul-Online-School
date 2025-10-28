import React from "react";
import { useTranslation } from "react-i18next";

const styles = {
  redText: {
    color: "red",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    paddingRight: 0,
  },
};

const InfoRequirements = () => {
  const { t } = useTranslation();

  return (
    <>
      <p style={styles.redText}>
        <strong>{t("requirements_title")}</strong>
      </p>

      <ul style={styles.list}>
        <li>{t("requirement_1")}</li>
        <li>{t("requirement_2")}</li>
        <li>{t("requirement_3")}</li>
        <li>{t("requirement_4")}</li>
      </ul>

      <p>{t("complete_registration")}</p>
    </>
  );
};

export default InfoRequirements;
