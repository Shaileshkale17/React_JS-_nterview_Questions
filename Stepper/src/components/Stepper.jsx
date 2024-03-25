import React, { useEffect, useRef, useState } from "react";

const ChackoutStrpper = ({ steperConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [iscomplete, setIscompete] = useState(false);
  const [margin, setmargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);
  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (steperConfig.length - 1)) * 100;
  };

  useEffect(() => {
    setmargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[steperConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef]);
  console.log(margin);
  const haedeNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === steperConfig.length) {
        setIscompete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };
  const ActionComponent = steperConfig[currentStep - 1]?.Component;

  if (!steperConfig) {
    return <></>;
  }
  return (
    <>
      <div className="stepper">
        {steperConfig.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={`step ${
              currentStep > index + 1 || iscomplete ? " complete " : ""
            }${currentStep === index + 1 ? " active " : ""}`}>
            <div className="step-number">
              {currentStep > index + 1 || iscomplete ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
      </div>

      <div
        className="progress-bar"
        style={{
          width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
          marginLeft: margin.marginLeft,
          marginRight: margin.marginRight,
        }}>
        <div
          className="progress"
          style={{ width: `${calculateProgressBarWidth()}%` }}></div>
      </div>
      <div className="steptext">
        <h2>
          <ActionComponent />
        </h2>
        {!iscomplete && (
          <button className="btn" onClick={haedeNext}>
            {currentStep === currentStep.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </>
  );
};

export default ChackoutStrpper;
