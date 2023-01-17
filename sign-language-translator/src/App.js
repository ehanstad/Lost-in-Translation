import './App.css';
import store from './store.js';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    </Provider>
  );
}

export default App;
