import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    return (
        <footer class={style.footer}>
            <p class={style.copy}>©︎MochizukiNoa</p>
        </footer>
    );
};

export default Header;
