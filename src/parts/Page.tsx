import { Header } from "./Header";
import { css } from "@emotion/core";

export const Page: React.FC = ({ children }) => {
    return (
        <div
            css={css`
                max-width: 1200px;
                padding: 0px 2ch 6ex;
                margin: auto;
            `}
        >
            <Header />
            {children}
        </div>
    );
};
