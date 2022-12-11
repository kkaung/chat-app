import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/form';

export default function SignupPage() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center w-full h-full">
            <form
                className=" bg-white px-6 py-4 rounded-md shadow-sm sm:w-[360px]"
                onSubmit={handleSubmit}
            >
                <header className="mb-6 text-center">
                    <h1 className="text-lg font-semibold text-cyan-600">
                        Let's Chat!
                    </h1>
                </header>
                <Form.FormInput className="mb-4" placeholder="Username" />
                <Form.FormInput type="email" placeholder="Email" />
                <Form.FormInput
                    type="password"
                    className="my-4"
                    placeholder="Password"
                />
                <Form.Button title="Sign up" className="w-full" type="submit" />
                <p className="text-sm mt-4">
                    Have an account ?{' '}
                    <Link to="/login" className="underline text-cyan-500">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}
