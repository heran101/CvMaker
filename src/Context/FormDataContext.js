import React, { createContext, useState } from "react";

export const FormDataContext = createContext();

// This context provider is passed to any component requiring the context
export const FormDataContextProvider = ({ children }) => {
  const [selectedStep, setSelectedStep] = useState();
  return (
    <FormDataContext.Provider
      value={{
        selectedStep,
        setSelectedStep,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
