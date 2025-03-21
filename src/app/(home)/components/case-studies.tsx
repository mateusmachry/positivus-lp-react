import SectionHeader from "@/components/headers/section-header";

const CaseStudies = () => {
    return (
        <div id="case-studies" className="flex flex-col mb-16 md:mb-36">
            <SectionHeader title="Case Studies" description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />
            <div className="flex flex-row md:hidden gap-5 overflow-x-scroll">
                <div className="flex flex-col flex-shrink-0 flex-grow-0 rounded-3xl bg-positivus-dark px-12 py-10 gap-5">
                    <p className="max-w-xs text-white text-base">
                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
                        in website traffic and a 25% increase in sales.
                    </p>
                    <a href="#" className="flex flex-row gap-4 text-[#B9FF66] items-center">
                        <span className="text-xl hover:underline">Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            transform="rotate(-30)">
                            <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col flex-shrink-0 flex-grow-0 rounded-3xl bg-positivus-dark px-12 py-10 gap-5">
                    <p className="max-w-xs text-white text-base">
                        For a B2B software company, we developed an SEO strategy that resulted in a first page ranking
                        for key keywords and a 200% increase in organic traffic.
                    </p>
                    <a href="#" className="flex flex-row gap-4 text-[#B9FF66] items-center">
                        <span className="text-xl hover:underline">Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            transform="rotate(-30)">
                            <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="hidden md:flex flex-row rounded-3xl bg-positivus-dark px-16 py-16">
                <div className="flex flex-col gap-5">
                    <p className="max-w-xs text-white text-lg">
                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
                        in website traffic and a 25% increase in sales.
                    </p>
                    <a href="#" className="flex flex-row gap-4 text-[#B9FF66] items-center">
                        <span className="text-xl hover:underline">Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            transform="rotate(-30)">
                            <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                        </svg> </a>
                </div>
                <div className="w-[1px] bg-white mx-16"></div>
                <div className="flex flex-col gap-5">
                    <p className="max-w-xs text-white text-lg">
                        For a B2B software company, we developed an SEO strategy that resulted in a first page ranking
                        for key keywords and a 200% increase in organic traffic.
                    </p>
                    <a href="#" className="flex flex-row gap-4 text-[#B9FF66] items-center">
                        <span className="text-xl hover:underline">Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            transform="rotate(-30)">
                            <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                        </svg> </a>
                </div>
                <div className="w-[1px] bg-white mx-16"></div>
                <div className="flex flex-col gap-5">
                    <p className="max-w-xs text-white text-lg">
                        For a national retail chain, we created a social media marketing campaign that increased
                        followers by 25% and generated a 20% increase in online sales.
                    </p>
                    <a href="#" className="flex flex-row gap-4 text-[#B9FF66] items-center">
                        <span className="text-xl hover:underline">Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            transform="rotate(-30)">
                            <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                        </svg> </a>
                </div>
            </div>
        </div>
    )
};

export default CaseStudies;