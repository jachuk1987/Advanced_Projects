import logo from './logo.svg';
import './App.css';
import StudentData from './Components/Student';
import Welcome from './Components/1.WelcomeToReact';
import Counter from './Components/2.Counter';
import Greeting from './Components/3.Greeting';
import Timer from './Components/4.Timer';
import UserCard from './Components/5.UserCard';
import Toggle from './Components/6.Toggle';
import InputField from './Components/7.InputField';
import LoginStatus from './Components/8.LoginStatus';
import Header from './Components/9.Header';
// import StudentData from './Components/ClassComponent';

function App() {
  return (
    <div className="App">
      <StudentData />
      <Welcome />
      <Counter />
      <Greeting />
      <Timer />
      <UserCard />
      <Toggle />
      <InputField />
      <LoginStatus />
      <Header />
    </div>
  );
}

export default App;
