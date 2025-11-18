import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/poppins";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { getToken } from "./auth/oauth";
import { Suspense, lazy } from "react";
import data from "./data/data.json"

const routesData = data.routes;
const routeComponents: any = {
  "/": lazy(() => import("./routes/home/Home")),
  "/services": lazy(() => import("./routes/services/Services")),
  "/about-us": lazy(() => import("./routes/about-us/AboutUs")),
  "/contact-us": lazy(() => import("./routes/contact-us/ContactUs")),
  "/appointment": lazy(() => import("./components/Appointment/Appoinment")),
  "/privacy-policy": lazy(() => import("./routes/PrivacySection/PrivacySection")),
  "/low-cost-counselling": lazy(() => import("./routes/LowCostCounselling/LowCostCounselling")),
  "/Workshops": lazy(() => import("./components/Workshops/Workshops")),
  "/PartnershipsOutreach": lazy(() => import("./routes/PartnershipsOutreach/PartnershipsOutreach"))
};
 
const loadComponent = (path: string) => routeComponents[path] || null;
function App() {
  getToken();



  return (
    <BrowserRouter>
      <Header />
      <ScrollToTopButton />
      <Suspense fallback={<div style={{ opacity: 0 }}>Loading...</div>}>
        <Routes>
        {routesData.map((route, index) => {
  const Component = loadComponent(route.path);
  return Component ? <Route key={index} path={route.path} element={<Component />} /> : null;
})}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
