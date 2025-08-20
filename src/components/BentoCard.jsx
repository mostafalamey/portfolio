import React from "react";

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full overflow-hidden rounded-md">
      <video
        src={src}
        loop
        autoPlay
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex flex-col size-full justify-between p-5 text-blue-50">
        <div>
          {title && <h1 className="bento-title special-font">{title}</h1>}
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
        {isComingSoon && (
          <span className="mt-2 inline-block rounded-full bg-yellow-500 px-2 py-1 text-xs font-semibold text-black">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  );
};

export default BentoCard;
