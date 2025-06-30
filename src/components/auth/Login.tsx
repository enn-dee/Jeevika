
'use client'
import Link from "next/link";
import { Form } from "radix-ui"
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
    return (
        <div className="w-full max-h-[420px] md:h-fit  flex flex-col items-center justify-between gap-4 p-2 flex-1 rounded-md bg-white/10 backdrop-blur-md border border-white/40 shadow-black/80 shadow-lg spect-square text-white">
            <h1 className="text-2xl text-gray-100/80 font-bold my-2 text-center">Weclome back, Login</h1>
            <FormContainer />
            <hr className="w-full text-black/50 px-2" />
            <div className="flex flex-row gap-2">
                <span>Don &apos t have an account?</span>
                <Link href="/auth/signup" className="text-emerald-400/90 font-semibold hover:text-white/90">Signup</Link>

            </div>
        </div>
    )
}


const FormContainer = () => {

    const [number, setNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    // const [address, setAddress] = useState<string>("");


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {

            if (number.trim().length < 9) {
                throw new Error("Not a valid phone number");
            }

            toast.success("Registration successful");


            setNumber("");
            setPassword("")

        } catch (error) {
            const err = error as Error;
            toast.error(err.message || "Something went wrong");
        }
    };



    return (


        <Form.Root className="w-[260px]" onSubmit={handleSubmit} >


            <Form.Field className="mb-2.5 grid" name="number">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px]  font-semibold leading-[35px] text-white">
                        Mobile Number
                    </Form.Label>
                    <Form.Message
                        className="text-[13px] text-white opacity-80"
                        match="patternMismatch"
                    >
                        Please enter a number
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                        type="tel"
                        required
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}

                    />
                </Form.Control>
            </Form.Field>


            <Form.Field className="mb-2.5 grid" name="password">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px]  font-semibold leading-[35px] text-white">
                        Set Password
                    </Form.Label>
                    <Form.Message
                        className="text-[13px] text-white opacity-80"
                        match="tooShort"
                    >
                        Set password
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </Form.Control>
            </Form.Field>

            <Form.Submit asChild>
                <button className="btn btn-soft mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-green-400/50 px-[15px] font-medium leading-none text-violet11  shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                    Login
                </button>
            </Form.Submit>
        </Form.Root>

    )
};