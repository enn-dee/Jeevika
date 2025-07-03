export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-red-200 via-blue-100 to-emerald-100 flex flex-col items-center justify-start p-4 dark:from-gray-700 dark:via-gray-500 dark:to-gray-500">
            <div className="w-full max-w-6xl">{children}</div>
        </div>
    );
}
