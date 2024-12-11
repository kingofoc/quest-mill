'use client'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import ReferralPage from '@/pages/ReferralPage';
import AirdropPage from '@/pages/AirdropPage';
import TaskPage from '@/pages/TaskPage';
import RankingPage from '@/pages/RankingPage';

import Footer from '@/components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/airdrop" element={<AirdropPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
