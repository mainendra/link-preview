/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Preview from "../islands/Preview.tsx";
import Meta from "../components/Meta.tsx";

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
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <Meta {...metadata} />
        <Preview />
    </div>
  );
}
