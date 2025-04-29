import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./contexts/themeContext";
import { AuthProvider } from "./contexts/authContext";
import ErrorBoundry from "./Components/ErrorBoundry";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundry>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <AuthProvider>
              <Suspense fallback={<h1>Loading ...</h1>}>
                <App />
              </Suspense>
            </AuthProvider>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundry>
  </React.StrictMode>
);
