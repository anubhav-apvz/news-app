import React from "react";

const NewsIcon = ({ color = "#CDCDD6" }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 22H20.5C21.0304 22 21.5391 21.7893 21.9142 21.4142C22.2893 21.0391 22.5 20.5304 22.5 20V4C22.5 3.46957 22.2893 2.96086 21.9142 2.58579C21.5391 2.21071 21.0304 2 20.5 2H8.5C7.96957 2 7.46086 2.21071 7.08579 2.58579C6.71071 2.96086 6.5 3.46957 6.5 4V20C6.5 20.5304 6.28929 21.0391 5.91421 21.4142C5.53914 21.7893 5.03043 22 4.5 22ZM4.5 22C3.96957 22 3.46086 21.7893 3.08579 21.4142C2.71071 21.0391 2.5 20.5304 2.5 20V11C2.5 9.9 3.4 9 4.5 9H6.5M18.5 14H10.5M15.5 18H10.5M10.5 6H18.5V10H10.5V6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NewsIcon;
