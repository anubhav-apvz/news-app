import React from "react";

const HomeIcon = ({ color = "#CDCDD6" }) => {
    // #014899
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16663 17H15.1666M21.1666 20V10.4673C21.1666 9.54148 20.7392 8.66756 20.0084 8.0992L14.0084 3.43253C12.9251 2.58994 11.4081 2.58994 10.3248 3.43253L4.3248 8.09919C3.59404 8.66756 3.16663 9.54148 3.16663 10.4673V20C3.16663 20.5304 3.37734 21.0391 3.75241 21.4142C4.12749 21.7893 4.63619 22 5.16663 22H19.1666C19.6971 22 20.2058 21.7893 20.5808 21.4142C20.9559 21.0391 21.1666 20.5304 21.1666 20Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
