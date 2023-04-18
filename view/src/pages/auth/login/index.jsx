import { Button, TextField } from "components";
import useLogin from "./useLogin";
import { Link } from "react-router-dom";
import logo from "assets/images/headerLogo.jpg";
import { useState } from "react";

export const Login = () => {
  const [userEmail, setUserEmail] = useState();
  const { onLogin, handleSubmit, register, errors, loading } = useLogin(userEmail);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to='/' className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
          W&M
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in to your account
            </h1>
            <form onSubmit={handleSubmit(onLogin)}>
              <TextField
                onChange={(e) => setUserEmail(e.target.value)}
                label="Your email"
                htmlFor="email"
                type="email"
                id="email"
                placeholder="example@email.com"
                validation={{ ...register("email") }}
                error={errors?.email?.message}/>
              <TextField
                label="Your password"
                htmlFor="password"
                type="password"
                id="password"
                validation={{ ...register("password") }}
                error={errors?.password?.message}/>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <Button classes="w-full justify-center" loading={loading}>Log in</Button>
            </form>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
