import SectionHeader from "@/components/headers/sectionHeader";
import Image from "next/image";

export type TeamMember = {
    name: string;
    position: string;
    imageUrl: string;
    description: string;
}

const Team = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
    return (
        <div className="flex flex-col mb-12 md:mb-24">
            <SectionHeader title="Team" description="Meet the skilled and experienced team behind our successful digital
                    marketing strategies" />
            <div className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
                    {
                        teamMembers.map((member, index) => (
                            <div key={`member-${index}`}
                                className="flex flex-col p-10 border bg-white border-black hover:shadow-xl dark:border-white border-b-8 rounded-3xl shadow-sm">
                                <div className="relative flex flex-row gap-5">
                                    <Image src={member.imageUrl} alt={member.name} width={96} height={96} className="object-contain w-24 h-auto" />
                                    <div className="self-start flex flex-col gap-0 me-4">
                                        <label className="font-medium text-lg md:text-xl">{member.name}</label>
                                        <span className="text-base md:text-lg">{member.position}</span>
                                    </div>
                                    <Image src="/images/icon-linkedin.svg" alt="LinkedIn" width={32} height={32} className="absolute top-0 right-0 object-contain w-8 h-8" />
                                </div>
                                <div className="h-[1px] bg-positivus-dark my-6"></div>
                                <p className="text-base md:text-lg">{member.description}</p>
                            </div>
                        ))
                    }
                </div>
                <button type="button"
                    className="self-start md:self-end w-full md:w-fit py-5 px-8 inline-flex justify-center items-center text-xl rounded-xl border border-transparent bg-positivus-dark text-white hover:bg-black focus:outline-none focus:bg-black disabled:opacity-50 disabled:pointer-events-none">
                    See all team
                </button>
            </div>
        </div>
    );
};

export default Team;