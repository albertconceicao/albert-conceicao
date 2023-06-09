import { ThemeProvider } from 'styled-components';
import NextrNprogress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { WhatsApp } from '../components/WhatsApp';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextrNprogress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <GlobalStyles />
      <WhatsApp />
    </ThemeProvider>
  );
}

export default MyApp;
