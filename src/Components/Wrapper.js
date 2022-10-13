import React from "react";

const Wrapper = ( {children}) => {
    document.title="React Calculator";
    return ( 
        <div className="wrapper">{children}</div>
     );
}
 
export default Wrapper;