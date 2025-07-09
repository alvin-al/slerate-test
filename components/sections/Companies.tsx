import gojek from "../../src/assets/gojek.png";
import shopee from "../../src/assets/shopee.png";
import grab from "../../src/assets/grab.png";
import spotify from "../../src/assets/spotify.png";

const Companies = () => {
  return (
    <div
      className='px-48 flex items-center flex-col gap-16  mb-48
    '
    >
      <div className='font-semibold text-gray-600'>
        Trusted by Companies Worldwide
      </div>
      <div className='flex gap-32'>
        <div>
          <img src={gojek} />
        </div>
        <div>
          <img src={grab} />
        </div>
        <div>
          <img src={shopee} />
        </div>
        <div>
          <img src={spotify} />
        </div>
      </div>
    </div>
  );
};

export default Companies;
