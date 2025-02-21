import React from "react";

interface FeatureCardProps {
  icon: jsx.Element;
  header: string;
  description: string;
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>{props.icon}</figure>
      <div className="card-body">
        <h2 className="card-title">{props.header}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
