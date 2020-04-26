import React, {useEffect} from 'react';
import './App.css';
import VisibleProductsList from "../../containers/VisibleProductsList";
import CalculationCurrentOrder from "../../containers/CalculationCurrentOrder";
import FilterSizes from "../../containers/FilterSizes";
import Sorting from "../../containers/Sorting";
import Switcher from "../../containers/Switcher";
import {titleMain, iconHeart} from "./TitleMain.module.css";

export function App() {
    useEffect(() => {
        document.body.classList.add("theme-light");
    }, []);

    return (
        <div>
            <header className="header">
                <div className="container">
                    <h2 className={titleMain}>
                        Я <span className={iconHeart}>♡</span> футболки
                    </h2>
                </div>
                <div className="header-switcher">
                    <Switcher/>
                </div>
            </header>
            <div className="container">
                <div className="content">
                    <main className="main col">
                        <div className="main-header">
                            <div className="main-header__col">
                                <FilterSizes/>
                            </div>
                            <div className="main-header__col">
                                <Sorting/>
                            </div>
                        </div>
                        <VisibleProductsList/>
                    </main>
                    <aside className="sidebar card col">
                        <CalculationCurrentOrder/>
                    </aside>
                </div>
            </div>
        </div>
    );
}
