import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="bg-[url(/assets/backgrounds/tropical_background.jpg)] bg-cover  h-screen">
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        zIndex: 9999,
                        background: '#333',
                        color: '#fff',
                    },

                }}
            />
            <div className="bg-black/50 w-full h-full flex flex-col sm:flex-row justify-between gap-4 items-center  p-4 ">
                {children}
                <Image
                    src="/assets/vectors/artist.svg"
                    alt=""
                    className="flex-1 hidden aspect-square h-full md:block w-80 md:w-full bg-no-repeat "
                    width={100}
                    height={50}
                />

            </div>

        </div>
    )
}