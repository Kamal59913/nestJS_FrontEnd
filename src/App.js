import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WEATHER from './Pages/WeatherPage/index';
import AdminLogin from "./Pages/AdminLogin/index";
import AdminPanel from "./Pages/AdminPanel/adminPanel";
import SubsriberInfo from './Pages/SubscriberInfo/index'
import NAV from './Pages/NavBar/nav'
function App() {
  return (
    <>
    <NAV/>
    <Routes>
    <Route path="/" element={<AdminLogin/>}></Route>
    <Route path="/weather" element={<WEATHER/>}></Route>
    <Route path="/admin-panel" element={<AdminPanel/>}></Route>
    <Route path="/manual-subscribe" element={<SubsriberInfo/>}></Route>
    </Routes>
    </>
  );
}
export default App;
