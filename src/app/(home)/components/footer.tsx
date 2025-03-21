"use client";
import { motion } from "motion/react";
import Image from "next/image";

const DesktopFooter = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} id="footer" className="hidden md:flex flex-col bg-positivus-dark rounded-t-3xl px-16 py-12 shadow-sm">
            <div className="flex flex-row justify-between items-center mb-16">
                <Image src="/images/logo-white.png" width={100} height={32} className="object-contain w-auto h-8" alt="Positivus Logo" />
                <div className="flex flex-row items-center gap-10 text-white">
                    <a href="#" className="text-lg underline">About us</a>
                    <a href="#" className="text-lg underline">Services</a>
                    <a href="#" className="text-lg underline">Use Cases</a>
                    <a href="#" className="text-lg underline">Pricing</a>
                    <a href="#" className="text-lg underline">Blog</a>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <Image src="/images/linkedin-logo-black.svg" width={32} height={32} className="object-contain w-8 h-8" alt="LinkedIn Logo" />
                    <Image src="/images/facebook-logo-black.svg" width={32} height={32} className="object-contain w-8 h-8" alt="Facebook Logo" />
                    <Image src="/images/twitter-logo-black.svg" width={32} height={32} className="object-contain w-8 h-8" alt="Twitter Logo" />
                </div>
            </div>
            <div className="flex flex-row justify-between mb-12">
                <div className="flex flex-col">
                    <div className="w-fit bg-positivus-green rounded-lg px-1 py-1 mb-6">
                        <label className="font-medium text-xl">Contact us:</label>
                    </div>
                    <p className="text-lg mb-5 text-white">
                        Email: info@positivus.com
                    </p>
                    <p className="text-lg mb-5 text-white">Phone: 555-567-8901</p>
                    <p className="text-lg text-white">Address: 1234 Main St</p>
                    <p className="text-lg text-white">Moonstone City, Stardust State 12345</p>
                </div>
                <div className="flex flex-row items-center bg-[#292A32] px-10 py-14 gap-5 rounded-xl">
                    <div className="max-w-sm">
                        <input type="email" id="input-email-newsletter"
                            className="py-5 px-8 block w-full bg-[#292A32] border-gray-300 text-white rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Email" />
                    </div>
                    <button type="button"
                        className="w-fit max-w-sm py-5 px-8 inline-flex items-center text-center text-xl rounded-xl border border-transparent bg-positivus-green text-black hover:bg-lime-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                        <span>Subscribe to news</span>
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-white mb-12"></div>
            <div className="flex flex-row items-center gap-10">
                <p className="text-lg text-white">© 2023 Positivus. All Rights Reserved.</p>
                <a href="#" className="underline text-lg text-white">Privacy Policy</a>
            </div>
        </motion.div>
    )
}

const MobileFooter = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} id="footer" className="flex md:hidden mx-[-24px] flex-col bg-positivus-dark px-5 pt-12 pb-6">
            <div className="flex flex-col justify-center items-center mb-6">
                <Image src="/images/logo-white.png" width={100} height={24} className="object-contain w-auto h-6 mb-8" alt="Positivus Logo" />
                <div className="flex flex-col items-center gap-4 text-white mb-8">
                    <a href="#" className="text-base underline">About us</a>
                    <a href="#" className="text-base underline">Services</a>
                    <a href="#" className="text-base underline">Use Cases</a>
                    <a href="#" className="text-base underline">Pricing</a>
                    <a href="#" className="text-base underline">Blog</a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-8">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-fit bg-positivus-green rounded-lg px-1 py-1 mb-8">
                        <label className="font-medium text-lg">Contact us:</label>
                    </div>
                    <p className="text-base mb-4 text-white">
                        Email: info@positivus.com
                    </p>
                    <p className="text-base mb-4 text-white">Phone: 555-567-8901</p>
                    <p className="text-base text-white">Address: 1234 Main St</p>
                    <p className="text-base text-white">Moonstone City, Stardust State 12345</p>
                </div>
            </div>
            <div className="flex flex-col justify-center bg-[#292A32] px-8 py-8 gap-5 rounded-xl mb-8">
                <div className="max-w-sm">
                    <input type="email" id="input-email-newsletter"
                        className="py-5 px-8 block w-full bg-[#292A32] border-gray-300 text-white rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Email" />
                </div>
                <button type="button"
                    className="w-full max-w-sm py-5 px-8 inline-flex justify-center items-center text-center text-xl rounded-xl border border-transparent bg-positivus-green text-black hover:bg-lime-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                    <span>Subscribe to news</span>
                </button>
            </div>
            <div className="flex flex-row justify-center items-center gap-5 mb-8">
                <Image src="/images/linkedin-logo-black.svg" width={32} height={32} className="object-contain w-8 h-8" alt="LinkedIn Logo" />
                <Image src="/images/facebook-logo-black.svg" width={32} height={32} className="object-contain w-8 h-8" alt="Facebook Logo" />
                <Image src="/images/twitter-logo-black.svg" width={32} height={32} className="object-contain w-8 h-8" alt="Twitter Logo" />
            </div>
            <div className="h-[1px] bg-white mb-8"></div>
            <div className="flex flex-col justify-center items-center gap-4 mb-6">
                <p className="text-base text-white">© 2023 Positivus. All Rights Reserved.</p>
                <a href="#" className="underline text-base text-white">Privacy Policy</a>
            </div>
        </motion.div>
    )
}

const Footer = () => {
    return (
        <>
            <DesktopFooter />
            <MobileFooter />
        </>
    )
}

export default Footer;