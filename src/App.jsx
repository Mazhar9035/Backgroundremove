// import { useState } from "react";
// import Header from "./components/Header";
// import Home from "./components/Home";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Header />
//       <Home />
//     </>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Remove from "./components/Remove";
import Contact from "./components/Contact";
import About from "./components/About";

const Layout = ({ children }) => {
  const location = useLocation();

  // ✅ Always show header
  const showHeader = true;

  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/remove" element={<Remove />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
