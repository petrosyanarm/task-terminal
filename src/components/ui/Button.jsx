import { twMerge } from "tailwind-merge";
function Button({ type = 'button', onClick, children, variant, className }) {
    const variantClasses = {
        primary: 'px-9 py-3 rounded-[34px] text-base leading-[150%] transition-all duration-300 cursor-pointer',
        secondary: 'px-10.5 py-3 rounded-[34px] text-base leading-[150%] transition-all duration-300 cursor-pointer'
    }
    return (
        <button type={type} onClick={onClick} className={twMerge(className, "cursor-pointer", variantClasses[variant],
        )}>
            {children}
        </button>
    )
}

export default Button;