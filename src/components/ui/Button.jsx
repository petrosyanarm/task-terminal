import { twMerge } from "tailwind-merge";
function Button({ type = 'button', onClick, children, variant, className }) {
    const variantClasses = {
        primary: ' rounded-[34px] text-base leading-[150%]',
        secondary: 'flex justify-center items-center gap-2 bg-[rgba(85,212,167,0.1)] text-[rgba(35,148,107,1)] rounded-[20px] text-[10px] lg:text-[14px] font-medium font-montserrat'
    }
    return (
        <button type={type} onClick={onClick}  className={twMerge(className, "cursor-pointer", variantClasses[variant],
        )}>
            {children}
        </button>
    )
}

export default Button;