import {takeEvery,all} from 'redux-saga/effects';
import {STORIES_FETCH} from '../constants/actionTypes';
import {handleFetchStories} from './story';

function *watchAll(){
    yield all([
        takeEvery()
    ])
}

export default watchAll;
