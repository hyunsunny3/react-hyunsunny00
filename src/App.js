import { Route, Routes, Link, useNavigate } from "react-router-dom";
import './App.css';
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import LoginPage from "./components/LoginPage";
import LoginPage2 from "./components/LoginPage2";

function App() {

  let navigate = useNavigate();

  return (
    <>

      <header>
        <div className="header_wrap">
          <h1><Link to="/">hyunsunny shop</Link></h1>
          <div className="nav">
            <Link to="/ProductPage">상품</Link>
            <Link to="/LoginPage">로그인</Link>
            <Link to="/LoginPage2">로그인2</Link>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LoginPage2" element={<LoginPage2 />} />
      </Routes>

      <footer>
        <div></div>
      </footer>

    </>
  );
}

export default App;
