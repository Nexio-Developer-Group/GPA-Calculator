import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <div className="row justify-content-center">
        {/* Card 1 - Check Results */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-file-earmark-text-fill fs-1 text-primary"></i>
              <h5 className="card-title">Check Results</h5>
              <p className="card-text">View your exam or test results.</p>
              <Link to="/check-results" className="btn btn-primary">
                Go to Results
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 - GPA Calculator */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-calculator-fill fs-1 text-success"></i>
              <h5 className="card-title">GPA Calculator</h5>
              <p className="card-text">Calculate your GPA easily.</p>
              <Link to="/gpa-calculator" className="btn btn-success">
                Go to Calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 - Resume Maker */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-file-earmark-person-fill fs-1 text-warning"></i>
              <h5 className="card-title">Resume Maker</h5>
              <p className="card-text">Create a professional resume.</p>
              <Link to="/resume-maker" className="btn btn-warning">
                Create Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
