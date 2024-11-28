/** @format */

import React from "react";

interface CookieBarProps {
  handleAcceptCookie: () => void;
  handleDismissCookie: () => void;
}

const CookieBar: React.FC<CookieBarProps> = ({
  handleAcceptCookie,
  handleDismissCookie,
}) => {
  return (
    <>
      <div className="bg-white fixed bottom-0 w-full p-4 text-center border border-gray-300 shadow-lg z-50">
        <div className="flex justify-center items-center mb-3">
          <div className="bg-gray-200 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 1 0 8.47 14.47 7 7 0 0 1-7.88-7.88A10 10 0 0 0 12 2zm1.12 14.41a1.5 1.5 0 1 1-2.24-2.06 1.5 1.5 0 0 1 2.24 2.06zm-4.24-4.25a1.5 1.5 0 1 1-2.12-2.12 1.5 1.5 0 0 1 2.12 2.12zm5.5-4.5a1.5 1.5 0 1 1-2.12-2.12 1.5 1.5 0 0 1 2.12 2.12zm3.75 7.25a1.25 1.25 0 1 1-1.77 0 1.25 1.25 0 0 1 1.77 0zm-1.5-9a1.25 1.25 0 1 1-1.77 0 1.25 1.25 0 0 1 1.77 0z" />
            </svg>
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          This website uses third-party cookies to improve your experience
          through better tracking and services. Learn more by visiting our{" "}
          <a
            href="/cookiepolicy"
            className="text-blue-600 underline"
          >
            Cookie Policy
          </a>
          , or opt out of third-party cookies using the button below.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-black text-white px-6 py-2 rounded-full"
            onClick={handleAcceptCookie}
          >
            Accept
          </button>
          <button
            className="border border-black text-black px-6 py-2 rounded-full"
            onClick={handleDismissCookie}
          >
            Decline
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieBar;
