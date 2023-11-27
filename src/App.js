import './App.css';
import TopButton from './components/TopButton';
import Input from './components/input';
import Location from './components/Location';
import TempAndDetail from './components/TempAndDetail';
import Forecast from './components/Forecast';


function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-4 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    <TopButton />
    <Input />
    <Location />
    <TempAndDetail />
    <Forecast />
    
    </div>
  );
}

export default App;
