import React, { memo, useContext, useEffect } from "react";
import "./Row.css";
import { WordleContext } from "../App";
import useRowLogic from "./useRowLogic";

const inputs = [1, 2, 3, 4, 5];

const Row = ({ focus, changeActiveInputRow, activeInputRow, handleSetWon }) => {
    const word = useContext(WordleContext);

    const {
        firstRef,
        activeInputIndex,
        handleKeyUp,
        focusInput,
        clearFunction,
    } = useRowLogic(changeActiveInputRow, activeInputRow, handleSetWon, word);

    useEffect(() => {
        if (focus) {
            focusInput(activeInputIndex);
        }
    }, [focus]);

    return (
        <div className="app__table-row">
            {inputs.map((val, i) => (
                <div className="row_container" key={val + 0.43}>
                    <input
                        ref={(el) => (firstRef.current[i] = el)}
                        className="row_container-input"
                        type="text"
                        onChange={handleKeyUp}
                    />
                </div>
            ))}
        </div>
    );
};

export default memo(Row);
