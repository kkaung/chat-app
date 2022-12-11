/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatProfileHead() {
    return (
        <div className="bg-cyan-700 px-3 flex items-center justify-between py-3 rounded-tl-md">
            <h1>Let's Chat</h1>
            <div className="flex items-center">
                <Link to="/profile">
                    <img
                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1685&q=80"
                        className="rounded-full w-[28px] h-[28px] cursor-pointer"
                    />
                </Link>
                <div className="text-sm ml-1">Kaung</div>
            </div>
        </div>
    );
}
