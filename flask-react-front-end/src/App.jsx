import { useState } from "react";
import Navigation from "./components/Navigation";
import GetMethodRender from "./components/methods/GetMethod";
import PostMethodRender from "./components/methods/PostMethod";
import Container from "./components/Container";

function App() {
  const [ method, setMethod ] = useState("");

  return (
    <div className="container-main">
      <Navigation setMethod={ setMethod }/>
      <Container currentMethod={ method }>
        {
          method === "GET" ? <GetMethodRender /> :
          method === "POST" ? <PostMethodRender /> :
          <h1>Click buttons from above</h1>
        }
      </Container>
    </div>
  )
};

export default App;
