import './App.css';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
}

export default App;
