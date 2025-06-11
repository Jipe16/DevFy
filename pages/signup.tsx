"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import CustomButton from "@/app/components/button/button";
import Checkbox from "@mui/material/Checkbox";
import {
  LinearProgress,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";

export default function Home() {
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const [gender, setGender] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/home");
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
            <LinearProgress
              color="primary"
              variant="determinate"
              value={(100 * step) / 4}
            />
            {step === 1 && (
              <>
                <Typography color="secondary" variant="body1">
                  Junte-se a nós e curta as melhores músicas desde já!
                </Typography>
                <TextField
                  variant="outlined"
                  label="Email"
                  type="email"
                  required
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => setStep(2)}
                >
                  Logar
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
                    Já tem conta?
                  </Typography>
                  <Typography
                    color="secondary"
                    variant="body2"
                    sx={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                    onClick={() => (window.location.pathname = "login")}
                  >
                    Faça login aqui.
                  </Typography>
                </Box>
              </>
            )}
            {step === 2 && (
              <>
                <Typography color="secondary" variant="body1">
                  Crie uma senha
                </Typography>
                <TextField
                  variant="outlined"
                  label="Senha"
                  type="password"
                  required
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => setStep(3)}
                >
                  Avançar
                </Button>
                <Typography color="secondary" variant="body1">
                  A senha deve ter pelo menos
                </Typography>
                <Box>
                  <Typography color="secondary" variant="body2">
                    1 letra minuscula e maiscula
                  </Typography>
                  <Typography color="secondary" variant="body2">
                    1 número ou caractere especial (por exemplo: ! $ # ?)
                  </Typography>
                  <Typography color="secondary" variant="body2">
                    8 caracteres
                  </Typography>
                </Box>
              </>
            )}
            {step === 3 && (
              <>
                <Typography color="secondary" variant="subtitle1">
                  Fale de você
                </Typography>
                <Typography color="secondary" variant="body1">
                  Nome
                </Typography>
                <Typography color="secondary" variant="body2">
                  Este nome aparecerá no seu perfil
                </Typography>
                <TextField
                  variant="outlined"
                  label="Nome"
                  type="password"
                  fullWidth
                />
                <Typography color="secondary" variant="body1">
                  Data de nascimento
                </Typography>
                <Typography color="secondary" variant="body2">
                  Preenchar os campos com a sua data de nascimento
                </Typography>
                <TextField variant="outlined" type="date" fullWidth />
                <Typography color="secondary" variant="body1">
                  Gênero
                </Typography>
                <Typography color="secondary" variant="body2">
                  Selecione o gênero que você se identifca
                </Typography>
                <Select
                  onChange={(event) => setGender(event.target.value as string)}
                  color="secondary"
                  fullWidth
                >
                  <MenuItem value="Masculino">Masculino</MenuItem>
                  <MenuItem value="Feminino">Feminino</MenuItem>
                  <MenuItem value="Não binário">Não binário</MenuItem>
                  <MenuItem value="Outro">Outro</MenuItem>
                  <MenuItem value="Prefiro não dizer">
                    Prefiro não dizer
                  </MenuItem>
                </Select>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => setStep(4)}
                >
                  Avançar
                </Button>
                <Typography color="secondary" variant="body1">
                  A senha deve ter pelo menos
                </Typography>
                <Box>
                  <Typography color="secondary" variant="body2">
                    1 letra minuscula e maiscula
                  </Typography>
                  <Typography color="secondary" variant="body2">
                    1 número ou caractere especial (por exemplo: ! $ # ?)
                  </Typography>
                  <Typography color="secondary" variant="body2">
                    8 caracteres
                  </Typography>
                </Box>
              </>
            )}
            {step === 4 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography color="secondary" variant="subtitle1">
                  Termos e condições
                </Typography>
                <Box
                  sx={{
                    background: "grey",
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  <Checkbox
                    defaultChecked={false}
                    color="primary"
                    sx={{
                      color: "white",
                    }}
                  />
                  <Typography color="secondary" variant="body2">
                    Não quero receber mensagens de marketing
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background: "grey",
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  <Checkbox
                    defaultChecked={false}
                    color="primary"
                    sx={{
                      color: "white",
                    }}
                  />
                  <Typography color="secondary" variant="body2">
                    Compartilhar meus dados cadastrais com os provedores de
                    conteúdos do “nome do app” para fins de marketing
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background: "grey",
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  <Checkbox
                    defaultChecked={false}
                    color="primary"
                    sx={{
                      color: "white",
                    }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography color="secondary" variant="body2">
                      Eu concordo com os
                    </Typography>
                    <Typography
                      color="primary"
                      variant="body2"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        window.location.href = "https://www.afya.com.br/";
                      }}
                    >
                      Termos e Condições de Uso do DevFy
                    </Typography>
                  </Box>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => router.push("/home")}
                >
                  Avançar
                </Button>
              </Box>
            )}
          </Box>
        </Container>
      </AppRouterCacheProvider>
    </ThemeProvider>
  );
}
