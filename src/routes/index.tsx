import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ProposalPage from "../pages/proposal";
import { ReactApp } from "../components";

const { PUBLIC_URL } = process.env;

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<ReactApp />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/proposal" element={<ProposalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
