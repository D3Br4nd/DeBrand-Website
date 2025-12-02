import { GraphQLClient } from 'graphql-request';

const endpoint = (typeof window === 'undefined' && process.env.WORDPRESS_API_URL_INTERNAL)
  ? process.env.WORDPRESS_API_URL_INTERNAL
  : (process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost:8080/graphql');

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

export async function getAllPosts() {
  const query = `
    query GetAllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const data: any = await client.request(query);
    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `;

  try {
    const data: any = await client.request(query, { slug });
    return data?.post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
