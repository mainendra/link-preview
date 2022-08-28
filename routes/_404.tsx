/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import HomeButton from "../components/HomeButton.tsx";
import Meta from "../components/Meta.tsx";

const metadata = {
    documentTitle: 'Link Preview - 404',
    title: 'Link Preview - 404',
    description: 'Page not found',
};

export default function NotFound() {
  return (
    <div class={tw`flex p-4 mx-auto max-w-screen-md h-screen`}>
        <Meta {...metadata} />
        <a href='/' class={tw`absolute right-4 top-4`}>
            <HomeButton styleClass={tw`w-6 h-6 animate-pulse`} />
        </a>
        <h1 class={tw`text-[25vh] flex h-full w-full items-center justify-center`}>404</h1>
    </div>
  );
}
