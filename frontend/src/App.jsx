import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CheckResults from "./pages/CheckResults";
import GPACalculator from "./pages/GPACalculator";
import ResumeMaker from "./pages/ResumeMaker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>} />
      <Route path="/check-results" element={<CheckResults />} />
      <Route path="/gpa-calculator" element={<GPACalculator />} />
      <Route path="/resume-maker" element={<ResumeMaker />} />
    </Routes>
  );
}

export default App;
