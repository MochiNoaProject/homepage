import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    return (
        <div class={style.headerWrapper}>
            <header class={style.header}>
                <p class={style.logo}>
                    <Link href={`/`}>
                        <img src="/assets/logo.png" alt="Logo"/>
                    </Link>
                </p>
                <nav>
                    <Link activeClassName={style.active} href={`/`}>
                        Home
                    </Link>
                    <Link
                        activeClassName={style.active}
                        href={`/profile`}
                    >
                        Me
                    </Link>
                    <Link
                        activeClassName={style.active}
                        href={`/profile/mochinoa`}
                    >
                        Mochinoa
                    </Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;
