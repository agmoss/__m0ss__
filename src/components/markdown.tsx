import {Typography} from '@material-ui/core';
import ReactMarkdown from 'markdown-to-jsx';
import React from "react";

const options = {
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: 'h5',
        },
      },
      h2: { component: Typography, props: { gutterBottom: true, variant: 'h5' } },
      h3: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
      h4: {
        component: Typography,
        props: { gutterBottom: true, variant: 'caption', paragraph: true },
      },
      h6: { component: Typography, props: { gutterBottom: true, variant: 'h3' } },
      p: { component: Typography, props: { paragraph: true } },
    },
  };

export default function _Markdown(props: any) {
    return <ReactMarkdown options={options} {...props} />;
}
