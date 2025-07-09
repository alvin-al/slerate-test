import hero from "../../src/assets/hero.png";
import Button from "../elements/Button";

const Hero = () => {
  return (
    <div className='grid pt-8 xl:pt-0 md:grid-cols-2 px-4 lg:px-28 2xl:px-48 lg:h-[75vh] items-center'>
      <div className='order-1 md:order-0 lg:order-0 mt-8 md:mt-0'>
        <div className='text-5xl xl:text-6xl 2xl:text-7xl font-semibold'>
          Sell smarter. <br />
          Grow faster.
        </div>
        <div className='mt-8 text-lg text-gray-600'>
          Slerate helps you boost the sales and conversions with data-driven
          strategies. <br />
          No guesswork — just clear, measurable results. <br />
          Start boosting your growth today.
        </div>
        <div className='mt-12 '>
          <Button href='/' type='fill'>
            Get started now!
          </Button>
        </div>
      </div>
      <div className='flex  md:justify-end'>
        <img src={hero} className='w-auto' />
      </div>
    </div>
  );
};

export default Hero;
