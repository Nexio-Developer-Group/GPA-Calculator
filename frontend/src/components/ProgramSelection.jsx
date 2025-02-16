const ProgramSelection = ({ department, data, onSelect }) => {
    const programs = [
      ...new Set(data.filter((item) => item.department === department).map((p) => p.program)),
    ];
  
    return (
      <div className="container text-center">
        <h2>Select Your Program</h2>
        {programs.map((program) => (
          <button
            key={program}
            className="btn btn-success m-2"
            onClick={() => onSelect(program)}
          >
            {program}
          </button>
        ))}
      </div>
    );
  };
  
  export default ProgramSelection;
  