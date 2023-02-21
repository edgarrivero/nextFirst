import Layout from '../components/layout'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import shadows from '../theme/shadows';
import palette from '../theme/palette';

const theme = createTheme({
  shadows: shadows(),
  palette,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}  >
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  )
}