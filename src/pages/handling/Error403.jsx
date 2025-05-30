import React from "react";
import ErrorPage from "./ErrorPage";
import sadFaceImg from "../../assets/img/sad-image.png";

export default function Error403() {
  return (
    <ErrorPage code="403" image={sadFaceImg}>
      <h1 className="text-2xl font-bold mb-4">Forbidden!</h1>
      <p className="text-sm text-gray-700 mb-4">
        You don’t have permission to access this page.
      </p>
    </ErrorPage>
  );
}
