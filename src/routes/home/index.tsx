import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h2>Youtube</h2>
            <p>
                <a href="https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ">
                    https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ
                </a>
            </p>
            <h2>Twitter</h2>
            <p>
                <a href="https://twitter.com/_noach">
                    https://twitter.com/_noach
                </a>
            </p>
            <h2>Github</h2>
            <p>
                <a href="https://github.com/MochiNoaProject/homepage">
                    https://github.com/MochiNoaProject/homepage
                </a>
            </p>
        </div>
    );
};

export default Home;
