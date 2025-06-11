import { Typography } from "@mui/material";
import Image from "next/image";

export default function CustomButton({ text, imageSrc }: any) {
  return (
    <button
      style={{
        background: "none",
        border: "2px solid white",
        borderRadius: "10px",
        cursor: "pointer",
        width: "100%",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        height: "50px",
      }}
    >
      <Image src={imageSrc} alt="Google Icon" width={24} height={24} />
      <Typography color="secondary" variant="body1">
        {text}
      </Typography>
    </button>
  );
}
