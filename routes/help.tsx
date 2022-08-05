/** @jsx h */
import { HandlerContext, Handlers } from "$fresh/server.ts";
import { h } from "preact";
import { tw } from "@twind";

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
        <h1 class={tw`underline text-2xl my-4`}>How to as API</h1>
        <p>
            You can use this as api endpoint.<br/>
            Pass <StyledText text='url' styleClass={tw`font-bold text-blue-700 hover:underline`} /> as url pararameter.<br/>
            e.g. <a class={tw`hover:text-blue-700`} href="/api/meta?url=https://www.youtube.com/watch?v=xqqTL91J1lo">{data}/api/meta?url=https://www.youtube.com/watch?v=xqqTL91J1lo</a>
        </p>
    </div>
  );
}
