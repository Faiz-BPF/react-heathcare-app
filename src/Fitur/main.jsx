import { createRoot } from "react-dom/client";

import AddProduct from "./AddProduct";
import Container from "./Container";
import ShowProduct from "./ShowProduct";

import ShowDoctor from "./ShowDoctor";
import "./custom.css";
import "./tailwind.css";
import AddDoctor from "./AddDoctor";

createRoot(document.getElementById("root")).render(
  <div>
    <Container>
      <AddProduct />
      <br />
      <hr />
      <ShowProduct />
      <br />
      <AddDoctor />
      <br />
      <ShowDoctor/>
    </Container>
  </div>
);
