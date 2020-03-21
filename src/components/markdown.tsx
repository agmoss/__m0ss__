import { Typography, Link } from "@material-ui/core";
import ReactMarkdown, { MarkdownOptions } from "markdown-to-jsx";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: "h1",
            },
        },
        h2: {
            component: Typography,
            props: { gutterBottom: true, variant: "h2" },
        },
        h3: {
            component: Typography,
            props: { gutterBottom: true, variant: "h3" },
        },
        h4: {
            component: Typography,
            props: { gutterBottom: true, variant: "h4" },
        },
        h5: {
            component: Typography,
            props: { gutterBottom: true, variant: "h5" },
        },
        h6: {
            component: Typography,
            props: { gutterBottom: true, variant: "h6" },
        },
        p: {
            component: Typography,
            props: { paragraph: true, variant: "body1" },
        },
        a: { component: Link, props: { paragraph: true, variant: "body1" } },
        code: {
            component: SyntaxHighlighter,
            props: { language: "python", style: monokai },
        },
        img: { props: {} },
    },
    forceBlock: true,
};

const Markdown = <P extends []>(md: string, ...props: P) => (
    <ReactMarkdown options={options as MarkdownOptions} {...props}>
        {md}
    </ReactMarkdown>
);

export default Markdown;
