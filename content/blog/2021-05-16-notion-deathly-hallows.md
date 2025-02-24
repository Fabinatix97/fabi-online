---
title: 'Die drei Heiligtümer von Notion'
date: '2021-05-16'
status: 'published'
category: 'Tutorial'
tags:
  - 'fortgeschrittenes'
  - 'notion'
  - 'notiz-app'
  - 'pkm'
  - 'produktivitaet'
  - 'tipps-tricks'
  - 'tutorial'
coverImage: '/img/blog/deathly-hallows.jpg'
---

In diesem Beitrag möchte ich dir zeigen, was Notion so mächtig macht und gleichzeitig von anderen Notizapps unterschiedet. Wenn die vorherige Einführung das kleine 1x1 war, entspricht das Folgende der Polynomdivision. Doch keine Angst, so kompliziert wird es gar nicht. Konkret möchte ich dir folgende Funktionen näherbringen: Formeln, Relationen und sogenannte Roll-ups (ich weiß, die Harry Potter-Anspielung ist etwas übertrieben).

<!--more-->

## Back to school

Zur besseren Veranschaulichung versetzen wir uns - wie bereits im [ersten Teil](/blog/2021-05-02-notion-1x1) - in die Lage eines Studenten. Dieser steckt mittlerweile mitten im Hochschulstress und benötigt für die anstehenden Klausurenphase dringend ein Werkzeug, um seinen Lernfortschritt zu überwachen.

Wir öffnen also unser bereits erstelltes [Studium-Notizbuch](https://www.notion.so/Studium-b0a433b6a5b34f58a95535ed0aacd6ab) und öffnen anschließend die Seite „Allgemeines". Nun erstellen wir eine Unterseite mit dem Titel „Lernplan“ und dem Datenbanktyp „Table". Die vorgefertigte Tabelle passen wir nun nach unseren Bedürfnissen an.

![](/img/blog/notion-advanced-01.png)

## 1. Relationen

Zunächst benennen wir die erste Spalte in „Nr.“ um. In der zweiten Spalte sollen nun die verschiedenen Module des Studiengangs angezeigt werden. Diese haben wir ja bereits in der Notizbank „Curriculum“ erfasst. Anstatt diese also wieder mühsam abzutippen, wäre es viel einfacher die beiden Notizbanken einfach miteinander zu verknüpfen. In Notion-Sprache heißt das: wir benötigen eine Relation.

Hierfür ändern wir den „Property-Type“ der zweiten Spalte von „Multi-Select“ auf „Relation". Nun erscheint ein Pop-up mit der Aufforderung, eine Datenbank auszuwählen. Wir geben „Curriculum“ in das Suchfeld ein und wählen die richtige Datenbank aus.

![](/img/blog/notion-advanced-02.png)

Jetzt können wir mit einem Klick in die oberste Zelle der zweiten Spalte festlegen, welches Modul angezeigt werden soll. Soweit so gut. Beginnen wir nun also damit, die ersten vier Zeilen der Tabelle mit Modulen zu füllen. Das könnte dann zum Beispiel so aussehen:

![](/img/blog/notion-advanced-03.png)

## 2. Roll-ups

Zur besseren Übersicht möchten wir uns nun noch das dazu passende Semester anzeigen lassen. Hier kommt das sogenannte Roll-up ins Spiel. Kurz gesagt: Roll-ups sind in Notion, was S-Verweise in Excel sind. Sie helfen dir dabei, Daten aus deinen Datenbanken auf Basis von Beziehungen zu bündeln. Klingt kompliziert, ist es aber eigentlich gar nicht. Zur besseren Veranschaulichung erstellen wir eine dritte Spalte namens „Semester“ und wählen den Property Type „Roll-up“ aus. Noch passiert nichts. Ein Klick in die erste Zeile der neu angelegten Spalte öffnet wieder ein Pop-up mit drei verschiedenen Einstellungen. Diese füllen wir folgendermaßen aus:

![](/img/blog/notion-advanced-04.jpg)

Natürlich kannst du dir auch ein anderes Attribut (Property) anzeigen lassen oder weitere Roll-ups hinzufügen. Auch Roll-ups von Roll-ups sind theoretisch möglich. Deiner Kreativität sollten also keine Grenzen gesetzt sein. Mir geht es hier lediglich um das Demonstrieren.

## 3. Formeln

Und wieder einmal sollten wir vor lauter Konstruieren nicht vergessen, wofür wir Notion eigentlich nutzen möchten: zum Arbeiten. Für unseren Lernplan benötigen wir nämlich noch eine Möglichkeit, um unseren Lernfortschritt festzuhalten. Hierfür machen wir uns die Formel-Funktion von Notion zu Nutze - was diesen Beitrag nach der Erklärung von Relationen und Roll-ups auch schon abschließen soll.

Zunächst erstellen wir - der Einfachheit halber - drei Spalten mit dem Property Type „Checkbox“ und benennen sie „Phase 1, 2 und 3". Das sollte nun ungefähr so aussehen:

![](/img/blog/notion-advanced-05.png)

Damit wir auf einen Blick sehen, wie weit unser Lernfortschritt für das jeweilige Modul ist, möchten wir, dass uns Notion - je nachdem wie viele Boxen gecheckt sind - in einer weiteren Spalte einen konkreten Status ausspuckt.

Hierfür eignet sich am besten eine Wenn-Dann-Formel, wie man sie auch von Excel kennt. Unser Ziel ist, dass die Formel ein „Noch nicht begonnen“ ausspuckt, wenn keine der drei Boxen angekreuzt sind und ein „Abgeschlossen“, wenn alle Boxen ausgefüllt sind. Bilder sprechen mal wieder mehr als Worte - so soll das Endergebnis aussehen:

![](/img/blog/notion-advanced-06.png)

Die Formel hierfür sieht auf den ersten Blick kompliziert aus. Bei genauerem Hinblick wirst du jedoch erkennen, dass es nur eine sehr verschachtelte Wenn-Dann-Funktion ist und diese eigentlich gar nicht so komplex ist. Hier die Formel:

```
if(prop("Phase 3") == true, "✔ Abgeschlossen", if(prop("Phase 2") == true, "⚙ In Arbeit", if(prop("Phase 1") == true, "💬 Angefangen", "❌ Noch nicht begonnen"))
```

Im Prinzip geht es hier ja auch gar nicht um die konkrete Formel. Ich wollte dir hiermit nur ein weiteres Mal vor Augen führen, wie mächtig Notion ist. Und natürlich können Relationen, Roll-ups und Formeln auch miteinander kombiniert werden.

## Unbegrenzte Möglichkeiten

Ich hoffe, du hast dir durch diesen kurzen Abriss der drei Features ein besseres Bild von Notion machen können. Im Netz finden sich unzählige Inspirationsquellen und Vorlagen zum Herunterladen und Ausprobieren. Ausprobieren ist in meinen Augen auch das Wichtigste, wenn man ein so umfangreiches Tool wie Notion voll ausnutzen möchte. Kennt man erstmal den Großteil von Notions Baukasten, fällt es einem viel leichter, individuell maßgeschneiderte Notizbücher zu erstellen, die sich so in keinem anderen Notiztool verwirklichen lassen würden.

## Wie es weitergeht

Im dritten Teil dieses Tutorials möchte ich dir zeigen, wie ich Notion persönlich nutze. In diesem Sinne bedanke ich mich mal wieder fürs Lesen, hoffe, dass du aufgeschlossen und neugierig bleibst und wir uns im nächsten Teil wiedersehen.
