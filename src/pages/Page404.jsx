import React from "react";
import tenor from "../images/tenor.gif";

const Page404 = () => {
  return (
    <section className="py-5 d-flex align-items-center flex-column container">
      <h1 style={{ color: "white" }}>404</h1>
      <img src={tenor} alt="404" style={{ maxWidth: "540px", width: "100%" }} />
      <h2 style={{ color: "white" }}>Page not found</h2>
    </section>
  );
};

export default Page404;
