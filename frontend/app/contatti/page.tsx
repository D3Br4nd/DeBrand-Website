"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    }

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
                                <p className="font-medium">Email</p>
                                <a href="mailto:info@debrandstudio.it" className="text-muted-foreground hover:text-primary">info@debrandstudio.it</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Telefono</p>
                                <a href="tel:+393474854512" className="text-muted-foreground hover:text-primary">+39 347 485 4512</a>
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
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                                <Input id="name" name="name" placeholder="Il tuo nome" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" name="email" type="email" placeholder="tua@email.it" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium">Azienda (Opzionale)</label>
                                <Input id="company" name="company" placeholder="Nome Azienda" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Messaggio</label>
                                <Textarea id="message" name="message" placeholder="Descrivi il tuo progetto..." className="min-h-[150px]" required />
                            </div>
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? 'Invio in corso...' : 'Invia Richiesta'}
                            </Button>
                            {status === 'success' && (
                                <p className="text-green-600 text-sm text-center">Messaggio inviato con successo!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-sm text-center">Errore durante l'invio. Riprova.</p>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
