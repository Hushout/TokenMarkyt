"use client"
import { usePathname, useRouter } from "next/navigation"
import { animationPageOut } from "@/utils/animations"
import { FC } from "react"

interface TransitionLinkProps {
    href: string
    children: React.ReactNode
}

const TransitionLink: FC<TransitionLinkProps> = ({ href, children }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== href) {
            animationPageOut(href, router);
        };
    }

    return (
        <button className="text-white font-bold px-8 py-4 hover:text-black bg-black hover:bg-white flex items-center justify-center"
            onClick={handleClick}>
            {children}
        </button>
    )
}

export default TransitionLink
