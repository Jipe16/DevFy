import { CSSObject } from "@emotion/react";
import { theme } from "./home";

export const styles: { [key: string]: CSSObject } = {
playingContainer: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: "8px 16px",
  textAlign: "center",
  overflow: "hidden",
  boxSizing: "border-box",
},



nowPlayingTitle: {
  fontSize: "28px",
  fontWeight: 700,
  marginBottom: "16px",
  color: theme.colors.textPrimary,
},


  trackInfo: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px", 
  marginBottom: "20px", 
},



  albumCover: {
    width: "320px",
    height: "320px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
  },

  trackTitle: {
    fontSize: "24px",
    fontWeight: 700,
    margin: "12px 0 6px",
    color: theme.colors.textPrimary,
  },

  artist: {
    fontSize: "16px",
    color: theme.colors.textSecondary,
  },

  audioPlayer: {
    width: "100%",
    maxWidth: "700px",
    backgroundColor: theme.colors.bgLight,
    color: theme.colors.textPrimary,
    borderRadius: "16px",
    padding: "10px",
    outline: "none",
    filter: "invert(1)", // inverte as cores (temporário) para botão, tempo, etc.

    "&::-webkit-media-controls-panel": {
      backgroundColor: theme.colors.bgMedium,
    },
    "&::-webkit-media-controls-play-button": {
      filter: "invert(1)",
    },
    "&::-webkit-media-controls-timeline": {
      backgroundColor: "#aaa",
    },
    "&::-webkit-media-controls-current-time-display, &::-webkit-media-controls-time-remaining-display": {
      color: "#fff",
    },
  },



customAudioPlayer: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "1000px",
  minHeight: "80px", 
  marginTop: "16px",
  padding: "0 16px",
},


playButton: {
  backgroundColor: "#1e90ff",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "48px",
  height: "48px",
  fontSize: "24px",
  cursor: "pointer",
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  "&:hover": {
    backgroundColor: "#0077cc",
  },
},

progressWrapper: {
  width: "100%",
  height: "12px",
  backgroundColor: "#444",
  borderRadius: "6px",
  cursor: "pointer",
  overflow: "hidden",
},


progressBar: {
  width: "100%",
  height: "100%",
  backgroundColor: "#444",
  borderRadius: "6px",
},

progressFill: {
  height: "100%",
  backgroundColor: "#2196f3", // ou #2196f3 para azul
  transition: "width 0.2s ease-in-out",
},

volumeSlider: {
  width: "150px",
  accentColor: "#1e90ff",
},

progressContainer: {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  marginTop: "16px",
},

timeDisplay: {
  marginTop: "8px",
  fontSize: "14px",
  color: "#fff",
  fontFamily: "monospace",
},

};
