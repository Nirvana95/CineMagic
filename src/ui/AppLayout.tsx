import { Outlet } from "react-router";
import Header from "../Pages/Header";
import Main from "../Pages/Main";
import Footer from "../Pages/Footer";

import { useQuery } from "@tanstack/react-query";
import { RingLoader } from "react-spinners";
import searchGet from "../services/tmdb-queries";

console.log(searchGet());

function AppLayout() {
  const {
    isPending,
    // isError, data, error
  } = useQuery({
    queryKey: ["apiSearch"],
    queryFn: searchGet,
  });

  if (isPending) return <RingLoader />;
  return (
    <div className="bg-[url(../public/hero-bg.png)] h-screen w-full bg-cover  flex flex-col items-center ">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
