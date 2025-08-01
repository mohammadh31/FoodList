import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CategoryI from "./components/CategoryI";
import ItemsList from "./components/ItemsList";
import { items } from "./dataI";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);

  // get all category unique
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  console.log(allCategory);

  // filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  // filter by search form
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <CategoryI
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
