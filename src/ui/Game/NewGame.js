import React from "react";
import Menu from "./Menu/Menu";
import withReducerComponent from "../../lib/withReducerComponent";
import Play from "./Play/Play";


export class NewGame extends React.Component {

    handleQuit = () => {
        const { send, actions: { SELECT_PUZZLE }} = this.props;
        send(SELECT_PUZZLE, null);
    };

    handleSelectDifficulty = (difficulty) => {
        const { send, actions: { SELECT_DIFFICULTY }} = this.props;
        send(SELECT_DIFFICULTY, difficulty);
    };

    handleSelectPuzzle = puzzle => {
        const { send, actions: { SELECT_PUZZLE }} = this.props;

        send(SELECT_PUZZLE, puzzle);
    };

    mapDifficulty = difficulty => {switch(difficulty) {

        case "easy": return { x: 3, y: 3 };
        case "medium": return { x: 5, y: 5 };
        case "hard": return { x: 9, y: 9 };
        case "expert": return { x: 12, y: 12 };
        default: return {x: 1, y: 1};
    }};

    render() {

        const { store: {selectedPuzzle, difficulty, play} } = this.props;

        return (
            <div>
                {
                    (difficulty && selectedPuzzle) ? (
                        <Play onQuit={this.handleQuit}
                              difficulty={this.mapDifficulty(difficulty)}
                              puzzle={selectedPuzzle}/>
                    ) : (
                        <Menu selectDifficulty={this.handleSelectDifficulty}
                              selectPuzzle={this.handleSelectPuzzle}
                              difficulty={difficulty} play={play}
                              selectedPuzzle={selectedPuzzle && selectedPuzzle.id} />
                    )
                }
            </div>
        )
    }
}


const state = {
    selectedPuzzle: null,
    difficulty: "medium"
};

const actions = ["SELECT_DIFFICULTY", "SELECT_PUZZLE"];

const reduceComponent = withReducerComponent(actions, ({SELECT_DIFFICULTY, SELECT_PUZZLE}) => {

    return (state, {type, payload}) => {
        switch (type) {
            case SELECT_DIFFICULTY:
                return {...state, difficulty: payload};
            case SELECT_PUZZLE:
                return {...state, selectedPuzzle: payload};
            default:
                return state;
        }

    };
}, state);

export default reduceComponent(NewGame);