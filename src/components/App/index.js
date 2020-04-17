import React, {useEffect} from 'react';
import './App.css';
import VisibleProductsList from "../../containers/VisibleProductsList";
import CalculationCurrentOrder from "../../containers/CalculationCurrentOrder";

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
