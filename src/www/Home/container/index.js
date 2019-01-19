import React from "react";
import { Helmet } from "react-helmet";

// type
type PropsType = {
  children: Object
};

const Container = ({ children }): PropsType => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Feedly</title>
      <link rel="canonical" href="http://feedly.com/" />
    </Helmet>
    {children}
  </div>
);

export default Container;
