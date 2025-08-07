// Shared solutions data for use in multiple components/pages

const solutions = [
  {
    id: 'erp',
    title: 'ERP System',
    min_dec: 'DIRAC ERP Enterprise Edition',
    description: "Unlock your organization's potential with our comprehensive ERP Enterprise Edition. Designed to integrate planning, manufacturing, sales, and marketing processes, this solution provides real-time access to critical data across all departments. Empower your team to make informed decisions that drive efficiency and profitability.",
    image: 'https://s35804.pcdn.co/blog/wp-content/uploads/2021/03/erp_the_value_to_your_manufacturing.jpg',
    span: 'col-span-1 row-span-2',
    children: [

      {
        id: 'diracenterprise',
        title: 'Enterprise Edition',
        description: 'All-in-one ERP for enterprise business automation.',
        summary: `DIRAC ERP Enterprise Edition is a powerful suite of integrated business applications tailored to unify and streamline your organization's operations. By consolidating departmental databases into a single, centralized management system, our solution ensures seamless communication and collaboration across all levels of your enterprise. This real-time access to information not only enhances decision-making but also fosters a culture of transparency and accountability.

        Our ERP solution caters to both industrial and commercial sectors, featuring robust modules such as Financial Management, Human Resource Management, and Supply Chain Management. With intelligent dashboards and advanced analytical reporting tools, DIRAC ERP simplifies complex processes and enhances operational efficiency. Experience increased profitability and long-term success as you harness the full potential of your organization through our innovative ERP system.

        The implementation of DIRAC ERP is designed to be smooth and efficient, with a dedicated team of experts guiding you through every step of the process. We provide comprehensive training and support to ensure that your staff feels confident and empowered to use the system effectively. Our commitment to ongoing support means that you’ll have access to resources and assistance whenever you need it, helping you maximize the benefits of your ERP investment.`,
        "benefits": [
          { "title": "Increased productivity and efficiency", "description": "" },
          { "title": "Cost-effective ERP implementation", "description": "" },
          { "title": "Advanced data analysis and dynamic reporting", "description": "" },
          { "title": "Fully web-based interface access anytime, anywhere", "description": "" }
        ],
        logos: [

        ],
        DownloadLink: '/files/dirac-enterprise-brochure.pdf',
        isSass: false,
      },
      {
        id: 'dirapack',
        title: 'DiraPack',
        description: 'Tailored ERP for Corrugated Carton Manufacturing & Packaging.',
        summary: `DiraPack is our fully customized ERP solution, purpose-built for corrugated carton manufacturing and packaging factories. Designed to streamline operations and enhance productivity, DiraPack covers the entire production lifecycle—from configuration to final delivery. With features like the Carton Configurator and Carton Pricing Calculator, you can easily define and customize carton dimensions and generate accurate pricing based on materials and production variables. This ensures that your operations are not only efficient but also responsive to market demands.

The solution includes advanced capabilities such as Cut Sheet Management, Corrugator Machine Planning, and Waste Calculation, allowing you to optimize material usage and improve cost control. Additionally, DiraPack provides tools for managing assembly processes and monitoring all stages of printing, ensuring high-quality output throughout the production process. By empowering packaging manufacturers with these essential tools, DiraPack helps you reduce costs and maintain quality at every step.

Implementation of DiraPack is designed to be seamless, with a dedicated team guiding you through the setup and integration process. We offer comprehensive training and ongoing support to ensure your team is confident in using the system effectively. With our commitment to your success, you’ll have the resources you need to maximize the benefits of your tailored ERP solution, driving efficiency and profitability for your packaging operations.`,
        benefits: [
          {
            title: 'Carton Configurator',
            description: 'Easily define and customize carton dimensions, structure, and specifications.'
          },
          {
            title: 'Carton Pricing Calculator',
            description: 'Generate accurate and dynamic pricing based on materials, dimensions, and production variables.'
          },
          {
            title: 'Cut Sheet Management',
            description: 'Optimize material usage through efficient sheet cutting plans.'
          },
          {
            title: 'Corrugator Machine Planning',
            description: 'Plan and schedule production for corrugator operations with real-time visibility.'
          },
          {
            title: 'Stapling & Plastering Management',
            description: 'Manage assembly processes including stapling and plastering with precision.'
          },
          {
            title: 'Printing Management',
            description: 'Control and monitor all stages of the printing process.'
          }
        ],
        logos: [
          '/products/dirapack/ver.png',
          '/products/dirapack/min.png',
          '/products/dirapack/box.png',
          '/products/dirapack/bloo.png',
          '/products/dirapack/sfwa.png',
        ],
        DownloadLink: '/files/dirapack-brochure.pdf',
        isSass: false
      },
      {
        id: 'diratail',
        title: 'DiraPanel',
        description: 'Tailor-made ERP for electrical panel manufacturing factories.',
        summary: `DiraPlast is a tailored ERP solution that addresses the unique challenges of the plastic manufacturing industry. Covering the entire production process—from Injection Molding and Blow Molding to Extrusion, Printing, and Packing—DiraPlast ensures that every aspect of your operations is effectively managed. Our system enables you to oversee not only standard product manufacturing but also the custom design and development of specific products, providing the flexibility needed to meet diverse market demands.

In addition to production management, DiraPlast offers full business integration across key operational areas, including Financial Management, Sales Management, and Inventory Management. Each module is seamlessly integrated to facilitate smooth workflows, real-time data sharing, and optimized performance throughout your organization. With robust features for Quality Control & Assurance, Human Resources Management, and Customer Relationship Management (CRM), DiraPlast empowers your team to make informed decisions and drive operational excellence.

The implementation process for DiraPlast is designed to be smooth and efficient, with a dedicated team assisting you every step of the way. We provide thorough training and ongoing support, ensuring your staff is well-equipped to utilize the system effectively. With our commitment to your success, DiraPlast not only enhances productivity but also positions your business for long-term growth and profitability in the competitive plastic manufacturing landscape.`,
        benefits: [
          {
            title: 'Panel Configurator',
            description: 'Easily define panel types, structure, dimensions, and required specifications.'
          },
          {
            title: 'Component Builder',
            description: 'Select and configure internal components (breakers, contactors, PLCs, etc.) with accuracy and compliance.'
          },
          {
            title: 'Quotation Generator',
            description: 'Create comprehensive technical and financial proposals with automatic BOM and pricing breakdowns.'
          },
          {
            title: 'Template Library',
            description: 'Access ready-made panel templates for both inbound and outbound systems to speed up design and production.'
          },
          {
            title: 'BOM & Procurement Integration',
            description: 'Generate a full bill of materials and integrate directly with procurement for component purchasing.'
          },
          {
            title: 'Production Planning & Quality Control',
            description: 'Plan assembly schedules, track progress, and manage quality control checkpoints.'
          },
          {
            title: 'Testing Management',
            description: 'Manage internal testing processes and schedule client inspection and approval procedures.'
          }
        ],
        logos: [
          '/products/dirapanel/arab.png',
          '/products/dirapanel/gms.png',
          '/products/dirapanel/memco.png',
          '/products/dirapanel/sigma.png',
        ],
        DownloadLink: '/files/dirapanel-brochure.pdf',
        isSass: false
      },
      {
        id: 'diratail',
        title: 'DiraTail',
        description: 'Scalable retail ERP with seamless POS and delivery integration.',
        summary: `DiraTail is a customized ERP solution specifically designed for the retail sector, providing the tools you need to adapt and thrive in a competitive marketplace. Our platform enables you to manage every aspect of your retail business, from product options and tax rules to receipt content and layout, all in one centralized location. With features such as Showroom Management and Point of Sale (POS) Management, DiraTail allows for streamlined inventory handling and fast, accurate transactions, ensuring a seamless shopping experience for your customers.

Integrated with Fawry POS machines for secure payment processing and powered by a robust delivery platform, DiraTail enhances both operational efficiency and customer satisfaction. Our Customer Loyalty Management and Customer Relationship Management (CRM) modules help you engage with customers effectively, rewarding loyalty and building lasting relationships. Additionally, the Mobile App for Sales Representatives empowers your field team with real-time access to essential information and reporting tools, enabling them to serve customers better.

The implementation of DiraTail is designed to be smooth and efficient, with a dedicated team guiding you through setup and integration. We offer comprehensive training and ongoing support to ensure your staff is confident in using the system. With DiraTail, you will not only optimize your retail operations but also position your business for sustainable growth and success in the evolving retail landscape.`,
        benefits: [
          {
            title: 'Showroom Management',
            description: 'Easily manage displays, inventory, and product presentation.'
          },
          {
            title: 'Point of Sale (POS) Management',
            description: 'Streamlined POS system for fast and accurate transactions.'
          },
          {
            title: 'Customer Loyalty Management',
            description: 'Reward repeat customers and build brand loyalty.'
          },
          {
            title: 'Customer Relationship Management (CRM)',
            description: 'Track and engage customers through every interaction.'
          },
          {
            title: 'Mobile App for Sales Representatives',
            description: 'Empower your field team with real-time access and reporting tools.'
          },
          {
            title: 'Shipping Module',
            description: 'Simplify and manage all shipping operations.'
          },
          {
            title: 'Delivery Application',
            description: 'A full-featured app to coordinate and optimize last-mile delivery.'
          }
        ],
        logos: [
          '/products/diractail/elwan.png',
          '/products/diractail/hamdy.png',
          '/products/diractail/lytchee.jpg',
          '/products/diractail/mohamdia.jpg',
          '/products/diractail/mzahm.jpg',

        ],
        DownloadLink: '/files/diratail-brochure.pdf',
        isSass: false
      },
      {
        id: 'diraplast',
        title: 'DiraPlast',
        description: 'ERP for Plastic Manufacturing Operations',
        summary: `DiraPanel is specifically crafted for electrical panel manufacturing factories, providing a comprehensive ERP solution that addresses the unique challenges of the industry. Covering every aspect of the production process, DiraPanel enables users to define panel types, structures, and dimensions through an intuitive Panel Configurator. The Component Builder ensures that internal components, such as breakers and PLCs, are selected and configured with precision, meeting all necessary compliance standards.

Key features such as the Quotation Generator streamline the proposal process by creating technical and financial documents with automatic bill of materials (BOM) and pricing breakdowns. The Template Library offers access to ready-made panel designs for both inbound and outbound systems, expediting the design and production phases. With integrated BOM and procurement capabilities, you can efficiently generate materials lists and manage component purchasing, ensuring timely production without delays.

DiraPanel also excels in production planning and quality control, allowing you to schedule assembly processes, track progress, and manage quality checkpoints effectively. Testing Management features help coordinate internal testing and client inspections, ensuring that every panel meets the highest standards before delivery.

The implementation of DiraPanel is designed to be seamless, supported by a dedicated team that guides you through the setup and integration process. We provide comprehensive training and ongoing support, ensuring that your staff can maximize the system's capabilities. With DiraPanel, electrical panel manufacturers can achieve greater efficiency, accuracy, and compliance, positioning their operations for long-term success in a competitive market.`,
        benefits: [
          {
            title: 'Injection Molding',
            description: 'Manage and monitor plastic injection molding processes.'
          },
          {
            title: 'Blow Molding (Inflation)',
            description: 'Control inflation-based molding systems used in production.'
          },
          {
            title: 'Extrusion',
            description: 'Support extrusion operations for continuous plastic shaping.'
          },
          {
            title: 'Printing',
            description: 'Enable custom printing workflows on manufactured parts.'
          },
          {
            title: 'Logo Application',
            description: 'Configure and apply branded elements within the system.'
          },
          {
            title: 'Packing',
            description: 'Streamline packaging workflows and logistics prep.'
          },
          {
            title: 'Assembly',
            description: 'Manage final product assembly and QA processes.'
          },
          {
            title: 'Financial Management',
            description: 'Complete control over accounting and financial operations.'
          },
          {
            title: 'Sales Management',
            description: 'Optimize your sales pipeline and customer orders.'
          },
          {
            title: 'Purchasing Management',
            description: 'Handle supplier relationships and procurement efficiently.'
          },
          {
            title: 'Inventory Management',
            description: 'Track stock levels, movement, and forecasting.'
          },
          {
            title: 'Manufacturing & Production Management',
            description: 'Plan, monitor, and optimize your factory floor operations.'
          },
          {
            title: 'Quality Control & Assurance',
            description: 'Ensure product quality and compliance at every stage.'
          },
          {
            title: 'Human Resources (HR) Management',
            description: 'Manage employees, payroll, attendance, and more.'
          },
          {
            title: 'Maintenance Management',
            description: 'Schedule and track machine maintenance and repairs.'
          },
          {
            title: 'Customer Relationship Management (CRM)',
            description: 'Maintain and analyze customer interactions and data.'
          }
        ],
        logos: [
          '/products/diraplast/saudi.png',
          '/products/diraplast/sp.png',
          '/products/diraplast/plast.png',
          '/products/diraplast/onda.png',
          '/products/diraplast/ngma.png',
        ],
        DownloadLink: '/files/diraplast-brochure.pdf',
        isSass: false
      }
    ],
  },
  {
    id: 'sass',
    title: 'SASS Solutions',
    min_dec: 'SASS Solutions for Business',
    description: 'SASS Solutions for Business is a suite of software services designed to enhance operational efficiency and drive growth through cloud-based applications.',
    image: '/products/sass/sass.jpg',
    span: 'col-span-1 row-span-2',
    "children": [
      {
        "id": "fawryhr",
        "title": "Fawry Business HR",
        "description": "Welcome to the ultimate HR management solution in Egypt!",
        "summary": "Fawry Payday is a comprehensive and user-friendly tool that automates your HR processes and makes your business more efficient. It seamlessly integrates with all your platforms and is compliant with the Egypt Labor Law, ensuring your data is secure.",
        "benefits": [
          { "title": "Employee Records Management", "description": "" },
          { "title": "Payroll Automation", "description": "" },
          { "title": "Attendance and Leave Tracking", "description": "" },
          { "title": "Secure Cloud-Based Access", "description": "" }
        ],
        "logos": [],
        "live_img": "/products/sass/payday.jpg",
        DownloadLink: '/files/dirac-enterprise-brochure.pdf',
        "isSass": true,
        pricing: [
          {
            title: "Starter",
            price: "EGP 199 / mo",
            features: [
              "Up to 25 employees",
              "Basic attendance tracking",
              "Email support",
            ],
            cta: "Get Started"
          },
          {
            title: "Business",
            price: "EGP 399 / mo",
            features: [
              "Up to 100 employees",
              "Advanced attendance",
              "Request management",
              "Priority support"
            ],
            cta: "Request Demo"
          },
          {
            title: "Enterprise",
            price: "Custom",
            features: [
              "Unlimited employees",
              "Full system integration",
              "Dedicated support",
              "Custom features"
            ],
            cta: "Contact Sales"
          }
        ]
      },
      {
        "id": "fawryaccounting",
        "title": "Fawry Business Accounting",
        "description": "Online accounting software for managing finances, expenses, and invoicing.",
        "summary": "Fawry Business Accounting provides a powerful and easy-to-use platform for handling your business finances—track expenses, generate invoices, monitor cash flow, and ensure compliance, all from the cloud.",
        "benefits": [
          { "title": "Expense Tracking", "description": "" },
          { "title": "Invoicing & Billing", "description": "" },
          { "title": "Cash Flow Management", "description": "" },
          { "title": "Financial Reporting", "description": "" }
        ],
        "logos": [],
        DownloadLink: '/files/dirac-enterprise-brochure.pdf',
        "isSass": true
      }
    ]
  },
  {
    id: 'vansales',
    title: 'Van Sales Solutions',
    min_dec: 'Van Sales Solutions for Business',
    description: 'Van Sales Solutions for Business is a comprehensive software suite designed to optimize mobile sales operations, streamline inventory management, and enhance customer engagement.',
    image: '/products/vansales/vansale.png',
    span: 'col-span-1 row-span-2',
    children: [
      {
        "id": "vansales",
        "title": "Van Sales application",
        "description": "Field sales automation with real-time stock and route planning.",
        "summary": "The Van Sales System covers the entire outdoor sales cycle, ensuring your field sales operations are efficient, accurate, and fully integrated.",
        "benefits": [
          { "title": "Van Inventory Management", "description": "" },
          { "title": "Route Planning", "description": "" },
          { "title": "Real-Time Stock Visibility", "description": "" },
          { "title": "On-the-Spot Invoicing", "description": "" },
          { "title": "Payment Collection", "description": "" },
          { "title": "Product Returns Handling", "description": "" },
          { "title": "Customer Stock Audits", "description": "" }
        ],
        "logos": [
          '/products/vansales/haboba.jfif',
          '/products/vansales/rehana.jfif',
          '/products/diraplast/ngma.png',
          '/products/diractail/lytchee.jpg',



        ],
        "DownloadLink": "",
        "isSass": false
      }
    ],
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    min_dec: 'Digital Transformation Solutions for Business',
    description: 'Digital Transformation Solutions for Business is a suite of services designed to help organizations leverage technology to improve processes, enhance customer experiences, and drive innovation.',
    image: '/products/digitalTransformation/Digital-transformation.png',
    span: 'col-span-2 row-span-1',
    children: [
      {
        id: 'digital-transformation',
        title: 'Digital Transformation',
        description: 'Empowering businesses through digital innovation and process automation.',
        summary: `Our Digital Transformation solutions help businesses leverage technology to streamline operations, enhance customer experiences, and drive innovation. From automating manual processes to implementing advanced analytics, we provide the tools and expertise needed to thrive in the digital age.`,
        benefits: [
          { title: 'Process Automation', description: '' },
          { title: 'Data Analytics', description: '' },
          { title: 'Customer Experience Enhancement', description: '' },
          { title: 'Cloud Integration', description: '' }
        ],
        logos: [],
        DownloadLink: '',
        isSass: false
      }
    ],
  }
];



