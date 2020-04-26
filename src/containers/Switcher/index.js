import React, {useEffect} from "react";
import styles from "./Switcher.module.css";
import {connect} from "react-redux";
import {getTheme, THEMES, toggleTheme} from "../../modules/theme";

const Switcher = ({theme, toggleTheme}) => {
    useEffect(() => {
        if (theme === THEMES.LIGHT) {
            document.body.classList.remove("theme-dark");
            document.body.classList.add("theme-light");
        } else {
            document.body.classList.remove("theme-light");
            document.body.classList.add("theme-dark");
        }
    });

    return (
        <label className={styles.switcher}>
            <input type="checkbox" className={styles.switcherInput}
                   onChange={(e) => (
                       e.target.checked ? toggleTheme(THEMES.DARK) : toggleTheme(THEMES.LIGHT)
                   )}/>
            <div className={styles.switcherBody}>
                <div className={styles.switcherToggle}></div>
            </div>
        </label>
    )
}

const mapStateToProps = (state) => ({
    theme: getTheme(state)
})

const mapDispatchToProps = {
    toggleTheme
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Switcher)
