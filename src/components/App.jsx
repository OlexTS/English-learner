import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../pages/Home'));
const WorkSpace = lazy(() => import('../pages/WorkSpace'));



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/> }>
        <Route index element={<Home />} />
        <Route path="workspace" element={<WorkSpace />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes> 
    </div>
  );
};
