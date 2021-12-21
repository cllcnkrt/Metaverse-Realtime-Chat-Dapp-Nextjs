import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="v3ASJi2ZChj1PhIokW5aNdAn1Y2xcVREDrUo9eXk"
      serverUrl="https://oyrswild9t3a.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
