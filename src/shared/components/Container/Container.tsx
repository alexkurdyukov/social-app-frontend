interface IContainerProps {
    children: React.ReactElement | React.ReactElement[];
}

export const Container = ({ children }: IContainerProps) => {
    return <div className="flex max-w-screen-xl mx-auto mt-10">{children}</div>;
};
