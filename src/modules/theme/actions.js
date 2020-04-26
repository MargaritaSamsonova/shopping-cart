import {createAction} from "redux-actions";

export const toggleTheme = createAction("TOGGLE_THEME");

export const THEMES = {
    LIGHT: "LIGHT",
    DARK: "DARK",
}
