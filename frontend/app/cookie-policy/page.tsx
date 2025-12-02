import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiePolicy() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Cookie Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                    <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                    <h3>1. Cosa sono i Cookie</h3>
                    <p>
                        I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive.
                    </p>

                    <h3>2. Tipologie di Cookie utilizzati</h3>
                    <p>
                        Questo sito utilizza:
                        <ul>
                            <li><strong>Cookie tecnici:</strong> necessari per il corretto funzionamento del sito.</li>
                            <li><strong>Cookie analitici:</strong> utilizzati per raccogliere informazioni in forma aggregata sul numero degli utenti e su come questi visitano il sito.</li>
                        </ul>
                    </p>

                    <h3>3. Gestione dei Cookie</h3>
                    <p>
                        L'utente può gestire le preferenze relative ai cookie direttamente all'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
