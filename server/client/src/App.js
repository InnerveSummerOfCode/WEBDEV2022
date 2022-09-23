import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LoginUser, Home, RegisterUser, RegisterHospital, UserDash, HospitalDash, LoginHospital } from "./Pages";
import { Navbar, Footer } from "./Components"

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={ <Home /> } />
            <Route path="login-user" element={ <LoginUser /> } />
            <Route path="login-hospital" element={ <LoginHospital /> } />
            <Route path="register-user" element={ <RegisterUser /> } />
            <Route path="register-hospital" element={ <RegisterHospital /> } />
            <Route path="user-dash" element = { <UserDash /> } />
            <Route path="hospital-dash" element = { <HospitalDash /> } />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
