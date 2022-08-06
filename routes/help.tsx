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
        <hr class={tw`my-8`} />
        <h1 class={tw`text-2xl my-4 animate-bounce`}>Techstack</h1>
        <ul>
            <li><a class={tw`flex`} href='https://fresh.deno.dev'>Fresh <img src='https://github.com/denoland/fresh/raw/main/www/static/logo.svg' class={tw`mx-4 w-6 h-6`} /></a></li>
            <li><a class={tw`flex`} href='https://preactjs.com'>Preact <img src='https://raw.githubusercontent.com/preactjs/preact/8b0bcc927995c188eca83cba30fbc83491cc0b2f/logo.svg?sanitize=true' class={tw`mx-4 w-6 h-6`} /></a></li>
            <li><a class={tw`flex`} href='https://twind.dev'>Twind <img src='https://twind.dev/assets/twind-logo-animated.svg' class={tw`mx-4 w-6 h-6`} /></a></li>
            <li><a class={tw`flex`} href='https://deno.land'>Deno <img src='https://deno.land/logo.svg?__frsh_c=y61wzfje3yvg' class={tw`mx-4 w-6 h-6`} /></a></li>
            <li><a class={tw`flex`} href='https://deno.com/deploy'>Deno Deploy <img src='https://deno.land/logo.svg?__frsh_c=y61wzfje3yvg' class={tw`mx-4 w-6 h-6`} /></a></li>
        </ul>
    </div>
  );
}
