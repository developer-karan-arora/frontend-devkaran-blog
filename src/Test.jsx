import React from "react";

function Test(props) {
    console.table(JSON.parse(localStorage.getItem("userDetail")));
  return <div>
    Test
  </div>
}

export default Test;
