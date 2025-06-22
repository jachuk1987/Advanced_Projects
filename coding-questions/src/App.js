import logo from './logo.svg';
import './App.css';

import UserInput from './Components/UserInput';
import User from './Components/User';
import ControlledUsers from './Components/ControlledUsers';
import DisplayDynamicData from './Components/1.DisplayDynamicData';
import ParentComponent from './Components/2.ParentComponent';
import ParentCompo from './Components/3.ParentCompo';
import ShowAndHide from './Components/11.ShowAndHide';
import RadioButton from './Components/13.RadioButton';
import Main from './30.ContextAPI/Main';
import Dummy from './Components/37.Dummy';
import ArrayOfObject from './Components/8.ArrayofObject';
import SearchInput from './Components/19.SearchFilter';

function App() {
  return (
    <div className="App">
      <UserInput />
      <ControlledUsers />
      <User />
      <DisplayDynamicData />
      <ParentComponent />
      {/* <ParentCompo /> */}
      <ArrayOfObject />
      <ShowAndHide />
      <RadioButton />
      <SearchInput />
      <Main />
      <Dummy />
    </div>
  );
};

export default App;
