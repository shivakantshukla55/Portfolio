import { Routes, Route, Navigate } from "react-router-dom";
import { About } from "../pages/About";
import { Work } from "../pages/Work";
import { Skills } from "../pages/Skills";
import { Connect } from "../pages/Connect";

const Home = () => {
  return <Navigate to="/about" />;
};

const PageNotFound = () => <h2>Page Not Found</h2>;

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/connect" element={<Connect />} />
    </Routes>
  );
};
