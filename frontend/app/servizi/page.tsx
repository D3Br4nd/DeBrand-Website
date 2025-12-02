import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Services() {
    return (
        <div className="container py-20 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">I Nostri Servizi</h1>
                <p className="text-xl text-muted-foreground">
                    Dall&apos;idea al deploy, e oltre. Offriamo un ciclo completo di sviluppo software.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <Card key={index} className="border-muted bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                            <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

const services = [
    {
        title: "Sviluppo Web & Mobile",
        description: "Utilizziamo architetture moderne come Headless CMS e Frontend reattivi (Next.js) per garantire prestazioni SEO eccellenti e una User Experience fluida.",
        features: [
            "Siti Web Headless (Next.js, WordPress)",
            "Applicazioni Web Progressive (PWA)",
            "E-commerce custom",
            "Design System & UI/UX",
        ],
    },
    {
        title: "Cloud & DevOps",
        description: "Infrastrutture scalabili e sicure per supportare la tua crescita.",
        features: [
            "Modernizzazione infrastrutture legacy",
            "Migrazione al Cloud (AWS, Azure, GCP)",
            "Containerizzazione (Docker, Kubernetes)",
            "CI/CD Pipelines automatizzate",
        ],
    },
    {
        title: "AI & Chatbot RAG",
        description: "L'intelligenza artificiale non è più il futuro, è il presente. Sviluppiamo soluzioni basate su LLM (Large Language Models) e RAG (Retrieval Augmented Generation) che permettono ai chatbot di rispondere attingendo direttamente alla tua knowledge base aziendale, garantendo precisione e riducendo le allucinazioni.",
        features: [
            "RAG (Retrieval Augmented Generation)",
            "Chatbot intelligenti e Assistenti Virtuali",
            "Integrazione LLM (OpenAI, Anthropic)",
            "Analisi predittiva dei dati",
        ],
    },
    {
        title: "Consulenza Strategica",
        description: "Ti guidiamo nelle scelte tecnologiche più importanti.",
        features: [
            "Digital Transformation Roadmap",
            "Audit Tecnico e di Sicurezza",
            "Formazione Team",
            "CTO as a Service",
        ],
    },
];
