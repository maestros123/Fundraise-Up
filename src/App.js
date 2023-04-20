import './App.css';
import {Search} from "./components/search/search";
import {Donation} from "./components/information/donation";
import {Controls} from "./components/controls/controls";
import {Settings} from "./components/settings/settings";

function App() {
    return (
        <div className="App">
            <div className="container"><Search/></div>
            <div className="container">
                <div className="container__main">
                    <Donation/>
                    <Settings />
                </div>
                <div className="container__aside"><Controls/></div>


            </div>

        </div>
    );
}

export default App;
