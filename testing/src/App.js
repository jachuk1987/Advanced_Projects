import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import ClickCounter from './Components/ClickCounter';
import ValidationForm from './Components/ValidationForm';
import CheckList from './Components/CheckList';

function App() {
  return (
    <div className="App">
      <Users />
      <ClickCounter />
      <ValidationForm />
      <CheckList />
    </div>
  );
}

export default App;
