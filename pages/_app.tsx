import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

import theme from "@/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppCacheProvider {...pageProps}>
        <Component {...pageProps} />
      </AppCacheProvider>
    </ThemeProvider>
  );
}
