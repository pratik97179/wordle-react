import React, { memo, useContext, useState } from "react";

import Row from "./Row";
import "./Table.css";
import { WordleContext } from "../App";
import Reset from "./Reset";

const inputs = [1, 2, 3, 4, 5];

const Table = () => {
    const word = useContext(WordleContext);
    const [activeInputRow, setActiveInputRow] = useState(-1);
    const [won, setWon] = useState();

    const changeActiveInputRow = (value) => {
        setActiveInputRow(value ?? activeInputRow + 1);
    };

    const handleSetWon = (value) => {
        setWon(value);
    };

    return (
        <div className="app__table">
            <div className="app__table-title">Wordle</div>

            {won !== undefined ? (
                <h3>
                    {won ? "You won" : "You lost :("}
                    <br />
                    Word: {word}
                </h3>
            ) : (
                <div />
            )}

            <div className="app__table-container-rows">
                {inputs.map((val, i) => (
                    <Row
                        key={val}
                        focus={activeInputRow === i}
                        changeActiveInputRow={changeActiveInputRow}
                        activeInputRow={activeInputRow}
                        handleSetWon={handleSetWon}
                    />
                ))}
            </div>
            {activeInputRow === -1 && (
                <div
                    className="app__table-container-text"
                    onClick={() => setActiveInputRow(0)}
                >
                    Tap to start
                </div>
            )}
            {/* <Reset /> */}
        </div>
    );
};

export default memo(Table);
