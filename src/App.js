import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinListPage from "./components/CoinListPage";
import CoinDetailPage from "./components/CoinDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoinListPage />} />
        <Route path="/coins/:coinId" element={<CoinDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
