import React, { useEffect, useLayoutEffect } from "react";

function Test() {
  useEffect(() => {
    console.log("Use Effect Message");
  }, []);

  useLayoutEffect(() => {
    console.log("Use LayoutEffect Message");
  }, []);

  return (
  <>
  <h1>Test</h1>
  </>
  );
}

export default Test;
