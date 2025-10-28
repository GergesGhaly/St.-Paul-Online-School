import React from "react";
import { useTranslation } from "react-i18next";

const InfoCourseDetails = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        {t("course_programs")} {/* مثل: "يوجد نظامين للكورس:" */}
      </p>
      <ul style={{ listStyle: "none"}}>
        <li>{t("fast_track")}</li>
        <li>{t("slow_track")}</li>
      </ul>

      <p>{t("course_description")}</p>
    </>
  );
};

export default InfoCourseDetails;
