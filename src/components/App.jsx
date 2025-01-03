import React from "react";
import Contact from "./Contact";
import Heading from "./Heading";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <Heading />
      <Avatar img="https://avatars.githubusercontent.com/u/79623004?v=4" />
      <Contact
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Contact
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Contact
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
