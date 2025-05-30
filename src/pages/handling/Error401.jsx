import React from "react";
import ErrorPage from "./ErrorPage";
import sadFaceImg from "../../assets/img/sad-image.png";

export default function Error401() {
  return (
    <ErrorPage code="401" image={sadFaceImg}>
      <h1 className="text-2xl font-bold mb-4">Unauthorized!</h1>
      <p className="text-sm text-gray-700 mb-4">
        You must be logged in to access this page.
      </p>
    </ErrorPage>
  );
}
