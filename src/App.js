import { Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import LoginPage from "./components/LoginPage";
import LoginPage2 from "./components/LoginPage2";
import SunnyDice from "./dice/SunnyDice";
import MyHooksWr from "./components/MyHooks/MyHooksWr";
import Header from "./components/templates/Header";

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LoginPage2" element={<LoginPage2 />} />
        {/* <Route path="/SunnyDice" element={<SunnyDice />} /> */}
        <Route path="/MyHooks/*" element={<MyHooksWr />} />
      </Routes>

      <footer>
        <div></div>
      </footer>

    </>
  );
}

export default App;
