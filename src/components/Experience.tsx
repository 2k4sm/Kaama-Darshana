import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


function Experience() {
    return (
        <div id="experience" className="bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit p-5 md:p-20 pt-36 max-w-screen flex flex-col justify-center items-center">
            <div className="text-7xl md:text-9xl font-mono font-bold text-[#FFFF]">
                <p>My Experience</p>
            </div>
            <Accordion type="single" collapsible className="w-full xl:w-[75%] m-6">
                <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="bg-[#420d78] m-2 rounded-lg p-5 text-slate-100">Is it accessible?</AccordionTrigger>
                    <AccordionContent className="bg-[#170f1fc9] m-2 rounded-lg p-5 text-slate-100">
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b-0">
                    <AccordionTrigger className="bg-[#420d78] m-2 rounded-lg p-5 text-slate-100">Is it styled?</AccordionTrigger>
                    <AccordionContent className="bg-[#170f1fc9] m-2 rounded-lg p-5 text-slate-100">
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b-0">
                    <AccordionTrigger className="bg-[#420d78] m-2 rounded-lg p-5 text-slate-100">Is it animated?</AccordionTrigger>
                    <AccordionContent className="bg-[#170f1fc9] m-2 rounded-lg p-5 text-slate-100">
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Experience;