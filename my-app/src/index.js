import * as serviceWorker from "./serviceWorker";
import state, { subscribe } from './redux/state'
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";


let rerenderEntireTree = (state) => {
    
ReactDOM.render(
  <App state = {state} addPost={addPost} updateNewPostText={updateNewPostText} />,
  document.getElementById("root")
);
}

subscribe(rerenderEntireTree)

rerenderEntireTree(state);
serviceWorker.unregister();
