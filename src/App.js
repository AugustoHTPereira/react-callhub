import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import "./style.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { toast } from "react-toastify";
import { css } from "glamor";

function App() {
  toast.configure({
    autoClose: 6000,
    bodyClassName: css({
      fontFamily: "'Baloo Thambi 2', coursive !important"
    }),
    toastClassName: css({
      borderRadius: "4px",
      padding: "7px 15px"
    }),
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
