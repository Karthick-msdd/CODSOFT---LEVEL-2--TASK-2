import { BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Home from "./pages/Home";
import jobs from "./pages/jobs";
import jobDetail from "./pages/jobDetail";
import EmployerDashboard from "./pages/EmployerDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import login from "./pages/Login";

export default function App() {
    return (

        <Router>
          <Routes>
          <Route path ="/" element={<Home />}/>
          <Route path ="/jobs" element={<jobs />}/>
          <Route path ="/jobs/:id" element={<jobdetail />}/>
          <Route path ="/employer" element={<Employerdashboard />}/>
          <Route path ="/candidate" element={<Candidatedashboard />}/>
          <Route path ="/Login" element={<Login />}/>
      </Routes>
    </Router>

    );
}
