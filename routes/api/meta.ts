import { Handlers } from "$fresh/server.ts";
import { DOMParser, Element } from "$dom";

function parseMetaTags(metaTagElements: Element[]) {
      const tags: { [key: string]: string } = {};
      metaTagElements.forEach((element) => {
          const property: string = element.getAttribute('property') ?? '';
          const title: string = element.getAttribute('title') ?? '';
          const description: string = element.getAttribute('description') ?? '';
          const content: string = element.getAttribute('content') ?? '';
          if (property && content) {
              tags[property] = content;
          } else if (title && content) {
              tags[title] = content;
          } else if (description && content) {
              tags[description] = content;
          }
      }, {});
      return tags;
}

async function getMetaData(url: string) {
    const result = await fetch(decodeURIComponent(url)).then(resp => resp.text());
    const dom = (new DOMParser()).parseFromString(result, 'text/html');
    const documentTitle = dom?.querySelector('title')?.innerHTML;
    const metaTagElements = dom?.getElementsByTagName('meta') ?? [];
    return new Response(JSON.stringify({
        documentTitle,
        tags: parseMetaTags(metaTagElements),
    }));
}

const errorResponse = new Response(JSON.stringify({ error: 'Failed to fetch url'}));

export const handler: Handlers = {
  async POST(req: Request) {
    try {
      const { url } = await req.json();
      return getMetaData(url);
    } catch (_err) {
      return errorResponse;
    }
  },
  GET(req: Request) {
    try {
      const url = (new URL(req.url)).searchParams.get('url') ?? '';
      return getMetaData(url);
    } catch (_err) {
      return errorResponse;
    }
  }
};
