import { Outlet } from "react-router";
import Header from "./Hero";
import Main from "./Main";
import Footer from "./Footer";

// import { useQuery } from "@tanstack/react-query";
// import { RingLoader } from "react-spinners";
// import searchGet from "../services/tmdb-queries";

// console.log(searchGet());

function AppLayout() {
  // const {
  //   isPending,
  //   // isError, data, error
  // } = useQuery({
  //   queryKey: ["apiSearch"],
  //   queryFn: searchGet,
  // });

  // if (isPending) return <RingLoader />;
  return (
    <div className="pattern ">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
