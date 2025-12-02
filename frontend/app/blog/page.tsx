import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/graphql";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
    const posts = await getAllPosts();
    console.log('BlogPage posts:', JSON.stringify(posts, null, 2));

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Il Nostro Blog</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Approfondimenti, novità e guide sul mondo dello sviluppo web, cloud e intelligenza artificiale.
                </p>
            </div>

            {posts.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-xl text-muted-foreground">Nessun articolo trovato.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post: any) => (
                        <Card key={post.id} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow">
                            {post.featuredImage?.node?.sourceUrl && (
                                <div className="relative w-full h-48">
                                    <Image
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.featuredImage.node.altText || post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <CardHeader>
                                <div className="text-sm text-muted-foreground mb-2">
                                    {new Date(post.date).toLocaleDateString("it-IT", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </div>
                                <CardTitle className="line-clamp-2">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div
                                    className="text-muted-foreground line-clamp-3 text-sm"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                />
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href={`/blog/${post.slug}`}>Leggi di più</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
