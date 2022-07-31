import React, { useState } from "react";

function ToyForm( {onAddNewToy}) {
  const [formData, setFormData] = useState({
    name:"",
    image:"",
    likes: 0,
  })

  function handleChange(event) {
    console.log(event.target.value)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleNewToySubmit(event) {
    event.preventDefault()
    console.log(formData)
    fetch("http://localhost:3001/toys", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newToy => onAddNewToy(newToy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleNewToySubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
