import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animationPageIn = () => {
    const banners = () => {
        const bannerElements = [];
        for (let i = 0; i < 4; i++) {
            bannerElements.push(
                document.getElementById(`banner${i + 1}`)
            );
        }
        return bannerElements;
    };

    if (banners().length > 0) {
        const tl = gsap.timeline();
        tl.set(banners(), {
            yPercent: 0,
        }).to(banners(), {
            yPercent: 100,
            stagger: 0.2,
        });
    }
}

export const animationPageOut = (href: string, router: AppRouterInstance) => {
    const banners = () => {
        const bannerElements = [];
        for (let i = 0; i < 4; i++) {
            bannerElements.push(
                document.getElementById(`banner${i + 1}`)
            );
        }
        return bannerElements;
    };

    if (banners().length > 0) {
        const tl = gsap.timeline();
        tl.set(banners(), {
            yPercent: -100,
        }).to(banners(), {
            yPercent: 0,
            stagger: 0.2,
            onComplete: () => {
                router.push(href);
            },
        });
    }
}
