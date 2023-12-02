import { useRef, useState } from "react";

const inputs = [1, 2, 3, 4, 5];

const useRowLogic = (
    changeActiveInputRow,
    activeInputRow,
    handleSetWon,
    word
) => {
    const firstRef = useRef([]);
    const [activeInputIndex, setActiveInputIndex] = useState(0);

    const handleKeyUp = (e) => {
        if (
            e.target.value.toUpperCase() <= "Z" &&
            e.target.value.toUpperCase() >= "A"
        ) {
            if (activeInputIndex === inputs.length - 1) {
                for (let i = 0; i < 5; i++) {
                    if (
                        word.includes(firstRef.current[i].value.toUpperCase())
                    ) {
                        if (
                            word[i] === firstRef.current[i].value.toUpperCase()
                        ) {
                            console.log(
                                firstRef.current[i].style.backgroundColor
                            );
                            firstRef.current[i].style.backgroundColor = "green";
                            firstRef.current[i].style.color = "white";
                        } else {
                            firstRef.current[i].style.backgroundColor =
                                "yellow";
                        }
                    } else {
                        firstRef.current[i].style.backgroundColor = "gray";
                    }
                }

                let check = true;
                for (let i = 0; i < 5; i++) {
                    if (firstRef.current[i].style.backgroundColor !== "green") {
                        check = false;
                    }
                }

                if (check) {
                    firstRef.current[activeInputIndex].blur();
                    handleSetWon(true);
                } else {
                    changeActiveInputRow();
                }

                if (activeInputRow === 4) {
                    firstRef.current[activeInputIndex].blur();
                    if (!check) {
                        handleSetWon(false);
                    }
                }
            } else {
                firstRef.current[activeInputIndex + 1].focus();
                setActiveInputIndex(activeInputIndex + 1);
            }
        } else {
            firstRef.current[activeInputIndex].value = "";
        }
    };

    const focusInput = (index) => {
        firstRef.current[index].focus();
    };

    return {
        firstRef,
        activeInputIndex,
        handleKeyUp,
        focusInput,
    };
};

export default useRowLogic;
