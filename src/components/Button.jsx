import React from "react";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  onClick,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group relative z-10 w-fit flex items-center cursor-pointer overflow-hidden rounded-full bg-stone-100 px-7 py-3 text-stone-800 hover:bg-stone-200 transition-colors duration-300 ${containerClass}`}
    >
      {leftIcon}
      <span className="relative overflow-hidden font-accent text-xs uppercase font-medium">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
