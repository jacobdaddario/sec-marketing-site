import React from "react";

const LinkButton = (props) => {
  const { link, linkText } = props;

  return (
    <div className="text-center px-6 py-2 bg-maroon-700 rounded-md shadow cursor-pointer ease-out transition-colors duration-150 focus:shadow-outline hover:bg-maroon-500">
      <a href={link} className="text-white text-lg font-semibold">
        {linkText}
      </a>
    </div>
  );
};

export default LinkButton;
