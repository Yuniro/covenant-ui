import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ProposalNewPage from "../pages/proposalNew";
import ProposalSymbolPage from "../pages/proposalSymbol";
import { ReactApp } from "../components";

const { PUBLIC_URL } = process.env;

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<ReactApp />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/proposal/new" element={<ProposalNewPage />} />
          <Route path="/proposal/new/:protocol" element={<ProposalNewPage />} />
          <Route path="/proposal/new/:protocol/:prsalType" element={<ProposalNewPage />} />
          <Route path="/proposal/new/:protocol/:prsalType/:kpi" element={<ProposalNewPage />} />
          <Route path="/proposal/:symbol" element={<ProposalSymbolPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
