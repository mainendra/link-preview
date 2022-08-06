/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface props {
    result: { [key: string]: string }
}

export default function MetaData({ result }: props) {
  if (Object.entries(result).length === 0) return null;

  if (result.error) return (<div class={tw`p-4 mx-auto max-w-screen-md hover:text-red-500`}>{result.error}</div>)

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <div class={tw`p-4 mb-4 border-1 rounded-lg`}>og:xx <span class={tw`text-gray-500 px-4`}>Open Graph / Facebook</span> twitter:xxx <span class={tw`text-gray-500 px-4`}>Twitter</span></div>
        <table class={tw`text-gray-500 w-full table-fixed`}>
            <tr class={tw`bg-white border-b`}>
                <td class={tw`p-4 text-black text-base bg-gray-100`}>Document Title</td>
                <td class={tw`p-4`}>{result.documentTitle}</td>
            </tr>
            {
                Object.entries(result.tags).map(([key, value]) => {
                    return (
                        <tr class={tw`bg-white border-b`}>
                            <td class={tw`p-4 text-black text-base bg-gray-100`}>{key}</td>
                            {
                                (key.endsWith('image')) ?
                                <td class={tw`p-4`}><img src={value} class={tw`w-64 hover:scale-125 hover:border-2 hover:rounded-md transition-all`} alt={value} /></td> :
                                (key.endsWith('url')) ?
                                <td class={tw`p-4`}><a class={tw`hover:underline hover:text-blue-500`} href={value}>{value}</a></td> :
                                <td class={tw`p-4`}>{value}</td>
                            }
                        </tr>
                    );
                })
            }
        </table>
    </div>
  );
}
