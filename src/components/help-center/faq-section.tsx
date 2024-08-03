"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      "Yes, KisanWise offers a free basic plan with essential features. There are also premium plans available with advanced features and additional support.",
    highlight: [],
  },
  {
    question: "How does the AI chatbot work?",
    answer:
      "Our AI chatbot provides real-time assistance for your agricultural queries. It is trained on a vast dataset to offer accurate and helpful responses in multiple languages.",
    highlight: [],
  },
  {
    question: "Can I integrate KisanWise with other tools?",
    answer:
      "Yes, KisanWise can be integrated with various farming tools and platforms. Visit the Integrations section for detailed instructions.",
    highlight: [],
  },
  {
    question: "How do I manage my team on KisanWise?",
    answer:
      "You can add team members, assign roles, and monitor activities from the Teams & Billing section in your account settings.",
    highlight: [],
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at devjonescodes@gmail.com, or through the Contact Us page on our website.",
    highlight: ["devjonescodes@gmail.com"],
  },
  {
    question: "What should I do if I encounter a bug?",
    answer:
      "If you encounter a bug, please report it to our support team with detailed information about the issue. This helps us improve the platform.",
    highlight: [],
  },
  {
    question: "How do I update my billing information?",
    answer:
      "Go to the Billing section in your account settings to update your billing information and manage your subscription plans.",
    highlight: [],
  },
  {
    question: "Where can I find tutorials and guides?",
    answer:
      "Visit the Resource Library for a collection of articles, tutorials, and videos on various farming techniques and best practices.",
    highlight: [],
  },
];

export default function FaqSection() {
  return (
    <section className="relative my-16 flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-transparent" id="faq">
      <div className="z-10 flex flex-col items-center justify-center px-4">
        <p className="text-center text-xl font-semibold text-foreground md:text-2xl">
          FAQs
        </p>
        <p className="text-center text-xl font-bold text-foreground min-[385px]:text-2xl sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </p>
        <p className="mt-4 hidden text-center text-xs text-muted-foreground min-[550px]:block sm:text-sm md:text-base">
          Here are some of the most common questions we get.
        </p>
        <p className="mt-4 block text-balance text-center text-xs text-muted-foreground min-[550px]:hidden">
          Here are some of the most common questions we get.
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
