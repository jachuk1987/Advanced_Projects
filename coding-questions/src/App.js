import logo from './logo.svg';
import './App.css';
import ParentComponent from './Components/2.ParentComponent';
import ChildComponent from './Components/2.ChildComponent';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      <ChildComponent />
    </div>
  );
}

export default App;
