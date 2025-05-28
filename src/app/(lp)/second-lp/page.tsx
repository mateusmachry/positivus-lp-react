"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function SecondLP() {
    return (
        <div id="hero" className="grid grid-cols-1 md:grid-cols-2 my-16">
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col gap-8">
                <h1 className="text-black text-5xl xl:text-6xl max-w-xl font-medium">
                    H1 for Second LP
                </h1>
                <p className="text-black text-base xl:text-xl max-w-xl">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services
                    including SEO, PPC, social media marketing, and content creation.
                </p>
                <button type="button"
                    className="w-fit py-5 px-8 inline-flex items-center text-xl rounded-xl border border-transparent bg-positivus-dark text-white hover:bg-black focus:outline-none focus:bg-black disabled:opacity-50 disabled:pointer-events-none">
                    Book a consultation
                </button>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="hidden md:flex flex-col">
                <Image src="/images/hero-illustration.svg" alt="hero illustration" width={600} height={500} className="w-[600px] h-auto object-contain" />
            </motion.div>
        </div>
    );
}