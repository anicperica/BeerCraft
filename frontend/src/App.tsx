import { Routes, Route } from "react-router-dom";

import RegistrationPage from "./pages/Registration/RegistrationPage";
import LoginPage from "./pages/Login/LoginPage";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import BeerDetails from "./pages/BeerDetails/BeerDetails";
import BeerPage from "./pages/Beers/BeerPage";
import BreweryPage from "./pages/Brewery/BreweryPage";
import BreweryDetails from "./pages/BreweryDetails/Brewerydetails";
import AdminPage from "./pages/Admin/AdminPage";
import AdminRoute from "./components/authProtection/AdminRoute";
import ProtectedRoute from "./components/authProtection/ProtectedRoute";
import CartPage from "./pages/Cart/CartPage";
import FavoritesPage from "./pages/Favorite/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
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
            <Layout pageBg="bg-zinc-950">
              <BeerDetails />
            </Layout>
          }
        />
        <Route
          path="/beers"
          element={
            <Layout pageBg="bg-zinc-950">
              <BeerPage />
            </Layout>
          }
        />
        <Route
          path="/brewery"
          element={
            <Layout pageBg="bg-zinc-950">
              <BreweryPage />
            </Layout>
          }
        />
        <Route
          path="brewery/:id"
          element={
            <Layout pageBg="bg-zinc-950">
              <BreweryDetails />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout pageBg="bg-zinc-950">
              <CartPage />
            </Layout>
          }
        />
        <Route
          path="/favorites"
          element={
            <Layout pageBg="bg-zinc-950">
              <FavoritesPage />
            </Layout>
          }
        />
      </Route>
      <Route element={<AdminRoute />}>
        <Route
          path="/admin"
          element={
            <Layout>
              <AdminPage />
            </Layout>
          }
        />
     
      </Route>
    </Routes>
  );
}

export default App;
