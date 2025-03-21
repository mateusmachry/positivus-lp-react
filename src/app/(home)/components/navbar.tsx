"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const NavBar = () => {
    return (
        <motion.nav initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} className="flex flex-row justify-between items-center mt-8 xl:mt-16">
            <Image alt="logo positivus" src='/images/logo-black.png' width={440} height={72} className="w-36 xl:w-56 h-auto object-contain" />
            <div className="hidden md:flex flex-row items-center gap-5 xl:gap-10">
                <a href="#" className="text-black text-base xl:text-xl hover:underline">
                    About us
                </a>
                <a href="#" className="text-black text-base xl:text-xl hover:underline">
                    Services
                </a>
                <a href="#" className="text-black text-base xl:text-xl hover:underline">
                    Use Cases
                </a>
                <a href="#" className="text-black text-base xl:text-xl hover:underline">
                    Pricing
                </a>
                <a href="#" className="text-black text-base xl:text-xl hover:underline">
                    Blog
                </a>
                <button type="button"
                    className="py-2.5 xl:py-5 px-4 xl:px-8 inline-flex items-center text-base xl:text-xl rounded-xl border border-gray-800 text-black bg-transparent hover:bg-neutral-100 hover:ring-1 hover:ring-black focus:outline-none transition-all disabled:opacity-50 disabled:pointer-events-none">
                    Request a quote
                </button>
            </div>
            <button className="inline-block md:hidden text-black hover:text-gray-600">
                <Menu size="2em" color="currentColor" />
            </button>
        </motion.nav>
    );
};

export default NavBar;