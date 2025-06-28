'use client'
import { useState } from "react"
import { Form, RadioGroup } from "radix-ui"
import toast from "react-hot-toast";
import Link from "next/link";


export default function Signup() {
    return (
        <div className="w-full  flex flex-col items-center justify-between gap-4 p-2 flex-1 rounded-md bg-white/10 backdrop-blur-md border border-white/40 shadow-black/80 shadow-lg spect-square text-white">

            <h1 className="text-2xl text-gray-100/80 font-bold my-2 text-center">Weclome to  <span className="text-white ">Jeevika.</span></h1>

            <FormContainer />
            <hr className="w-full text-black/50 px-2" />
            <div className="flex flex-row gap-2">
                <span>Already have an account? </span>
                <Link href="/auth/login" className="text-emerald-400/90 font-semibold hover:text-white/90">Login</Link>
            </div>
        </div>


    )
}



const FormContainer = () => {
    type UserTypes = "buyer" | "seller";

    const [name, setName] = useState<string>("")
    const [number, setNumber] = useState<string>("");
    const [userType, setUserType] = useState<UserTypes>("buyer")
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [password, setPassword] = useState<string>("")


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (name.trim().length < 3) {
                throw new Error("Name must be at least 3 characters");
            }

            if (number.trim().length < 9) {
                throw new Error("Not a valid phone number");
            }
            if (password.length < 5) {
                throw new Error("Password should be > 5")
            }
            toast.success("Registration successful");

            setName("");
            setNumber("");
            deleteLocation();
            setUserType("buyer");
            setPassword("")

        } catch (error: any) {
            toast.error(error.message || "Something went wrong");
        }
    };

    const deleteLocation = () => {
        setLocation(null)
    }
    const detectLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ lat: latitude, lng: longitude });
            },
            (error) => {
                alert("Failed to get location: " + error.message);
            }
        );
    };

    return (


        <Form.Root className="w-[260px]" onSubmit={handleSubmit} >
            <Form.Field className="mb-2.5 grid" name="fullname">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px]  font-semibold leading-[35px] text-white">
                        Full Name
                    </Form.Label>
                    <Form.Message
                        className="text-[13px] text-white opacity-80"
                        match="valueMissing"
                    >
                        Please enter your full name
                    </Form.Message>

                </div>
                <Form.Control asChild>
                    <input
                        className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Control>

            </Form.Field>

            <Form.Field className="mb-2.5 grid" name="number">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px]  font-semibold leading-[35px] text-white">
                        Mobile Number
                    </Form.Label>
                    <Form.Message
                        className="text-[13px] text-white opacity-80"
                        match="valueMissing"
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

            <Form.Field className="mb-2.5 grid" name="address">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-semibold leading-[35px] text-white ">
                        Address
                    </Form.Label>


                </div>
                <Form.Control asChild>
                    <input
                        className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                        type="text"
                        // required
                        value={`${location?.lat} ${location?.lng}`}
                        readOnly

                    />

                </Form.Control>
                <div className="flex flex-row items-baseline justify-between">

                    <button
                        onClick={detectLocation}
                        className="btn btn-soft btn-info text-white px-4 py-2 rounded w-fit my-2 btn-xs"
                    >
                        Get Location
                    </button>
                    <button
                        onClick={deleteLocation}
                        className="btn btn-soft btn-error text-white px-4 py-2 rounded w-fit my-2 btn-xs"
                    >
                        Delete Location
                    </button>
                </div>
            </Form.Field>


            <Form.Field className="mb-2.5 grid" name="usertype">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] leading-[35px] text-white  font-semibold">
                        User Type
                    </Form.Label>
                    <Form.Message
                        className="text-[13px] text-white opacity-80 "
                        match="valueMissing"
                    >
                        Choose Type
                    </Form.Message>
                </div>


                <RadioGroup.Root
                    defaultValue="buyer"
                    className="flex flex-row gap-2.5"
                    aria-label="View density"
                    value={userType}
                    onValueChange={(val) => setUserType(val as UserTypes)}
                >
                    <div className="flex items-center">
                        <RadioGroup.Item
                            className="size-[20px] rounded-full bg-gray-200 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:bg-blue-400"
                            value="buyer"
                            id="r1"
                        >
                            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
                        </RadioGroup.Item>
                        <label
                            className="pl-[15px] text-[15px] leading-none text-white"
                            htmlFor="r1"
                        >
                            Buyer
                        </label>
                    </div>

                    <div className="flex items-center">
                        <RadioGroup.Item
                            className="size-[20px] rounded-full bg-gray-200 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:bg-blue-400"
                            value="seller"
                            id="r2"
                        >
                            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
                        </RadioGroup.Item>
                        <label
                            className="pl-[15px] text-[15px] leading-none text-white"
                            htmlFor="r2"
                        >
                            Seller
                        </label>
                    </div>


                </RadioGroup.Root>

            </Form.Field>

            <Form.Submit asChild>
                <button className="btn btn-soft mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-green-400/50 px-[15px] font-medium leading-none text-violet11  shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                    Register
                </button>
            </Form.Submit>
        </Form.Root>

    )
};