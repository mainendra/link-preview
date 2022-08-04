/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface props {
    result: { [key: string]: string }
}

export default function MetaData({ result }: props) {
  if (Object.entries(result).length === 0) return;

  if (result.error) return (<span class={tw`p-4 mx-auto max-w-screen-md`}>{result.error}</span>)

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <span>{`Document title: ${result.documentTitle}`}</span>
        <table>
            <th>
                <td>Property</td>
                <td>Content</td>
            </th>
            {
                Object.entries(result.tags).map(([key, value]) => {
                    return (
                        <tr>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    );
                })
            }
        </table>
    </div>
  );
}
