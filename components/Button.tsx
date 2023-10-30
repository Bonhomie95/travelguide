import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'btn_dark_green';
};

const Button = ({ title, icon, variant, type }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}{' '}
      <label className="cursor-pointer bold-16 whitespace-nowrap"> {title} </label>{' '}
    </button>
  );
};

export default Button;
