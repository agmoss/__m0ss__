import React, { ComponentType } from "react";
import { Helmet } from "react-helmet";

interface IMeta {
    title: string;
    meta: {
        name: string;
        content: string;
    };
}

export const withHelmet = ({ title, meta }: IMeta) => <
    T extends Record<string, unknown>
>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name={meta.name} content={meta.content} />
            </Helmet>
            <WrappedComponent {...(props as T)} />
        </>
    );
};
