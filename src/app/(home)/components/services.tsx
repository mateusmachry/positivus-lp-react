"use client";
import SectionHeader from "@/components/headers/section-header";
import Image from "next/image";
import { motion } from "motion/react";

const Services = () => {
    return (
        <div id="services" className="flex flex-col">
            <SectionHeader title="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-10 mb-16 md:mb-24">
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }}
                    className="h-80 flex flex-row justify-between gap-20 p-12 border bg-positivus-grey border-black border-b-8 rounded-3xl shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col">
                            <div className="bg-positivus-green rounded-lg px-2 py-1 text-nowrap">
                                <label className="text-black font-medium text-3xl">Search engine</label>
                            </div>
                            <div className="bg-positivus-green rounded-lg px-2 py-1 w-fit text-nowrap">
                                <label className="text-black font-medium text-3xl">optimization</label>
                            </div>
                        </div>
                        <div className="group flex flex-row gap-4 items-center">
                            <svg className="w-10 h-10 group-hover:transition-transform group-hover:rotate-[30deg] group-hover:duration-1000"
                                width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                                <path
                                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                                    fill="#B9FF66" />
                            </svg>
                            <a href="#" className="inline-block text-xl hover:underline text-black text-nowrap">Learn more</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image alt="service-card-1-illustration" src="/images/service-card-1-illustration.png" width={224} height={224} className="w-56 h-auto object-contain" />
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }}
                    className="h-80 flex flex-row justify-between gap-20 p-12 border bg-positivus-green border-black border-b-8 rounded-3xl shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col">
                            <div className="bg-white rounded-lg px-2 py-1 text-nowrap">
                                <label className="text-black font-medium text-3xl">Pay-per-click</label>
                            </div>
                            <div className="bg-white rounded-lg px-2 py-1 w-fit text-nowrap">
                                <label className="text-black font-medium text-3xl">advertising</label>
                            </div>
                        </div>
                        <div className="group flex flex-row gap-4 items-center">
                            <svg className="w-10 h-10 group-hover:transition-transform group-hover:rotate-[30deg] group-hover:duration-1000"
                                width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                                <path
                                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                                    fill="#B9FF66" />
                            </svg>
                            <a href="#" className="inline-block text-xl hover:underline text-black text-nowrap">Learn more</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image alt="service-card-2-illustration" src="/images/service-card-2-illustration.png" width={224} height={224} className="w-56 h-auto object-contain" />
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 0.2 }}
                    className="h-80 flex flex-row justify-between gap-20 p-12 border bg-black border-black border-b-8 rounded-3xl shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col">
                            <div className="bg-white rounded-lg px-2 py-1 text-nowrap">
                                <label className="text-black font-medium text-3xl">Social Media</label>
                            </div>
                            <div className="bg-white rounded-lg px-2 py-1 w-fit text-nowrap">
                                <label className="text-black font-medium text-3xl">Marketing</label>
                            </div>
                        </div>
                        <div className="group flex flex-row gap-4 items-center">
                            <svg className="w-10 h-10 group-hover:transition-transform group-hover:rotate-[30deg] group-hover:duration-1000"
                                width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                                <path
                                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                                    fill="black" />
                            </svg>
                            <a href="#" className="inline-block text-xl hover:underline text-white text-nowrap">Learn more</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image alt="service-card-3-illustration" src="/images/service-card-3-illustration.png" width={224} height={224} className="w-56 h-auto object-contain" />
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 0.2 }}
                    className="h-80 flex flex-row justify-between gap-20 p-12 border bg-positivus-grey border-black border-b-8 rounded-3xl shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col">
                            <div className="bg-positivus-green rounded-lg px-2 py-1 text-nowrap">
                                <label className="text-black font-medium text-3xl">Email</label>
                            </div>
                            <div className="bg-positivus-green rounded-lg px-2 py-1 w-fit text-nowrap">
                                <label className="text-black font-medium text-3xl">Marketing</label>
                            </div>
                        </div>
                        <div className="group flex flex-row gap-4 items-center">
                            <svg className="w-10 h-10 group-hover:transition-transform group-hover:rotate-[30deg] group-hover:duration-1000"
                                width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                                <path
                                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                                    fill="#B9FF66" />
                            </svg>
                            <a href="#" className="inline-block text-xl hover:underline text-black text-nowrap">Learn more</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image alt="service-card-4-illustration" src="/images/service-card-4-illustration.png" width={224} height={224} className="w-56 h-auto object-contain" />
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 0.4 }}
                    className="h-80 flex flex-row justify-between gap-20 p-12 border bg-positivus-green border-black border-b-8 rounded-3xl shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col">
                            <div className="bg-white rounded-lg px-2 py-1 text-nowrap">
                                <label className="text-black font-medium text-3xl">Content</label>
                            </div>
                            <div className="bg-white rounded-lg px-2 py-1 w-fit text-nowrap">
                                <label className="text-black font-medium text-3xl">Creation</label>
                            </div>
                        </div>
                        <div className="group flex flex-row gap-4 items-center">
                            <svg className="w-10 h-10 group-hover:transition-transform group-hover:rotate-[30deg] group-hover:duration-1000"
                                width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                                <path
                                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                                    fill="#B9FF66" />
                            </svg>
                            <a href="#" className="inline-block text-xl hover:underline text-black text-nowrap">Learn more</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image alt="service-card-5-illustration" src="/images/service-card-5-illustration.png" width={224} height={224} className="w-56 h-auto object-contain" />
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 0.4 }}
                    className="h-80 flex flex-row justify-between gap-20 p-12 border bg-black border-black border-b-8 rounded-3xl shadow-sm">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col">
                            <div className="bg-positivus-green rounded-lg px-2 py-1 text-nowrap">
                                <label className="text-black font-medium text-3xl">Analytics and</label>
                            </div>
                            <div className="bg-positivus-green rounded-lg px-2 py-1 w-fit text-nowrap">
                                <label className="text-black font-medium text-3xl">Tracking</label>
                            </div>
                        </div>
                        <div className="group flex flex-row gap-4 items-center">
                            <svg className="w-10 h-10 group-hover:transition-transform group-hover:rotate-[30deg] group-hover:duration-1000"
                                width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                                <path
                                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                                    fill="black" />
                            </svg>
                            <a href="#" className="inline-block text-xl hover:underline text-white text-nowrap">Learn more</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image alt="service-card-6-illustration" src="/images/service-card-6-illustration.png" width={224} height={224} className="w-56 h-auto object-contain" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Services;