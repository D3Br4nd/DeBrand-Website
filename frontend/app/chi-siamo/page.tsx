import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Code2, MessageSquare, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <div className="container py-20 px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 aspect-square bg-muted rounded-2xl flex items-center justify-center">
                    <Users className="h-24 w-24 text-muted-foreground" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight">Artigiani del digitale, ingegneri del futuro.</h1>
                    <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            Nata dalla passione per la tecnologia e radicata nel territorio, DeBrand Studio è cresciuta con una missione chiara: rendere accessibile l&apos;innovazione complessa.
                        </p>
                        <p>
                            Siamo un team di sviluppatori, architect e creativi che crede nella qualità del codice e nella trasparenza delle relazioni.
                        </p>
                    </div>
                    <div className="pt-4">
                        <Button size="lg" asChild>
                            <Link href="/contatti">Lavora con noi</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border rounded-xl bg-card/50">
                    <Code2 className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Competenza</h3>
                    <p className="text-muted-foreground">
                        Formazione continua su stack moderni (React, Next.js, Cloud Native).
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-card/50">
                    <MessageSquare className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Trasparenza</h3>
                    <p className="text-muted-foreground">
                        Nessun costo nascosto, comunicazione diretta e costante.
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-card/50">
                    <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Affidabilità</h3>
                    <p className="text-muted-foreground">
                        Costruiamo sistemi fatti per durare e scalare nel tempo.
                    </p>
                </div>
            </div>
        </div>
    );
}
