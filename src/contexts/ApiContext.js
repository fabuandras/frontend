import { createContext, useState, useEffect } from "react";
import axios from '../api/axios';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [tanuloszobak, setTanuloszobak] = useState([]);
    const [szobatipusok, setSzobatipusok] = useState([]);
    const [valasztottTipus, setValasztottTipus] = useState("all");

    const adatokLekerese = async () => {
        try {
            const resSzobak = await axios.get('/tanuloszobak');
            setTanuloszobak(resSzobak.data);

            const resTipusok = await axios.get('/szobatipusok');
            setSzobatipusok(resTipusok.data);
        } catch (err) {
            console.error("Hiba az adatok lekérdezésekor", err);
        }
    };

    useEffect(() => {
        adatokLekerese();
    },  []);

    const helyetFoglal = async (id) => {
        try {
            await axios.put('/tanuloszobak/>${id}');
            adatokLekerese();
        } catch (err) {
            console.error("Hiba a foglalás során", err);
        }
    };

    const szurtSzobak = valasztottTipus === "all"
        ? tanuloszobak
        : tanuloszobak.filter(szoba => szoba.szobatipus_id === parseInt(valasztottTipus));
    
    return (
        <ApiContext.Provider value={{ szurtSzobak, szobatipusok, valasztottTipus, setValasztottTipus, helyetFoglal }}>
            {children}
        </ApiContext.Provider>
    );
};