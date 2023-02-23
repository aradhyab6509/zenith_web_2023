import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/Demo";
// import Home2 from "./components/Parial/Home2";

ReactDOM.render(<Demo />, document.getElementById("root"));

// ReactDOM.render(<Header />, document.getElementById("Header"));
// ReactDOM.render(<Home />, document.getElementById("Home"));
// ReactDOM.render(<Footer />, document.getElementById("Footer"));

// ReactDOM.render(<Home2 />, document.getElementById("Home2"));


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
