import React from "react";
import NoResultImage from "./assets/noresults.svg";
export default function NoResults() {
  return (
    <div className="text-center my-3">
      <h3 style={{ color: "#545454" }}>
        No Results Found{" "}
        {this.props.query ? "for '" + this.props.query + "'" : ""}
      </h3>
      <img
        src={NoResultImage}
        style={{ maxWidth: "100%", height: "calc(100vh - 100px)" }}
      />
    </div>
  );
}
