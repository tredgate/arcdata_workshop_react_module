import React from "react";
import "./App.css";
import UserList from "./UserList"; // import the UserList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tredgate React Workshop</h1>
      </header>
      <main>
        <UserList /> {/* use the UserList component here */}
      </main>
    </div>
  );
}

export default App;
