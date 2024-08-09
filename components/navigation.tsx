"use client";

const NavigationLink = (
    {
        name, 
        onClick

    }
    : 
    {
        name: string,
        onClick?: () => void
    }) => {
    return (
        <div onClick={onClick} className="hover:scale-110 cursor-pointer duration-300">
            <p className="uppercase text-md text-neutral-900">{name}</p>
        </div>
        
    )
}

export const Navigation = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-4">
            <NavigationLink name="O nas" />
            <NavigationLink name="Oferta" />
            <NavigationLink name="Kontakt" />
        </div>
    )
}