interface FooterLinksContentTypes {
  children: string;
  link: string;
}

export const FooterLinksContent = ({
  children,
  link,
}: FooterLinksContentTypes) => {
  return (
    <>
      <li className='text-gray-400 hover:text-white w-fit transition-all duration-300'>
        <a href={link}>{children}</a>
      </li>
    </>
  );
};

interface FooterLinksTypes {
  children: React.ReactNode;
  title: string;
}

const FooterLinks = ({ children, title }: FooterLinksTypes) => {
  return (
    <div>
      <div>
        <p className='text-white font-semibold mb-4'>{title}</p>
      </div>
      <div>
        <ul className='grid gap-2 '>{children}</ul>
      </div>
    </div>
  );
};

export default FooterLinks;
