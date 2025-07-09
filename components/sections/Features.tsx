import FeaturesCard, {
  FeaturesCaption,
  FeaturesImage,
  FeaturesTitle,
  FeaturesCTA,
} from "../elements/FeaturesCard";
import features1 from "../../src/assets/features-1.png";
import features2 from "../../src/assets/features-2.png";
import features3 from "../../src/assets/features-3.png";

interface FeaturesDataType {
  thumbnail: HTMLImageElement | string;
  title: string;
  caption: string;
  link: string;
  cardColor: string;
}
const featuresData: FeaturesDataType[] = [
  {
    thumbnail: features1,
    title: "Strategic Growth Plan",
    caption: `We'll create a clear, actionable roadmap to your business goals. No more guesswork, just a direct path to growth.`,
    link: "/",
    cardColor: "#EFE9D5",
  },
  {
    thumbnail: features2,
    title: "Customer Acquisition Funnel",
    caption: `We design a repeatable system that turns interested prospects into loyal customers, creating a predictable flow of sales.`,
    link: "/",
    cardColor: "#D1D8BE",
  },
  {
    thumbnail: features3,
    title: "Strategic Growth Plan",
    caption: `We build your reputation as a trusted leader in your industry, so ideal clients find, trust, and choose you first.`,
    link: "/",
    cardColor: "#D4EBF8",
  },
];

const Features = () => {
  return (
    <div
      className='px-4  2xl:px-48 flex items-center flex-col mb-32 scroll-mt-24'
      id='features'
    >
      <div className='font-semibold text-gray-600 mb-2'>Our Program</div>
      <div className='font-semibold text-4xl text-center mb-8 leading-tight'>
        Blueprint for <br />
        Your Next Sales Boost
      </div>
      <div className='grid md:grid-cols-3 gap-8 xl:gap-16'>
        {featuresData.map((item) => (
          <FeaturesCard bgColor={item.cardColor}>
            <FeaturesImage>{item.thumbnail}</FeaturesImage>
            <FeaturesTitle>{item.title}</FeaturesTitle>
            <FeaturesCaption>{item.caption}</FeaturesCaption>
            <FeaturesCTA link={item.link}>Learn more</FeaturesCTA>
          </FeaturesCard>
        ))}
      </div>
    </div>
  );
};

export default Features;
