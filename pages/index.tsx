"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import Header from "@/app/components/header/header";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CustomButton from "@/app/components/button/button";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    window.location.pathname = "home";
  };

  return (
    <ThemeProvider theme={theme}>
      <AppRouterCacheProvider>
        <Container maxWidth="xs">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "black",
              p: 5,
              borderRadius: 2,
            }}
          >
            <Typography color="secondary" variant="body1">
              E-mail ou nome de usuário
            </Typography>
            <TextField
              variant="outlined"
              type="email"
              label="E-mail ou nome de usuário"
              value={email}
              color="secondary"
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
            <Typography color="secondary" variant="body1">
              Senha
            </Typography>
            <TextField
              label="Senha"
              variant="outlined"
              color="secondary"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Continuar
            </Button>
            <hr style={{ width: "100%", borderColor: "white" }} />
            <CustomButton
              text={"Continuar com o Google"}
              imageSrc={"/google-icon.svg"}
            />
            <CustomButton
              text={"Continuar com o Facebook"}
              imageSrc={"/facebook-icon.svg"}
            />
            <CustomButton
              text={"Continuar com a Apple"}
              imageSrc={"/apple-icon.svg"}
            />
            <CustomButton
              text={"Continuar com o número de telefone"}
              imageSrc={"/phone-icon.svg"}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                gap: 1,
              }}
            >
              <Typography color="secondary" variant="body2">
                Não tem conta?
              </Typography>
              <Typography
                color="secondary"
                variant="body2"
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                onClick={() => (window.location.pathname = "signup")}
              >
                Inscrever-se.
              </Typography>
            </Box>
          </Box>
        </Container>
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
}
