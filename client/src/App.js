import React from "react";
import Search from "./pages/Search/Search"
import {
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles"

const customTheme = createMuiTheme({
  palette:{
    type: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Search />
      </div>
    </ThemeProvider>
  );
}

export default App;
