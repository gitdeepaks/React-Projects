
function App() {


  return (
    <>
      <div className="container mx-auto px-10 md:px-0 py-10 flex flex-col text-center lg:flex-row sm:text-left lg:items-start">
        <div className="w-full space-y-4 mb-10 lg:mb-0">
          <h1 className="text-gray-800 dark:text-gray-200 text-5xl font-semibold">
            Choose your plan
          </h1>
          <p className="text-gray-700 dark:text-gray-300 font-medium text-base">
            We believe creating beautiful websites should not be expensive.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-7 border border-indigo-600 rounded-lg">
          <div className="w-full md:w-1/3">
            <div className="p-8 space-y-4 rounded-lg">
              <h6 className="text-xl font-semibold text-indigo-600 dark:text-white">
                Free
              </h6>
              <h4 className="text-3xl font-medium text-black dark:text-white">
                $0
              </h4>
              <p className="text-base font-medium text-gray-600 dark:text-gray-300">
                For anyone useful lite version as a professional wireframe kit.
              </p>
              <ul>
                <li className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-[10px] text-indigo-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-200">
                    Lite Version
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-[10px] text-indigo-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-200">
                    1 Editor
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-[10px] text-indigo-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-200">
                    Pre-made page
                  </span>
                </li>
              </ul>
              <button className="text-sm font-medium text-white bg-indigo-600 w-full py-2 px-5 rounded-md">
                Try for free
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-1/3 bg-indigo-600">
            <div className="bg-indigo-800 left-[50%] transform -translate-x-1/2 text-white absolute uppercase font-medium text-sm py-1 rounded-br-md rounded-bl-md px-[10px]">
              popular
            </div>
            <div className="p-8 mt-4 space-y-4 rounded-lg md:mt-0">
              <h6 className="text-xl font-semibold text-white ">Pro</h6>
              <h4 className="inline-flex items-center text-3xl font-medium text-white ">
                $150<span className="ml-2 text-base">Monthly</span>
              </h4>
              <p className="text-base font-medium text-white ">
                For anyone useful lite version as a professional wireframe kit.
              </p>
              <ul>
                <li className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-[10px] text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                  <span className="text-white">Lite Version</span>
                </li>
                <li className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-[10px] text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                  <span className="text-white">Unlimited Editors</span>
                </li>
                <li className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-[10px] text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                  <span className="text-white">Pre-made page</span>
                </li>
              </ul>
              <button className="text-sm font-medium text-indigo-600 bg-white w-full py-2 px-5 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="p-8 space-y-4 rounded-lg">
              <h6 className="text-xl font-semibold text-indigo-600 dark:text-white">
                Enterprise
              </h6>
              <h4 className="text-3xl font-medium text-black dark:text-white">
                $200
              </h4>
              <p className="text-base font-medium text-gray-600 dark:text-gray-300">
                For anyone useful lite version as a professional wireframe kit.
              </p>
              <ul>
                <li className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-[10px] text-indigo-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-200">
                    Lite Version
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-[10px] text-indigo-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-200">
                    1 Editor
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-[10px] text-indigo-600"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-200">
                    Pre-made page
                  </span>
                </li>
              </ul>
              <button className="text-sm font-medium text-white bg-indigo-600 w-full py-2 px-5 rounded-md">
                Try for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
