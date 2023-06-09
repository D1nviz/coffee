import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useRef } from "react";
import { sectionContext, sectionAboutContext } from "../../Context";
import AppBanner from "../../AppBanner/";
import AppInfo from "../../AppInfo/";
import AppBestProducts from "../../AppBestProducts/";
const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
        }
    }, []);
    const myRef = useRef();
    const appBestRef = useRef();
    return (
        <>
            <Helmet>
                <meta name="description" content="Coffee house" />
                <title>Coffee house</title>
            </Helmet>
            <sectionContext.Provider value={{ myRef }}>
                <sectionAboutContext.Provider value={{ appBestRef }}>
                    <AppBanner />

                    <main>
                        <AppInfo />
                        <AppBestProducts />
                    </main>

                </sectionAboutContext.Provider>
            </sectionContext.Provider>
        </>

    )
}

export default MainPage;