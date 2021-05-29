import React, { useState } from "react";
import Page from "./components/Page";
import "./CSS/App.css";

function App() {
  const [page, setPage] = useState("Characters");

  function handleChange(page) {
    setPage(page);
  }

  return <Page page={page} onChange={handleChange} />;
}

export default App;
