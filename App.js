const heading = React.createElement("h1", { id: "heading", abc: "xyz" }, "Hello world from react !");

console.log(heading);//object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//  React element= pure javascript object...
