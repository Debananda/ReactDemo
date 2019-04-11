import React from "react";

export default function Loader({ show }) {
  return show === true ? <div className="loader" /> : null;
}
