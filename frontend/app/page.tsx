import { Button } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowRight, Code, Cloud, Bot, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 px-4">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-4xl mb-6">
          Sviluppo web su misura, <br />
          <span className="text-primary">Cloud Native</span> e <span className="text-primary">AI</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Trasformiamo le tue sfide digitali in opportunità concrete.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="text-lg px-8" asChild>
            <Link href="/contatti">Parla con noi</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8" asChild>
            <Link href="/servizi">Scopri i servizi</Link>
          </Button>
        </div>
      </section>

      {/* Services Highlight (Bento Grid) */}
      <section className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">I Nostri Servizi</h2>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Why Us */}
      <section className="container px-4 py-20 bg-muted/50 rounded-3xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Perché DeBrand Studio?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Crediamo in un <strong>Approccio Tailor-made</strong>. Non offriamo soluzioni preconfezionate, ma costruiamo software che si adatta perfettamente ai tuoi processi. La nostra ossessione per l'<strong>Innovazione Continua</strong> ci spinge a integrare le tecnologie più recenti, come l'AI generativa e le architetture serverless, per garantirti un vantaggio competitivo duraturo.
          </p>
          <Button variant="link" className="text-primary text-lg" asChild>
            <Link href="/chi-siamo" className="flex items-center gap-2">
              Scopri chi siamo <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Sviluppo Web",
    description: "Siti performanti e applicazioni web complesse con Next.js e React.",
    header: <Skeleton />,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cloud Consulting",
    description: "Migrazione e ottimizzazione su AWS, Google Cloud e Azure.",
    header: <Skeleton />,
    icon: <Cloud className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI & Chatbot",
    description: "Soluzioni RAG e assistenti virtuali intelligenti per il tuo business.",
    header: <Skeleton />,
    icon: <Bot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Consulenza IT",
    description: "Analisi strategica e modernizzazione di infrastrutture legacy.",
    header: <Skeleton />,
    icon: <Terminal className="h-4 w-4 text-neutral-500" />,
  },
];
