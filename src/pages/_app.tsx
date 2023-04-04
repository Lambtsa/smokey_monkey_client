import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles";
import { GlobalStyle } from "@styles";
import { LanguageProvider } from "@context/LanguageContext";
import { ToastProvider } from "@context/ToastContext";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LanguageProvider>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
