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
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-5xl mb-6">
          Sviluppo Web, Architetture Cloud e <br />
          <span className="text-primary">Intelligenza Artificiale</span> su misura.
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
          DeBrand Studio è la tech company che trasforma le tue sfide digitali in opportunità. Progettiamo soluzioni web performanti, modernizziamo sistemi legacy e integriamo l&apos;AI nei tuoi processi aziendali.
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
        <h2 className="text-3xl font-bold text-center mb-12">I Nostri Core Services</h2>
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Perché sceglierci</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Approccio Tailor-Made</h3>
              <p className="text-muted-foreground">
                Non vendiamo pacchetti standard. Ogni riga di codice è scritta per risolvere le tue specifiche esigenze.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Focus sull&apos;Innovazione</h3>
              <p className="text-muted-foreground">
                Dalle architetture headless ai modelli LLM, portiamo lo stato dell&apos;arte della tecnologia nella tua azienda.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Concretezza</h3>
              <p className="text-muted-foreground">
                Parliamo la tua lingua. Riduciamo la complessità tecnica per concentrarci sui risultati di business.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button variant="link" className="text-primary text-lg" asChild>
              <Link href="/chi-siamo" className="flex items-center gap-2">
                Scopri chi siamo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
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
    title: "Sviluppo Web & Mobile",
    description: "Realizziamo applicazioni web complesse, portali enterprise e soluzioni e-commerce headless progettate per la velocità e la scalabilità.",
    header: <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"><Code className="w-16 h-16 text-primary/40" /></div>,
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "Cloud & DevOps",
    description: "Accompagniamo la tua infrastruttura nel Cloud. Containerizzazione, orchestrazione e gestione server per garantire sicurezza e continuità operativa.",
    header: <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center"><Cloud className="w-16 h-16 text-primary/40" /></div>,
    icon: <Cloud className="h-4 w-4" />,
  },
  {
    title: "AI & Chatbot RAG",
    description: "Sfrutta i tuoi dati aziendali con l'Intelligenza Artificiale. Creiamo assistenti virtuali avanzati e sistemi RAG per risposte precise e contestualizzate.",
    header: <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center"><Bot className="w-16 h-16 text-primary/40" /></div>,
    icon: <Bot className="h-4 w-4" />,
  },
  {
    title: "Consulenza IT",
    description: "Non solo codice. Ti guidiamo nelle scelte tecnologiche strategiche per ottimizzare i costi e innovare il tuo modello di business.",
    header: <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center"><Terminal className="w-16 h-16 text-primary/40" /></div>,
    icon: <Terminal className="h-4 w-4" />,
  },
];
