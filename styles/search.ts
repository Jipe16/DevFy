import { CSSObject } from "@emotion/react";
import { theme } from "./home";

export const styles: { [key: string]: CSSObject } = {
  sectionTitle: {
    fontSize: "24px",
    fontWeight: 700,
    margin: "20px 0 12px",
  },

  mainResult: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    backgroundColor: theme.colors.bgMedium,
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "32px",
  },

  resultImage: {
    width: "120px",
    height: "120px",
    backgroundColor: theme.colors.bgLight,
    borderRadius: "8px",
  },

  playlistTitle: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "4px",
  },

  playlistSubtitle: {
    fontSize: "14px",
    color: theme.colors.textSecondary,
    marginBottom: "12px",
  },

  songList: {
    paddingLeft: "18px",
    fontSize: "14px",
    color: theme.colors.textPrimary,
    lineHeight: "1.8",
  },

  cardGrid: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "32px",
  },

  card: {
    backgroundColor: theme.colors.bgMedium,
    color: theme.colors.textPrimary,
    padding: "16px",
    borderRadius: "6px",
    minWidth: "140px",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.colors.bgLight,
    },
  },

  cardImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "12px",
  },

  artistGrid: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },

  artistCard: {
    backgroundColor: theme.colors.bgMedium,
    color: theme.colors.textPrimary,
    padding: "12px",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 700,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.bgLight,
    },
  },

  resultImageImg: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
},

};

