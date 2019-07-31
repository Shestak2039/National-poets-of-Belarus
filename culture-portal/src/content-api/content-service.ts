import { createClient, ContentfulClientApi } from 'contentful';


let contentfullClient: ContentfulClientApi;

function getClient(): ContentfulClientApi {
  if (contentfullClient) {
    return contentfullClient;
  }

  contentfullClient = createClient({
    accessToken: 'G2lO0Ziy3f72VA7IZ-0olzL4AbSk-f9J61YJOp9DSt8',
    space: 't4022xc623v3'
  });

  return contentfullClient;
}

export function getAuthors(): Promise<any> {
  return getClient().getEntries({
    content_type: 'authorPost',
    include: 2,
    locale: 'ru'
  });
}

export default { getAuthors };
