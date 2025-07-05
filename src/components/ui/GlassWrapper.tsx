interface GlassWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export function GlassWrapper({ children, className = "" }: GlassWrapperProps) {
    return (
        <div className={`relative inline-block ${className}`}>

            <div className="absolute inset-0 rounded-xl 
                        bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 
                        blur-md opacity-60 z-0" />


            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
