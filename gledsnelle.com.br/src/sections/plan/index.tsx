import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { thematicAreasList } from "./data";

export function Plan() {
  return (
    <section className="bg-red-300 w-screen flex flex-col justify-end items-center pt-10 lg:pt-0">
      <div className="max-w-[1024px] h-min w-screen flex flex-col items-start justify-end gap-5 object-scale-down ">
        <h2 className="p-5 text-3xl font-extrabold text-white">Áreas Temáticas e Propostas</h2>
        <div className="flex justify-center w-full">
          <Accordion type="single" className="w-full">
            {thematicAreasList.map((thematicArea) => {
              return (
                <AccordionItem key={thematicArea.title} value={thematicArea.title} className="bg-white px-10">
                  <AccordionTrigger >
                    <div className="flex flex-col gap-3 justify-start items-start">
                      <div className="flex items-center gap-2">
                        <div className="bg-red-300 p-3 rounded-full">
                          {thematicArea.icon}
                        </div>
                        <h3 className="text-lg font-bold text-start">{thematicArea.title}</h3>
                      </div>
                      <p className="no-underline text-start text-sm">{thematicArea.specificObjective}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="">
                    <ul className="list-disc pl-5">
                      {thematicArea.proposals.map((proposal, index) => (
                        <li key={index}>{proposal}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
