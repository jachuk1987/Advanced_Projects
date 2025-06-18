import logo from './logo.svg';
import './App.css';
import DisplayDynamicData from './Components/1.DisplayDynamicData';
import ParentComponent from './Components/2.ParentComponent';
import ParentCompo from './Components/3.ParentCompo';

function App() {
  return (
    <div className="App">
      <DisplayDynamicData />
      {/* <ParentComponent /> */}
      <ParentCompo />
    </div>
  );
}

export default App;
