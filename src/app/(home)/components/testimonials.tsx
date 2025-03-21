import SectionHeader from "@/components/headers/section-header";
import Image from "next/image";
import { LucideArrowBigLeft, LucideArrowBigRight } from "lucide-react";

export type Testimonial = {
    comment: string,
    name: string,
    job: string
};

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
    return (
        <div className="flex flex-col mb-16 md:mb-24">
            <SectionHeader title="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
            <div className="bg-positivus-dark flex flex-col rounded-3xl shadow-sm">
                <div className="flex flex-row justify-center gap-12 items-center mt-10 md:mt-20 mb-16 md:mb-36 overflow-x-hidden">
                    {
                        testimonials.map((testimonial, index) => (
                            <div key={`testimonial-${index}`} className="relative flex flex-col flex-shrink-0 flex-grow-0">
                                <Image src="/images/testimonial-frame.svg" alt="Testimonial Frame" width={606} height={266} className="hidden md:block h-full w-auto object-contain" />
                                <Image src="/images/testimonial-frame-mobile.svg" alt="Testimonial Frame Mobile" width={330} height={330} className="block md:hidden h-full w-auto object-contain" />
                                <div className="absolute top-0 start-0 end-0">
                                    <div className="py-12 px-6 md:px-14">
                                        <p className="text-base md:text-lg text-white line-clamp-8 md:line-clamp-5">
                                            {testimonial.comment}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col my-4 mx-20">
                                    <label className="font-medium text-lg md:text-xl text-[#B9FF66]">{testimonial.name}</label>
                                    <span className="text-base md:text-lg text-white">{testimonial.job}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-row justify-center items-center gap-24 md:gap-52 text-white mb-16">
                    <LucideArrowBigLeft className="text-[#D1D5DB]" size="1.5em"
                        color="currentColor" />
                    <div className="flex flex-row items-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                            viewBox="0 0 24 24">
                            <path fill="#B9FF66" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                            viewBox="0 0 24 24">
                            <path fill="#FFFFFF" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                            viewBox="0 0 24 24">
                            <path fill="#FFFFFF" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                            viewBox="0 0 24 24">
                            <path fill="#FFFFFF" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                            viewBox="0 0 24 24">
                            <path fill="#FFFFFF" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                        </svg>
                    </div>
                    <LucideArrowBigRight className="text-[#FFFFFF]" size="1.5em"
                        color="currentColor" />
                </div>
            </div>
        </div>
    )
};

export default Testimonials;