import * as React from "react";
import "./App.css";
import config from './config';

function App() {
  console.log(`${config.GOOGLE_CLIENT_ID}`)

  return (
    <div className="container">
      <p>Kitchen Sink</p>
    </div>
  );
}

export default App;
