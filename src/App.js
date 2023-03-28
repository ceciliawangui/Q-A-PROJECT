import Home from './components/Home';
import AskQUestion from './components/AskQUestion';
import Profile from './components/Profile';
import Question from './components/Question';
import SingleQuestion from './components/SingleQuestion';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/askquestion" element={<AskQUestion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/singlequestion" element={<SingleQuestion />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;