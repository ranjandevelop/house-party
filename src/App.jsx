import React, { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetEvent from "./pages/SetEvent";
import HostEvent from "./pages/HostEvent";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="signin"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="signup"
              element={<Signup setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="host-event"
              element={<SetEvent setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="event-request"
              element={<HostEvent setIsLoggedIn={setIsLoggedIn} />}
            />
            {/* <Route path="/posts/:id" element={<DetailEvent />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
