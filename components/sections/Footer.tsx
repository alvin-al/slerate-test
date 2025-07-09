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
    <div className='h-96 bg-blue-950 px-48 py-16 grid grid-cols-2'>
      <div className='flex flex-col h-full justify-between'>
        <div>
          <img src={logo} className='mb-4' />
          <p className='w-[600px] text-gray-300 font-light'>
            Growth accelerates with innovation. Businesses today need the right
            strategies, technologies, people and purpose to scale.Growth
            accelerates with innovation. Businesses today need the right
            strategies, technologies, people and purpose to scale.
          </p>
        </div>
        <div>
          <p className='text-white'>
            2025© Slerate. All rights reserved by Company
          </p>
        </div>
      </div>
      <div className='pl-16 grid grid-cols-3'>
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
