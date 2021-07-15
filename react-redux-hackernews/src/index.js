import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { getReadableStories} from "./selectors/story";
import {STORY_ARCHIVE} from "./constants/actionTypes";
import {doArchiveStory} from "./actions/archive";


function render() {
    ReactDOM.render(
        <React.StrictMode>
            <App
                stories={getReadableStories(store.getState())}
                onArchive={id => store.dispatch(doArchiveStory(id))}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
store.subscribe(render);
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
