import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 border-b w-full bg-white text-sm py-3 sm:py-0 dark:bg-neutral-800">
        <nav
          className="relative max-w-screen-xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <div>
              <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
              <Link
                href="/dashboard"
                className="flex items-center gap-x-2 font-medium text-gray-400 hover:text-gray-600 sm:border-s py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-10 before:-translate-x-1/2">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="font-bold text-black text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              ContentAI
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
            Unlock the power of AI to create engaging, high-quality content for your website, blog, social media, and more!
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <a
              className="inline-flex items-center justify-center gap-x-3 text-center bg-black text-white text-sm font-medium rounded-md py-3 px-4 hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-offset-gray-800"
              href="/dashboard"
            >
              Get Started
              <svg
                className="w-6 h-6 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
