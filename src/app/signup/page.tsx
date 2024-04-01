'use client';

import Image from 'next/image';
import { useState } from 'react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="flex h-lvh overflow-hidden">
      <section className="hidden lg:flex flex-col flex-1 bg-black w-full h-full relative min-h-[90vh] overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl m-0 mb-[35px] w-[366px] font-normal leading-[44px] text-center">
            Sign up <br /> and come on in
          </h1>
          <Image src="/images/bg-type-front.png" alt="Background image" width={366} height={300} />
          <p className="text-white text-[14px] leading-5 absolute bottom-6 mb-5">© Typeform</p>
        </div>
      </section>

      <section className="flex-1 basis-[10%] rounded-tl-2xl rounded-bl-2xl p-0 grid overflow-auto w-full h-full relative min-h-[90vh] lg:-ml-4">
        <div className="bg-white grid grid-cols-[0px,auto] grid-rows-[52px,auto,52px] relative w-full">
          <div className="xs:row-start-1 pt-4 pl-6 row-3 col-1 row-start-3">
            <div className="flex gap-2 items-center">
              <div>
                <svg height="17" viewBox="0 0 20 20" width="17" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
                    fill="#5E5E5E"
                    fill-rule="evenodd"></path>
                </svg>
              </div>
              <div className="text-[14px] font-normal leading-[1.5] text-darkGray">English</div>
              <div className="-ml-1">
                <svg fill="none" height="5" viewBox="0 0 9 5" width="9" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clip-rule="evenodd"
                    d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z"
                    fill="#5E5E5E"
                    fill-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end px-6 py-2 text-darkGray col-start-2">
            <p className="mr-2 text-[14px]">Already have an account?</p>
            <div className="inline-flex flex-col items-stretch gap-4 bg-transparent min-w-16 max-w-full w-full md:gap-2 xs:w-auto">
              <a
                href="https://admin.typeform.com/login"
                className="text-darkGray text-center font-medium text-[12px] transition-all duration-200 ease-out py-[3px] px-[10px] rounded-md border border-darkGray hover:opacity-80">
                Log in
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center justify-self-center max-w-[256px]  md:max-w-[542px] row-start-2 col-start-2">
            <div className="flex items-center justify-center h-20 md:max-w-[256px]">
              <a aria-label="Typeform" href="/" title="Typeform" target="_top" className="leading-none">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span className="ml-[10px] overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none">
                      <path
                        fill="currentColor"
                        d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <h2 className="font-extralight text-[24px] leading-9 text-lightGray mb-6 text-center max-w-full">
              Get better data with conversational forms, surveys, quizzes & more.
            </h2>
            <div className="w-full md:max-w-[256px]">
              <form className="max-w-md mx-auto">
                <div className="mb-[15px]">
                  <div className="w-full mb-[15px] h-10 inline-block border border-extraLightGray rounded-[3px]">
                    <input
                      type="email"
                      className="h-full w-full m-0 px-[6px] py-2 rounded-[3px] text-[16px] leading-4 border-0 placeholder-extraLightGray"
                      placeholder="Email"
                      autoFocus
                    />
                  </div>
                  <div className="w-full h-10 inline-block border border-extraLightGray rounded-[3px] relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="h-full w-full m-0 px-[6px] py-2 rounded-[3px] text-[16px] leading-4 border-0 placeholder-extraLightGray"
                      placeholder="Password"
                      required
                    />
                    <Image
                      onClick={handleTogglePassword}
                      className="!text-extraLightGray absolute top-3 right-4 cursor-pointer"
                      src={showPassword ? 'images/hide-password.svg' : '/images/show-password.svg'}
                      width={14}
                      height={14}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <label id="label-terms_and_consents" className="block text-sm leading-[18px] mb-4 pl-[30px] relative">
                    <input
                      id="terms_and_consents"
                      type="checkbox"
                      className="absolute top-0 left-0 w-5 h-5 m-0 outline-none rounded-[3px] border-0 border-extraLightGray transition duration-150 ease-in"
                    />
                    I agree to Typeform’s&nbsp;
                    <a className="underline" rel="noopener" target="_blank" href="https://www.typeform.com/terms-service/">
                      Terms of Service
                    </a>
                    ,&nbsp;
                    <a className="underline" rel="noopener" target="_blank" href="https://www.typeform.com/privacy-policy/">
                      Privacy Policy
                    </a>{' '}
                    and&nbsp;
                    <a className="underline" rel="noopener" target="_blank" href="https://www.typeform.com/privacy-policy/">
                      Data Processing Agreement
                    </a>
                    .
                  </label>
                </div>
              </form>
            </div>
            <div className="pl-[30px] pb-[15px] pt-2 w-full md:max-w-[256px]">
              <div className="flex items-baseline cursor-pointer justify-between leading-8 m-0 w-full">
                <p className="text-[14px] m-0">See options</p>
                <div className="mr-2 rotate-180">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full sm:max-w-full">
              <button className="h-10 leading-[1.4] w-full cursor-pointer text-[16px] text-white border-none p-0 rounded-[3px] bg-black sm:max-w-[230px]">
                Create my free account
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
