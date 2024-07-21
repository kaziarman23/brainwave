import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, px, white, children }) => {
  const clesses = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClesses = `relative z-10`;

  const renderButton = () => (
    <button className={clesses} onClick={onClick}>
      <span className={spanClesses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={clesses}>
      <span className={spanClesses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
