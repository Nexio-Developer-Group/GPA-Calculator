const SemesterSelection = ({ onSelect }) => {
    return (
      <div className="container text-center">
        <h2>Select Your Semester</h2>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
          <button
            key={sem}
            className="btn btn-warning m-2"
            onClick={() => onSelect(sem)}
          >
            Semester {sem}
          </button>
        ))}
      </div>
    );
  };
  
  export default SemesterSelection;
  