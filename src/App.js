import { useState } from "react";
import "./App.css";
import menus from "./data/menus";
import TreeView from "./components/TreeView";

function App() {
  return (
    <>
      <h1>TreeView Using JSON</h1>
      <TreeView menus={menus} />
    </>
  );
}

export default App;
