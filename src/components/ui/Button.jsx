function Button({ type = 'button', active, onClick,children,variant,className}) {
    const variantClasses={
        primary:'px-9 py-3 rounded-[34px] text-base leading-[150%] transition-all duration-300 cursor-pointer',
        secondary:'px-10.5 py-3 rounded-[34px] text-base leading-[150%] transition-all duration-300 cursor-pointer'
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${className} cursor-pointer ${variantClasses[variant]}
            ${active
                ? "font-bold text-red bg-[rgba(254,242,243,1)]"
                : "font-medium text-black bg-[rgba(247,249,255,1)]"}`}>
            {children}
        </button>
    )
}

export default Button;