import React, {Fragment} from "react";
import { Map } from 'immutable'

export const PuzzlePreview = ({url, onSelect}) => {

    const style = {
        backgroundImage: `url(${url})`
    };

    return (
        <div className={"PuzzlePreview"} onClick={onSelect} style={style} />
    )
};

export const CustomPuzzle = ({active, onSelect}) => Map()
    .set(false, null)
    .get(active, (
        <Fragment>
            <input hidden
                   id="upload"
                   name="upload"
                   accept={"image/*"}
                   onChange={event => {
                       const reader = new FileReader();
                       const {files: [ file ]} = event.target;

                       reader.onloadend = function(e){
                           const puzzle = {id: file.name, url: e.target.result};

                           console.log("puzzle", puzzle);
                           onSelect(puzzle);
                       };
                       reader.readAsDataURL(file);
                   }}
                   type={"file"} />

            <label htmlFor={"upload"}>
                <div className={"PuzzlePreview"}/>
            </label>
        </Fragment>
    ));

export const SelectPuzzle = ({allowCustom, bank, onSelect}) => {

    return (
        <div className={"SelectPuzzle"}>
            {bank.map((p) => (
                <PuzzlePreview onSelect={() => onSelect(p)} key={p.id} url={p.url} />
            ))}
            <CustomPuzzle active={allowCustom} onSelect={onSelect}/>
        </div>
    )
};

SelectPuzzle.defaultProps = {
    bank: [{id: "1", url: "https://placehold.it/200x200"}]
};

export default SelectPuzzle;