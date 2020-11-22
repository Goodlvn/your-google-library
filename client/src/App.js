import React from "react";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BookProvider } from "./utils/BookContext";
import {
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles"

const customTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <div className="App">
          <BookProvider>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </BookProvider>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
