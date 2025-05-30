import React from "react";
import ErrorPage from "./ErrorPage";
import sadFaceImg from "../../assets/img/sad-image.png";

export default function Error404() {
  return (
    <ErrorPage code="404" image={sadFaceImg}>
      <h1 className="text-2xl font-bold mb-4">Oops!</h1>
      <p className="text-sm text-gray-700 mb-4">
        The page you’re looking for doesn’t exist or has been moved..
      </p>
    </ErrorPage>
  );
}
