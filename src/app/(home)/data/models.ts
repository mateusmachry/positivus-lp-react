import { TeamMember } from "@/app/(home)/components/team";
import { Testimonial } from "@/app/(home)/components/testimonials";
import { AccordionItemConfig } from "@/components/accordion/accordionItems";

export const teamMembers: TeamMember[] = [
    {
        name: "John Smith",
        position: "CEO and Founder",
        imageUrl: "/images/team-person-1.png",
        description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
    },
    {
        name: "Jane Doe",
        position: "Director of Operations",
        imageUrl: "/images/team-person-2.png",
        description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
    },
    {
        name: "Michael Brown",
        position: "Senior SEO Specialist",
        imageUrl: "/images/team-person-3.png",
        description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    },
    {
        name: "Emily Johnson",
        position: "PPC Manager",
        imageUrl: "/images/team-person-4.png",
        description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
    },
    {
        name: "Brian Williams",
        position: "Social Media Specialist",
        imageUrl: "/images/team-person-5.png",
        description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
    },
    {
        name: "Sarah Kim",
        position: "Content Creator",
        imageUrl: "/images/team-person-6.png",
        description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
    }
];

export const testimonials: Testimonial[] = [
    {
        comment: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: 'John Smith',
        job: 'Marketing Director at XYZ Corp'
    },
    {
        comment: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: 'John Smith',
        job: 'Marketing Director at XYZ Corp'
    },
    {
        comment: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: 'John Smith',
        job: 'Marketing Director at XYZ Corp'
    },
];

export const accordionItems: AccordionItemConfig[] = ([
    {
        index: '01',
        title: 'Consultation',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: true
    },
    {
        index: '02',
        title: 'Research and Strategy Development',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
    {
        index: '03',
        title: 'Implementation',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
    {
        index: '04',
        title: 'Monitoring and Optimization',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
    {
        index: '05',
        title: 'Reporting and Communication',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
    {
        index: '06',
        title: 'Continual Improvement',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
]);