const MinorSelection = ({ program, data, onSelect }) => {
    const minors = [
      ...new Set(data.filter((item) => item.program === program).map((m) => m.minor)),
    ];
  
    return (
      <div className="container text-center">
        <h2>Select Your Minor</h2>
        {minors.map((minor) => (
          <button
            key={minor}
            className="btn btn-info m-2"
            onClick={() => onSelect(minor)}
          >
            {minor}
          </button>
        ))}
      </div>
    );
  };
  
  export default MinorSelection;
  