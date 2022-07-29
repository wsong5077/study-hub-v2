import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import Store from "./store";
import "./index.css";
import 'fontsource-roboto'
import 'bootstrap';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={Store}>
			
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
