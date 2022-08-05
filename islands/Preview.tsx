/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { debounce } from "$debounce";
import Loading from "../components/Loading.tsx";
import MetaData from "../components/MetaData.tsx";

const DELAY = 1000;

export default function Home() {
  const [result, setResult] = useState<{ [key: string]: string }>({});
  const [url, setUrl] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeHandler = useCallback(debounce(() => {
    setUrl(inputRef?.current?.value ?? '');
  }, DELAY), [inputRef, setUrl]);

  useEffect(() => {
     if (!url) return;

     const controller = new AbortController();

     setLoading(true);
     fetch('/api/meta', {
         method: 'POST',
         signal: controller.signal,
         body: JSON.stringify({
             url: encodeURIComponent(url),
         })
     }).then(resp => resp.text()).then(resp => {
         setResult(JSON.parse(resp));
     }).finally(() => setLoading(false));

     return controller.abort;
  }, [setLoading, setResult, url]);

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <input ref={inputRef} type="text" class={tw`w-full border border-slate-300 p-4 rounded-md`} placeholder="Enter url to fetch metata data" onKeyDown={onChangeHandler} onChange={onChangeHandler} onPaste={onChangeHandler} />
        <br />
        {
            loading ? <Loading /> : <MetaData result={result} />
        }
    </div>
  );
}
