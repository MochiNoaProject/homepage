import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import { useState, useEffect } from "preact/hooks";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY > 100);
        });
        setIsScrolled(window.scrollY > 100);
    });
    return (
        <div
            class={
                style.headerWrapper + " " + (isScrolled ? style.isScrolled : "")
            }
        >
            <header class={style.header}>
                <p class={style.logo}>
                    <Link href={`/`}>
                        <img src="/assets/logo-small.png" alt="Logo" />
                    </Link>
                </p>
                <nav>
                    <Link activeClassName={style.active} href={`/`}>
                        Home
                    </Link>
                    <Link activeClassName={style.active} href={`/profile`}>
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
