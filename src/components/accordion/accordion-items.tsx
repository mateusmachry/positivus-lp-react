"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from "@/components/ui/accordion";
import { useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";

export type AccordionItemConfig = {
    index: string,
    title: string,
    description: string,
    isOpen: boolean,
};

const AccordionItems = ({ items }: { items: AccordionItemConfig[] }) => {
    const [accordionItems, setAccordionItems] = useState<AccordionItemConfig[]>(items);

    const handleAccordionItemClick = (index: string) => {
        setAccordionItems(prevItems => prevItems.map(item => ({
            ...item,
            isOpen: item.index === index ? !item.isOpen : false
        })));
    };

    return (
        <Accordion type="single" collapsible className="w-full" defaultValue="01">
            {
                accordionItems.map((item) => (
                    <AccordionItem key={item.index} value={item.index} className={`flex flex-col mb-8 px-8 md:px-16 py-5 md:py-10 border ${item.isOpen ? 'bg-positivus-green' : 'bg-positivus-grey'} border-black dark:border-white border-b-8 rounded-3xl shadow-sm`}>
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger onClick={() => handleAccordionItemClick(item.index)} className="flex flex-1 items-center justify-between">
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="text-black text-nowrap">
                                        <label className="font-medium text-3xl md:text-6xl">{item.index}</label>
                                    </div>
                                    <div className="text-black">
                                        <label className="font-medium text-lg md:text-3xl">{item.title}</label>
                                    </div>
                                </div>
                                <div className="relative inline-flex justify-center items-center size-[42px] md:size-[58px] text-sm font-semibold rounded-full border border-gray-800 bg-positivus-grey text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                                    {item.isOpen ? <Minus className="1.5em" /> : <Plus className="1.5em" />}
                                </div>
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionContent className="flex flex-col">
                            <div className="my-4 md:my-8 bg-positivus-dark h-[1px]"></div>
                            <p className="text-base md:text-lg font-medium">{item.description}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
};

export default AccordionItems;