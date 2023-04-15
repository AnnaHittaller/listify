
import './App.css';
import Calendar from './components/Calendar';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation'

//import "./components/Calendar.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Calendar />
      <Navigation />
    </div>
  );
}

export default App;
