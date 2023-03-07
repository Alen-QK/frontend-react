import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import txtReducer from "./reducer/txtReducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={
            configureStore({
                reducer: {
                    txtR: txtReducer
                }
            })
        }>
            <App/>
        </Provider>
    </React.StrictMode>
);