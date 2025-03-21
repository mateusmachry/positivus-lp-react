"use client";
import { motion } from "motion/react";

type SectionHeaderProps = {
    title: string;
    description: string;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.0 }} viewport={{ once: true, amount: 0.8 }} className="flex flex-col md:flex-row gap-6 md:gap-10 items-center mb-10 md:mb-20">
            <div className="bg-positivus-green rounded-lg px-2 py-2">
                <label className="text-black font-medium text-4xl">{title}</label>
            </div>
            <p className="text-black text-center md:text-start text-base md:text-lg max-w-xl">{description}</p>
        </motion.div>
    )
}

export default SectionHeader;