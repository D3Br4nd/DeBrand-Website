import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                    <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                    <h3>1. Titolare del Trattamento</h3>
                    <p>
                        DeBrand Studio<br />
                        P.IVA: 03013500644<br />
                        Email: info@debrandstudio.it
                    </p>

                    <h3>2. Tipologia di Dati Raccolti</h3>
                    <p>
                        Raccogliamo dati personali forniti volontariamente dall'utente (es. tramite form contatti) e dati di navigazione necessari per il funzionamento del sito.
                    </p>

                    <h3>3. Finalità del Trattamento</h3>
                    <p>
                        I dati sono trattati per:
                        <ul>
                            <li>Rispondere alle richieste di contatto.</li>
                            <li>Fornire i servizi richiesti.</li>
                            <li>Migliorare l'esperienza utente sul sito.</li>
                        </ul>
                    </p>

                    <h3>4. Diritti dell'Utente</h3>
                    <p>
                        L'utente ha diritto di accedere, rettificare, cancellare i propri dati o opporsi al loro trattamento contattando il titolare.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
