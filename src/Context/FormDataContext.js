import React, { createContext, useState } from "react";

export const FormDataContext = createContext();

// This context provider is passed to any component requiring the context
export const FormDataContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userInfo: {
      basicInfo: {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
      },
      education: {
        fieldOfStudy: "",
        qualification: "",
        institution: "",
        address: "",
        graduationDate: "",
      },
      workExp: {
        employer: "",
        address: "",
        jobTitle: "",
        duty: "",
        startDate: "",
        endDate: "",
      },
      reference: {
        fullName: "",
        fieldOfStudy: "",
        qualification: "",
        address: "",
      },
    },
  });
  return (
    <FormDataContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
