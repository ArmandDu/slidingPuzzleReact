import React from "react";
import PropTypes from 'prop-types';
import SelectPuzzle from "./SelectPuzzle";

import "./Menu.css"

import doge from '../../../assets/puzzles/doge.png'
import cat from '../../../assets/puzzles/cat.jpg'
import tabasco from '../../../assets/puzzles/tabasco.JPG'
import {SelectDifficulty} from "./SelectDififculty";

const bank = [
    {id: "1", url:  doge},
    {id: "2", url:  cat},
    {id: "3", url:  tabasco},
];

export const Menu = ({difficulty, play, selectedPuzzle, ...actions}) => {
    return (
        <div className={"Menu"}>

            <SelectPuzzle
                allowCustom={false}
                onSelect={actions.selectPuzzle}
                selected={selectedPuzzle} bank={bank} />

            <SelectDifficulty onSelect={actions.selectDifficulty}
                activeValue={difficulty}
                options={["easy", "medium", "hard", "expert"]}/>
        </div>
    );
};

Menu.propTypes = {
    selectDifficulty: PropTypes.func.isRequired,
    selectPuzzle: PropTypes.func.isRequired,

    play: PropTypes.bool,
    selectedPuzzle: PropTypes.any,
    difficulty: PropTypes.any
};

export default Menu;