import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost:8080/graphql';

export const client = new GraphQLClient(endpoint);

export async function getSeoMetadata(uri: string) {
    const query = `
    query GetSeoMetadata($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          seo {
            title
            metaDesc
            opengraphTitle
            opengraphDescription
            opengraphImage {
              sourceUrl
            }
          }
        }
        ... on Post {
          seo {
            title
            metaDesc
            opengraphTitle
            opengraphDescription
            opengraphImage {
              sourceUrl
            }
          }
        }
      }
    }
  `;

    try {
        const data: any = await client.request(query, { uri });
        return data?.nodeByUri?.seo;
    } catch (error) {
        console.error('Error fetching SEO metadata:', error);
        return null;
    }
}
