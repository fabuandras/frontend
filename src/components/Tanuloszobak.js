import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import Tanuloszoba from "./Tanuloszoba";

export default function Tanuloszobak() {
    const { szurtSzobak, szobatipusok, valasztottTipus, setValasztottTipus, helyetFoglal } = useContext(ApiContext);
    
    return (
        <div className="container mt-4 mb-5" style={{ maxWidth: '1100px' }}>

            <div className="card text-center p-4 mb-4 shadow sm ng-light border-primary">
                <h2 className="fw-bold">TANULÓSZOBÁK NEKED</h2>
                <p className="text-muted mb-0">Találd meg a számodra megfelelő tanulóhelyet!</p>
            </div>

            <div className="mb-4 card p-3 shadow-sm">
            <label className="form-label fw-bold">Szobatípus:</label>
            <select className="form-select"
            value={valasztottTipus}
            onChange={(e) => setValasztottTipus(e.target.value)}>
                <option value="all">Összes típus</option>{szobatipusok.map(tipus => (
                    <option key={tipus.id} value={tipus.id}>{tipus.tipus_nev}</option>
                ))}
            </select>
        </div>

        <div className="row g-4">
            {szurtSzobak.map(szoba => (
                <Tanuloszoba key={szoba.id} szoba={szoba} helyetFoglal={helyetFoglal} />
            ))}
        </div>
    </div>
    );
}