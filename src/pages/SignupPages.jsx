
import { useState } from "react";

const SigninPage = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative px-8 sm:px-12 py-8 sm:py-10 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-7 h-7 rounded-full border-4 border-[#4f46e5] border-dashed" />
              <span className="text-xl font-semibold text-[#1f2937]">Sellora</span>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-[#111827] leading-tight">
                Create an Account
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                Join now to streamline your experience from day one.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4 max-w-md">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Roger Gerrard"
                  className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white outline-none focus:border-[#4f46e5] transition"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="sellostore@company.com"
                  className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white outline-none focus:border-[#4f46e5] transition"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Sellostore."
                    className="w-full h-11 px-4 pr-12 rounded-lg border border-gray-200 bg-white outline-none focus:border-[#4f46e5] transition"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3l18 18M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58M9.88 4.24A10.94 10.94 0 0112 4c5 0 9.27 3.11 11 8-1.01 2.85-3.01 5.12-5.59 6.42M6.53 6.53C4.06 7.88 2.14 10.12 1 12c.67 1.88 1.8 3.6 3.3 5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Sellostore."
                    className="w-full h-11 px-4 pr-12 rounded-lg border border-gray-200 bg-white outline-none focus:border-[#4f46e5] transition"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3l18 18M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58M9.88 4.24A10.94 10.94 0 0112 4c5 0 9.27 3.11 11 8-1.01 2.85-3.01 5.12-5.59 6.42M6.53 6.53C4.06 7.88 2.14 10.12 1 12c.67 1.88 1.8 3.6 3.3 5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-lg bg-gradient-to-r from-[#4f46e5] to-[#4338ca] text-white font-medium shadow-md hover:opacity-95 transition"
              >
                Register
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">Or Register With</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="h-11 rounded-lg border border-gray-200 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 48 48">
                    <path
                      fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.7 15 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35.1 26.8 36 24 36c-5.3 0-9.7-3.3-11.4-8l-6.5 5C9.4 39.5 16.1 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1 2.8-3 5.1-5.6 6.6l.1-.1 6.3 5.3C35.7 40.1 44 34 44 24c0-1.2-.1-2.3-.4-3.5z"
                    />
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  className="h-11 rounded-lg border border-gray-200 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.365 1.43c0 1.14-.414 2.2-1.244 3.176-.945 1.108-2.088 1.747-3.326 1.646-.16-1.08.31-2.206 1.122-3.12.89-1.01 2.144-1.72 3.448-1.702zM20.94 17.02c-.32.74-.705 1.423-1.156 2.05-.615.86-1.118 1.456-1.508 1.79-.604.548-1.252.83-1.946.848-.498 0-1.1-.142-1.804-.43-.708-.287-1.358-.43-1.95-.43-.622 0-1.289.143-2 .43-.713.288-1.287.439-1.72.457-.666.028-1.33-.264-1.992-.875-.422-.364-.947-.98-1.576-1.85-.674-.923-1.228-1.993-1.662-3.212-.465-1.316-.697-2.59-.697-3.82 0-1.408.305-2.623.914-3.643.479-.82 1.117-1.466 1.914-1.94.797-.475 1.658-.717 2.584-.735.536 0 1.24.166 2.113.498.87.332 1.429.497 1.676.497.185 0 .812-.196 1.878-.587 1.008-.363 1.858-.514 2.55-.454 1.877.151 3.287.891 4.227 2.221-1.68 1.02-2.511 2.448-2.493 4.282.016 1.43.534 2.62 1.553 3.565.46.439.975.778 1.545 1.018-.124.36-.255.707-.392 1.04z" />
                  </svg>
                  Apple
                </button>
              </div>

              <p className="text-center text-sm text-gray-400 pt-2">
                Already Have An Account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signin")}
                  className="font-semibold text-[#102A43] hover:text-indigo-700">
                  Login
                </button>
              </p>
            </form>
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between text-xs text-gray-400">
            <span>Copyright © 2025 Sellora Enterprises LTD.</span>
            <a href="#" className="hover:text-[#4f46e5] transition">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center justify-center p-4 bg-white">
          <div className="relative w-full h-full min-h-[720px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#3730a3] p-10 flex flex-col justify-between">
            {/* Background shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-white/5 blur-sm" />
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-sm" />
              <div className="absolute bottom-0 right-8 w-56 h-56 border border-white/10 rounded-3xl" />
            </div>

            <div className="relative z-10 max-w-md pt-10">
              <h2 className="text-white text-4xl font-semibold leading-snug">
                Effortlessly manage your team and operations.
              </h2>
              <p className="mt-4 text-white/70 text-sm leading-6">
                Log in to access your CRM dashboard and manage your team.
              </p>
            </div>

            {/* Mock Dashboard */}
            <div className="relative z-10 flex items-center justify-center pb-10">
              <div className="relative w-full max-w-[560px]">
                {/* Main card */}
                <div className="rounded-2xl bg-white shadow-2xl p-4">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="rounded-xl bg-[#4f46e5] text-white p-4">
                      <p className="text-[10px] opacity-80 mb-2">Total Sales</p>
                      <h3 className="text-2xl font-bold">$189,374</h3>
                    </div>

                    <div className="rounded-xl bg-[#f8fafc] p-4 border border-gray-100">
                      <p className="text-[10px] text-gray-400 mb-2">Flow Performance</p>
                      <h3 className="text-lg font-semibold text-gray-800">00:01:30</h3>
                    </div>

                    <div className="rounded-xl bg-[#f8fafc] p-4 border border-gray-100">
                      <p className="text-[10px] text-gray-400 mb-2">Team Revenue</p>
                      <div className="h-16 flex items-end gap-1">
                        <span className="w-2 bg-[#4f46e5] rounded-full h-6" />
                        <span className="w-2 bg-[#4f46e5]/80 rounded-full h-10" />
                        <span className="w-2 bg-[#4f46e5]/70 rounded-full h-8" />
                        <span className="w-2 bg-[#4f46e5] rounded-full h-14" />
                        <span className="w-2 bg-[#4f46e5]/80 rounded-full h-11" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8 rounded-xl border border-gray-100 p-4">
                      <div className="flex items-end gap-3 h-28">
                        <div className="w-10 bg-gray-100 rounded-md h-10" />
                        <div className="w-10 bg-gray-100 rounded-md h-14" />
                        <div className="w-10 bg-[#4f46e5]/20 rounded-md h-20" />
                        <div className="w-10 bg-[#4f46e5]/40 rounded-md h-16" />
                        <div className="w-10 bg-[#4f46e5] rounded-md h-24" />
                        <div className="w-10 bg-[#4f46e5]/60 rounded-md h-20" />
                      </div>

                      <div className="mt-6 space-y-3">
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between border-b border-gray-100 pb-2"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gray-100" />
                              <div>
                                <div className="w-24 h-2 rounded bg-gray-200 mb-1" />
                                <div className="w-16 h-2 rounded bg-gray-100" />
                              </div>
                            </div>
                            <div className="w-16 h-2 rounded bg-gray-100" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4 rounded-xl border border-gray-100 p-4">
                      <div className="h-24 flex items-center justify-center">
                        <div className="relative w-28 h-28">
                          <div className="absolute inset-0 rounded-full border-[12px] border-[#e5e7eb]" />
                          <div className="absolute inset-0 rounded-full border-[12px] border-transparent border-t-[#4f46e5] border-r-[#4f46e5] rotate-45" />
                          <div className="absolute inset-0 flex items-center justify-center text-center">
                            <div>
                              <p className="text-xs text-gray-400">Sales</p>
                              <h4 className="text-lg font-bold text-gray-800">6,248 Units</h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-3">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="space-y-1">
                            <div className="flex justify-between text-[10px] text-gray-400">
                              <span>Category {item}</span>
                              <span>{20 + item * 10}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-[#4f46e5]"
                                style={{ width: `${20 + item * 18}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating small card */}
                <div className="absolute -right-8 top-8 w-44 rounded-2xl bg-white shadow-2xl p-4">
                  <p className="text-xs text-gray-400 mb-3">Sales Categories</p>
                  <div className="h-20 flex items-end justify-between gap-2">
                    <span className="w-4 rounded-full bg-[#4f46e5] h-8" />
                    <span className="w-4 rounded-full bg-[#4f46e5]/70 h-12" />
                    <span className="w-4 rounded-full bg-[#4f46e5]/50 h-16" />
                    <span className="w-4 rounded-full bg-[#4f46e5] h-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Right Side */}
      </div>
    </div>
  );
};

export default SigninPage;