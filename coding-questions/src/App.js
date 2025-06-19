import logo from './logo.svg';
import './App.css';
import DisplayDynamicData from './Components/1.DisplayDynamicData';
import ParentComponent from './Components/2.ParentComponent';
import ParentCompo from './Components/3.ParentCompo';

import Main from './30.ContextAPI/Main';
import Dummy from './Components/37.Dummy';
import ShowAndHide from './Components/11.Show&Hide';

function App() {
  return (
    <div className="App">
      <DisplayDynamicData />
      <ParentComponent />
      <ParentCompo />
      <ShowAndHide />
      <Main />
      <Dummy />
    </div>
  );
}

export default App;
