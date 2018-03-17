import React from "react";
import NewGame from "../Game/NewGame";
import {A} from "../../lib/A";


export const Home = () => (
    <div>
        <section>
            <h2>React - Sliding Game</h2>
            <p><a href={"https://puzzle.apptize.fr"}>ReasonReact version</a></p>
        </section>
        <section>
            <p>A small sliding puzzle game made with React & ReasonReact.</p>
            <p>This is a small project made to learn new patterns in <A href={"https://reactjs.org/"} target={"_blank"} rel="noopener noreferrer">React</A> and try out <A href={"https://reasonml.github.io/reason-react/"} target={"_blank"}>ReasonReact</A>. Enjoy.</p>

        </section>
        <section>
            <NewGame />
        </section>
    </div>
);
