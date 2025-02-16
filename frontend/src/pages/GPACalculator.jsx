import { useState } from "react";
import DepartmentSelection from "../components/DepartmentSelection";
import ProgramSelection from "../components/ProgramSelection";
import MinorSelection from "../components/MinorSelection";
import SemesterSelection from "../components/SemesterSelection";
import SubjectSelection from "../components/SubjectSelection";
import OptionalSubjectsSelection from "../components/OptionalSubjectsSelection";
import CGPAResult from "../components/GPAResult";
import "bootstrap/dist/css/bootstrap.min.css";

const GPACalculator = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [ubpmData, setUbpmData] = useState([]);

  return (
    <div>
      {step === 1 && <DepartmentSelection onSelect={(dept) => setStep(2)} />}
      {step === 2 && <ProgramSelection department={data.department} data={ubpmData} onSelect={(prog) => setStep(3)} />}
      {step === 3 && <MinorSelection program={data.program} data={ubpmData} onSelect={(minor) => setStep(4)} />}
      {step === 4 && <SemesterSelection onSelect={(sem) => setStep(5)} />}
      {step === 5 && <SubjectSelection ubpmId={data.ubpmId} semester={data.semester} onNext={(subjects) => setStep(6)} />}
      {step === 6 && <CGPAResult />}
    </div>
  );
};

export default GPACalculator;
