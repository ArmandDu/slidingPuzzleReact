import React from "react";
import {A} from "../../lib/A";


export const About = () => (
    <div>
        <section>
            <h2>About</h2>
        </section>
        <section>
            <p>This project was made by ArmandDu.</p>
            <p>You can find the source code for the React version here: <A href={"https://github.com/ArmandDu/slidingPuzzleReact"} target={"_blank"}>ArmandDu/slidingPuzzleReact</A> <br/>
                and the ReasonReact version here: <A href={"https://github.com/ArmandDu/slidingPuzzleReasonReact"} target={"_blank"}>ArmandDu/slidingPuzzleReasonReact</A></p>
        </section>
        <secion>
            <h4>Motivation</h4>
            <p>After finding about <A href="https://reasonml.github.io/reason-react/" target="_blank">ReasonReact</A>, I wanted to give it a try and see how it looked.</p>
            <p>I then decided to see how I could implement a "reducerComponent" pattern in React, this is why I have the same project in both languages.</p>
            <p/>
            <p>I also wrote a blog article about this project here: <A href={"https://blog.armanddu.com/tag/sliding-puzzle/ "} target={"_blank"}>blog.armanddu.com/tag/sliding-puzzle</A></p>
        </secion>
    </div>
);
