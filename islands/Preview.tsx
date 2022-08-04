/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useCallback, useRef, useState } from "preact/hooks";
import { debounce } from "$debounce";
import Loading from "../components/Loading.tsx";
import MetaData from "../components/MetaData.tsx";
import Meta from "../components/Meta.tsx";

const DELAY = 1000;

const metadata = {
    documentTitle: 'Link Preview',
    title: 'Link Preview',
    description: 'Debug metadata code',
    og: {
        url: 'https://m-link-preview.deno.dev',
        title: 'Link Preview',
        description: 'Debug metadata code',
        image: 'https://avatars.githubusercontent.com/u/1897340?v=4',
    }
};

export default function Home() {
  const [result, setResult] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeHandler = useCallback(debounce(() => {
    if (inputRef?.current?.value) {
        setLoading(true);
        fetch('/api/meta', {
            method: 'POST',
            body: JSON.stringify({
                url: encodeURIComponent(inputRef.current.value),
            })
        }).then(resp => resp.text()).then(resp => {
            setResult(JSON.parse(resp));
        }).finally(() => setLoading(false));
    }
  }, DELAY), [inputRef]);
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <Meta {...metadata} />
        <input ref={inputRef} type="text" class={tw`w-full border border-slate-300 p-4 rounded-md`} placeholder="Enter url to fetch metata data" onKeyDown={onChangeHandler} onChange={onChangeHandler} onPaste={onChangeHandler} />
        <br />
        {
            loading ? <Loading /> : <MetaData result={result} />
        }
    </div>
  );
}
