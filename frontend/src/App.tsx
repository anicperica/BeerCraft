import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import LoginPage from "./pages/Login/LoginPage";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
function App() {
   
  return (
    <Routes>
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage   />} />
      <Route
        path="/"
        element={
          <Layout >
            <HomePage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
