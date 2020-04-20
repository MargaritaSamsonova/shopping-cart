import React, {useEffect} from 'react';
import './App.css';
import VisibleProductsList from "../../containers/VisibleProductsList";
import CalculationCurrentOrder from "../../containers/CalculationCurrentOrder";
import FilterSizes from "../../containers/FilterSizes";
import Sorting from "../../containers/Sorting";

export function App() {
    return (
        <div className="App">
            <header>
                <nav className="navbar">
                    <div className="container">Я ❤ футболки</div>
                </nav>
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
