const parent= React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement(
        "div",
     {id:"child1"},
     [React.createElement("h1", {},"im a h1 tag"),
     React.createElement("h2", {},"im a h2 tag")]   //we want to add sibling then we can make a array of children
    ),
    React.createElement(
        "div",
     {id:"child2"},
     [React.createElement("h1", {},"im a new h1 tag"),
     React.createElement("h2", {},"im a new h2 tag")]   //we want to add sibling then we can make a array of children
    )]
);
//   const heading = React.createElement(
//     "h1",
//     {id:"h1", xyz:"abc"},
//     "Hello from react!"
//     );
  console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);