---
title: 'Wenn Nutzer dein Design fertigstellen'
date: '2026-07-31'
status: 'published'
category: 'Essay'
tags:
  - 'software'
  - 'usability'
  - 'design'
  - 'ux'
  - 'public-sector'
coverImage: '/img/blog/irritating-sign.jpg'
---

Vor ein paar Wochen hat mir YouTube ein Video empfohlen, das mich nicht mehr
losgelassen hat: Kate Canales' TED-Talk über die
[versehentliche Brillanz von provisorischen Hinweisschildern](https://www.youtube.com/watch?v=5CvlKCBrPHI){:target="\_blank"}.
Darin zeigt sie Fotos von Schildern, die irgendjemand irgendwo aufgehängt hat,
weil das ursprüngliche Design nicht intuitiv genug war. "Push then pull." "This
is a light switch." "Use other door." Kleine, oft mit Klebeband befestigte
Korrekturen der Realität.

<figure>

![](/img/blog/makeshift-signs.png)

<figcaption>

Bilder aus Kates Talk

</figcaption>

</figure>

Kate, selbst Designerin und Dozentin, sieht darin längst nicht nur schlechtes
Design. Sie sieht Menschen, die nachträglich retten, was im ersten Entwurf
nicht aufgegangen ist — und nennt die Schildermacher selbst Designer. Als ich
den Talk sah, kam mir das seltsam vertraut vor: Solche Schilder waren mir schon
Monate zuvor aufgefallen — genau dort, wo meine eigene Arbeit auf echte Menschen
trifft.

## Meine Arbeit

Ich selbst arbeite als Software-Entwickler bei der Stadt München. Zusammen mit
meinem Team entwickeln und betreiben wir die [Software der
Online-Terminvereinbarung](https://github.com/it-at-m/eappointment). Termine
lassen sich bequem über [muenchen.de](https://stadt.muenchen.de/buergerservice/terminvereinbarung.html)
buchen, manche Dienstleistungen können (oder müssen) jedoch auch direkt vor Ort
gebucht werden. Bei letzterer Variante kommt ein sogenanntes Kiosk-Terminal zum
Einsatz: ein Gerät mit Touchscreen und Ticketdrucker, an dem ohne vorherige
Online-Buchung spontan ein Termin gezogen werden kann. Ergänzt wird das Ganze
durch Aufrufmonitore in den Wartebereichen, auf denen die aufgerufenen Nummern
erscheinen.

So weit, so gut.

Zumindest auf dem Papier. Als Entwickler sieht man den Alltag der Nutzung vor
allem über Tickets, Logs und Feature-Requests — selten über den Warteraum
selbst. Hinzu kommt, dass unsere Kunden (neben den Bürger\*innen) die Referate
der größten Kommunalverwaltung Deutschlands sind: Zwischen dem Frust am Schalter
und dem Ticket in unserem Backlog liegt eine Hierarchie, die vieles abfedert,
bevor es bei uns ankommt. Erst in diesem Jahr haben wir uns im Team vorgenommen,
bei den verschiedenen Kunden kleine Hospitationen vor Ort zu machen: zuschauen,
wie die Software wirklich genutzt wird, und wo es noch hakt. Als wir vor ein
paar Monaten einige Abteilungen besucht haben, zeigte sich ein Bild, das in
keinem Ticket stand: Überall hingen Schilder.

Hier mal meine persönlichen Highlights:

## Schild 1

<figure>

![](/img/blog/sign-example-1.jpg)

<figcaption>

Man kann die Frustration förmlich greifen.

</figcaption>

</figure>

Eine klare und unmissverständliche Botschaft im Befehlston: Es soll gefälligst
nur einmal auf die gewünschte Dienstleistung geklickt werden. Wir Entwickler
wissen dank unserer Testgeräte, dass der Druckvorgang ein paar Sekunden dauern
kann. Jemand, der das Gerät womöglich zum ersten Mal bedient, ist da schon etwas
ungeduldiger. Für uns war dieses Schild ein Hinweis darauf, ein entsprechendes
Feedback in die UI zu integrieren, das signalisiert, dass die Wartenummer gerade
gedruckt wird.

## Schild 2

Oder wie wäre es hiermit?

<figure>

![](/img/blog/sign-example-2.jpg)

<figcaption>

Eine fehlende Übersetzung ins Englische. Das Hinweisschild hilft aus.

</figcaption>

</figure>

Hier scheint es lediglich darum zu gehen, die angebotene Dienstleistung auch in
englischer Sprache auszuweisen. Unsere Software kann Mehrsprachigkeit. Uns wurde
jedoch nie gemeldet, dass sie für diesen Standort benötigt wird. Wären wir nicht
vor Ort gegangen, hätten wir dies nie in Erfahrung gebracht. Außerdem scheint
es, als hätte der oder die Schöpferin dieses Schilds deutlich mehr Wert auf
Übereinstimmung mit dem Corporate Design gelegt.

## Schild 3

Hier ein weiteres Beispiel, das fast schon einer Benutzeranleitung gleicht:

<figure>

![](/img/blog/sign-example-3.jpg)

<figcaption>

Das Hinweisschild kompensiert, was unser Design nicht im Stande war zu
vermitteln.

</figcaption>

</figure>

Die Intention hinter diesem Schild besteht darin, Menschen mit bestehender
Online-Buchung davon abzuhalten, zusätzlich eine Wartenummer auszudrucken —
sonst stünde man plötzlich mit zwei Terminen da. Auch das ist eine Situation,
auf die wir im Team nie gekommen wären. Für uns war immer glasklar, dass
Terminkunden (die online gebucht hatten) nie auf die Idee kämen, vor Ort nochmal
eine Wartemarke zu drucken.

## Noch eins

Zu guter letzt ein Schnappschuss, der zwar nichts mit unserer Software zu tun
hat, aber ganz gut verdeutlicht, dass das Aufhängen von Schildern in
öffentlichen Verwaltungen gang und gäbe ist.

<figure>

![](/img/blog/sign-example-4.jpg)

</figure>

## Die Erkenntnis

Für jemanden wie mich, der bürgernahe Software baut, sind Aushilfsschilder nicht
nur "liebvolle, menschliche Problemlösung", wie es Kate ausdrückt. Vielmehr
sind sie die ehrlichsten Bug-Reports, die man je bekommt — sofern man bereit
ist, vor Ort zu gehen, zu beobachten und mit den Menschen dort zu sprechen.

Ein paar Dinge sind mir besonders hängengeblieben:

1. **Schilder sind Symptome, keine Ursachen:** Ein Zettel an der Wand ist fast
nie ein Zeichen dafür, dass die Menschen "zu dumm" sind. Er ist ein
unübersehbarer Indikator dafür, dass die Software oder der Prozess an dieser
Stelle nicht intuitiv ist.

2. **Die Logik beim Programmieren schlägt selten die Realität im Warteraum:**
Beim Entwickeln denkt man in Systemzuständen, Datensätzen und sauberen
Klickpfaden. Menschen in der Behörde handeln unter Stress, Zeitdruck oder
Unsicherheit. Der logischste Ablauf bringt nichts, wenn er in der echten Welt
nicht verstanden wird.

3. **Das echte Design sitzt oft vor Ort:** In den Dienststellen wartet niemand,
bis das nächste Softwarerelease die Probleme löst. Man löst sie sofort — mit
Laminiergerät, Tesafilm und Edding. So gesehen könnte man die Hinweisschilder
auch als kostenlose, hochgradig valide Prototypen erachten.

## Und jetzt?

Kate beginnt ihren Talk mit der Absicht, Beispiele für schlechtes Design zu
sammeln — endet aber mit einer anderen Erkenntnis: Für sie sind die Schilder
vor allem Belege dafür, dass wir einander in der echten Welt noch brauchen, um
ganz einfache Dinge hinzubekommen ("Muss ich an der Tür drücken oder ziehen?").
Jemand hat sich die Zeit genommen, Hinweise zu hinterlassen, damit es der
nächsten Person ein bisschen leichter fällt als einem selbst. Ich finde diesen
Gedanken schön, aber für mich als jemand, der die Software hinter diesen
Schildern tatsächlich schreibt, reicht er nicht ganz aus. Ich kann mich nicht
damit zufriedengeben, dass vor Ort unsere Lücken mit Tesafilm gekittet werden.

Was sich seitdem bei uns geändert hat, ist eigentlich ganz simpel: Wir gehen
jetzt öfter raus. Ein Nachmittag im Warteraum erzählt uns mehr über unsere
Software als ein Quartal voller Tickets. Die Schilder waren dabei kein
Vorwurf an uns, sondern eher eine Einladung. Jemand hat sich die Mühe
gemacht, ein Problem so genau zu beschreiben, dass es mit einem Blatt
Papier und etwas Klebeband gelöst werden konnte. Das Mindeste, was wir tun
können, ist, diese Beschreibung zu lesen und dafür zu sorgen, dass beim
nächsten Mal kein Schild mehr nötig ist.
