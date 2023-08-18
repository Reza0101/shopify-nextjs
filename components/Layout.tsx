type Props = {
  children: string | JSX.Element | JSX.Element[];
};
function Layout({children}: Props) {
  return (
    <>
      <div>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
}

export default Layout;
