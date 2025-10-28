import React from "react";
import { useTranslation } from "react-i18next";

const styles = {
  smallText: {
    fontSize: "25px",
    marginTop: "20px",
  },
  list: {
    listStyle: "none",
    paddingRight: 0,
  },
};

const InfoRegisterNotes = () => {
  const { t } = useTranslation();

  return (
    <div style={styles.smallText}>
      <p>{t("new_members_notes_title")}</p>
      <ul style={styles.list}>
        <li>{t("note_1")}</li>
        <li>{t("note_2")}</li>
        <li>{t("note_3")}</li>
      </ul>
    </div>
  );
};

export default InfoRegisterNotes;
