import { Routes, Route, Navigate } from "react-router-dom";
import { About } from "../pages/About";

const Skills = () => <h2>Skills</h2>;
const Work = () => <h2>Work</h2>;
const Connect = () => <h2>Connect</h2>;

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
      <Route path="/skills" element={<Skills />} />
      <Route path="/connect" element={<Connect />} />
      <Route element={<PageNotFound />} />
    </Routes>
  );
};
