/** @jsx h */
import { HandlerContext, Handlers } from "$fresh/server.ts";
import { h } from "preact";
import { tw } from "@twind";
import HomeButton from "../components/HomeButton.tsx";
import Meta from "../components/Meta.tsx";

const metadata = {
    documentTitle: 'Link Preview - Help',
    title: 'Link Preview - Help',
    description: 'How to use api endpoint',
};

function StyledText({ text, styleClass = '' } : { text: string, styleClass?: string }) {
    return (<span class={styleClass}>{text}</span>)
}

export const handler: Handlers = {
  GET(req: Request, ctx: HandlerContext) {
      const url = (new URL(req.url));
      return ctx.render(`${url.origin}`);
  }
};

export default function Help({ data }: { data: string }) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <Meta {...metadata} />
        <a href='/' class={tw`absolute right-4 top-4`}>
            <HomeButton styleClass={tw`w-6 h-6 animate-pulse`} />
        </a>
        <h1 class={tw`text-2xl my-4 animate-bounce`}>How to - as API</h1>
        <p>
            To use api endpoint, Pass <StyledText text='url' styleClass={tw`font-bold text-blue-700 hover:underline`} /> as Query string. It works with POST request too.<br/>
            <span class={tw`animate-pulse`}>e.g.</span> <a class={tw`hover:text-blue-700`} href="/api/meta?url=https://www.youtube.com/watch?v=xqqTL91J1lo">{data}/api/meta?url=https://www.youtube.com/watch?v=xqqTL91J1lo</a>
        </p>
    </div>
  );
}
