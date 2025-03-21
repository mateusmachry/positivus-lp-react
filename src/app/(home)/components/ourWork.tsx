import AccordionItems, { AccordionItemConfig } from "@/components/accordion/accordion-items";
import SectionHeader from "@/components/headers/section-header";

const OurWork = ({ accordionItems }: { accordionItems: AccordionItemConfig[] }) => {
    return (
        <div className="flex flex-col mb-16 md:mb-24">
            <SectionHeader title="Our Working Process" description="Step-by-Step Guide to Achieving Your Business Goals" />
            <AccordionItems items={accordionItems} />
        </div>
    );
};

export default OurWork;