import { store } from "@/app/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@/assets/css/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout || ((page: any) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
