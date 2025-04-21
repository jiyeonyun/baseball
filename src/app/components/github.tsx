import React from "react";

const Github = ({ name, id }: { name: string; id: string }) => {
    return (
        <div className="flex-col">
            <div className="flex justify-between items-center group w-full ">
                <span className="text-lg font-semibold">{name}</span>
            </div>
            <img src={`https://ghchart.rshah.org/${id}`} />
        </div>
    );
};

export default Github;
