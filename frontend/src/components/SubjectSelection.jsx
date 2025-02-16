import { useEffect, useState } from "react";
import axios from "axios";

const SubjectSelection = ({ ubpmId, semester, onNext }) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://40.81.232.21:5000/api/subjects/${ubpmId}/${semester}`)
      .then((res) => setSubjects(res.data));
  }, [ubpmId, semester]);

  return (
    <div className="container">
      <h2>Enter Your Grades</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.subject_name}</td>
              <td>{subject.subject_cred}</td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => onNext(subjects)}>
        Next
      </button>
    </div>
  );
};

export default SubjectSelection;
