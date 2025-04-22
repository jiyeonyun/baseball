import React from "react";

const Github = ({ name, id }: { name: string; id: string }) => {
    const classNames = {
        container: "flex-col",
        header: "flex justify-between items-center group w-full",
        name: "text-lg font-semibold",
    };

    return (
        <div className={classNames.container}>
            <div className={classNames.header}>
                <span className={classNames.name}>{name}</span>
            </div>
            <img src={`https://ghchart.rshah.org/${id}`} alt={`${name}'s GitHub contribution chart`} />
        </div>
    );
};

export default Github;
