import { CSSObject } from "@emotion/react";
import { theme } from "./home";

export const styles: { [key: string]: CSSObject } = {
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.bgDark,
    padding: "24px 32px",
    overflowY: "auto",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "24px",
  },
  likedCard: {
    background: "linear-gradient(to right, #7e6efb, #5f4be7)",
    padding: "24px",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: 700,
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "180px",
  },
  card: {
    backgroundColor: theme.colors.bgMedium,
    padding: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.colors.bgLight,
    },
    img: {
      width: "100%",
      borderRadius: "6px",
      marginBottom: "12px",
    },
    h3: {
      fontSize: "14px",
      margin: "0 0 4px 0",
    },
    p: {
      fontSize: "12px",
      color: theme.colors.textSecondary,
      margin: 0,
    },
  },
};
