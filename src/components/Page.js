import React from "react";
import Home from "./Home";
import Characters from "./Characters";

function Page(props) {
  function handleChange() {
    props.onChange();
  }

  switch (props.page) {
    case "Home":
      return <Home />;
    case "Characters":
      return <Characters />;
    default:
      return <div>Default</div>;
  }
}

export default Page;
