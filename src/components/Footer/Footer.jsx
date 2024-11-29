import React from "react";
import "./Footer.css";

const footerData = [
  {
    description: "Product",
    link1: "Overview",
    link2: "Features",
    link3: "Solutions",
    link4: "Tutorials",
    link5: "Pricing",
    link6: "Releases",
  },
  {
    description: "Company",
    link1: "About us",
    link2: "Careers",
    link3: "Press",
    link4: "News",
    link5: "Media kit",
    link6: "Contact",
  },

  {
    description: "Resources",
    link1: "Blog",
    link2: "Newsletter",
    link3: "Events",
    link4: "Help centre",
    link5: "Tutorials",
    link6: "Support",
  },

  {
    description: "Use cases",
    link1: "Startups",
    link2: "Enterprise",
    link3: "Government",
    link4: "SaaS centre",
    link5: "Marketplaces",
    link6: "Ecommerce",
  },

  {
    description: "Social",
    link1: "Twitter",
    link2: "LinkedIn",
    link3: "Facebook",
    link4: "GitHub",
    link5: "AngelList",
    link6: "Dribbble",
  },

  {
    description: "Legal",
    link1: "Terms",
    link2: "Privacy",
    link3: "Cookies",
    link4: "Licenses",
    link5: "Settings",
    link6: "Contact",
  },
];
const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="list-container">
        {footerData.map((item, index) => (
          <ul key={index}>
            <li>{item.description}</li>
            <li>{item.link1}</li>
            <li>{item.link2}</li>
            <li>{item.link3}</li>
            <li>{item.link4}</li>
            <li>{item.link5}</li>
            <li>{item.link6}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Footer;
