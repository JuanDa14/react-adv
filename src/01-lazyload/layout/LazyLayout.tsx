import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { LazyLoad1, LazyLoad2, LazyLoad3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy layout page</h1>

      <ul>
        <li>
          <NavLink to="lazy1">lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">lazy2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">lazy3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyLoad1 />} />
        <Route path="lazy2" element={<LazyLoad2 />} />
        <Route path="lazy3" element={<LazyLoad3 />} />

        {/* <Route path="*" element={<Navigate to="lazy1" replace />} /> */}

        <Route path="*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
