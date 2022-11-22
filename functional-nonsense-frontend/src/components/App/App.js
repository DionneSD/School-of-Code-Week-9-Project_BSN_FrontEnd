
import './App.css';

import LandingPage from '../Pages/LandingPage/landingPage';
import DatabasePage from '../Pages/DatabasePage/databasePage';
import InputPage from '../Pages/InputPage/inputPage';

function App() {
  return (
    <div className="App">
      <LandingPage></LandingPage>
      <DatabasePage></DatabasePage>
      <InputPage></InputPage>
    </div>
  );
}

export default App;
