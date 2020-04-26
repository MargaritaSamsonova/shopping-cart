import {handleActions} from "redux-actions";
import {
    THEMES, toggleTheme
} from "./actions";
import {combineReducers} from "redux";

const theme = handleActions({
    [toggleTheme]: (state, action) => action.payload,
}, THEMES.LIGHT);

export default combineReducers({
    theme,
});
