import { ThemeProvider } from "@mui/material";
import theme from "./Assets/styles/theme";
import MultiProductPage from "./Pages/MultiProductPage/MultiProductPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MultiProductPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
