import React from "react";
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import * as _ from 'lodash'
import './Play.css'

import Puzzle from "./Puzzle";
import withReducerComponent from "../../../lib/withReducerComponent";

export class Play extends React.Component {

    static propTypes = {
        puzzle: PropTypes.shape({id: PropTypes.string.isRequired, url: PropTypes.string.isRequired}).isRequired,
        difficulty: PropTypes.shape({x: PropTypes.number.isRequired, y: PropTypes.number.isRequired}).isRequired,
        onQuit: PropTypes.func.isRequired
    };

    handleSwapPieces = pivot => (piece) => {
        const { send, actions: {SWAP_PIECES} } = this.props;

        send(SWAP_PIECES, {pivot, piece});
    };

    render() {

        const { store, puzzle, onQuit, difficulty: {x, y} } = this.props;
        const { pivot, shuffledPieces } = store;

        const won =  shuffledPieces.every((p, i) => p === i);

        return (
            <div className={"Play"}>
                {
                    Map()
                        .set(true, (
                            <img src={puzzle.url} alt={puzzle.url} />
                        ))
                        .get(won, (
                            <Puzzle url={puzzle.url}
                                    won={won}
                                    pieces={shuffledPieces}
                                    onSelectPiece={this.handleSwapPieces(pivot)}
                                    pivot={pivot}
                                    x={x}
                                    y={y}/>
                        ))
                }
                <button onClick={onQuit}>Quit</button>
            </div>
        )
    }
}

const state = ({difficulty: {x, y}}) => {

    const pieces = _.range(x*y);

    const shuffledPieces = _.shuffle(pieces);
    const pivot = _.random(0, pieces.length -1);

    return {
        shuffledPieces,
        pivot,
        width: x,
        height: y
    }
};

const swapPieces = (array, pivot, piece) => {


    const result = array.slice();
    const pivotValue = result[pivot];

    result[pivot] = result[piece];
    result[piece] = pivotValue;

    return result;

};

const reduceComponent = withReducerComponent(["SWAP_PIECES"], ({SWAP_PIECES}) => {

    const d = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    const di = (w, h, a, b) => d({x: a % w, y: Math.floor(a / h)}, {x: b % w, y: Math.floor(b / h)});

    const updatePieces = (pieces, pivot, piece, dist) => Map()
        .set(1, swapPieces(pieces, pivot, piece))
        .get(dist, pieces);


    return (state, {type, payload}) => {
        switch (type) {
            case SWAP_PIECES:
                const { pivot, piece } = payload;
                const { height, width, shuffledPieces } = state;

                const pivotIndex = shuffledPieces.findIndex(p => p === pivot);
                const pieceIndex = shuffledPieces.findIndex(p => p === piece);
                const dist = di(width, height, pivotIndex, pieceIndex);

                return {
                    ...state,
                    shuffledPieces: updatePieces(shuffledPieces, pivotIndex, pieceIndex, dist)
                };

            default: return state;
        }
    }
}, state);

export default reduceComponent(Play);