export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-gradient-to-br from-red-300/80 to-blue-300 min-h-screen  w-screen p-2 flex gap-4 flex-wrap justify-center">
            {children}
        </div>
    )
}