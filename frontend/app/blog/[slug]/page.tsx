import { getPostBySlug } from "@/lib/graphql";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.seo?.title || post.title,
        description: post.seo?.metaDesc || post.excerpt,
    };
}

export default async function BlogPost({ params }: Props) {
    console.log('Fetching post for slug:', params.slug);
    const post = await getPostBySlug(params.slug);
    console.log('Post result:', post ? 'Found' : 'Not Found');

    if (!post) {
        console.log('Post not found, triggering notFound()');
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
                <div className="text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("it-IT", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                    <span className="mx-2">•</span>
                    <span>{post.author?.node?.name}</span>
                </div>
            </div>

            {post.featuredImage?.node?.sourceUrl && (
                <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-xl overflow-hidden">
                    <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div
                className="prose dark:prose-invert max-w-none lg:prose-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
