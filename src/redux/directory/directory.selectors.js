import { createSelector } from 'reselect';

//Input selector: A selector that takes the whole state, but only gives us part of it.
const selectDirectory = state => state.directoryReducer;

//Output selector where we output the value we selected
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directoryReducer => directoryReducer.sections
)