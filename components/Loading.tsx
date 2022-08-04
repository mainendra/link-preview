/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Loading() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <h4>Loading ...</h4>
    </div>
  );
}
