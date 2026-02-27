import { type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant,
  size?: 'sm' | 'md' | 'lg',
  isLoading?: boolean,
  fullWidth?: boolean,
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  fullWidth = false,
  disabled,
  ...rest
}) => {

  //STYLING

  const baseStyling = 'font-medium rounded focus:outline-none transition-colors duration-200'
  const variantStyling = {
    primary: "bg-primary text-white hover:bg-[#FF7A1882] rounded-md cursor-pointer",
    outline: "border-2 border-main rounded-md text-main cursor-pointer hover:bg-main hover:text-white hover:border-main",
  };
  const sizeStyling = {
    'sm': 'px-3 py-1.5 text-sm',
    'md': 'px-8 py-3 text-base',
    'lg': 'px-6 py-4 text-base',
  };
  const widthStyling = fullWidth ? 'w-full' : '';

  const buttonStyling = `${variantStyling[variant]} ${sizeStyling[size]} ${widthStyling} ${baseStyling} ${disabled} ${className} ${className}`;

  return (
    <button disabled={disabled || isLoading} className={buttonStyling} {...rest}>
      {isLoading ? <span className='inline-block animate-pulse'>Loading....</span> : (children )}
    </button>
  )
}

export default Button