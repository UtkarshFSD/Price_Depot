const services = [
    {
        title: "ReactJS Development",
        description: "Expert ReactJS development services to build dynamic user interfaces and single-page applications with optimal performance and scalability.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
    },
    {
        title: "Next.js Custom Solutions",
        description: "Tailored Next.js solutions leveraging server-side rendering and static site generation for fast, SEO-friendly web applications.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
    },
    {
        title: "React Native Mobile Apps",
        description: "Create seamless, native-like mobile applications for both Android and iOS platforms using React Native, ensuring high performance and user engagement.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
    },
    {
        title: "JavaScript & Node.js Integration",
        description: "Utilize the full power of JavaScript and Node.js for building scalable and efficient back-end services, APIs, and real-time applications.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
    },
    {
        title: "TypeScript Development",
        description: "Enhance your development process with TypeScript for safer code, better maintainability, and developer productivity in your React and Node.js projects.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
    },
    {
        title: "Custom Software Solutions",
        description: "Bespoke software development utilizing the latest in web technologies including ReactJS, Next.js, Node.js, and more to solve unique business challenges.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`,
    },
];

const portfolioCaseStudy = [
    {
        bannerImageUrl: "https://appinventiv.com/wp-content/uploads/2023/09/ikea-port-banner-new.webp",
        name: "IKEA",
        description: "Deploying IoT-powered kiosks integrated with a custom ERP solution, we enhanced IKEA’s customer onboarding, product exploration, and data-driven marketing.",
        caseDataNumber: [
            {
                number: "7+",
                description: "IKEA Stores Deployed The Solution"
            },
            {
                number: "#1",
                description: "Marketing Asset for IKEA Stores"
            },
        ]
    },
    {
        bannerImageUrl: "https://appinventiv.com/wp-content/uploads/2023/09/jobget-banner-image.webp",
        name: "JobGet",
        description: "A dedicated marketplace that connects blue-collar workers with employers in semi real-time, reducing the job search time from months to days.",
        caseDataNumber: [
            {
                number: "$52 Million",
                description: "Raised in Funding"
            },
            {
                number: "2 Million+",
                description: "Mobile App Downloads"
            },
        ]
    },
    {
        bannerImageUrl: "https://appinventiv.com/wp-content/uploads/2023/09/adidas-banner.webp",
        name: "Adidas",
        description: "Launching a dedicated, intuitive eCommerce mobile app for Adidas, we enriched the shopping experience and amplified reach among sports enthusiasts.",
        caseDataNumber: [
            {
                number: "2 Million+",
                description: "Mobile App Downloads"
            },
            {
                number: "500K+",
                description: "New Users Acquired"
            },
        ]
    },
]

const portfolioEliteBrands = {
    heading: "Add your brand's success story to our exhaustive global list of elite brands",
    logos: [
        {
            logo: "https://appinventiv.com/wp-content/uploads/2023/09/kfc-logo.svg",
            alternate: "KFC logo"
        },
        {
            logo: "https://appinventiv.com/wp-content/uploads/2023/09/ikea-logo-new.svg",
            alternate: "ikea logo"
        },
        {
            logo: "https://appinventiv.com/wp-content/uploads/2023/09/adidas-port-logo-new.svg",
            alternate: "Adidas logo"
        },
        {
            logo: "https://appinventiv.com/wp-content/uploads/2023/09/GoI.svg",
            alternate: "Govt. of India logo"
        },
        {
            logo: "https://appinventiv.com/wp-content/uploads/2023/09/dominos-icon.svg",
            alternate: "Dominos logo"
        }
    ],
    buttonText: "Join the Club"
}

const portfolioCaseStudyBottom = [
    {
        bannerImageUrl: "https://appinventiv.com/wp-content/uploads/2023/09/dominos-banner-1.webp",
        name: "Domino's",
        description: "Refining UI/UX Strategy for an enhanced mobile experience that tackles the brand’s complex user journey and dwindling conversion rate.",
        caseDataNumber: [
            {
                number: "23%",
                description: "Higher Conversion Rate"
            },
            {
                number: "4.4",
                description: "Average Rating on Stores"
            },
        ]
    },
    {
        bannerImageUrl: "https://appinventiv.com/wp-content/uploads/2023/09/hukoomi-banner.png",
        name: "Hukoomi",
        description: "A comprehensive web app connecting the Qatar Government with its netizens by offering them a single point of information about living, traveling, or working in the country.",
        caseDataNumber: [
            {
                number: "2.6",
                description: "Million Active Users"
            },
            {
                number: "997K+",
                description: "Website Traffic"
            },
        ]
    },
    {
        bannerImageUrl: "https://appinventiv.com/wp-content/uploads/2023/09/vyrb-banner-1.png",
        name: "Vyrb",
        description: "A dedicated social media mobile app that allows users to post voice messages to platforms like Twitter and Facebook using bluetooth glasses.",
        caseDataNumber: [
            {
                number: "$1 Million+",
                description: "Funding Received"
            },
            {
                number: "50,000+",
                description: "Mobile App Downloads"
            },
        ]
    },
]


export { services, portfolioCaseStudy, portfolioEliteBrands, portfolioCaseStudyBottom };