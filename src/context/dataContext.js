import React, { useState, useEffect } from "react";
import { getMakemodel } from "../Api/Api";

const DataContext = React.createContext([{}, () => {}]);

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMakemodel().then(
      (res) => {
        setData(res?.data?.MakeModels);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
