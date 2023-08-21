import Layout from "@/components/Layout";
import Link from "next/link";
import { useForm } from "react-hook-form";

const loginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = ({
    email,
    password,
  }: {
    email?: string;
    password?: number;
  }) => {};

  return (
    <>
      <Layout title="Login">
        <div className="bg-white rounded-md p-4 w-[400px] md:w-[550px] mx-auto mt-10">
          <p className="text-center font-bold py-5 text-2xl">Log in</p>
          <hr />
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-5">
              <label htmlFor="" className="block mt-5">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  validate: {
                    matchMedia: (v) =>
                      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v),
                  },
                })}
                className="w-full mt-1 outline-blue-700 py-1 pl-2 border rounded-md"
                type="text"
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <div className="text-red-600">
                  <p>This is not Valid email address</p>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="" className="block">
                Password
              </label>
              <input
              {...register('password', {
                required: true,
                minLength: 8,
                maxLength: 12
              })}
                className="w-full mt-1 outline-blue-700 py-1 pl-2 border rounded-md"
                type="password"
                placeholder="at lest 8 characters"
              />
              {errors.password && (
                <div className="text-red-600">
                    <p>Password Invalid</p>
                </div>
              )}
            </div>
            <button className="text-white bg-blue-700 w-full my-5 rounded-md py-1">
              Log in
            </button>
          </form>
          <hr />
          <div className="text-center mt-7">
            <p>Dont have an account?</p>
            <Link href="/register" className="text-blue-700">
              Sign up
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default loginPage;
