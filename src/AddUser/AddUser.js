import React, { useState } from "react";
import Form from "../Layout/Form/Form";
import Button from "../Layout/Button";

const AddUser = ({ onAddUser, closeModal }) => {
  const onSubmitHanddler = (e) => {
    e.preventDefault();
    onAddUser({
      id: Math.round(Math.random() * 1000),
      name,
      age,
      sex
    });
    setName("");
    setage("");
    setSex("");
    closeModal();
  };

  // const [input, setInput] = useState({
  //   id: "",
  //   name: "",
  //   age: "",
  //   sex: ""
  // });
  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [sex, setSex] = useState("");

  // const onChangeHandler = (e) => {
  //   const key = e.target.id;
  //   const value = e.target.value;
  //   setInput((prevState) => {
  //     return {
  //       ...prevState,
  //       [key]: value
  //     };
  //   });
  // };
  return (
    <div>
      <Form onSubmit={onSubmitHanddler}>
        {/* <Form.Control>
          <label htmlFor="id">Id : </label>
          <input
            type="text"
            id="id"
            placeholder="Enter Id"
            value={id}
            // onChange={onChangeHandler}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Control> */}
        <Form.Control>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Control>
        <Form.Control>
          <label htmlFor="age">Age : </label>
          <input
            type="text"
            id="age"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />
        </Form.Control>
        <Form.Control>
          <label htmlFor="sex">Sex : </label>
          <input
            type="text"
            id="sex"
            placeholder="Enter Sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          />
        </Form.Control>
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <Button type="submit" style={{ marginRight: "10px" }}>
            Save
          </Button>
          <Button type="reset">Reset</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddUser;
