import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Register from "./page/Register";
import Reset from "./page/Reset";

const App = () => {

  return (
    <Router>
      <h1 className="text-5xl text-center font-black text-yellow-400">
        firebase
      </h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router >
  );
};

export default App;