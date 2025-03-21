import SectionHeader from "@/components/headers/section-header";
import Image from "next/image";

const ContactUs = () => {
    return (
        <div id="contact-us" className="flex flex-col mb-16 md:mb-36">
            <SectionHeader title="Contact Us"
                description="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
            <div className="flex flex-row justify-between bg-positivus-grey rounded-3xl pl-12 md:pl-24 pr-12 md:pr-24 lg:pr-0 pt-12 md:pt-16 pb-12 md:pb-20 shadow-sm">
                <div className="flex-1 flex flex-col">
                    <div className="flex flex-row gap-8 items-start lg:items-center">
                        <div className="flex items-center">
                            <input id="radio-contact" type="radio" name="radio-group" defaultChecked={true}
                                className="size-[28px] shrink-0 mt-0.5 border-gray-200 rounded-full text-[#B9FF66] focus:ring-lime-500 disabled:opacity-50 disabled:pointer-events-none" />
                            <label htmlFor="radio-contact" className="ms-3 text-lg text-nowrap">Say Hi</label>
                        </div>

                        <div className="flex items-center">
                            <input id="radio-quote" type="radio" name="radio-group"
                                className="size-[28px] shrink-0 mt-0.5 border-gray-200 rounded-full text-[#B9FF66] focus:ring-lime-500 disabled:opacity-50 disabled:pointer-events-none" />
                            <label htmlFor="radio-quote" className="ms-3 text-lg text-nowrap">Get a Quote</label>
                        </div>
                    </div>
                    <div className="flex flex-col my-10 gap-6">
                        <div className="max-w-md">
                            <label htmlFor="input-name" className="block text-base font-normal mb-1.5 dark:text-white">Name</label>
                            <input type="email" id="input-name"
                                className="py-3 px-4 block w-full border-gray-800 rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Name" />
                        </div>
                        <div className="max-w-md">
                            <label htmlFor="input-email" className="block text-base font-normal mb-1.5 dark:text-white">Email*</label>
                            <input type="email" id="input-email"
                                className="py-3 px-4 block w-full border-gray-800 rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Email" />
                        </div>
                        <div className="max-w-md">
                            <label htmlFor="input-message" className="block text-base font-normal mb-1.5 dark:text-white">Email*</label>
                            <textarea id="input-message" rows={5}
                                className="py-3 px-4 block w-full border-gray-800 rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Message"></textarea>
                        </div>
                        <button type="button"
                            className="w-full max-w-md py-5 px-8 inline-flex items-center text-center text-xl rounded-xl border border-transparent bg-positivus-dark text-white hover:bg-black focus:outline-none focus:bg-black disabled:opacity-50 disabled:pointer-events-none">
                            <span className="flex-1">Send Message</span>
                        </button>
                    </div>
                </div>
                <div className="hidden lg:flex flex-col justify-end">
                    <Image src="/images/contact-us-illustration.svg" alt="Contact Us Illustration" width={600} height={600} className="object-contain w-auto max-h-[600px]" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;