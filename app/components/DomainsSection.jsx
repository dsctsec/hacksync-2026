"use client";
import React from "react";
import "./domains.css";

export default function DomainsSection() {
  const domains = [
    {
      name: "Artificial Intelligence",
      subheading: "Built or Busted",
      description: "Automating the Frontier & Thinking Machines",
      reward: "$50,000",
      image: "/domains/ai.png",
    },
    {
      name: "Blockchain",
      subheading: "Built or Busted",
      description: "Forging Unbreakable Ledgers & Staking Digital Claims",
      reward: "$40,000",
      image: "/domains/blockchain.png",
    },
    {
      name: "Web Development",
      subheading: "Built or Busted",
      description: "Engineering New Territories & Running the Full Stack",
      reward: "$30,000",
      image: "/domains/web.png",
    },
  ];

  return (
    <main className="domains-container">
      <h1 className="domain-title">WANTED: DOMAINS</h1>
      <div className="poster-grid">
        {domains.map((domain, i) => (
          <div key={i} className="poster">
            <h1>WANTED</h1>
            <p className="subheading">{domain.subheading}</p>
            <div
              className="mugshot"
              style={{ backgroundImage: `url(${domain.image})` }}
              role="img"
              aria-label={`${domain.name} image`}
            ></div>
            <p className="name">{domain.name}</p>
            <em><span>For Crimes Of: </span> <br />{domain.description}</em>
            <h2>Reward</h2>
            <u>{domain.reward}</u>
          </div>
        ))}
      </div>
    </main>
  );
}
