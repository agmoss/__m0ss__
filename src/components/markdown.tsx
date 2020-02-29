import { Typography, Link } from "@material-ui/core";
import ReactMarkdown from "markdown-to-jsx";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: "h5",
            },
        },
        h2: {
            component: Typography,
            props: { gutterBottom: true, variant: "h5" },
        },
        h3: {
            component: Typography,
            props: { gutterBottom: true, variant: "h6" },
        },
        h4: {
            component: Typography,
            props: { gutterBottom: true, variant: "caption", paragraph: true },
        },
        h6: {
            component: Typography,
            props: { gutterBottom: true, variant: "h3" },
        },
        p: { component: Typography, props: { paragraph: true } },
        a: { component: Link },
        code: {
            component: SyntaxHighlighter,
            props: { language: "python", style: monokai },
        },
        img: { props: {} },
    },
    forceBlock: true,
};

const Markdown = (md: string, ...props: any) => (
    <ReactMarkdown options={options} {...props}>
        {md}
    </ReactMarkdown>
);

export default Markdown;
