import hero from "../../src/assets/hero.png";
import Button from "../elements/Button";

const Hero = () => {
  return (
    <div className='grid grid-cols-2 px-48 h-[80dvh] items-center'>
      <div className=' flexflex-col'>
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
      <div className='flex justify-end'>
        <img src={hero} className='w-auto' />
      </div>
    </div>
  );
};

export default Hero;
