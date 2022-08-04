/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

interface props {
    title?: string,
    description?: string,
    documentTitle?: string,
    og?: {
        type?: string,
        url?: string,
        title?: string,
        description?: string,
        image?: string,
    },
    twitter?: {
        card?: string,
        url?: string,
        title?: string,
        description?: string,
        image?: string,
    }
}

export default function Meta(metadata: props) {
    return (
        <Head>
            { metadata?.og?.title && <meta property="og:title" content={`${metadata.og.title}`} /> }
            { metadata?.og?.description && <meta property="og:description" content={`${metadata.og.description}`} /> }
            { metadata?.og?.type && <meta property="og:type" content={`${metadata.og.type}`} /> }
            { metadata?.og?.url && <meta property="og:url" content={`${metadata.og.url}`} /> }
            { metadata?.og?.image && <meta property="og:image" content={`${metadata.og.image}`} /> }
            { metadata?.twitter?.title && <meta property="twitter:title" content={`${metadata.twitter.title}`} /> }
            { metadata?.twitter?.description && <meta property="twitter:description" content={`${metadata.twitter.description}`} /> }
            { metadata?.twitter?.card && <meta property="twitter:card" content={`${metadata.twitter.card}`} /> }
            { metadata?.twitter?.url && <meta property="twitter:url" content={`${metadata.twitter.url}`} /> }
            { metadata?.twitter?.image && <meta property="twitter:image" content={`${metadata.twitter.image}`} /> }
            { metadata?.title && <meta property="title" content={`${metadata.title}`} /> }
            { metadata?.description && <meta property="description" content={`${metadata.description}`} /> }
            { metadata?.documentTitle && <title>{`${metadata.documentTitle}`} </title> }
        </Head>
    );
}
