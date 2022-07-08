import { ThemeProvider } from "styled-components";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import GlobalStyles from "./Components/styled/Global";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import DishModal from "./Components/DishModal";
import VegPage from "./Components/VegPage";

function App() {
  const theme = {
    colors: {
      primarybg: "#F4F0E8",
      secondarybg: "#F7F7F7",
      primaryColor: "#21665A",
      brownBtnColor: "#743201",
      orangeBtnColor: "#FF6801",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/vegpage" element={<VegPage />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
