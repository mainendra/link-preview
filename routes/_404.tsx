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
    <div class={tw`flex flex-col items-center justify-center p-4 mx-auto max-w-screen-md h-screen`}>
        <Meta {...metadata} />
        <a href='/' class={tw`absolute right-4 top-4`}>
            <HomeButton styleClass={tw`w-6 h-6 animate-pulse`} />
        </a>
        <h1 class={tw`text-[25vh]`}>404</h1>
        <h2 class={tw`text-[4vh]`}>Couldn't find what you're looking for.</h2>
        <a href='/' class={tw`my-6 hover:underline hover:text-blue-700`}>
            Back to the Homepage
        </a>
    </div>
  );
}
