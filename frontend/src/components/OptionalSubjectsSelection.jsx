import { useEffect, useState } from "react";
import axios from "axios";

const OptionalSubjectsSelection = ({ onApply }) => {
  const [optSubjects, setOptSubjects] = useState([]);

  useEffect(() => {
    axios.get("http://40.81.232.21:5000/api/opt-subjects").then((res) => {
      setOptSubjects(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Select Optional Subjects</h2>
      {optSubjects.map((subject) => (
        <div key={subject.opt_subject_id} className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={`opt-${subject.opt_subject_id}`}
            value={JSON.stringify(subject)}
          />
          <label className="form-check-label" htmlFor={`opt-${subject.opt_subject_id}`}>
            {subject.subject_name} ({subject.subject_cred} Credits)
          </label>
        </div>
      ))}
      <button className="btn btn-success mt-3" onClick={() => onApply(optSubjects)}>
        Apply
      </button>
    </div>
  );
};

export default OptionalSubjectsSelection;
