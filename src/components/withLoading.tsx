import React from "react";

interface IWithLoadingProps {
    loading: boolean;
}

export const withLoading = <T extends object>(Component1:React.ComponentType<T>) => <P extends object>(
    Component2: React.ComponentType<P>
): React.FC<P & IWithLoadingProps> => ({
    loading,
    ...props
}: IWithLoadingProps) => {
        return loading ? (
            <Component1 {...(props as T)} />
        ) : (
                <Component2 {...(props as P)} />
            );
    };
