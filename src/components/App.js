import React, { useState } from "react";
import Resume from "./Resume/Resume";
import { Context } from "./Context";
import Admin from "./Admin/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "../styles/App.css";

function App() {
  const [context, setContext] = useState(0);
  const name = "Lutti Master";

  return (
    <Context.Provider value={[context, setContext]}>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Resume</Nav.Link>
              <Nav.Link href={`/admin/${name}`}>Admin</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" exact element={<Resume />} />
          <Route path="/admin/:name" element={<Admin />} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
