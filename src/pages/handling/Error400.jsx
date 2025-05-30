import React from "react";
import ErrorPage from "./ErrorPage";
import sadFaceImg from "../../assets/img/sad-image.png";

export default function Error400() {
  return (
    <ErrorPage code="400" image={sadFaceImg}>
      <h1 className="text-2xl font-bold mb-4">Bad Request!</h1>
      <p className="text-sm text-gray-700 mb-4">
        Something went wrong with your request. Please check the data and try
        again.
      </p>
    </ErrorPage>
  );
}
