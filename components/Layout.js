import Head from 'next/head';
import Header from '../components/Header';
import Footer from './Footer';
import style from '../styles/Layout.module.css';

export default function Layout({title, description, keyword, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <meta name="keyword" content={keyword}></meta>
            </Head>
            <Header />
            <div className={style.container}>
                {children} {/* 繼承此js的網頁內容 */}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Event',
    description: 'Find the lastest DJ and other musical events',
    keyword: 'music, dj, events',
};