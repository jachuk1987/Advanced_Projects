import logo from './logo.svg';
import './App.css';
import ParentComponent from './Components/2.ParentComponent';
import ChildComponent from './Components/2.ChildComponent';
import DomAccessExample from './Components/4.DomAccessExample';
import { DomAccessClass } from './Components/4.DomAccessClass';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      <ChildComponent />
      <DomAccessExample />
      <DomAccessClass />
    </div>
  );
}

export default App;
