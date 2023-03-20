import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({children}: MainLayoutProps){
  return(
    <>
      <Header />
       {children}
      <Footer />
    </>
  )
}