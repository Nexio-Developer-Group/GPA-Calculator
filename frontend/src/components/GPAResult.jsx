const CGPAResult = ({ subjects }) => {
    const gradePointsMap = { "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5, "F": 0 };
  
    const calculateCGPA = () => {
      let totalPoints = 0;
      let totalCredits = 0;
      document.querySelectorAll("input[type='text']").forEach((input, index) => {
        const grade = input.value.toUpperCase();
        if (gradePointsMap[grade] !== undefined) {
          totalPoints += gradePointsMap[grade] * subjects[index].subject_cred;
          totalCredits += subjects[index].subject_cred;
        }
      });
  
      return totalCredits ? (totalPoints / totalCredits).toFixed(2) : "N/A";
    };
  
    return (
      <div className="container text-center">
        <h2>Your GPA</h2>
        <h1>{calculateCGPA()}</h1>
      </div>
    );
  };
  
  export default CGPAResult;
  