import '../sass/main.scss';

// Этот экспорт по умолчанию необходим в новом файле `pages/_app.js`.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
