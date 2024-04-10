// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
// import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <Button>Button</Button>

      {/* <p>{greetMsg}</p> */}
    </div>
  );
}

export default App;
