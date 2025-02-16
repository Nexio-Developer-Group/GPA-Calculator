import { useEffect, useState } from "react";
import axios from "axios";

const DepartmentSelection = ({ onSelect }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get("http://40.81.232.21:5000/api/ubpm").then((res) => {
      const uniqueDepartments = [
        ...new Set(res.data.map((item) => item.department)),
      ];
      setDepartments(uniqueDepartments);
    });
  }, []);

  return (
    <div className="container text-center">
      <h2>Select Your Department</h2>
      {departments.map((dept) => (
        <button
          key={dept}
          className="btn btn-primary m-2"
          onClick={() => onSelect(dept)}
        >
          {dept}
        </button>
      ))}
    </div>
  );
};

export default DepartmentSelection;
