import './App.scss';
import LoginPage from './views/LoginPage';
import TranslatePage from './views/TranslatePage';
import ErrorPage from './views/ErrorPage';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/translate" element={<TranslatePage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
}

export default App;
