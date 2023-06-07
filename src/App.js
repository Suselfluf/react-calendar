import "./App.css";
import CalendarPage from "./pages/CalendarPage.jsx";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={configureStore}>
        <CalendarPage></CalendarPage>
      </Provider>
    </>
  );
}

export default App;
