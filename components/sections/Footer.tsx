import logo from "../../src/assets/logo-white.png";
import FooterLinks, { FooterLinksContent } from "../elements/FooterLinks";

const menuList = {
  title: "Menu",
  list: [
    { label: "Features", link: "#features" },
    { label: "Contact", link: "#contact" },
  ],
};

const resources = {
  title: "Resources",
  list: [
    { label: "Help & Support", link: "/" },
    { label: "Feedback", link: "/" },
    { label: "Blog", link: "/" },
  ],
};

const Footer = () => {
  return (
    <div className='h-fit md:h-96 bg-blue-950 lg:px-28 p-4 2xl:px-48 py-16 gap-y-20 grid md:grid-cols-2'>
      <div className='flex flex-col h-full justify-between order-1 md:order-0'>
        <div>
          <img src={logo} className='mb-8 md:mb-4' />
          <p className='xl:pr-36 xl:w-[600px] text-gray-300 font-light'>
            Growth accelerates with innovation. Businesses today need the right
            strategies, technologies, people and purpose to scale.Growth
            accelerates with innovation. Businesses today need the right
            strategies, technologies, people and purpose to scale.
          </p>
        </div>
        <div className='mt-8 '>
          <p className='text-white'>
            2025© Slerate. All rights reserved by Company
          </p>
        </div>
      </div>
      <div className='md:pl-16 grid gap-y-12  md:grid-cols-3'>
        <FooterLinks title={menuList.title}>
          {menuList.list.map((item, index) => (
            <FooterLinksContent link={item.link} key={index}>
              {item.label}
            </FooterLinksContent>
          ))}
        </FooterLinks>
        <FooterLinks title={resources.title}>
          {resources.list.map((item, index) => (
            <FooterLinksContent link={item.link} key={index}>
              {item.label}
            </FooterLinksContent>
          ))}
        </FooterLinks>
        <FooterLinks title='Get in Touch'>
          <FooterLinksContent link='mailto:hi@slerate.com'>
            hi@slerate.com
          </FooterLinksContent>
        </FooterLinks>
      </div>
    </div>
  );
};

export default Footer;