export const carouselSlides = [
  {
    image: "/images/ERP.png",
    title: "ERP System",
    description: "One System, Infinite Possibilities",
  },
  {
    image: "/images/HR2.png",
    title: "SaaS Solutions",
    description: "Manage More, Spend Less and Start Now",
  },
  {
    image: "/images/digital.png",
    title: "Digital Transformation",
    description: "Digitally Driven, Future Focused",
  },
];



export const categories = [
  "Packaging Industry",
  "Plastic Industries",
  "Food Industries",
  "Showrooms & POS (Ceramics)",
  "Showrooms & POS",
  "Engineering Industries",
  "Textile & Garment Industry",
  "Chemical & Pharmaceutical Industries",
  "Integration Services",
  "Governmental Authorities",
  "Petroleum Industries",
  
 

];

export const logos = {
  "Packaging Industry": [
   "/logos/Packaging Industry/7Pack.png",
   "/logos/Packaging Industry/betterpack.png",
   "/logos/Packaging Industry/bloompack.png",
   "/logos/Packaging Industry/box.png",
   "/logos/Packaging Industry/carton.png",
   "/logos/Packaging Industry/elm.png",
   "/logos/Packaging Industry/gaintgroup.png",
   "/logos/Packaging Industry/lionpack.png",
   "/logos/Packaging Industry/minipack.png",
   "/logos/Packaging Industry/safwa.png",
   "/logos/Packaging Industry/smartpack.png",
   "/logos/Packaging Industry/verta.png",
  ],
  "Plastic Industries": [
    "/logos/Plastic Industries/acgi.png",
    "/logos/Plastic Industries/elsalamplastic.png",
    "/logos/Plastic Industries/helalnegmafadya.png",
    "/logos/Plastic Industries/helalngmazahbya.png",
    "/logos/Plastic Industries/onda.png",
    "/logos/Plastic Industries/plastmac.png",
    "/logos/Plastic Industries/protech.png",
    "/logos/Plastic Industries/saudiDrip.png",
  ],
  // add logos for other categories
  "Food Industries": [
    "/logos/Food Industries/Lychee.png",
    "/logos/Food Industries/Rehana.png",
    "/logos/Food Industries/almonairy.png",
    "/logos/Food Industries/hboa.png",
    "/logos/Food Industries/nabaty.png",
    "/logos/Food Industries/nevertety.png",
  ],
  "Showrooms & POS (Ceramics)": [
    "/logos/Showrooms & POS (Ceramics)/Aba.png",
    "/logos/Showrooms & POS (Ceramics)/alwan.png",
    "/logos/Showrooms & POS (Ceramics)/elmohamdya.png",
    "/logos/Showrooms & POS (Ceramics)/furx.png",
    "/logos/Showrooms & POS (Ceramics)/hamdyShoman.png",
  ],
  "Showrooms & POS": [
    "/logos/Showrooms & POS/ATD.png",
    "/logos/Showrooms & POS/LushFresh.png",
    "/logos/Showrooms & POS/Lychee.png",
    "/logos/Showrooms & POS/alhomaidhi.png",
    "/logos/Showrooms & POS//crocs.png",
    "/logos/Showrooms & POS/footloose.png",
    "/logos/Showrooms & POS/merrell.png",
    "/logos/Showrooms & POS/ogawa.png",
    "/logos/Showrooms & POS/sprox.png",
  ],
  "Engineering Industries": [
    "/logos/Engineering Industries/ArabTech.png",
    "/logos/Engineering Industries/GMS.png",
    "/logos/Engineering Industries/HRZN.png",
    "/logos/Engineering Industries/IMG.png",
    "/logos/Engineering Industries/NanoFood.png",
    "/logos/Engineering Industries/TechnoBit.png",
    "/logos/Engineering Industries/TechnoGym.png",
    "/logos/Engineering Industries/allwellerFarid.png",
    "/logos/Engineering Industries/disco.png",
    "/logos/Engineering Industries/espranzaa.png",
    "/logos/Engineering Industries/furx.png",
    "/logos/Engineering Industries/ideaCompany.png",
    "/logos/Engineering Industries/plaza.png",
    "/logos/Engineering Industries/sigma.png",
  ],
  "Textile & Garment Industry": [
    "/logos/Textile & Garment Industry/catex.png",
    "/logos/Textile & Garment Industry/lumex.png",
    "/logos/Textile & Garment Industry/naseej.png",
  ],
  "Chemical & Pharmaceutical Industries": [
    "/logos/Chemical & Pharmaceutical Industries/awa.png",
    "/logos/Chemical & Pharmaceutical Industries/egavet.png",
  ],
  "Integration Services": [
    "/logos/Integration Services/AinShamsUniversity.png",
    "/logos/Integration Services/Asset 99@4x.png",
    "/logos/Integration Services/BenisuefUniversity.png",
    "/logos/Integration Services/alazharuniveristy.png",
    "/logos/Integration Services/beyti.png",
    "/logos/Integration Services/btrotred.png",
    "/logos/Integration Services/cairouniveristy.png",
    "/logos/Integration Services/cocacola.png",
    "/logos/Integration Services/companyDrinkWater.png",
    "/logos/Integration Services/companyEgyptel3lya.png",
    "/logos/Integration Services/companyNorhcairoElect.png",
    "/logos/Integration Services/companyNorthDelta.png",
    "/logos/Integration Services/companySouthCairo.png",
    "/logos/Integration Services/companySouthDlta.png",
    "/logos/Integration Services/companyWater&redSea .png",
    "/logos/Integration Services/companyWaterinGiza.png",
    "/logos/Integration Services/companyWaterindomyat.png",
    "/logos/Integration Services/companyalkabada.png",
    "/logos/Integration Services/faragalla.png",
    "/logos/Integration Services/juhina.png",
    "/logos/Integration Services/markzCairoUniversity.png",
    "/logos/Integration Services/mdinat abdlmlk abdallah.png",
    "/logos/Integration Services/misrLifeInsurance.png",
    "/logos/Integration Services/misrinsurance.png",
    "/logos/Integration Services/natgas.png",
    "/logos/Integration Services/suez cement.png",
    "/logos/Integration Services/zagazegUniversity.png",

  ],
  "Governmental Authorities": [
    "/logos/Governmental Authorities/CanelRpeco.png",
    "/logos/Governmental Authorities/athad.png",
    "/logos/Governmental Authorities/nevertety.png",
  ],
  "Petroleum Industries": [
    "/logos/Petroleum Industries/disco.png",
    
  ],

};
export default solutions;

