import "./App.css";
import CalendarPage from "./pages/CalendarPage.jsx";
import { yearsRange, daysRange, monthRange } from "./consts/Consts";
import Calendar from "./pages/CalendarV2";
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
