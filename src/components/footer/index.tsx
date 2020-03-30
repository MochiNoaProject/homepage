import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";
import baseroute from "../../baseroute";

const Header: FunctionalComponent = () => {
    return (
        <footer class={style.footer}>
            <p class={style.copy}>©︎MochizukiNoa</p>
        </footer>
    );
};

export default Header;
