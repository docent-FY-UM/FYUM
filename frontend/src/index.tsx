import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";
import "./index.css";

// redux-persist
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
