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
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Parla con noi</h1>
                        <p className="text-xl text-muted-foreground">
                            Hai un progetto in mente? Raccontaci la tua idea e scopriamo come possiamo realizzarla insieme.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Email</p>
                                <a href="mailto:hello@debrand.studio" className="text-muted-foreground hover:text-primary">hello@debrand.studio</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Telefono</p>
                                <a href="tel:+390212345678" className="text-muted-foreground hover:text-primary">+39 02 1234 5678</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Sede</p>
                                <p className="text-muted-foreground">Via dell'Innovazione 42, Milano</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Inviaci un messaggio</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nome</label>
                                    <Input id="name" placeholder="Mario Rossi" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="mario@azienda.it" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Oggetto</label>
                                <Input id="subject" placeholder="Richiesta informazioni..." />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Messaggio</label>
                                <Textarea id="message" placeholder="Descrivi il tuo progetto..." className="min-h-[150px]" />
                            </div>
                            <Button type="submit" className="w-full">Invia Messaggio</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
