import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                    <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>

                    <p>
                        La presente Privacy Policy descrive le modalità di gestione del sito web di DeBrand Studio in riferimento al trattamento dei dati personali degli utenti che lo consultano, ai sensi del Regolamento UE 2016/679 (GDPR).
                    </p>

                    <h3>1. Titolare del Trattamento</h3>
                    <p>
                        Il Titolare del trattamento è <strong>DeBrand Studio</strong>.<br />
                        Sede legale: [Inserire Indirizzo]<br />
                        P.IVA: 03013500644<br />
                        Email di contatto: <a href="mailto:info@debrandstudio.it">info@debrandstudio.it</a>
                    </p>

                    <h3>2. Tipologia di Dati Raccolti</h3>
                    <p>
                        <strong>Dati di navigazione:</strong> I sistemi informatici preposti al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, orari delle richieste).<br />
                        <strong>Dati forniti volontariamente:</strong> L'invio facoltativo, esplicito e volontario di messaggi agli indirizzi di contatto o la compilazione dei moduli di contatto comporta l'acquisizione dei dati di contatto del mittente, necessari per rispondere, nonché di tutti i dati personali inclusi nelle comunicazioni.
                    </p>

                    <h3>3. Finalità e Base Giuridica del Trattamento</h3>
                    <p>
                        I dati personali sono trattati per le seguenti finalità:
                        <ul>
                            <li><strong>Erogazione dei servizi:</strong> Per rispondere alle richieste di informazioni e preventivi (Base giuridica: Esecuzione di misure precontrattuali).</li>
                            <li><strong>Sicurezza:</strong> Per garantire la sicurezza del sito e prevenire frodi (Base giuridica: Legittimo interesse).</li>
                            <li><strong>Adempimenti legali:</strong> Per adempiere agli obblighi previsti dalla legge (Base giuridica: Obbligo legale).</li>
                        </ul>
                    </p>

                    <h3>4. Modalità di Trattamento e Conservazione</h3>
                    <p>
                        Il trattamento è svolto con strumenti automatizzati e manuali per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti. Specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.
                    </p>

                    <h3>5. Diritti degli Interessati</h3>
                    <p>
                        Gli utenti hanno il diritto di ottenere, nei casi previsti, l'accesso ai propri dati personali e la rettifica o la cancellazione degli stessi o la limitazione del trattamento che li riguarda o di opporsi al trattamento (artt. 15 e ss. del Regolamento). Le richieste vanno rivolte al Titolare del trattamento via email.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
