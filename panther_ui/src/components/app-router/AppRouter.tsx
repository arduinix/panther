import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/not-found/NotFound";
import MainLayout from "../main-layout/MainLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<MainLayout />}>
        {/* <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} /> */}
      </Route>
    </Routes>
  );
}
