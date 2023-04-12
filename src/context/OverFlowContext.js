import React, { useEffect, useState } from "react";
const OverFlowContext1 = React.createContext();
export const OverFlowContext = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overflowData, setOverFlowData] = useState([]);
  return (
    <div>
      <OverFlowContext1.Provider
        value={{ showOverlay, setShowOverlay, overflowData, setOverFlowData }}
      >
        {props.children}
      </OverFlowContext1.Provider>
    </div>
  );
};

export default OverFlowContext1;
