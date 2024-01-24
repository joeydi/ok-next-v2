import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export const metadata = {
    title: "Okay Plus » Design & Development For the Web",
    description: "Elevating non-profits and startups to new heights with 15 years of design and development expertise.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/gzr7byz.css" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
