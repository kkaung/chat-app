import React, { ButtonHTMLAttributes } from 'react';

export default function SubmitButton({
    title,
    className,
    ...props
}: ButtonHTMLAttributes<{ title: string }>) {
    return (
        <button
            className={`${className} bg-cyan-500 px-4 py-2 rounded-md text-white hover:bg-cyan-700`}
            {...props}
        >
            {title}
        </button>
    );
}
