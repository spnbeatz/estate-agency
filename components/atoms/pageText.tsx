"use client";

export const PageText = (
    {
        title,
        description,
        width,
        className,
    } : {
        title: string,
        description: string,
        width: string,
        className?: string
    }
) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
            <p className={`text-xl uppercase text-white font-semibold josefin_sans tracking-widest opacity-90 leading-normal`} style={{width}}>
                {title}
            </p>
            <p className={`text-white opacity-90 font-thin text-sm leading-relaxed`} style={{width}}>{description}</p>
            
        </div>
    )
}