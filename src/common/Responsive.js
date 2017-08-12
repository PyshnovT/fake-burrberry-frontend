import React from "react";
import Responsive from "react-responsive";

const Lg = ({ children }) => <Responsive minWidth={992} children={children} />;
const Default = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;
const Mobile = ({ children }) =>
  <Responsive maxWidth={767} children={children} />;

// const Sm = ({ children }) => <Responsive minWidth={320} children={children} />;
// const Sm = ({ children }) => <Responsive minWidth={576} children={children} />;
// const Md = ({ children }) => <Responsive minWidth={768} children={children} />;
// const Lg = ({ children }) => <Responsive minWidth={992} children={children} />;
// const Xl = ({ children }) => <Responsive minWidth={1200} children={children} />;

export { Lg, Default, Mobile };
