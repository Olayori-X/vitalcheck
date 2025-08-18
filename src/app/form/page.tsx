"use client";

import React from "react";
import { ProcessProvider } from "@/app/context/ProcessContext";
import FormContent from "./FormContent"; // move your current Form code into FormContent.tsx

export default function FormPage() {
  return (
    <ProcessProvider>
      <FormContent />
    </ProcessProvider>
  );
}
