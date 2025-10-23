import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Homepage from "./component/Homepage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <nav style={{ marginBottom: "1rem" }}>
        {/* 👇 các link điều hướng */}
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        {/* 👇 khi vào path "/" thì render Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* 👇 thêm route test */}
        <Route
          path="/about"
          element={
            <div style={{ textAlign: "center" }}>
              <h2>Vite + React</h2>
              <div className="card">
                <button onClick={() => setCount((c) => c + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
