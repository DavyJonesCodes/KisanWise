"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {
  Rocket,
  SquareMousePointer,
  Cog,
  ReceiptText,
  Waypoints,
  Wrench,
} from "lucide-react";

export default function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    const handleScroll = () => {
      const content = document.getElementById("popupcontent");
      if (content) {
        const scrollTop = content.scrollTop;
        const scrollHeight = content.scrollHeight;
        const clientHeight = content.clientHeight;

        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight;

        console.log(isAtTop, isAtBottom);

        content.classList.toggle("at-top", isAtTop);
        content.classList.toggle("at-bottom", isAtBottom);
      }
    };

    const content = document.getElementById("popupcontent");
    if (content) {
      content.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    const helpHeroSection = document.getElementById("helpherosection");
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";
      helpHeroSection ? (helpHeroSection.style.overflow = "visible") : "";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "";
      helpHeroSection ? (helpHeroSection.style.overflow = "hidden") : "";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (content) {
        content.removeEventListener("scroll", handleScroll);
      }
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="relative mb-16 w-full">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative flex h-full w-full flex-col overflow-hidden bg-popover md:h-fit md:max-h-[85%] md:max-w-[600px] md:rounded-xl"
            >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full md:hidden"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <div className="flex w-full items-center justify-center py-8 md:py-16">
                  {active.icon()}
                </div>
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-xl font-semibold text-foreground"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-base text-muted-foreground"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative m-4 overflow-hidden">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full max-h-[calc(100dvh-16rem)] flex-col items-start gap-4 overflow-auto text-sm text-muted-foreground [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:h-full md:max-h-96 lg:text-base"
                    id="popupcontent"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto grid w-full max-w-md grid-cols-1 items-start gap-4 p-4 md:max-w-6xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="flex h-full cursor-pointer flex-col rounded-xl bg-popover p-4 transition-colors hover:bg-muted"
          >
            <div className="flex w-full flex-col gap-4">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <div className="flex w-full items-center justify-center py-8">
                  {card.icon()}
                </div>
              </motion.div>
              <div className="flex flex-col items-center justify-center gap-2">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-center text-xl font-semibold text-foreground"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-balance text-center text-base text-muted-foreground"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Getting Started",
    description: "Set up your KisanWise account and start managing your farm.",
    icon: () => {
      return <Rocket className="h-16 w-16" />;
    },
    content: () => {
      return (
        <>
          <p>
            Please note: The following content is generated as a placeholder and
            may or may not be relevant to the actual features of KisanWise.
          </p>
          <p>
            Welcome to KisanWise! Follow these steps to set up your account and
            start managing your farm effectively.
          </p>
          <ol className="list-decimal space-y-4 pl-8">
            <li>
              <strong>Create Your Account:</strong> Visit our registration page
              and sign up with your email address. Complete the registration
              process by verifying your email.&nbsp;
              <span className="text-primary">
                Important: Use a valid email address for verification.
              </span>
            </li>
            <li>
              <strong>Set Up Your Profile:</strong> Fill in your profile
              details, including your farm's location, type of crops you grow,
              and other essential information to tailor the experience to your
              needs.&nbsp;
              <span className="text-primary">
                Ensure all information is accurate for the best recommendations.
              </span>
            </li>
            <li>
              <strong>Add Your Farm:</strong> Use the 'Add Farm' feature to
              input details about your farm. You can add multiple farms if you
              manage more than one. Include details such as farm size, soil
              type, and irrigation methods.
            </li>
            <li>
              <strong>Track Your Crops:</strong> Start by adding the crops you
              are currently growing. Use the dashboard to monitor their growth
              stages, health, and other crucial parameters.&nbsp;
              <span className="text-primary">
                Regular updates help in accurate tracking.
              </span>
            </li>
            <li>
              <strong>Utilize Resources:</strong> Explore the resources section
              for best practices, farming techniques, and tips to improve your
              yield. Check out the articles, videos, and tutorials available to
              enhance your farming knowledge.
            </li>
            <li>
              <strong>Connect with Experts:</strong> Join our community forums
              to connect with other farmers and experts. Share your experiences,
              ask questions, and get advice on various farming-related topics.
            </li>
            <li>
              <strong>Use Smart Tools:</strong> Leverage KisanWise's smart tools
              such as weather forecasting, pest and disease alerts, and market
              price updates.&nbsp;
              <span className="text-primary">Stay informed and proactive.</span>
            </li>
            <li>
              <strong>Analyze Your Data:</strong> Regularly analyze the data
              collected from your farm to make informed decisions. Use the
              analytics dashboard to track your progress and identify areas for
              improvement.
            </li>
            <li>
              <strong>Plan Ahead:</strong> Use the planning tools to prepare for
              upcoming seasons. Plan your crop rotations, purchase seeds and
              inputs in advance, and schedule farm activities to ensure smooth
              operations.
            </li>
            <li>
              <strong>Get Support:</strong> If you encounter any issues, visit
              our support center or contact our customer service for assistance.
              Our team is here to help you with any questions or problems you
              may have.
            </li>
          </ol>
          <p>
            By following these steps, you'll be well on your way to efficiently
            managing your farm with KisanWise. Our comprehensive tools and
            resources are designed to support you at every stage of your farming
            journey.
          </p>
          <p>
            Remember, successful farming is not just about hard work but also
            about making informed decisions. Leverage KisanWise to enhance your
            productivity and achieve better yields.
          </p>
          <p>
            Thank you for choosing KisanWise. We are excited to be a part of
            your farming journey!
          </p>
        </>
      );
    },
  },
  {
    title: "Using KisanWise",
    description:
      "Guidelines and best practices to make the most out of KisanWise.",
    icon: () => {
      return <SquareMousePointer className="h-16 w-16" />;
    },
    content: () => {
      return (
        <>
          <p>
            Please note: The following content is generated as a placeholder and
            may or may not be relevant to the actual features of KisanWise.
          </p>
          <p>
            Once your account is set up, it's time to make the most out of
            KisanWise. Follow these guidelines and best practices to maximize
            your efficiency.
          </p>
          <ol className="list-decimal space-y-4 pl-8">
            <li>
              <strong>Dashboard Overview:</strong> Familiarize yourself with the
              KisanWise dashboard. It provides a comprehensive view of your
              farm's activities, crop health, and important alerts.&nbsp;
              <span className="text-primary">Check it daily for updates.</span>
            </li>
            <li>
              <strong>Monitor Crop Health:</strong> Regularly update the status
              of your crops. Use the health tracking features to monitor growth
              stages, detect issues early, and apply necessary treatments.
            </li>
            <li>
              <strong>Weather Forecasts:</strong> Utilize the weather
              forecasting tool to plan your farming activities. Accurate weather
              predictions help in scheduling planting, irrigation, and
              harvesting.&nbsp;
              <span className="text-primary">
                Stay ahead by checking forecasts daily.
              </span>
            </li>
            <li>
              <strong>Pest and Disease Alerts:</strong> KisanWise provides
              real-time alerts for pests and diseases. Act promptly on these
              alerts to protect your crops and minimize damage.
            </li>
            <li>
              <strong>Market Price Updates:</strong> Keep track of current
              market prices for your crops. This information helps you make
              informed decisions about when to sell your produce to get the best
              price.
            </li>
            <li>
              <strong>Resource Library:</strong> Explore the extensive resource
              library. It contains articles, tutorials, and videos on various
              farming techniques, crop management, and best practices.&nbsp;
              <span className="text-primary">
                Continuous learning is key to success.
              </span>
            </li>
            <li>
              <strong>Community Forums:</strong> Join the KisanWise community
              forums to connect with fellow farmers and experts. Share your
              experiences, ask questions, and get valuable advice.
            </li>
            <li>
              <strong>Custom Reports:</strong> Generate custom reports to
              analyze your farm's performance. Use these reports to identify
              trends, measure productivity, and make data-driven decisions.
            </li>
            <li>
              <strong>Mobile Access:</strong> Access KisanWise on the go with
              the mobile app. Manage your farm from anywhere, anytime.&nbsp;
              <span className="text-primary">
                Download the app for convenience.
              </span>
            </li>
            <li>
              <strong>Support and Help:</strong> If you need assistance, the
              KisanWise support team is here to help. Access the help center for
              FAQs, guides, and contact information.
            </li>
          </ol>
          <p>
            By following these best practices, you'll harness the full potential
            of KisanWise to improve your farm's productivity and efficiency.
            Stay engaged, keep learning, and make informed decisions to achieve
            the best results.
          </p>
        </>
      );
    },
  },

  {
    title: "Settings & Preferences",
    description: "Adjust notifications, set up profiles, and manage settings.",
    icon: () => {
      return <Cog className="h-16 w-16" />;
    },
    content: () => {
      return (
        <>
          <p>
            Please note: The following content is generated as a placeholder and
            may or may not be relevant to the actual features of KisanWise.
          </p>
          <p>
            Once your account is set up, it's time to make the most out of
            KisanWise. Follow these guidelines and best practices to maximize
            your efficiency.
          </p>
          <ol className="list-decimal space-y-4 pl-8">
            <li>
              <strong>Dashboard Overview:</strong> Familiarize yourself with the
              KisanWise dashboard. It provides a comprehensive view of your
              farm's activities, crop health, and important alerts.&nbsp;
              <span className="text-primary">Check it daily for updates.</span>
            </li>
            <li>
              <strong>Monitor Crop Health:</strong> Regularly update the status
              of your crops. Use the health tracking features to monitor growth
              stages, detect issues early, and apply necessary treatments.
            </li>
            <li>
              <strong>Weather Forecasts:</strong> Utilize the weather
              forecasting tool to plan your farming activities. Accurate weather
              predictions help in scheduling planting, irrigation, and
              harvesting.&nbsp;
              <span className="text-primary">
                Stay ahead by checking forecasts daily.
              </span>
            </li>
            <li>
              <strong>Pest and Disease Alerts:</strong> KisanWise provides
              real-time alerts for pests and diseases. Act promptly on these
              alerts to protect your crops and minimize damage.
            </li>
            <li>
              <strong>Market Price Updates:</strong> Keep track of current
              market prices for your crops. This information helps you make
              informed decisions about when to sell your produce to get the best
              price.
            </li>
            <li>
              <strong>Resource Library:</strong> Explore the extensive resource
              library. It contains articles, tutorials, and videos on various
              farming techniques, crop management, and best practices.&nbsp;
              <span className="text-primary">
                Continuous learning is key to success.
              </span>
            </li>
            <li>
              <strong>Community Forums:</strong> Join the KisanWise community
              forums to connect with fellow farmers and experts. Share your
              experiences, ask questions, and get valuable advice.
            </li>
            <li>
              <strong>Custom Reports:</strong> Generate custom reports to
              analyze your farm's performance. Use these reports to identify
              trends, measure productivity, and make data-driven decisions.
            </li>
            <li>
              <strong>Mobile Access:</strong> Access KisanWise on the go with
              the mobile app. Manage your farm from anywhere, anytime.&nbsp;
              <span className="text-primary">
                Download the app for convenience.
              </span>
            </li>
            <li>
              <strong>Support and Help:</strong> If you need assistance, the
              KisanWise support team is here to help. Access the help center for
              FAQs, guides, and contact information.
            </li>
          </ol>
          <p>
            By following these best practices, you'll harness the full potential
            of KisanWise to improve your farm's productivity and efficiency.
            Stay engaged, keep learning, and make informed decisions to achieve
            the best results.
          </p>
        </>
      );
    },
  },
  {
    title: "Teams & Billing",
    description: "Manage your workspace settings and members.",
    icon: () => {
      return <ReceiptText className="h-16 w-16" />;
    },
    content: () => {
      return (
        <>
          <p>
            Please note: The following content is generated as a placeholder and
            may or may not be relevant to the actual features of KisanWise.
          </p>
          <p>
            Managing your workspace settings and team members effectively is
            crucial for the smooth operation of your farm. Here's how to handle
            your teams and billing in KisanWise.
          </p>
          <ol className="list-decimal space-y-4 pl-8">
            <li>
              <strong>Add Team Members:</strong> Invite your team members to
              join your KisanWise workspace. Provide them with appropriate roles
              and permissions to ensure they have access to the tools they need.
            </li>
            <li>
              <strong>Assign Roles and Permissions:</strong> Customize the
              access levels for each team member based on their
              responsibilities. Ensure that sensitive information is only
              accessible to authorized personnel.&nbsp;
              <span className="text-primary">
                Proper role assignment is key to security.
              </span>
            </li>
            <li>
              <strong>Monitor Team Activity:</strong> Keep track of the
              activities of your team members within KisanWise. Regularly review
              logs and reports to ensure that tasks are being completed
              efficiently.
            </li>
            <li>
              <strong>Manage Billing Information:</strong> Keep your billing
              details up to date to avoid any service interruptions. Ensure that
              your payment methods are valid and that your subscription is
              active.&nbsp;
              <span className="text-primary">
                Regularly check your billing statements.
              </span>
            </li>
            <li>
              <strong>Subscription Plans:</strong> Choose the subscription plan
              that best fits your farm's needs. Review the features and benefits
              of each plan to make an informed decision.
            </li>
            <li>
              <strong>Review Billing Statements:</strong> Regularly review your
              billing statements to ensure that all charges are accurate. Report
              any discrepancies to the KisanWise support team immediately.
            </li>
            <li>
              <strong>Set Budget Limits:</strong> Establish budget limits for
              different farm activities and monitor expenses to stay within your
              budget. Use KisanWise's budgeting tools to track and manage your
              finances effectively.
            </li>
            <li>
              <strong>Generate Invoices:</strong> Easily generate invoices for
              your farm's services or products. Customize invoice templates to
              match your branding and send them directly from KisanWise.
            </li>
            <li>
              <strong>Access Support:</strong> If you have any questions or
              issues related to billing or team management, reach out to
              KisanWise's support team for assistance. They are available to
              help you resolve any concerns.
            </li>
          </ol>
          <p>
            By effectively managing your teams and billing, you can ensure
            smooth operations and financial stability for your farm. Utilize the
            tools and features provided by KisanWise to stay organized and
            efficient.
          </p>
        </>
      );
    },
  },
  {
    title: "Integrations",
    description: "Integrate with other tools and platforms.",
    icon: () => {
      return <Waypoints className="h-16 w-16" />;
    },
    content: () => {
      return (
        <>
          <p>
            Please note: The following content is generated as a placeholder and
            may or may not be relevant to the actual features of KisanWise.
          </p>
          <p>
            Integrating KisanWise with other tools and platforms can enhance
            your farming operations by consolidating data and streamlining
            workflows. Here's how to manage integrations effectively.
          </p>
          <ol className="list-decimal space-y-4 pl-8">
            <li>
              <strong>Connect to Third-Party Tools:</strong> Link KisanWise with
              other farming tools and platforms you use. This integration allows
              for seamless data flow and better management of farm
              activities.&nbsp;
              <span className="text-primary">
                Ensure compatibility before connecting.
              </span>
            </li>
            <li>
              <strong>API Access:</strong> Utilize the KisanWise API to create
              custom integrations with your existing software. The API
              documentation provides detailed instructions on how to set up and
              use the API.&nbsp;
              <span className="text-primary">
                Consult the API guide for more details.
              </span>
            </li>
            <li>
              <strong>Data Import and Export:</strong> Easily import data from
              other systems into KisanWise and export your farm data for use in
              external applications. This functionality helps in maintaining
              consistency across platforms.
            </li>
            <li>
              <strong>Automate Workflows:</strong> Set up automated workflows
              between KisanWise and other tools to save time and reduce manual
              effort. Automation can include tasks like updating crop records,
              scheduling activities, and generating reports.&nbsp;
              <span className="text-primary">
                Automation enhances efficiency.
              </span>
            </li>
            <li>
              <strong>Monitor Integration Health:</strong> Regularly check the
              status of your integrations to ensure they are functioning
              correctly. Address any issues promptly to avoid disruptions in
              your farm management processes.
            </li>
            <li>
              <strong>Security and Permissions:</strong> Ensure that all
              integrations comply with your farm's security policies. Grant
              appropriate permissions to external tools and monitor access to
              sensitive data.&nbsp;
              <span className="text-primary">Security is paramount.</span>
            </li>
            <li>
              <strong>Update Integrations:</strong> Keep your integrations
              up-to-date with the latest versions of KisanWise and third-party
              tools. Regular updates help in maintaining compatibility and
              leveraging new features.
            </li>
            <li>
              <strong>Training and Support:</strong> Provide training to your
              team on how to use integrated tools effectively. Reach out to
              KisanWise support for any assistance needed in setting up or
              troubleshooting integrations.
            </li>
            <li>
              <strong>Feedback and Improvements:</strong> Share your feedback on
              integration experiences with the KisanWise team. Suggest
              improvements or request new integrations that can further enhance
              your farming operations.
            </li>
            <li>
              <strong>Documentation:</strong> Keep detailed documentation of all
              integrations, including setup steps, configuration settings, and
              troubleshooting tips. Good documentation ensures smooth
              transitions and easier management.
            </li>
          </ol>
          <p>
            By effectively managing your integrations, you can streamline your
            farm operations and ensure that all your tools work together
            seamlessly. Utilize KisanWise's integration features to maximize
            productivity and efficiency.
          </p>
        </>
      );
    },
  },
  {
    title: "Troubleshooting",
    description: "Find answers to common issues and questions.",
    icon: () => {
      return <Wrench className="h-16 w-16" />;
    },
    content: () => {
      return (
        <>
          <p>
            Please note: The following content is generated as a placeholder and
            may or may not be relevant to the actual features of KisanWise.
          </p>
          <p>
            Encountering issues while using KisanWise? Follow these
            troubleshooting steps to resolve common problems and ensure smooth
            operation of your farm management tasks.
          </p>
          <ol className="list-decimal space-y-4 pl-8">
            <li>
              <strong>Check Your Internet Connection:</strong> Ensure that your
              device is connected to a stable internet connection. Many issues
              can be resolved by simply reconnecting to the internet.&nbsp;
              <span className="text-primary">
                A stable connection is crucial.
              </span>
            </li>
            <li>
              <strong>Update Your Browser:</strong> Make sure you are using the
              latest version of your web browser. KisanWise is optimized for
              modern browsers, and updates often fix compatibility issues.&nbsp;
              <span className="text-primary">
                Keep your browser up-to-date.
              </span>
            </li>
            <li>
              <strong>Clear Cache and Cookies:</strong> Sometimes, clearing your
              browser's cache and cookies can resolve loading and performance
              issues. This step helps in refreshing stored data that might be
              causing problems.
            </li>
            <li>
              <strong>Check for Software Updates:</strong> Ensure that your
              KisanWise app and any integrated tools are updated to the latest
              versions. Updates often include bug fixes and performance
              improvements.
            </li>
            <li>
              <strong>Review Error Messages:</strong> Pay attention to any error
              messages displayed. These messages can provide clues about the
              nature of the issue and how to resolve it.
            </li>
            <li>
              <strong>Consult the Help Center:</strong> Visit the KisanWise Help
              Center for troubleshooting guides and FAQs. The Help Center covers
              a wide range of common issues and their solutions.&nbsp;
              <span className="text-primary">Utilize available resources.</span>
            </li>
            <li>
              <strong>Contact Support:</strong> If you cannot resolve the issue
              on your own, reach out to KisanWise customer support. Provide
              detailed information about the problem to get the best
              assistance.&nbsp;
              <span className="text-primary">Support is here to help.</span>
            </li>
            <li>
              <strong>Check System Requirements:</strong> Verify that your
              device meets the system requirements for running KisanWise.
              Incompatible hardware or software can cause unexpected issues.
            </li>
            <li>
              <strong>Reinstall the Application:</strong> If you're experiencing
              persistent issues, try reinstalling the KisanWise application.
              This can resolve corrupted files or installation problems.
            </li>
            <li>
              <strong>Report Bugs:</strong> If you encounter a bug, report it to
              the KisanWise team. Your feedback helps improve the platform and
              ensures that issues are addressed in future updates.
            </li>
          </ol>
          <p>
            By following these troubleshooting steps, you can resolve most
            common issues and maintain the smooth operation of KisanWise. If you
            need further assistance, the KisanWise support team is always ready
            to help.
          </p>
        </>
      );
    },
  },
];
