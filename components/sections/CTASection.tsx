import Button from "../elements/Button";
import CTAImage from "../../src/assets/CTA.png";

const CTASection = () => {
  return (
    <div className='px-48 mb-48 scroll-mt-48' id='contact'>
      <div className='grid grid-cols-2 bg-amber-200  rounded-2xl'>
        <div className='p-16 h-full'>
          <div>
            <p className='text-4xl font-semibold text-blue-950 mb-4'>
              Ready to get started?
            </p>
          </div>
          <div>
            <p className='text-xl mb-16 text-gray-600'>
              From unpredictable marketing spend to a reliable revenue engine.{" "}
              <br />
              Let's build yours.
            </p>
          </div>
          <div className='mt-auto'>
            <Button href='/' type='line'>
              Book an appointment
            </Button>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={CTAImage} className='overflow-auto' />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
