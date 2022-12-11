import React, { InputHTMLAttributes } from 'react';

type Props = {};

export default function FormInput({
    className,
    placeholder,
    ...props
}: InputHTMLAttributes<Props>) {
    return (
        <input
            className={`${className} caret-cyan-500 w-full border border-1 outline-cyan-500 px-4 py-2 rounded-md cur text-black/80`}
            placeholder={placeholder}
            {...props}
        />
    );
}
