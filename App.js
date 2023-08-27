import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="main">
            <h2 className="main-header">React Crud Operations</h2>

            <Router>
                <Routes>
  
                    <Route exact path="/create" element={<Create />} />

                    <Route exact path="/read" element={<Read />} />

                    <Route path="/update" element={<Update />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
