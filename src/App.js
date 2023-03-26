import CardList from "./CardList/CardList";
import { useState, useRef } from "react";
import "./styles.css";
import FilterInput from "./FilterInput/FilterInput";
import Modal from "./Modal/Modal";
import Button from "./Layout/Button";
import AddUser from "./AddUser/AddUser";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const inputEl = useRef(null);
  const [boyslist, setBoysList] = useState([
    {
      id: 1,
      name: "Aref",
      age: 47,
      sex: "male"
    },
    {
      id: 2,
      name: "Salah",
      age: 35,
      sex: "male"
    },
    {
      id: 3,
      name: "Alia",
      age: 22,
      sex: "female"
    },
    {
      id: 4,
      name: "Salwa",
      age: 42,
      sex: "female"
    },
    {
      id: 5,
      name: "Hanan",
      age: 22,
      sex: "female"
    },
    {
      id: 6,
      name: "Sara",
      age: 42,
      sex: "female"
    }
  ]);

  const onAddUserHandler = (data) => {
    //alert(data.name);
    setBoysList((prev) => {
      return [...prev, data];
    });
  };
  const [filter, setFilter] = useState("");

  const filterName = (name) => {
    setFilter(name);
  };

  const filterHandler = () => {
    if (filter.length > 0) {
      return boyslist.filter((el) => el.name.includes(filter));
    }
    return boyslist;
  };
  function handleInputChange() {
    console.log(inputEl.current.value);
  }
  function handleOnClick() {
    setToggleCard(!toggleCard);
  }
  function deleteHandler(e, selected) {
    const deleteOp = boyslist.filter((person) => person.id !== selected);
    setBoysList(deleteOp);
  }

  const [toggleCard, setToggleCard] = useState(true);

  return (
    <div className="App">
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <AddUser
          onAddUser={onAddUserHandler}
          closeModal={() => setShowModal(false)}
        />
      </Modal>
      <h1>Cards</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleOnClick} style={{ marginRight: "20px" }}>
          {toggleCard ? "Hide Cards" : "Show Cards"}
        </Button>
        <Button onClick={() => setShowModal(true)} className="button">
          New Record
        </Button>
      </div>
      <div className={toggleCard ? "show" : "hide"}>
        <FilterInput filteration={filterName} />
        <CardList nameList={filterHandler()} deleteFunc={deleteHandler} />
      </div>
    </div>
  );
}
