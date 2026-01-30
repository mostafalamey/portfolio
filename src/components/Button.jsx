import React from "react";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
}) => {
  const base = "dl-btn";
  const variants = {
    primary: "dl-btn-primary",
    secondary: "dl-btn-secondary",
    ghost: "dl-btn-ghost",
  };

  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant] ?? variants.primary} disabled:opacity-60 disabled:cursor-not-allowed ${containerClass}`}
    >
      {leftIcon}
      <span className="relative overflow-hidden font-accent text-xs uppercase tracking-[0.14em]">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
