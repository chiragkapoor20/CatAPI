import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import Classcomp from './classcomp';


const root=ReactDOM.createRoot(document.getElementById('container'));

root.render(
    <React.StrictMode>
   <App></App>

   <Classcomp></Classcomp>
    </React.StrictMode>
);