import React, {useState, useContext} from 'react';

const ValidationContext = React.createContext();

export const useValidationContext = () => useContext(ValidationContext);
export const ValidationContextProvider = ({children}) => {
  const [fieldPath, setFieldPath] = useState([]);
  const [completedIndex, setCompletedIndex] = useState([]);

  function setItem(path, indexArray) {
    setFieldPath(path);
    setCompletedIndex(indexArray);
  }

  function removeItem() {
    setFieldPath([]);
    setCompletedIndex([]);
  }

  return (
    <ValidationContext.Provider
      value={{
        fieldPath,
        completedIndex,
        setItem,
        removeItem,
      }}>
      {children}
    </ValidationContext.Provider>
  );
};
