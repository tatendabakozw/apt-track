import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ChakraProvider } from '@chakra-ui/react';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class"  defaultTheme="light">
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default CustomApp;