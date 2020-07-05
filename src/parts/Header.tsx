import { css } from "@emotion/core";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const MenuItem: React.FC<React.HTMLProps<HTMLAnchorElement>> = (props) => {
    return (
        <a
            css={css`
                display: inline-block;
                height: 3.5em;
                padding: 0 2ch;
                margin: 0 1ch;
                font-weight: bold;
                line-height: 3.5em;
                color: #464557;
                text-align: center;
                text-decoration: none;
                background: rgba(255, 165, 0, 0);
                will-change: background-color;
                transition: background-color 0.2s;
                &:hover,
                &:active {
                    background: rgba(255, 165, 0, 0.2);
                }
            `}
            {...props}
        />
    );
};

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 100);
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
    return (
        <div
            style={
                isScrolled
                    ? {
                          backgroundColor: "#fafafa",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
                      }
                    : {}
            }
            css={css`
                position: fixed;
                top: 0;
                left: 0;
                z-index: 50;
                width: 100%;
                padding: 0;
                transition: all 0.3s;
                & + * {
                    padding-top: 123px;
                }
            `}
        >
            <header
                style={
                    isScrolled
                        ? {
                              padding: 12,
                          }
                        : {}
                }
                css={css`
                    position: relative;
                    width: 100%;
                    max-width: 1200px;
                    height: 56px;
                    padding: 2ex 2ch;
                    margin: 0 auto;
                `}
            >
                <p
                    css={css`
                        float: left;
                        padding: 1ch;
                        margin: 0px;
                        background-color: rgba(255, 255, 255, 0.5);
                    `}
                >
                    <Link href="/">
                        <a>
                            <img
                                src="/img/logo-small.png"
                                alt="Logo"
                                height={isScrolled ? "36px" : "62px"}
                            />
                        </a>
                    </Link>
                </p>
                <nav
                    css={css`
                        float: right;
                        font-size: 100%;
                    `}
                >
                    <Link href="/schedule" passHref>
                        <MenuItem>予定表</MenuItem>
                    </Link>
                    <MenuItem
                        href="https://mochizukinoa.fanbox.cc/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        ファンクラブ
                    </MenuItem>
                    <MenuItem
                        href="https://mochinoa.booth.pm/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        グッズ販売
                    </MenuItem>
                </nav>
            </header>
        </div>
    );
};

export default Header;
