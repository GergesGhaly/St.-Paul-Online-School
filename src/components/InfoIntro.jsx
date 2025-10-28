import React from "react";
import { useTranslation } from "react-i18next";

const InfoIntro = () => {
  const { t } = useTranslation();

  return <p>{t("intro_text")}</p>;
};

export default InfoIntro;
