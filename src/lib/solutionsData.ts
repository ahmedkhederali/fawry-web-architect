// Shared solutions data for use in multiple components/pages

const solutions = [
  {
    id: 'erp',
    title: 'ERP System',
    min_dec: 'Unlock Efficiency: Optimize Your Operations',
    description: 'DIRAC ERP Enterprise Edition is a comprehensive suite of integrated business applications designed to unify and streamline an organizatio DIRAC ERP Enterprise Edition is a comprehensive suite of integrated business applications designed to unify and streamline an organizatio',
    image: 'https://s35804.pcdn.co/blog/wp-content/uploads/2021/03/erp_the_value_to_your_manufacturing.jpg',
    span: 'col-span-1 row-span-2',
    children: [

      {
        id: 'diracenterprise',
        title: 'Enterprise Edition',
        description: 'All-in-one ERP for enterprise business automation.',
        summary: `DIRAC ERP Enterprise Edition is a comprehensive suite of integrated business applications designed to unify and streamline an organization’s planning, manufacturing, sales, and marketing processes within a single, centralized management system. By consolidating departmental data into a unified platform, it provides seamless, real-time access to information across the enterprise—empowering employees at every level to make informed decisions.`,
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
        summary: `DiraPack is a fully customized ERP solution, purpose-built for corrugated carton manufacturing and packaging factories. It is designed to streamline operations and boost productivity by managing the entire production lifecycle—from carton configuration to final delivery.`,
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
        summary: `DiraPanel is our tailor-made ERP system, designed specifically for electrical panel manufacturing factories. Built to streamline operations and ensure precision, DiraPanel covers every stage of the production process — from panel configuration to client delivery. It helps manufacturers increase efficiency, improve accuracy, reduce rework, and maintain the highest levels of quality and compliance.`,
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
        summary: `DiraTail delivers strategic and flexible retail solutions tailored to your business size and type. Whether you operate a single store or hundreds of locations, it enables you to configure every detail — from product options and tax rules to receipt content and layout — all in one place. Integrated with Fawry POS machines for secure payments and a robust delivery platform, DiraTail helps elevate operational efficiency and customer satisfaction.`,
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
        summary: `DiraPlast is a comprehensive ERP solution tailored for the plastic manufacturing industry. It supports every stage of production — from injection molding and extrusion to packing and assembly — as well as full business integration including financials, HR, sales, and more. All modules are seamlessly integrated for optimized performance and real-time data sharing.`,
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
    min_dec: 'Streamline Your Success: Save Time, Money, and Efforts',
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
      "live_img":"/products/sass/payday.jpg",
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
    title: 'System Integration',
    min_dec: 'Seamlessly Connect and Streamline: Unlock the Power of System Integration!',
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
    min_dec: 'Embrace Digital Evolution: Leap into the Future Today!',
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



export const clientTabs = [
  {
    key: 'carton',
    name: 'Carton',
    logos: [
      { name: 'CartonCo', logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEBIVEhUVFRYVFRYYFhcVFRUXFRUWGBgWFRcYHSggGBomGxUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy4lHyUvLTAtLS4rLS0rLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJoBRwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABwEFBgQCAwj/xABLEAABAgMDBggJCAoCAwEAAAABAAIDBBEFEiEGBzFBUZETFiJUYYGS0RQXMlJTcaGx0iNCY3OCorLBFSQzNENicrPh8MLTNTaDJf/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMFBP/EADIRAAIBAgUDAwMCBQUAAAAAAAABAgMRBBITITEVUVIFFEEiMmEzgSM0ocHRJERTcYL/2gAMAwEAAhEDEQA/AHihCEAIQhACEIQAhCKoAQiqiqAlCiqKoCUKKoqgJQoqiqAlCiqKoCUKKoqgJQhFUAIRVRVAShCiqAlCKqKoCUKKqUAIQiqAEIRVACEIQAhCEAIQhACEIQAhCEAIQhACEIQAvLlJKpMpsoIUpDvvxc7BjRpcfyHSnBSc1GOZ8FtEjNaKuIA2nBU8fK6QYaOmGV6Kn3BKe07Vmp144Qlx+bDbW6MTSjdfrKs5TISdeAS1rP6jj1gaFRzfwjmPH1Jv+FG6GDxzs/nDdzu5SMspD043O7lhRm7nPOh7yjxdTnnQt/8AhRml2HucZ4G645WfzgbndyOOdn84bud3LDeLmb86Fv8A8I8XU550PeUzS7D3OM8Dc8c7P5w3c7uRxzs/nDdzu5YbxdTnnQ95R4upzzoe8pml2HucZ4G5452fzhu53cjjnZ/OG7ndywvi6nPOh7yjxdznnQ95TNLsPc4zwN1xys/nDdzu5WVl2rBmGl0B4eAaEiumgNMeghJ+3sl48oxr4pYQ510AE6aV1+pbTNKP1aL9cf7cNFJt7l8Pi6s6unNWNySqi2spJSULRMRmwy7yRiXHpoNStnBKDJux2WrPTcabLnCG66GA0wJcAAdQ5NetemnTjK7lwjot2GY3KGUMHwgRmcFovVwrs216F4sbKSUmq+DxmvI0jEHcUqI2SENtqss8PdwJ+Vp0BhNK7aCldK6Mp7Jh2ZaEo6UrDEQtqKk6HtYRU6QQ72Lb29N7J8q6KZnyMmLljZzXFrpqGHNJBFTUEaRoXVZuUMpMOLYEZsRwFSG1qBWmxKrJHJyWnpycbMNLmsdUXXFpqYjq6D6kxsnckZSSc58u1wc4UN5xdhWutZ1adOH03dy0ZNnVa+U8nKkNjxmscRUN0mh10C+kTKGUbB8IMdghan1wPQNdehLDIuwodqxpmZnC55D2gNvEDG9dpTQGhowC45LI+G61DIOe4wIZdFArTUCRTaSRjpxWioQ4b3XJGdjasbKCVmgTAitfd0jQR6wcV9YFtSz4roDIrXRW1vMB5QppqlnOWUyzbWlWypc1kQAFpcTgeSQTrGg4rryTH/705/8AWvbaqyoxW6e1rhS3GdEihoq40AxJOAA6Sq6ysoJWZc5kvFbFLPKu1IHWl5nNtSYjzUOz4DiAbt8NJF8uOhxHzQAtBY+T0OyJWPGD3RH8HedWgYC0YBoGqqroJQTb3fCJUrs0ls5QSsrQzEVsOoJAPlGmwDFfCx8qpKaNIMZrneboduOlLLJLJiJazok3OxX3b10AGhcRpDSdDRUjDpXXlfkAJRnhcjEeDCN8hxq5tNDmuGPUr6FNPLf6iFJvcbgK9LN5CW+Z2VbFcKPaTDiD+doBJ6wQetaMLzSjlk0y6d0ShCFBIIQhACEIQAhRVFUBKFFUXkBKgoqoJQg+UeKGguJoACSdgGkpL21aEWfmqNBdU3YbRoug6ejamLnFnTCk3BpIMQiGKfzaRuBWbzVyTXPiRSKloa1pOqumnVRZy3djmYx61WND4+TWZLZNQ5SHTy4h8t5012DYFfgIa1StEkjowpxpxyxWwUU0UVU1QtsRRFAiqEGwUCKBCKoNguooiqKoNjD51/3eF9b/AMSjNN+7Rfrz/bhozrj9XhfW/wDEqM05/V4v1x/tw1m/uOX/AL79jcpZ5pf20/8AWN/FETLJS8zXyEaFFneFhuYHxGlpcCKisTRvC9VNrJNHSlyiJr/2OF9Sf7blwZ2P32Q/qH92ErWak4v6ehxhDcYfAkX6cmvBuwquPOdZ0eLNyToUJ8RrDyi1pIHysM4nVoO5bU5JTi32/wAlZJ2MpYUO0XTU1+jfKvnhMWDC+aeUUwsiodrtiPNo+RdFzlMONTXyViJaz7alZiPFlIDhwjjU0Y4EBxIpU4aVsciJu1nxXi0GXWXKs5LW8qvQVriN1dWt/UiCRW5lPImvrIfuevdn/wDsUX6l34WL65opCNBZMiNDdDJiMIvClQA/EL3JSMYW7FjGG/gzCcA+nJrdZhXqWUpLPN/j+xPwjky7/wDLSHV+IL45Kf8Anpz/AO34mLvy0kIz7TkojIT3sZ5TgKhvK1leMm7KmGWzNRnwnNhO4W686HXnMpTcpzLJ/wCf7jK7/uVkg4QsoIhj4F1RDroqWtu0PqDgtpnAhOdZ8wG1qGVptDTj7FRZyckIsyRNS2MSGBVut101Bb/N3r65v7bm5xsaBOsxY0CpYWudWoN6qrJqSjUvxySla6OjNTOw3yDGMILoRLYg1gk3qn1ghXOWU3DhyUcxCADCcPWSKADbpS+tXI20JCMYtmOcWO1NLbwHmlrsHDFfCDk5a9pRGGeLmQmnXRtBrutbr9amVOMpailtf9yFKWW1jQZlYThKRXEYOjktOp1GMBI6wR9kpitXHZkjDgQ2wYTQ1jBQAYdfWanrXYCvNVnnm5F4qysShRVFVQsShRVFUBKFFUIAXlxU1S+y6yvfDdwEs8BwwiO00qNA6VDaRjXrxowzM0Vu5Vysrg9153mtxd/hZSYzmRK8iWbTVefidwVRk3klGmyYkQuhsJxcfLf6q6ltoGQUi0eQ53SXHFUvJ8HPz4uv9UPpRTyWcwV+Wl7o2sdew20oPetlZVswJlt+C8OGvaPWNSztoZvpRzfkr8N2ogl28FYWdkpuzooNbhPkvb5L+gjb0FLtcjXxNB/xd13NjnYeeBgfWk9YaQPeV6zUD5CL9YPwhZ3KbKDwyUglwDXsilrxtq3Bw6DT2LSZpx+rxPrPyCJ3ncrTmp4tSj8o3K+Uw4hpI2L6rw9tcNq0OvLdbCoGced8yCPW1/5PU+Med8yB2In/AGLYjIOQH8I9oqeIsh6I9orO0r7HJeHxl9pmN8ZE76OB2Ynxo8ZE76OB2YnxrZcRZD0R7RRxEkPRHtFLT7ke3xvmY3xkTvo4HZifGjxkTvo4HZifGtlxEkPRHtFHEWQ9Ee0UtPuPb43zMb4x53zIHYif9iPGRO+ZA7MT41suIsh6I9oo4iSHoj2ilp9x7fG+YureyqjzjAyM2GA117kh1a0p85x2rryQysEkx0MwjEa598kOAI5LRQNIx8nat0chJD0Z7RXNN5v5NwNwPYdRDifYVGSV7lPaYqM9TNdlrYuUktND5J+OthwcOpeMrbXfKy5isDXODmijq05ThsSwtywpiReHEmnzYrcB9oal2zuU7piSfBjmsQOhlh89t4e3A+xWztXNFjpKLhPaR2eMea9DC+8fzUHOPNeig/f71GQFgS802KYzb1xzQ3EigIrTBa45CyHoj2ioWZ7mVGGMqxUlPkyYzjzXoYX3u9bHI63Yk3BdEiNawhxbRpNKD1rJ5fZOS0tAY+Cwtc6JcJqThdef+KrrEym8FlDDhYxXPNNjRTyiq5rP6iaderRrZasrpDJti3JeWbejPAOoaSfUFkJrOWK/Iy5cNr3hp3AFZazbNmrQik1Lz8+I44N/z0BbqQzdyrWjhS+I7XiWj2K15S3NFXxOId6eyKuXzlurSJLCmu6+p3ForvWssPKeVmv2b6O1sdyXbtfUqqczeybhyL7DtvE+wrDW9k5MSTw+pc2vJitBF3ZeHzfWmaS5IdXF0N6m6GplHaTpaXfGYASyhoa0PKA1etL9ucWZH8GDWgxF7HrqvmcrHxpGPAmHViXQWO0XgHNwPSF7zf2DLzXDGM0uult3Eilb1fcjk3sitXEzrVIqi7XR78ZM16GF97vU+Mia9FC+9T3rWHIWQ9Ee0VRZZZLSkvLOiQmFrgQK1OsqGpdyalPGQi5OZeZFZRxZxsR0VjWlhAF2tMQcTX1KztjKCWlh8s8A6mipcfU0YpVWDlE6VgxWQx8pFcKO1NAFK9J04L5WbZM1PxC4Eux5cR3kt7z0Jn+EIY+eRRjvI1U3nMx+Slqja+IGnstDvevMtnNdX5SWoNrX1p1Fo96tJHN7KNaOFL4jtZvFo3BepvN7JuBDL8M6iHEjrBU2lyWyY5rNf9i4sbKWWmf2b+VrYcHDqP5K4CStuWFMSERr6kj5kRopToOwrY5C5XOjHgZhwMTSw6Lw2HpVlL4ZtQxrzadRWZu6oXmqhWOg3Yr7ftES8B8U6mmnrOhKnJSxHTswb/kNPCRDXyi44N9Zo7qC1mdaZIhQYYNA55J9TR30XRmukbksYuuK8n1NbRgHscftLN7yscystbFKm+Fua+DBDQGtFAAAB6l9VKqMobegyjA+LeN40aGi84mmxaHSbjCO+yLUhV9u2VDmYTocQA10HW06iPUvpY9pw5iGIsI1aduBB1ghdjwnIdqke6Z+fJyWdCe6G8ULHEOHSK47setM3NR+7xfrfyCz+c+SayZa9o/aMqfW00rucF3Zu7clpeC9keK1jjEqAdlFjHaW5wsNFUcW4tjKCAqLjfIc4Zv/AMI43yHOGb1rdHa16fki+QqHjfIc5ZvRxvkOcs3pdDXpeSL5CoeN8hzlm9HG+Q5yzel0Rr0vJF8hUHHKz+cM9vco44yHOG7il0Nel5I0CFn+OMhzhu49yOOMhzhvt7kuidel5IvyocFQjLCQNAJhpqQNetXrHVFdyXLQqRl9ruc1oSbIrHQ4gBa4U2pHW3Zb5eM+C8YtNQdTmk1B/LqT7IS1zrygD4MbRUOYerFpr1uVZRvuc/1Ohnp5lyjpzS+RH/rb+EJgFL/NORcj085uzYmErQ4N8B+hEw2dn92hfXj+1FS1kpV0WIyGwVc8ho6K60ys7B/VoX14/BE71TZr7Na+K+MceDF1ujynDE7lnKN5nNxdHVxSiMCxLJhS0MQ4QoBiTrLtZPSrFFFx2pPsl4TosU0a0VO3SAAOla/B3Eowj2Oui+E9Ktiw3Q3irXAtI9a48n7chTcPhIV4AGhDhRzT0hWjlHITjOPdCJyhskysd0ImoGLTtadHd1LaZpdEx/Uz3ORnVs8XYccfNNw/axHuXnNKf24/oP4lmlaRw6VHSxiSGIsvnI/cnf1N961Kxuc+ZuyoZre8DdiVpLg62KdqMhZWZJGPFhwWCpe4Dq1nqTwsizIcvCbDhigA3nWT0pfZrJJrosSMcSwNY3oLga/h9qZzQqU47bnj9LoKNPO+WTRFF8ZyabCY6I80a0En1BVmT2UcGcDjBLhcIvNcKOAINDTYaFaHRc0pWb3O60JJkaG6G8Va4UP+7Ul7UkYkjNXdbCHsO1tcD7COpPOiXWdeRwgxxTAmGR/UKjddd2lSa2ujw+oUVKnnXKNnYdptmILIrfnCvqOsIWYzWzFZeIzzIhp9oA/mUK0ZKx7MJU1KMZHHna/gfb9zVo8gB+owfUfes7nZ/gfb9zVosgP3GD6j+JUX3Hhpfzs/+jRlUeU+TrJxjWucWlrrzXDUTgfYr1FFodCcFNWZWWFZLJWE2EzQNJ2k61YqaIooSsWjFJWRisvcm5ibdCMC7yA8OvEjyi2lKA7Csr4vp76Ltn4U3qIUOCe54qvp9KpLM73FD4v5/wCi7Z+FHi/nvou2fhTeQoyIz6XR/IofF9PfRds/CjxfT30XbPwpvITIh0yj+RQ+L6e+i7Z+FHi/nvou2fhTeQmRDplEUPi+n/ou2fhR4vp/6Ltn4U3kJkQ6ZRFD4vp/6Ltn4UeL6f8Aou2fhTeQmnEdMoikhZAzwc0ngsHA+WdR/pTYgNoADqA9y9UXoBWUbcHpw+GhQvl+SVzTkjCigCIxrwMRUArpQpPQ0nycknIQoVeDY1ldN0AVXSvSEIUUlZHHOyEKMAIrGvANRUVoaEV3FEjZ8KCCITGsBNTQUquxFEGVXvbchVdv2WJqA+CTS8BQ7HNcHA7wFaqKIJRUlZlBklYHgcMsL75Lqk6NVB7FfEL0hFsRCChHKuDlnJOHFbditD21rQioqvEjZsGDXgobWV00FK/7VdlFNEJyq97bkLkn7OgxqCKxr6aKitKrsRRCWk9mcUjZ8KDUQmNYCamgpUrrCmilAklsjhtWSEaE+ETQPaW12VCpskMmvAxELn33RCKnQKNrd/Ed601EUQpKlFzU3ygWLzpD9VH1jfcVtVi86X7oPrGqsuGZYz9GRVZpjypgavkz18sfkhec03lTHqh+96FEFeJn6c/9PE+udr+B9v3BaPII/qMH+k+9ZrOv/A+37mrHytoTrGBsKJFDAMLtaadVFVu0jwzr6OLk7X2HteReSN/StoelmPvr7Slq2gYjAYscgvaCCHUIvCtcFZTTPTH1FN2ysdoKleGKSrnSCqKrA5yrWjwHQRBiuhhweTSmNCylajpO9Yx2VE9zl+9vcqSnZnPreoQpTyNbjxqiqRnGmd5y/wBinjTO85iexRqoy6rDxY8qoqkZxpnecxN4Rxpnecv3hNVDqsPFjzqiqRvGmd5zE3hAypnucv8AupqodVh4seSKpHca57nL/u9yONU9zl/3e5NVDqsPFjxqhI7jXPc5f93uRxsnucv+73JqIdVh4seKKpHca57nL/u9yONc9zl/3e5NVDqsPFjxvKCUj+Nc9zl/3O5Txqn+cv3N7k1EQ/VoLmLHgCiqSHGqf5y/c3uUcap/nL9ze5NRBer0uzHhVFUkONU/zl+5vco41T/OX7m9yaiJ6tS7MeCAkgMrJ/nL9zPhUjK+0OdO3Q/hTVQ6rT7Md5Ki8khxun+dO7MP4Ucb5/nTuyz4U1ET1Wn4seAKKpInK60Ocv7LPhUHK20Ocv3M+FNRFerUrcMd9UEpH8brQ5y/cz4UcbrQ5y/cz4U1ET1an2Y70VSR422hzl3ZZ8KnjhaHOXdlnwpqIL1ak/hjtvIvJIjLG0Ocu7MP4VPG+0Ocu7MP4U1UT1Sn2Y7arG50f3UfWNWE44Whzl3Zh/CuW0Lemo7bkeMYjQQaEMGPUAodRNGVf1GFSm4pM1+aTypj1Q/+aFOaZn7c6iWN3XihXp7RR7PTlbDxuTna/gfb9wWiyCYDJQTQeScevpCz2dn+B9v3BaTIH9xg+o+9VX3Mwpfzkl+C+4IbBuQYTdg3L61UFaHTaXY8tQ4qQVWW/a0OWhGI89DRtdqCETairsXWc+dD5lrG48FDofW52j14Det5kxZTGSsIOY1zrgJJArjjs6UqbKlIs5NBuJL3X3u2CtT+SeEJoAAGAApuWcd3c5mBWrUnWfD4PiZKF6NnZHcoMlB9GzsjuVLl5az5WVMVmBvMaXea1zwHOFdgquWFN/JxI8CbvwTLu5TjwnBRRi1zgBeA2impaqDtc6WWPY0vgML0bOyO5HgMH0bOyO5UllZQQWQYDZiZY+K+HW8A4CJStXNw9i7oeUMo6CI7YzXQybocKmrsOSBSpdiMKVTKxlj2O3wGF6NnZHcjwKF6NnZHcuAZSSlwRBFaQXFgAqXX26WXQL14bKVXfLTTIjBEhuDmuFWuGggqrTSJyw7EeBQfRs7I7keBQfRs7I7lm7NtiYM5OQoxaWwIUN7GtFByg8mprUnALN2VlnM3ZWYiOvNmY74TodOS0V5F2msEgErXRkVtDsMjwKD6NnZHcjwKD6NnZHclvYuVc1HiQ7sQmKZx0KJADRRsG7W/oqKU8quuiusqcoYzJyTgQHUa+O1kU0rWrmgsx6CEdGV7BKNuDX+AwfRs7I7keAwvRs7I7l92Icsy2SPYxmXVrslWNZChs4SJWhoOSNF6lMVkMmMkYs60xb/Bw6mjqXi46TQHAjFdedJx8JbsEIU31TEyehsbLQgzyQxtOsVqs7XlZnJVGOIxUlLhC+tvN7EhML4MThbuJaW3TT+WixgI2L9CvpoSEtKGBGitZ5IiPDfUHOA9gVakUjy+o4SnSSlHY82dJPjRGw4Yq5x3DWfaFuYebSreVM0d0M5P4qlcuaiE0xozjS8GMu9ZdepubvTQBVoRVjfA4KnUp5p7iUiwo9mzIDwDr2tit16RgmvZLpePCZFYxhDhXyRgdY0LIZ14bS2AfnXnAbaU76K2zaOPgYrqe8D1VKiO0rGmFjpYiVL4NN4FC9GzsjuWZy2tSHKQgGQ2GI+obgMNrtGqq1pSwzquPDQdnBvPWXBXlsj046ShRbSKrJ3JWNO1iXw1lcXkFxcddG1FFZ2xm8iQ2F8GLwlBUtc2hw2GpqtpkWxgkoNzQWVPSTpV2/QoUE0ZU/TqTp3fL+T890pq/wB1r7SMq6M9sOG2rnGg712ZShom44ZoEQ6OmmjerrNlCaZpxdSoZyfXXGixsr2OLToxlX03xcspfNobtXzFHU0BgLR1k1KzVoSEezo4rRxAvNNDdeBpBB0J2NIWHzqwmmBDdofwl0HoINfyWsopLY6+KwNOlTzw2aNBYEeBMwWxmw244OFBg4YEHDarLwCD6NnZHcsnmucfBn19KfaGk+1bYKy4Pbh8s6UZNcnL4BB9GzsjuUeAQfRs7I7l1oU2N8kex8IUBrfJaG41wwrq1BC+6FJNrcC4zsn9h9v3BdmSGU0nBlIUOLGa1zRQjZiuvLvJyPN8FwNwXL1bziNNKUoDsWS8Xk/tgdt3wLJ3Utjj1teniHOnG9zd8crP5wxByzs/nDVhPF3P7YPbd8CPF3P7YHbd8Cm8ifdYz/jNTaecCVYDwVYppoAo3rJ1JfWraUzPRRe5Z0MY0Ggrsp71o5LNrME/LRYbB/JV53uDaLb2Jk5LyraQm8o6XHFx603fJGjicR+o7LsV+Q2TplYZdEpwsShdTQ0Y0aN61ICgBegr2OrSpKnBRRSZURw1jGuhcKyI8Q4jbpdyHA44bDRY6Bk82VfOCUL3S8STilzTUtEUghrG4VJomW5q8li0jNxL2FlZ8u8foq9DdSEyKIlWHkEhwF7DBUEpZ00yBAicDEcyDPxYkRhaSaEQrsS7rAHCAU2p23Tt/wB/NebqvrPsRlFxlDKMbMSkaWgvbBEd7ormsJIdEFDFo4HbpotbktZsGXlxCg8JwYc4tvgVxxqMNCuwxTdVJTurMlKxjLGI/Sc69zTciQ4LWuLTdfdDrwFRQ6VUjJCEZiC2V4QS8BxmCHHkcJ81kIEYCoqaJk3VFzp/3rU6r5FkKCFZMy6JLzbRFbOvmHtji7cAZU3a0wugBtDrrtX2tax7TbHkhEbCfcj32uhsdS9fBc+NjjUBNq4ghX9w+wyoGAqSFLVKwJMFnJsGJFDY8JpcWAtc0aS3TX2KnyMyybLw+BmLxaCbrqVu1xukaaAkpovasvbGQsrHcXisJx03KAE7SKKji73Rzq+FqKerRe/yirt7ODB4NzZa89zgReIutbXCuOlUOQ2Tro7zFiA8GA4AkeU5wIrj6ytRI5upZjg6I+JFoahpIDfYFr4EBrAGtAAGgDQEUW3dlY4WpWkpVuOwl4Lo9mzQJaQQTUHQ9ldRW+hZwZItq4uBp5N01qr61rFgTLLsZgdsPzh0g6llYmbOAThHigbOQfaWo4tcEaGIoO1J3RkbetOLaMw24wjC4xuJIB0uOxNbJ+zRLwGQh80YnadJO9fKw8nYEqKQm4mlXHFx69SuAEirG2Fw0oSdSf3MghY3OPYT48JsWELz4V6o85rqV3UW0ooeKqzV9j01qSqwcH8inyOyuEq3gYzXFl48oYlnQW6VfW1nAgBhEvee8igNCA07cVaW3kTKzLi/lQ3HSWECvSQRQrgks3UsxwdEe+LTUaAH1gBVtLhHOVLFQ+iLVu5ksjLCfNR+FiV4NpL3GnlONaNG0aSepcsaWjWbNNN08h3JOgPZSlE5ZaWbDAaxoa0ClAKDcue1bJgzDbkVjXDp0jpB1Jk2/Jbp1obP6u5nJbOBJllXlzXUxbdO4ELEZT20+fjNENjqDksZiST5xC18TNrArVsaKBsq0066K/sLJmXlR8m2rjpc7F2/Uoak+SHRxNVZKj2JyTsnwWWbDOLiS95/mdpH5dSu2ryAvYWiWx0oQUIqK+AQhCFwQhCAghRdXpCA83UXV6QgIoiilCAiilCEAIQhAQiilCAhShCAEIQgBBQhAQApQhAQQiilCAiiKKUICKKKL0hARRFFKEAIKEICKIAUoQEURRShARRFFKEBFFKEIAQhCAEIQgP/2Q==' },
      { name: 'CartonCo1', logo: 'data:image/jpeg;base64,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' },
      { name: 'CartonCo2', logo: 'data:image/jpeg;base64,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' },
      { name: 'CartonCo3', logo: 'data:image/jpeg;base64,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' },

    ]
  },
  {
    key: 'plastic',
    name: 'Plastic',
    logos: [
      { name: 'PlastiPlus', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'PolyWorks', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg' }
    ]
  },
  {
    key: 'food',
    name: 'Food',
    logos: [
      { name: 'Foodies', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'SnackBrand', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg' }
    ]
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

