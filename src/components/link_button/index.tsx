import { FunctionComponent, RenderableProps, h } from "preact";
import * as style from "./style.css";

type Props = {
    href: string;
    color?: string;
};

export const LinkButton: FunctionComponent<Props> = ({
    href,
    color,
    children
}: RenderableProps<Props>) => {
    return (
        <a
            href={href}
            class={style.linkButton}
            style={{ "--button-color": color || "#fff" }}
        >
            {children}
        </a>
    );
};

export default LinkButton;
