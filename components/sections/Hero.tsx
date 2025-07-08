import hero from "../../src/assets/hero.svg";
import Button from "../elements/Button";

const Hero = () => {
  return (
    <div className='flex px-48 h-[80dvh] items-center'>
      <div className='w-1/2 flexflex-col'>
        <div className='text-7xl font-semibold'>
          Sell smarter. <br />
          Grow faster.
        </div>
        <div className='mt-8 text-lg text-gray-600'>
          Slerate helps you increase sales and conversions with data-driven
          strategies. <br />
          No guesswork — just clear, measurable results. <br />
          Start boosting your growth today.
        </div>
        <div className='mt-40'>
          <Button href='/' type='fill'>
            Get started now!
          </Button>
        </div>
      </div>
      <div className='w-1/2 flex justify-center'>
        <img src={hero} className='w-auto h-[600px]' />
      </div>
    </div>
  );
};

export default Hero;
