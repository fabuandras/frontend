export default function Tanuloszoba({ szoba, helyetFoglal }) {
    const szabadHelyek = szoba.ferohely - szoba.foglalt_helyek;
                const teleVan = szabadHelyek <= 0;

                return (
                    <div className="col-12 col-md-6 col-lg-4" key={szoba.id}>
                        <div className={`card h-100 shadow-sm p-3 border-2 ${teleVan} ? 'border-danger bg-light' : 'border-success'}`}>
                            {teleVan && (
                                <div className="badge bg-danger text-uppercase mb-2 p-2 fs-6">
                                    Megtelt
                                </div>
                            )}

                            <h4 className="fw-bold text-dark">{szoba.szoba_nev}</h4>
                            <p className="text-muuted small mb-3">{szoba.szobatipus?.tipus_nev}</p>
                            <hr />

                            <div className="d-flex justify-content-between mb-2">
                                <span>ID:</span>
                                <span className="fw-bold">{szoba.id}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Szobatípus:</span>
                                <span className="fw-bold">{szoba.szobatipus?.tipus_nev}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Emelet:</span>
                                <span className="fw-bold">{szoba.emelet}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Férőhely:</span>
                                <span className="fw-bold">{szoba.ferohely} fő</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Foglalt helyek:</span>
                                <span className="fw-bold">{szoba.foglalt_helyek} fő</span>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                                <span>Szabad helyek:</span>
                                <span className={`fw-bold ${szabadHelyek > 0 ?  'text-success' : 'text-danger'}`}>
                                    {szabadHelyek} fő
                                </span>
                            </div>

                            <button className={`mt-auto btn ${teleVan ?  'btn-secondary' : 'btn-primary'}`}disabled={teleVan}onClick={() => helyetFoglal(szoba.id)}
                        >
                            {teleVan ? 'Nincs szabad hely' : 'Helyet foglalok'}
                        </button>
                    </div>
                </div>
                );
}