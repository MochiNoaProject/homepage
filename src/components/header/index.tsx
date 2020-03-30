import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";
import baseroute from "../../baseroute";
import Logo from "../../assets/logo.png"

const Header: FunctionalComponent = () => {
    return (
        <div class={style.headerWrapper}>
            <header class={style.header}>
                <p class={style.logo}>
                    <Link href={`${baseroute}/`}>
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </p>
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
        </div>
    );
};

export default Header;
