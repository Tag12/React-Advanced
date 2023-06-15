import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./pages/Introduction";
import Team from "./pages/Team";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserItem";
import Login from "./components/Login";
import { useSelector } from 'react-redux';


const App = () => {
  const users = useSelector((state) => state.users);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Introduction />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
        <UserList users={users} />
      </div>
    </Router>
  );
}

export default App;
