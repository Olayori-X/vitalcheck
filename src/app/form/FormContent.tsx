"use client";

import React, { useState } from "react";
import { useProcessContext } from "@/app/context/ProcessContext";
import StepOne from "./bp";
import StepTwo from "./pulserate";
import StepThree from "./feeling";
import ProcessingPage from "./processing";
import { useRouter } from "next/navigation";
import Result from "./Result";

const FormContent = () => {
  const { currentStep, goToNextStep } = useProcessContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult]= useState<boolean>(false);
  const [selectedBP, setSelectedBP] = useState<string>("");
  const [selectedPR, setSelectedPR] = useState<string>("");
  const [selected, setSelected] = useState<string>("");

  const router = useRouter();

  const restartAssessment = () => {
    router.push("/");
    setResult(false);
    setSelectedBP("");
    setSelectedPR("");
    setSelected("");
  };

  const startLoading = () => {
    setLoading(true);
    console.log(selectedBP);
    // simulate async work
    setTimeout(() => {
      setLoading(false);
    }, 10000);
    setResult(true);
  };

  const calculateResult = () => {
    if (selectedBP === 'high' && selectedPR === 'high' && selected === 'weak') {
        return 'Admit to Emergency Ward';
    }
    if (selectedBP === 'high' && selectedPR === 'low' && selected === 'very_weak') {
        return 'Admit to Emergency Ward';
    }
    if (selectedBP === 'low' && selectedPR === 'low' && selected === 'weak') {
        return 'Admit to Intensive Care Unit (ICU)';
    }
    if (selectedBP === 'normal' && selectedPR === 'low' && selected === 'weak') {
        return 'Bed rest with energetics';
    }
    if (selectedBP === 'normal' && selectedPR === 'normal' && selected === 'weak') {
        return 'Bed rest with energetics';
    }
    if (selectedBP === 'high' && selectedPR === 'normal' && selected === 'okay') {
        return 'Bed rest';
    }
    if (selectedBP === 'normal' && selectedPR === 'high' && selected === 'okay') {
        return 'Admit medication and allow to go to work';
    }
    
    // Default case for other combinations
    return 'Consult with healthcare provider for further evaluation';
  }

  if (currentStep === 1 && !loading && !result)
    return <StepOne nextPage={goToNextStep} selectedBP={selectedBP} setSelectedBP={setSelectedBP} />;
  if (currentStep === 2 && !loading && !result) 
    return <StepTwo nextPage={goToNextStep} selectedPR={selectedPR} setSelectedPR={setSelectedPR} />;
  if (currentStep === 3 && !loading && !result) 
    return <StepThree nextPage={startLoading} selected={selected} setSelected={setSelected} />;
  if (loading) return <ProcessingPage />;
  if(result) return <Result result={calculateResult()} restartAssessment={restartAssessment} />;



  return null;
};

export default FormContent;
