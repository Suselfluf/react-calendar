import "./App.css";
import CalendarPage from "./pages/CalendarPage.jsx";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <CalendarPage></CalendarPage>
      </Provider>
    </>
  );
}

export default App;
