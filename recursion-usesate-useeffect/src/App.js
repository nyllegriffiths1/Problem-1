import logo from './logo.svg';
import './App.css';
import CountdownTimer from './problemOne';

function App() {
  return (
    <div className="App">
      <CountdownTimer initialCount={10} />
    </div>
  );
}

export default App;
