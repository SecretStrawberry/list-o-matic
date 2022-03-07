import Header from "./components/Header";
import ListOfLists from "./components/ListOfLists";
import AddNewList from "./components/AddNewList";

import { IoAdd } from "react-icons/io5";

import "./App.scss";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <div className="App">
      <Header />
      <ListOfLists />
      <AddNewList hideShow={isActive ? "" : "hide"} />
      <button className="btnR buttonAdd" onClick={toggle}>
        <IoAdd />
      </button>
    </div>
  );
}

export default App;
