import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";

// Auth forms submit btn
export const SubmitBtn = ({ btnText }) => {
  return (
    <button type="submit" className="authSubmitBtn ">
      <svg
        className=" animate-spin my-auto h-6 w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {btnText}
    </button>
  );
};

// auth page close button 'redirect user to landing page'
export const CloseBtn = (params) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")} className="auth-close-btn">
      <IoMdClose className="text-3xl " />
    </button>
  );
};



