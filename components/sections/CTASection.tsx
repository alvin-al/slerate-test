import Button from "../elements/Button";
import CTAImage from "../../src/assets/CTA.png";

const CTASection = () => {
  return (
    <div
      className='px-4 lg:px-28 2xl:px-48 mb-24 2xl:mb-48 scroll-mt-48'
      id='contact'
    >
      <div className='grid md:grid-cols-2 bg-amber-200 rounded-2xl'>
        <div className='px-8 py-12 xl:p-16 h-full mb-8 md:mb-0'>
          <div>
            <p className='text-6xl font-semibold text-blue-950 mb-8'>
              Ready to get started?
            </p>
          </div>
          <div>
            <p className='text-xl mb-16 text-gray-600'>
              From unpredictable marketing spend to a reliable revenue engine.{" "}
              <br />
              Let's build your sales boost.
            </p>
          </div>
          <div className='mt-auto'>
            <Button href='/' type='line'>
              Book an appointment
            </Button>
          </div>
        </div>
        <div className='flex justify-center self-end'>
          <img src={CTAImage} />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
