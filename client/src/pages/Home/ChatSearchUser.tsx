import React from 'react';
import { CgSearch } from 'react-icons/cg';

export default function ChatSearchUser() {
    return (
        <div className="flex items-center py-1 px-3  w-full">
            <CgSearch className="text-xl text-cyan-700/80" />
            <input
                className="outline-none w-full bg-transparent ml-2"
                placeholder=""
            />
        </div>
    );
}
