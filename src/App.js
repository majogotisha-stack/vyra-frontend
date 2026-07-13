import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Processing from "./pages/Processing";
import Results from "./pages/Results";
import Report from "./pages/Report";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/processing"
          element={<Processing />}
        />

        <Route
          path="/results"
          element={<Results />}
        />
         <Route
          path="/report"
          element={<Report />}
          />

      </Routes>

    </BrowserRouter>
  );
}

export default App;