import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";
import baseroute from "../../baseroute";

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>もちのあのホームページ</h1>
            <nav>
                <Link activeClassName={style.active} href={`${baseroute}/`}>
                    Home
                </Link>
                <Link
                    activeClassName={style.active}
                    href={`${baseroute}/profile`}
                >
                    Me
                </Link>
                <Link
                    activeClassName={style.active}
                    href={`${baseroute}/profile/mochinoa`}
                >
                    Mochinoa
                </Link>
            </nav>
        </header>
    );
};

export default Header;
