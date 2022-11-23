import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar/navBar';
import LandingPage from '../Pages/LandingPage/landingPage';
import InputPage from '../Pages/InputPage/inputPage';
import DatabasePage from '../Pages/DatabasePage/databasePage';

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar />
    <Routes>
        {/* ignore the following squiggly line */}
        <Route exact path='/' exact element={<LandingPage/>} />
        <Route path='/join' element={<InputPage/>} />
        <Route path='/database' element={<DatabasePage/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;