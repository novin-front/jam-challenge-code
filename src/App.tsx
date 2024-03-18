import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/pages/Dashboard";
import Loing from "./screens/pages/Login";
import NotFound from "./screens/pages/NotFound";
import Home from "./screens/pages/Home/index";
import { userReducer, initialState } from "./services/contexts";
export const userContext = React.createContext({});
function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Loing />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
