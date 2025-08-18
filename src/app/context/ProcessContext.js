import React, { createContext, useContext, useState } from "react";

const ProcessContext = createContext();

export const useProcessContext = () => useContext(ProcessContext);

export const ProcessProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Add a reset function to always start from step 1
  const resetStep = () => setCurrentStep(1);

  return (
    <ProcessContext.Provider
      value={{
        currentStep,
        goToNextStep,
        goToPreviousStep,
        setCurrentStep,
        resetStep, // export resetStep
      }}
    >
      {children}
    </ProcessContext.Provider>
  );
};
