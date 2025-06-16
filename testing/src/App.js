import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import ClickCounter from './Components/ClickCounter';
import ValidationForm from './Components/ValidationForm';
import CheckList from './Components/CheckList';
import Checklist1 from './Components/CheckList1';

function App() {
  return (
    <div className="App">
      <Users />
      <ClickCounter />
      <ValidationForm />
      {/* <CheckList /> */}
      <Checklist1 />
    </div>
  );
}

export default App;
