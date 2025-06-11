import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import ClickCounter from './Components/ClickCounter';
import ValidationForm from './Components/ValidationForm';

function App() {
  return (
    <div className="App">
      <Users />
      <ClickCounter />
      <ValidationForm />
    </div>
  );
}

export default App;
