/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Preview from "../islands/Preview.tsx";
import Meta from "../components/Meta.tsx";
import HelpButton from "../components/HelpButton.tsx";

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
        <a href='/help' class={tw`absolute right-4 top-4`}>
            <HelpButton styleClass={tw`w-6 h-6 animate-pulse`} />
        </a>
        <Preview />
    </div>
  );
}
