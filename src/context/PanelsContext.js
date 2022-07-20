import React, { useState, useEffect } from "react";

export const PanelsContext = React.createContext();

const PanelsStore = ({ children }) => {
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await fetch("/panels.json", {
          "Content-Type": "application/json",
          Accept: "application/json",
        });
        let res = await resp.json();
        setPanels(res);
      } catch (err) {
        console.log("Err happened -", err);
      }
    };
    fetchData();
  }, []);
  return (
    <PanelsContext.Provider value={[panels, setPanels]}>
      {children}
    </PanelsContext.Provider>
  );
};
export default PanelsStore;
