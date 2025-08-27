export type NewsArticle = {
  id: string;
  title: string;
  desc?: string;
  imageUrl?: string;
  author?: string;
  publishDate?: string;
  content?: string[]; // paragraphs or HTML-safe strings
};

export const newsData: NewsArticle[] = [
  {
    id: "1",
    title: "Crosson Holding's 58th ordinary general assembly convened",
    desc: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
    imageUrl: "/images/newsdetail/news1.png",
    author: "Admin",
    publishDate: "August 27, 2025",
    content: [
      "At the roots of Crosson, there is 20 years of experience in food industry that is filled with research, increasing efficiency and producing solution for food, quality, automation and software.",
      "Donut candy shortbread toffee dragée apple pie brownie jelly-o wafer gingerbread muffin. Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet. Cotton candy pie cookie toffee chocolate bar. Lemon drops pie sweet roll chocolate cake wafer. Tart gummies chocolate cake.",
    ],
  },
  {
    id: "2",
    title: "Crosson Holding's new Board of Directors has been determined",
    desc: "Board announcement summary.",
    imageUrl: "/images/newsdetail/news1.png",
    author: "Admin",
    publishDate: "July 10, 2025",
    content: ["Board announcement content paragraph one.", "Paragraph two."],
  },
  {
    id: "3",
    title: "Gujranwala industry expo attracts international buyers",
    desc: "International buyers visited the expo to review manufacturing capabilities.",
    imageUrl: "/images/newsdetail/news1.png",
    author: "Editor",
    publishDate: "June 5, 2025",
    content: [
      "The Gujranwala industry expo saw a record number of international visitors this year.",
      "Discussions centered on export opportunities and quality improvements.",
    ],
  },
  {
    id: "4",
    title: "New SME loan program announced for local manufacturers",
    desc: "Micro and small manufacturers can now apply for subsidized loans.",
    imageUrl: "/images/newsdetail/news1.png",
    author: "Business Desk",
    publishDate: "May 18, 2025",
    content: [
      "The loan program aims to modernize production lines at competitive rates.",
      "Applications open from next month with simplified documentation.",
    ],
  },
  {
    id: "5",
    title: "Textile cluster expands capacity with modern dyeing units",
    desc: "Capacity expansion will create new jobs across the cluster.",
    imageUrl: "/images/newsdetail/news1.png",
    author: "Industry Reporter",
    publishDate: "April 2, 2025",
    content: [
      "Several textile units installed modern machinery to meet rising demand.",
      "Environmental safeguards were included in the new units.",
    ],
  },
  {
    id: "6",
    title: "Energy efficiency program helps reduce factory costs",
    desc: "Factories implementing the program report lower electricity bills.",
    imageUrl: "/images/newsdetail/news1.png",
    author: "Environment Desk",
    publishDate: "March 21, 2025",
    content: [
      "Small changes in lighting and motor controls delivered significant savings.",
      "Workshops on energy audits are planned for the coming quarter.",
    ],
  },
  {
    id: "7",
    title: "Export mission to Europe secures new buyers",
    desc: "Delegation closed deals with several European distributors.",
    imageUrl: "/images/newsdetail/news1.png",
    author: "Exports Team",
    publishDate: "February 14, 2025",
    content: [
      "The export mission focused on consumer goods and industrial components.",
      "Follow-up visits are scheduled to finalize logistics and certifications.",
    ],
  },
  {
    id: "8",
    title: "Local startups present automation solutions for SMEs",
    desc: "Startups showcased affordable automation kits suitable for SMEs.",
    imageUrl: "/images/newsdetail/news1.png",
    author: "Startup Watch",
    publishDate: "January 30, 2025",
    content: [
      "Startups demonstrated modular automation that integrates with legacy lines.",
      "Pilot programs are being discussed with several manufacturers.",
    ],
  },
  // add more items if needed
];