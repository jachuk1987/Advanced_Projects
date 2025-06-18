import logo from './logo.svg';
import './App.css';
import DisplayDynamicData from './Components/1.DisplayDynamicData';
import ParentComponent from './Components/2.ParentComponent';
import ParentCompo from './Components/3.ParentCompo';
import Main from './30.ContextAPI/Main';
import CustomHook from './Components/37.CustomHook';
import Dummy from './Components/37.Dummy';

function App() {
  return (
    <div className="App">
      <DisplayDynamicData />
      <ParentComponent />
      <ParentCompo />
      <Main />
      {/* <CustomHook /> */}
      <Dummy />
    </div>
  );
}

export default App;
