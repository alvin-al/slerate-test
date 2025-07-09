interface ButtonTypes {
  children: string;
  href: string;
  type?: "line" | "fill";
}

const Button = ({ children, href, type = "line" }: ButtonTypes) => {
  const base =
    "px-6 py-3 rounded-sm font-medium transition-all duration-300 inline-block text-center";

  const getButtonClasses = () => {
    if (type === "fill") {
      return `${base} bg-blue-950 text-white hover:bg-blue-800 border-2 border-blue-950 hover:border-blue-800`;
    } else {
      return `${base} bg-transparent text-blue-950 border border-blue-950 hover:bg-blue-950 hover:text-white`;
    }
  };

  return (
    <a href={href} className={getButtonClasses()}>
      {children}
    </a>
  );
};

export default Button;
