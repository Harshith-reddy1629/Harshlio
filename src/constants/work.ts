import Kyno from "@/icons/Companies/Kyno";
import PC from "@/icons/Companies/PC";
import Popng from "@/icons/Companies/Popng";

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
    about:
      "PureCode.ai is an AI-driven developer platform focused on accelerating enterprise software development. It helps teams modernize legacy code, automate coding tasks, and maintain high standards of security and scalability to deliver efficient, reliable web applications.",
    description:
      "At PureCode, I spearheaded the integration of Stripe for seamless, secure payment processing and MailerLite for dynamic email automation, driving higher user engagement. Optimized the platform’s UI/UX, ensuring responsiveness and performance across all devices. Successfully resolved over 200 bugs, significantly improving application stability and overall user experience.",
    my_experience: {
      desc: "At PureCode, I contributed as a full-stack developer focused on building robust, scalable web applications using React.js, Next.js, Node.js, and MongoDB. My role spanned:",
      points: {
        "Payment Integration":
          "Implemented seamless and secure Stripe payment gateways, improving transaction reliability and user trust.",
        "Email Automation":
          "Integrated MailerLite for automated campaigns and transactional messaging, enhancing user engagement.",
        "Feature Delivery & Stability":
          "Fixed over 100 bugs, optimized UI/UX in collaboration with designers, and elevated platform responsiveness and accessibility across devices.",
        "Backend & Security":
          "Participated in backend API design, prioritizing security and high performance, and ensured smooth coordination between frontend and backend teams.",
        "Continuous Improvement":
          "Focused on applying best development practices for scalability, maintainability, and future growth of PureCode’s platforms.",
      },
    },
  },
  {
    name: "Kyno Health",
    role: "Freelance",
    date: "",
    icon: Kyno,
    skillsOverview: [
      "React.js",
      "Razorpay",
      "Google Maps API",
      "Bootstrap",
      "CSS",
    ],
    about:
      "Kyno Health is an innovative healthcare startup committed to simplifying access to medical professionals by leveraging technology for online appointment scheduling, payment integration, and real-time location services.",
    description:
      "At Kyno Health, developed an intuitive doctor booking system, integrating Razorpay for smooth and secure payment processing. Incorporated Google Maps API to display real-time locations and availability, enhancing user convenience. Designed a responsive, user-friendly interface to ensure seamless accessibility across all devices and platforms.",

    my_experience: {
      desc: "During my freelance engagement with Kyno Health, I applied my expertise to develop a user-friendly, efficient, and scalable doctor booking system designed to enhance accessibility and streamline the appointment scheduling process.",
      points: {
        "Booking System Development":
          "Designed and built an easy-to-use appointment scheduling platform for patients and doctors, focusing on smooth UX with React.js and Material UI.",

        "Secure Payment Processing":
          "Integrated Razorpay to enable reliable and secure payments during bookings.",

        "Google Maps API":
          "Utilized the Google Maps API to display real-time locations and availability of doctors, enhancing user convenience and accessibility.",
        "Cross-Device Accessibility":
          "Developed a fully responsive interface, ensuring seamless functionality and accessibility on all devices.",
      },
    },
  },
  {
    name: "PopnGulpp",
    role: "Freelance (Full-stack)",
    date: "",
    link: "https://popngulpp.com",
    icon: Popng,
    skillsOverview: [
      "Next.js",
      "Typescript",
      "React Query",
      "TailwindCSS",
      "Shadcn UI",
      "Supabase",
      "EmailJS",
      "Google Docs API",
      "Vercel",
    ],
    about:
      "PopnGulpp is a vibrant soda brand platform designed to showcase the company’s identity, product flavors, and unique offerings. It also provides a structured way for potential distributors and dealers to connect with the brand through intuitive forms and automated workflows.",
    description:
      "I built PopnGulpp’s official brand showcase website from scratch, enabling the company to present its soda flavors, types, and brand story in a visually engaging, responsive platform. The application features integrated forms for distributor and dealer inquiries, automated email notifications, and secure data storage in Google Docs, ensuring smooth business operations alongside a clean, consumer-friendly design.",
    my_experience: {
      desc: "In this freelance engagement, I was responsible for building a polished brand showcase site that highlights PopnGulpp’s products while also serving as a business growth tool for dealer and distributor acquisition.",
      points: {
        "Architecture & Development":
          "Built the platform end-to-end using Next.js, ensuring performance, maintainability, and SEO optimization.",
        "Database & Authentication":
          "Utilized Supabase for real-time database operations and secure authentication.",
        "Form Handling & Automation":
          "Integrated EmailJS for instant email notifications and Google Docs API to save and organize form responses efficiently.",
        "State Management":
          "Implemented React Query for optimized server-state handling, improving app responsiveness and reducing unnecessary network calls.",
        "UI/UX & Deployment":
          "Designed with TailwindCSS for a sleek, modern look and deployed the platform on Vercel for reliability and scalability.",
      },
    },
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
