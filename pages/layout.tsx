import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body
          style={{ margin: 0, background: "black" }}
          className={inter.className}
        >
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
