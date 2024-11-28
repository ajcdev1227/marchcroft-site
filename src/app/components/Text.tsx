export const MTitle = ({children, className}: {children: any, className: string}) => {
    return (
            <div className={"font-medium font-objektiv-mk2 "+ className}>
                {children}
            </div>
    );
};

export const MParagraph = ({children, className}: {children: any, className: string}) => {
    return (
            <div className={"font-objektiv-mk2 "+ className}>
                {children}
            </div>
    );
};
