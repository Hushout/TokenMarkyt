"use client"
import { usePathname, useRouter } from "next/navigation"
import { animationPageOut } from "@/utils/animations"
import { FC } from "react"

interface TransitionLinkProps {
    href: string
    children: React.ReactNode
    useHover?: boolean
}

const TransitionLink: FC<TransitionLinkProps> = ({ href, children, useHover = true }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== href) {
            animationPageOut(href, router);
        };
    }

    return (
        <button className={`w-[170px] text-white font-bold px-8 py-4 hover:text-black ${useHover ? "bg-black hover:bg-white" : ""} flex items-center justify-center`}
            onClick={handleClick}>
            {children}
        </button>
    )
}

export default TransitionLink
