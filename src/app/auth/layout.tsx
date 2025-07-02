import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            zIndex: 9999,
            background: "#333",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "8px",
          },
        }}
      />

      
      <div className="relative h-screen w-screen">
       
        <div className="absolute inset-0 z-0 bg-[url('/assets/backgrounds/tropical_background.jpg')] bg-cover bg-center" />

       
        <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm" />

        
        <main className="relative z-20 h-full w-full flex flex-col md:flex-row items-center justify-center p-6 gap-6">
          
         
          <div className="w-full max-w-md">{children}</div>

          
          <div className="hidden md:flex flex-1 items-center justify-center">
            <Image
              src="/assets/vectors/artist.svg"
              alt="Illustration"
              width={500}
              height={500}
              className="w-full max-w-md object-contain animate-fade-in"
              priority
            />
          </div>
        </main>
      </div>
    </>
  );
}
