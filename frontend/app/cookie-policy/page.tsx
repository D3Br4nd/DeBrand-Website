import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiePolicy() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Cookie Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                    <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>

                    <h3>1. Cosa sono i Cookie</h3>
                    <p>
                        I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali (solitamente al browser), dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. I cookie permettono al sito di ricordare i dati dell'utente per la durata della visita o per le visite successive.
                    </p>

                    <h3>2. Tipologie di Cookie utilizzati da questo sito</h3>
                    <p>
                        Questo sito utilizza esclusivamente cookie tecnici e analitici anonimizzati, per i quali non è richiesto il consenso preventivo dell'utente, ma solo l'obbligo di informativa.
                        <ul>
                            <li><strong>Cookie Tecnici di Navigazione o Sessione:</strong> Garantiscono la normale navigazione e fruizione del sito web. Senza questi cookie, il sito non potrebbe funzionare correttamente.</li>
                            <li><strong>Cookie Analitici (Statistici):</strong> Utilizzati per raccogliere informazioni, in forma aggregata e anonima, sul numero degli utenti e su come questi visitano il sito, al fine di migliorare le performance e l'usabilità del servizio.</li>
                        </ul>
                    </p>

                    <h3>3. Cookie di Terze Parti</h3>
                    <p>
                        Durante la navigazione, l'utente potrebbe ricevere sul suo terminale anche cookie di siti o di web server diversi (c.d. cookie di "terze parti"). Questo accade perché sul sito possono essere presenti elementi come, ad esempio, immagini, mappe, suoni, specifici link a pagine web di altri domini che risiedono su server diversi da quello sul quale si trova la pagina richiesta.
                    </p>

                    <h3>4. Gestione dei Cookie</h3>
                    <p>
                        L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. La disabilitazione totale o parziale dei cookie tecnici può compromettere l'utilizzo delle funzionalità del sito riservate agli utenti registrati. Al contrario, la fruibilità dei contenuti pubblici è possibile anche disabilitando completamente i cookie.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
