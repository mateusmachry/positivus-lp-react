'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";

const Brands = () => {
    return (
        <Marquee direction="left" speed={50} gradient={true}>
            <div className="flex flex-row gap-24 items-center w-full mt-8 md:mt-12 xl:mt-16 mb-16 md:mb-24 xl:mb-32">
                <Image src="/images/amazon-logo.svg" alt="logo-amazon" width={128} height={48} className="w-32 h-auto object-contain ms-24"/>
                <Image src="/images/dribble-logo.svg" alt="logo-dribble" width={128} height={48} className="w-32 h-auto object-contain"/>
                <Image src="/images/hubspot-logo.svg" alt="logo-hubspot" width={128} height={48} className="w-32 h-auto object-contain"/>
                <Image src="/images/notion-logo.svg" alt="logo-notion" width={128} height={48} className="w-32 h-auto object-contain"/>
                <Image src="/images/netflix-logo.svg" alt="logo-netflix" width={128} height={48} className="w-32 h-auto object-contain"/>
                <Image src="/images/zoom-logo.svg" alt="logo-zoom" width={128} height={48} className="w-32 h-auto object-contain"/>
            </div>
        </Marquee>
    );
};

export default Brands;