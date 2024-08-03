"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const questions = [
  {
    question: "What is KisanWise?",
    answer:
      "KisanWise is an AI-powered platform providing personalized agricultural advice, real-time assistance, and resources to support farmers.",
    highlight: [],
  },
  {
    question: "How do I get started with KisanWise?",
    answer:
      "Sign up on our homepage and follow the prompts to input your crop details for personalized advice.",
    highlight: [],
  },
  {
    question: "Is KisanWise free to use?",
    answer:
      "Yes, KisanWise is completely free to use, offering all features without any cost.",
    highlight: [],
  },
  {
    question: "How does the AI chatbot work?",
    answer:
      "Our AI chatbot provides real-time assistance for your agricultural queries in multiple languages.",
    highlight: [],
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at devjonescodes@gmail.com, or through the Contact Us page on our website.",
    highlight: ["devjonescodes@gmail.com"],
  },
];

export default function FaqSection() {
  return (
    <section className="relative my-16 flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-background">
      <div className="z-10 flex flex-col items-center justify-center px-4">
        <p className="text-center text-xl font-semibold text-foreground md:text-2xl">
          FAQs
        </p>
        <p className="text-center text-xl font-bold text-foreground min-[385px]:text-2xl sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </p>
        <p className="mt-4 hidden text-center text-xs text-muted-foreground min-[550px]:block sm:text-sm md:text-base">
          Need help with something? Here are some of the most common questions
          we get. <br />
          Can't find what you're looking for?&nbsp;
          <Link
            href="/help-center"
            className="underline transition-colors hover:text-foreground/80"
          >
            Take a look at our Help Center.
          </Link>
        </p>
        <p className="mt-4 block text-balance text-center text-xs text-muted-foreground min-[550px]:hidden">
          Need help with something? Here are some of the most common questions
          we get. Can't find what you're looking for?
          <br />
          <Link
            href="/help-center"
            className="underline transition-colors hover:text-foreground/80"
          >
            Take a look at our Help Center.
          </Link>
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="z-10 w-full max-w-xl px-8"
      >
        {questions.map(
          (item, i) =>
            item.question && (
              <AccordionItem key={i} value={`item-${i + 1}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.highlight.length > 0
                    ? item.highlight.reduce<React.ReactNode[]>(
                        (acc, highlight) => {
                          return acc.flatMap((part, index) =>
                            typeof part === "string"
                              ? part
                                  .split(highlight)
                                  .reduce<
                                    React.ReactNode[]
                                  >((innerAcc, subPart, subIndex, array) => {
                                    return innerAcc.concat(
                                      subPart,
                                      subIndex < array.length - 1 ? (
                                        <a
                                          key={`${index}-${subIndex}`}
                                          href={`mailto:${highlight}`}
                                          className="text-primary"
                                        >
                                          {highlight}
                                        </a>
                                      ) : (
                                        []
                                      ),
                                    );
                                  }, [])
                              : part,
                          );
                        },
                        [item.answer],
                      )
                    : item.answer}
                </AccordionContent>
              </AccordionItem>
            ),
        )}
      </Accordion>
    </section>
  );
}
