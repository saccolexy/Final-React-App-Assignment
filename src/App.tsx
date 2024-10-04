// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ItemsPage from './pages/ItemsPage';
import ItemDetail from './components/ItemDetail';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
