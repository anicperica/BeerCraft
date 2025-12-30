import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import LoginPage from "./pages/Login/LoginPage";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import BeerDetails from "./pages/BeerDetails/BeerDetails";
import BeerPage from "./pages/Beers/BeerPage";
import BreweryPage from "./pages/Brewery/BreweryPage";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="beers/:id"
        element={
          <Layout  pageBg="bg-zinc-950">
            <BeerDetails />
          </Layout>
        }
      />
       <Route
        path="/beers"
        element={
          <Layout  pageBg="bg-zinc-950">
            <BeerPage />
          </Layout>
        }
      />
      <Route
        path="/brewery"
        element={
          <Layout  pageBg="bg-zinc-950">
            <BreweryPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
