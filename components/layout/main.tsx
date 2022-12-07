import type { ReactNode } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Header from "./_header";
import Footer from "./_footer";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { asPath } = useRouter();
    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.075,
            }}
            watch={[asPath]}
            containerRef={scrollRef}
        >
            <div data-scroll-container ref={scrollRef}>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </LocomotiveScrollProvider>
    );
};

export default Layout;
