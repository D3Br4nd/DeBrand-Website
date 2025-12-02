import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users } from "lucide-react";

export default function About() {
    return (
        <div className="container py-20 px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 aspect-square bg-muted rounded-2xl flex items-center justify-center">
                    <Users className="h-24 w-24 text-muted-foreground" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight">Chi Siamo</h1>
                    <p className="text-xl text-muted-foreground">
                        Siamo una tech company nata per guidare le aziende verso la trasformazione digitale.
                    </p>
                    <div className="space-y-4 text-lg leading-relaxed">
                        <p>
                            In DeBrand Studio, non ci limitiamo a scrivere codice. Costruiamo partnership strategiche. Il nostro team è composto da ingegneri, designer e consulenti appassionati di tecnologia e innovazione.
                        </p>
                        <p>
                            Il nostro focus è su soluzioni solide, scalabili e future-proof. Che si tratti di modernizzare un'infrastruttura legacy o di lanciare un nuovo prodotto digitale, portiamo competenza tecnica e visione strategica in ogni progetto.
                        </p>
                    </div>
                    <div className="pt-4">
                        <Button size="lg" asChild>
                            <Link href="/contatti">Lavora con noi</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
