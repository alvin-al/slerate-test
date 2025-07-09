import type React from "react";

export const FeaturesImage = ({
  children,
}: {
  children: HTMLImageElement | string;
}) => {
  return (
    <>
      <img src={typeof children === "string" ? children : children.src} />
    </>
  );
};

export const FeaturesTitle = ({ children }: { children: string }) => {
  return (
    <>
      <p
        className='text-4xl font-medium
      '
      >
        {children}
      </p>
    </>
  );
};

export const FeaturesCaption = ({ children }: { children: string }) => {
  return (
    <>
      <p className='text-gray-600'>{children}</p>
    </>
  );
};

interface FeaturesCTATypes {
  children: string;
  link: string;
}

export const FeaturesCTA = ({ children, link }: FeaturesCTATypes) => {
  return (
    <div className='underline hover:text-gray-500 mt-auto w-fit transition-all duration-300'>
      <a href={link}>{children}</a>
    </div>
  );
};

interface FeaturesCardProps {
  children: React.ReactNode;
  bgColor?: string;
}

const FeaturesCard = ({ bgColor = "#d6d6d6", children }: FeaturesCardProps) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={`w-[370px] lg:w-[300px] xl:w-[370px] min-h-[500px] p-6 rounded-md gap-4 flex flex-col `}
    >
      {children}
    </div>
  );
};

export default FeaturesCard;
