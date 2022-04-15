import React from "react";
import Router from "next/router";

export default function Iframe(props) {
  let message = props.message;
  const generating = props.generating;

  function openModal() {
    props.setIsOpen(true);
  }
  function copyTextToClipboard() {
    navigator.clipboard.writeText(message).then(
      function () {
        // window.alert("Copied!");
        openModal();
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  return (
    <div>
      <div className="m-5">
        <div
          className={
            generating || message.indexOf("<") == -1
              ? "cursor-wait flex justify-center"
              : "flex justify-center"
          }
        >
          <input
            className={
              generating || message.indexOf("<") == -1
                ? "pointer-events-none shadow-inner appearance-none border lg:w-1/2 w-full py-4 px-4 text-gray-700 leading-tight rounded-l-lg focus:outline-none hover:bg-gray-200"
                : "shadow-inner appearance-none border lg:w-1/2 w-full py-4 px-4 text-gray-700 leading-tight rounded-l-lg focus:outline-none hover:bg-gray-200"
            }
            placeholder={message}
            onClick={() => {
              copyTextToClipboard();
            }}
          />
          <span className="shadow-inner inline-flex items-center px-3 bg-primary-orange rounded-r-lg border border-r-0 hover:bg-primary-variant-orange">
            <button
              className={
                generating || message.indexOf("<") == -1
                  ? "pointer-events-none cursor-wait"
                  : ""
              }
              onClick={() => {
                copyTextToClipboard();
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3333 3.99999H19.76C19.2 2.45333 17.7333 1.33333 16 1.33333C14.2667 1.33333 12.8 2.45333 12.24 3.99999H6.66667C5.2 3.99999 4 5.19999 4 6.66666V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V6.66666C28 5.19999 26.8 3.99999 25.3333 3.99999ZM16 3.99999C16.7333 3.99999 17.3333 4.59999 17.3333 5.33333C17.3333 6.06666 16.7333 6.66666 16 6.66666C15.2667 6.66666 14.6667 6.06666 14.6667 5.33333C14.6667 4.59999 15.2667 3.99999 16 3.99999ZM18.6667 22.6667H9.33333V20H18.6667V22.6667ZM22.6667 17.3333H9.33333V14.6667H22.6667V17.3333ZM22.6667 12H9.33333V9.33333H22.6667V12Z"
                  fill="#F29D38"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="text-center m-5">
          {!generating ? (
            <>
              <div
                className="flex justify-center"
                dangerouslySetInnerHTML={{
                  __html: message.indexOf("<") != -1 ? message : "",
                }}
              />
              {message.indexOf("<") != -1 ? (
                <div className="my-8">
                  <button
                    onClick={() => Router.push("/myList")}
                    className="px-8 py-2 bg-primary-variant-orange text-white font-semibold hover:bg-amber-400"
                  >
                    ほかのユーザーのマイリスト
                  </button>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <div className="flex justify-center">
              <div className="animate-spin h-20 w-20 border-4 border-orange-600 rounded-full border-t-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
