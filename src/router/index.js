import { Routes, Route, Navigate } from "react-router-dom";
import { About } from "../pages/About";

const Work = () => <h2>Work</h2>;
const Contact = () => <h2>Contact</h2>;

const Home = () => {
  return <Navigate to="/about" />;
};

const PageNotFound = () => <h2>Page Not Found</h2>;

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<PageNotFound />} />
    </Routes>
  );
};
