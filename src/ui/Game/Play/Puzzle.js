import * as _ from "lodash";
import React from "react";
import { Map } from 'immutable'

import './Puzzle.css'

const Piece = ({left, top, url, onClick, chunkWidth, chunkHeight}) => {

    const style = {
        width: chunkWidth,
        height: chunkHeight,
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "600px 600px",
        backgroundColor: "#a0a0a0",
        margin: '2px',
        backgroundPositionX: `-${left}px`,
        backgroundPositionY: `-${top}px`
    };

    return (
        <div style={style} onClick={onClick}/>
    )
};

const Pivot = ({chunkWidth, chunkHeight}) => {

    const style = {
        width: chunkWidth,
        height: chunkHeight,
        backgroundColor: "#a0a0a0",
        margin: '2px',

    };

        return (
        <div style={style} />
    )
};

export const Puzzle = ({won, url, pieces, x, y, pivot, onSelectPiece}) => {


    const chunkWidth = 600 / x;
    const chunkHeight = 600 / y;

    const chunksOfPieces = _.chunk(pieces, x);

    return (
        <div className={"Puzzle"}>
            <div className={"Pieces"}>
                {chunksOfPieces.map((pieces, i) => (
                    <div key={i} style={{display: "flex", flexFlow: "row"}}>
                        {pieces.map((p) => Map()
                            .set(true, <Pivot key={p} chunkWidth={chunkWidth} chunkHeight={chunkHeight} />)
                            .get(pivot === p, <Piece key={p}
                                                     left={p % x * chunkWidth}
                                                     top={Math.floor(p / y) * chunkHeight}
                                                     url={url}
                                                     onClick={() => onSelectPiece(p)}
                                                     chunkWidth={chunkWidth}
                                                     chunkHeight={chunkHeight}/>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

};

export default (Puzzle);