import React from "react";

interface FeatureCardProps {
  icon: React.JSX.Element;
  header: string;
  description: string;
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="card mx-4 border-2 border-solid border-(--color-primary-50) shadow-md sm:mx-2 sm:max-w-5/6 md:max-w-full">
      <figure className="place-self-start pt-8 pl-8">{props.icon}</figure>
      <div className="card-body">
        <h4 className="card-title">{props.header}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
