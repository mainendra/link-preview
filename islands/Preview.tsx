/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useCallback, useRef, useState } from "preact/hooks";
import { debounce } from "$debounce";
import Loading from "../components/Loading.tsx";
import MetaData from "../components/MetaData.tsx";

const DELAY = 500;

function isValidUrl(urlStr: string) {
    try {
        return Boolean(new URL(urlStr));
    } catch (_err){
        return false;
    }
}

const INVALID_URL_ERROR = {error: 'Invalid URL'};

export default function Home() {
  const [result, setResult] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<string>();
  const onChangeHandler = useCallback(debounce(() => {
    const url = inputRef?.current?.value;
    if (!url || url === urlRef.current) return;
    if (!isValidUrl(url)) {
        setResult(INVALID_URL_ERROR);
        return;
    }

    urlRef.current = url;
    setLoading(true);
    fetch('/api/meta', {
        method: 'POST',
        body: JSON.stringify({
            url: encodeURIComponent(url),
        })
    }).then(resp => resp.text()).then(resp => {
        setResult(JSON.parse(resp));
    }).finally(() => setLoading(false));
  }, DELAY), [inputRef, urlRef, setResult, setLoading]);

  return (
    <div class={tw`px-4 py-8 mx-auto max-w-screen-md`}>
        <input ref={inputRef} type="text" class={tw`w-full border border-slate-300 p-4 rounded-md`} placeholder="Enter url to fetch metata data" onKeyDown={onChangeHandler} onChange={onChangeHandler} onPaste={onChangeHandler} />
        <br />
        {
            loading ? <Loading /> : <MetaData result={result} />
        }
    </div>
  );
}
