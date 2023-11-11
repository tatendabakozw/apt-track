import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ChakraProvider } from '@chakra-ui/react';
import './styles.css';
import { StoreProvider } from '../context/Store';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default CustomApp;
