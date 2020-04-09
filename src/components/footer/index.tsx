import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Footer: FunctionalComponent = () => {
    return (
        <footer class={style.footer}>
            <p class={style.copy}>©︎MochizukiNoa</p>
        </footer>
    );
};

export default Footer;
