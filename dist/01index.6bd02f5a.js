// const heading = React.createElement("h1", { id: "Heading" }, "Hello World !....React");
// // (elementName,{Atributes},"innerHtml/text")
// // React.createElement  creates a react Object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=01index.6bd02f5a.js.map
