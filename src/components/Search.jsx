import React from "react";
//You added a destructuring example for an object (person) as a comment. This demonstrates destructuring, similar to how the props are handled in the Search component:
// const person = {
//   name: "Jon Smith",
//   location: "London",
//   Age: "25",
// };
// const { name, Age, location } = person;
// console.log(name);  //Jon Smith

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // e is event leaser in abbreviation
        />
      </div>
    </div>
  );
}

export default Search;
