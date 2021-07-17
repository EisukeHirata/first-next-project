import type { NextPage } from "next";
import { Layout } from "src/components/layout";

const Signup: NextPage = () => {
  return (
    <Layout>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="my-10 mx-auto max-w-md">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign up</h1>
              <p className="text-gray-500 dark:text-gray-400">Sign up to access your account</p>
            </div>
            <div className="m-7">
              <form action="">
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    className="py-2 px-3 w-full placeholder-gray-300 dark:placeholder-gray-500 dark:text-white dark:bg-gray-700 rounded-md border border-gray-300 focus:border-indigo-300 dark:border-gray-600 dark:focus:border-gray-500 focus:ring focus:ring-indigo-100 dark:focus:ring-gray-900 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">
                      Password
                    </label>
                    <a
                      href="#!"
                      className="text-sm text-gray-400 hover:text-indigo-500 focus:text-indigo-500 dark:hover:text-indigo-300 focus:outline-none"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="py-2 px-3 w-full placeholder-gray-300 dark:placeholder-gray-500 dark:text-white dark:bg-gray-700 rounded-md border border-gray-300 focus:border-indigo-300 dark:border-gray-600 dark:focus:border-gray-500 focus:ring focus:ring-indigo-100 dark:focus:ring-gray-900 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="button"
                    className="py-4 px-3 w-full text-white bg-indigo-500 focus:bg-indigo-600 rounded-md focus:outline-none"
                  >
                    Sign up
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <a
                    href="/signin"
                    className="text-indigo-400 focus:text-indigo-500 focus:underline dark:focus:border-indigo-800 focus:outline-none"
                  >
                    Sign in
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
