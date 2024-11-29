import React from "react";
import "./Features.css";
import {
  MessageCircle,
  Zap,
  FolderGit,
  MessageCircleMore,
  SquareDashed,
  MessageCircleHeart,
} from "lucide-react";

const card = [
  {
    icon: <MessageCircle />,
    description: "Share team inboxes",
    text: `Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups`,
  },
  {
    icon: <Zap />,
    description: "Deliver instant answers",
    text: `An all-in-one customer service platform that helps you balance everything your customers need to be happy.`,
  },
  {
    icon: <FolderGit />,
    description: "Manage your team with reports",
    text: `Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.`,
  },
  {
    icon: <MessageCircleMore />,
    description: "Connect with customers",
    text: `Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.`,
  },
  {
    icon: <SquareDashed />,
    description: "Connect the tools you already use",
    text: `Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.`,
  },
  {
    icon: <MessageCircleHeart />,
    description: "Our people make the difference",
    text: `We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.`,
  },
];

const Features = () => {
  return (
    <div className="featues-main-container">
      <div className="features-text-container">
        <h6>Features</h6>
        <h2>Analytics that feels like it’s from the future</h2>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="card-conatainer">
        {card.map((item, index) => (
          <div key={index} className="card">
            <span>{item.icon}</span>
            <h6>{item.description}</h6>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
