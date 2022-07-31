import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToyList(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    setToyList([...toyList, newToy])
  }

  function deleteToy(deletedToy){
    const updatedToyList = toyList.filter(toy => {
      return toy.id !== deletedToy.id
    })
    setToyList(updatedToyList)
  }

  function handleUpdateLikes(updatedToy) {
    const updatedToyList = toyList.map(toy => {
      if(toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
    setToyList(updatedToyList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} onDeleteToy={deleteToy} onUpdateLikes={handleUpdateLikes}/>
    </>
  );
}

export default App;
