import React, { useEffect, useState } from "react";

import "./App.css";
import Table from "./components/Table";
import { words } from "./constants/wordsList";

export const WordleContext = React.createContext();

function App() {
    const [word, setWord] = useState("");

    useEffect(() => {
        async function fetchWord() {
            // const url = "https://wordle-game-api1.p.rapidapi.com/word";
            // const options = {
            //     method: "GET",
            //     headers: {
            //         "X-RapidAPI-Key":
            //             "067c0c9bc9msh1307ab7b04d3ac3p1817d5jsn7483b7209114",
            //         "X-RapidAPI-Host": "wordle-game-api1.p.rapidapi.com",
            //     },
            // };
            // try {
            //     const response = await fetch(url, options);
            //     const result = await response.json();
            //     setWord(result.word.toUpperCase());
            //     console.log(result);
            // } catch (error) {
            //     console.error(error);
            // }
            setWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
        }

        fetchWord();
    }, []);

    return (
        <div onMouseDown={(e) => e.preventDefault()} className="App">
            <WordleContext.Provider value={word}>
                <Table />
            </WordleContext.Provider>
        </div>
    );
}

export default App;
