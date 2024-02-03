import { Header } from './components/Header';
// import { Container } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme} />
      <Header />
    </>
  );
}

export default App;
