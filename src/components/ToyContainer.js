import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toyList, onDeleteToy, onUpdateLikes} ) {

const toysToDisplay = toyList.filter(toy => {return true})

  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      { toysToDisplay.map(toy => { return <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onUpdateLikes={onUpdateLikes}/> }) }
    </div>
  );
}

export default ToyContainer;
