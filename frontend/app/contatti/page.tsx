import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <div className="container py-20 px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Iniziamo a collaborare.</h1>
                        <p className="text-xl text-muted-foreground">
                            Hai un progetto in mente o vuoi modernizzare la tua infrastruttura? Raccontaci la tua idea. Ti risponderemo entro 24 ore.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Contatti Rapidi</p>
                                <p className="text-sm text-muted-foreground mb-1">Preferisci un contatto diretto?</p>
                                <a href="mailto:info@debrandstudio.it" className="text-muted-foreground hover:text-primary font-semibold">info@debrandstudio.it</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Invia Richiesta</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                                <Input id="name" placeholder="Il tuo nome" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="tua@email.it" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium">Azienda (Opzionale)</label>
                                <Input id="company" placeholder="Nome Azienda" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Messaggio</label>
                                <Textarea id="message" placeholder="Descrivi il tuo progetto..." className="min-h-[150px]" />
                            </div>
                            <Button type="submit" className="w-full">Invia Richiesta</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
