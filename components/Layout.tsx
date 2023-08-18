import Head from "next/head";
import Link from "next/link";

type Props = {
  children: string | JSX.Element | JSX.Element[]
  title: string
};
function Layout({children, title}: Props) {
  return (
    <>
    <Head>
        <title>{`${title} - Shopping`}</title>
    </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <header>
            <nav className="flex bg-white h-12 px-8 justify-between items-center border-b-2">
                <Link href='/'>
                  <p className="text-lg font-bold">Shopping</p>
                </Link>
                <div className="flex font-bold">
                  <Link href='/cart'>
                    <p className="p-2">Cart</p>
                  </Link>
                  <Link href='/login'>
                    <p className="p-2">Login</p>
                  </Link>
                </div>
            </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10">footer</footer>
      </div>
    </>
  );
}

export default Layout;
