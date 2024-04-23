import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/about"
          element={
            <About />
          }
        />
        <Route
          path="/movie-detail"
          element={
            <Detail />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
