/**
 * This file is applications root component. It handles the Router.
 */
import './App.scss';
import LoginPage from './views/LoginPage';
import TranslatePage from './views/TranslatePage';
import ProfilePage from './views/ProfilePage';
import ErrorPage from './views/ErrorPage';
import PrivateRoute from './components/privateRoute';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <PrivateRoute path='/translate' element={<TranslatePage />} />
            <PrivateRoute path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
  );
}

export default App;
