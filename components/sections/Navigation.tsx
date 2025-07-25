import logo from "../../src/assets/logo.png";
import Button from "../elements/Button";

interface MenuTypes {
  title: string;
  link: string;
}

const Navigation = () => {
  const menu: MenuTypes[] = [
    {
      title: "Features",
      link: "#features",
    },
    {
      title: "Contact Us",
      link: "#contact",
    },
  ];

  return (
    <div className='w-full border-b-2 border-gray-300 h-20 px-4 lg:px-28 2xl:px-48 flex items-center justify-between'>
      <div>
        <a href='/'>
          <img src={logo} className='h-12 xl:h-12 xl:w-fit' />
        </a>
      </div>
      <div className='hidden md:inline-block'>
        <ul className='flex gap-12 text-base font-medium '>
          {menu.map((item) => (
            <a href={item.link}>
              <li className='hover:text-gray-500 transition-all duration-300'>
                {item.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <div>
        <Button href='#contact' type='line'>
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
