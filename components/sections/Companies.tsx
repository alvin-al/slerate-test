import gojek from "../../src/assets/gojek.png";
import shopee from "../../src/assets/shopee.png";
import grab from "../../src/assets/grab.png";
import spotify from "../../src/assets/spotify.png";

const Companies = () => {
  return (
    <div
      className='px-4 lg:px-28 2xl:px-48 flex items-center flex-col gap-8 mt-36 md:mt-16 xl:mt-0 mb-36
    '
    >
      <div className='font-semibold text-gray-600'>
        Trusted by Companies Worldwide
      </div>
      <div className='grid grid-cols-1 items-center content-center md:grid-cols-4 gap-y-16 md:gap-y-0 md:gap-12 justify-items-center '>
        <div>
          <img src={gojek} />
        </div>
        <div>
          <img src={grab} />
        </div>
        <div>
          <img src={spotify} />
        </div>
        <div>
          <img src={shopee} />
        </div>
      </div>
    </div>
  );
};

export default Companies;
