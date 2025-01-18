import Image from "next/image";

const RequestProposalCard = () => {
    return (
        <div className="relative flex flex-row rounded-3xl bg-positivus-grey px-16 mb-16 md:mb-36">
            <div className="flex flex-col items-center md:items-start py-16 gap-6">
                <h3 className="text-black font-medium text-center md:text-start text-2xl md:text-3xl max-w-lg">Let's make things happen
                </h3>
                <p className="text-black text-base md:text-lg text-center md:text-start max-w-lg">Contact us today to learn more about
                    how our digital marketing services can
                    help your business grow and succeed online.</p>
                <button type="button"
                    className="w-fit py-5 px-8 inline-flex items-center text-xl rounded-xl border border-transparent bg-positivus-dark text-white hover:bg-black focus:outline-none focus:bg-black disabled:opacity-50 disabled:pointer-events-none">
                    Get your free proposal
                </button>
            </div>
            <div className="hidden xl:inline-block absolute top-1/2 -translate-y-1/2 right-0 px-24">
                <Image alt="Proposal Section Illustration" src="/images/proposal-section-illustration.svg" width={384} height={384} className="w-96 h-auto object-contain" />
            </div>
        </div>
    );
};

export default RequestProposalCard;