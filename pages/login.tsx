import Layout from "@/components/Layout";
import Link from "next/link";

const loginPage = () => {
  return (
    <>
      <Layout title="Login">
        <div className="bg-white rounded-md p-4 w-[400px] md:w-[550px] mx-auto mt-10">
          <p className="text-center font-bold py-5 text-2xl">Log in</p>
          <hr />
          <form action="">
            <label htmlFor="" className="block mt-5">
              Email
            </label>
            <input
              className="w-full mt-1 outline-blue-700 py-1 pl-2 border rounded-md mb-5"
              type="email"
              placeholder="example@gmail.com"
            />
            <label htmlFor="" className="block">
              Password
            </label>
            <input
              className="w-full mt-1 outline-blue-700 py-1 pl-2 border rounded-md mb-5"
              type="password"
              placeholder="at lest 8 characters"
            />
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
