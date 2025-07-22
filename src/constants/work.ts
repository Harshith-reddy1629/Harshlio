import Kyno from "@/icons/Companies/Kyno";
import PC from "@/icons/Companies/PC";

export const WORK_EXPERIENCE = [
  {
    name: "PureCode.ai",
    role: "Software Engineer",
    date: "2023-2025",
    link: "https://purecode.ai",
    icon: PC,
    skillsOverview: [
      "Nextjs",
      "Express",
      "Typescript",
      "Tailwind",
      "MongoDB",
      "Clerk",
      "Stripe",
      "MailerLite",
      "React-Query",
      "Zustand",
    ],
    description:
      "At PureCode, I spearheaded the integration of Stripe for seamless, secure payment processing and MailerLite for dynamic email automation, driving higher user engagement. Optimized the platform’s UI/UX, ensuring responsiveness and performance across all devices. Successfully resolved over 200 bugs, significantly improving application stability and overall user experience.",
  },
  {
    name: "Kyno Health",
    role: "Freelance",
    date: "",
    icon: Kyno,
    skillsOverview: ["React.js", "Razorpay" ,"Google Maps API", "Bootstrap",  "CSS",    ],
    description:
      "At Kyno Health, developed an intuitive doctor booking system, integrating Razorpay for smooth and secure payment processing. Incorporated Google Maps API to display real-time locations and availability, enhancing user convenience. Designed a responsive, user-friendly interface to ensure seamless accessibility across all devices and platforms.",
  },
];

export const PROJECTS_OVERVIEW = [
  {
    name: "PureCode.ai",
    link: "https://purecode.ai",
    icon: PC,
    skillsOverview: [
      "Nextjs",
      "Express",
      "Typescript",
      "Tailwind",
      "MongoDB",
      "Clerk",
      "Stripe",
      "MailerLite",
      "React-Query",
      "Zustand",
    ],
    points: [
      "Integrated payment gateways like Stripe and Paddle, enabling secure and efficient online transactions for a seamless user journey.",
      "Led the end-to-end design and redesign of the website, enhancing UI/UX, animations, and overall site performance.",
      "Collaborated with the team to ensure the website was responsive, adapting seamlessly across multiple devices and browsers, while prioritizing accessibility and performance.",
      "Focused on enhancing scalability and maintainability by applying best development practices, ensuring smooth future updates and enhancements",
    ],
  },

  {
    name: "Empyreanui",
    icon: Kyno,
    link: "https://empyreanui-core.vercel.app/",
    skillsOverview: [
      "Next.js",
      "Shadcn UI",
      "Typescript",
      "Tailwind",
      "MongoDB",
      "JWT",
      "Bcrypt",
    ],
    points: [
      "Handled complete user management, including user authentication, authorization, and login verification using JWT and bcrypt.",
      "Developed a user-friendly and responsive interface using React to ensure a seamless experience across different devices and screen sizes.",
      "Designed with scalability and maintainability in mind, utilizing best practices in both frontend and backend development to facilitate future updates and enhancements. bcrypt for secure password hashing.",
      "Built frontend and backend integrations in Next.js, ensuring seamless user flow and smooth login/logout functionality",
    ],
  },
];
