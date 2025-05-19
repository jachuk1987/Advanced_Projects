import logo from './logo.svg';
import './App.css';
import StudentData from './Components/Student';
// import StudentData from './Components/ClassComponent';
import Welcome from './Components/1.WelcomeToReact';
import Counter from './Components/2.Counter';
import Greeting from './Components/3.Greeting';
import Timer from './Components/4.Timer';
import UserCard from './Components/5.UserCard';
import Toggle from './Components/6.Toggle';
import InputField from './Components/7.InputField';
import LoginStatus from './Components/8.LoginStatus';
import Header from './Components/9.Header';
import Profile from './Components/10.Profile';
import ClickCounter from './Components/11.ClickCounter';
import Form from './Components/12.Form';
import Clock from './Components/13.Clock';
import ShowHide from './Components/14.ShowHide';
import Avatar from './Components/15.Avatar';
import ColorChanger from './Components/16.ColorChanger';
import TodoList from './Components/17.TodoList';
import AppComp from './Components/18.AppComp';
import Parent from './Components/19.Parent';
import Container from './Components/20.Container';

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
      <Profile />
      <ClickCounter />
      <Form />
      <Clock />
      <ShowHide />
      <Avatar />
      <ColorChanger />
      <TodoList />
      <AppComp />
      <Parent />
      <Container />
    </div>
  );
}

export default App;
