import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/form';

export default function LoginPage() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-full w-full">
            <form
                className=" bg-white px-6 py-4 rounded-md shadow-sm sm:w-[360px]"
                onSubmit={handleSubmit}
            >
                <header className="mb-6 text-center">
                    <h1 className="text-lg font-semibold text-cyan-600">
                        Let's Chat!
                    </h1>
                </header>
                <Form.FormInput type="email" placeholder="Email" />
                <Form.FormInput
                    type="password"
                    className="my-4"
                    placeholder="Password"
                />
                <Form.Button title="Login" className="w-full" type="submit" />
                <p className="text-sm mt-4">
                    Have an account ?{' '}
                    <Link to="/signup" className="underline text-cyan-500">
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
}
