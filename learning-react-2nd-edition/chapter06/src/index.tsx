import React from "react";
import ReactDOM from "react-dom/client";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import ColorProvider from "./ColorProvider";

function App() {
    return (
        <>
            <AddColorForm />
            <ColorList />
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <ColorProvider>
        <App />
    </ColorProvider>
);