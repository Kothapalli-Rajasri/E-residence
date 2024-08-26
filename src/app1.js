import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home';
import Pending2 from './pending';
import Accept2 from './accept';
import Reject2 from './reject';

function App1() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pending" element={<Pending2 />} />
        <Route path="/accept" element={<Accept2 />} />
        <Route path="/reject" element={<Reject2 />} />
      </Routes>
    </Router>
  );
}

export default App1;