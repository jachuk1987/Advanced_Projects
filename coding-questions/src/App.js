import logo from './logo.svg';
import './App.css';

import UserInput from './Components/UserInput';
import User from './Components/User';
import ControlledUsers from './Components/ControlledUsers';
import DisplayDynamicData from './Components/1.DisplayDynamicData';
import ParentComponent from './Components/2.ParentComponent';
import ParentCompo from './Components/3.ParentCompo';
import ArrayOfArray from './Components/8.ArrayofArray';
import ArrayOfObjects from './Components/8.ArrayOfObjects';
import ShowAndHide from './Components/11.ShowAndHide';
import RadioArray from './Components/12.RadioArray';
import RadioObjectArray from './Components/12.RadioObjectArray';
import RadioButton from './Components/13.RadioButton';
import SearchInput from './Components/19.SearchFilter';
import CounterWithUseState from './Components/20.CounterUseState';
import CounterWithReducer from './Components/21.CounterUseReducer';
import Main from './30.ContextAPI/Main';
import Dummy from './Components/37.Dummy';
import PaginationComponents from './Components/40.Pagination';

function App() {
  return (
    <div className="App">
      <UserInput />
      <ControlledUsers />
      <User />
      <DisplayDynamicData />
      <ParentComponent />
      {/* <ParentCompo /> */}
      <ArrayOfArray />
      <ArrayOfObjects />
      <ShowAndHide />
      <RadioArray />
      <RadioObjectArray />
      <RadioButton />
      <SearchInput />
      <CounterWithUseState />
      <CounterWithReducer />
      <Main />
      <Dummy />
      <PaginationComponents />
    </div>
  );
};

export default App;
