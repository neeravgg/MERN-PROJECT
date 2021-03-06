import "../styles/globals.css";
import { ThemeProvider } from "../assests/context/ThemeContext";
import SidebarProvider from "../assests/context/SidebarProvider";
import TestProvider from "../assests/context/TestProvider";
import SideBar from "../components/sideBar";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-raleway bg-skin-muted dark:bg-gradient-to-r from-[#141414] to-[#2c2c2e]'>
        <SidebarProvider>
      <TestProvider>
          <ThemeProvider>
            <SideBar />
            <Navbar />
            <Component {...pageProps} />
          </ThemeProvider>
      </TestProvider>
        </SidebarProvider>
    </div>
  );
}

export default MyApp;
