---
title: 'Warum gute Werkzeuge nicht einsteigerfreundlich sein sollten'
date: '2026-05-30'
status: 'published'
category: 'Essay'
tags:
  - 'software'
  - 'motivation'
  - 'produktivitaet'
  - 'usability'
  - 'tools'
  - 'mastery'
  - 'vim'
coverImage: '/img/blog/clippy.png'
---

Eines vorne weg: Dies soll keine Geschichte über Vim sein. Es soll auch keine
Geschichte über Nischen-Tools im Allgemeinen sein. Es soll eine Abrechnung mit
dem allgegenwärtigen Dogma der "Einsteigerfreundlichkeit" sein. Dieser Text ist
der Versuch zu ergründen, warum digitale Werkzeuge eine Lernkurve brauchen und
wie ein sperriges Tool aus den 90er-Jahren meinen Blick darauf verändert hat,
was ein gutes digitales Werkzeug im Kern auszeichnet.

## Der Anfang

Ende letzten Jahres nahm ich an einer internen Linux-Schulung teil und eines
der Themen, die wir dort behandelten, ehe wir uns den Kernthemen widmeten, war
der Texteditor Vim. Ich hatte davor schon öfter von diesem Tool gehört, mich
aber nie wirklich damit beschäftigt. Wieso auch? Bis dahin konnte ich den
DevOps-Alltag auch gut ohne Vim bewältigen - Nano sei Dank.

Dennoch gab ich Vim eine Chance. Ich wusste, dass es Leute gab, die extrem
gut mit Vim umgehen konnten und dabei eher wie Zauberer statt Programmierer
aussahen.

Schnell musste ich jedoch feststellen, dass alles ziemlich umständlich zu
bedienen war. Man konnte nicht sofort drauf los tippen, sondern musste dafür
erst in den Insert-Mode wechseln. Um das Getippte zu speichern, musste man
wieder zurück in den Normal-Mode wechseln und dann mit Doppelpunkt den
Command-Mode aktivieren. Zwar konnte man mit den Pfeiltasten navigieren, aber
überall war zu lesen, dass stattdessen lieber die Buchstaben H, J, K und L
verwendet werden sollten.

## Der Vorsatz

Alles fühlte sich sehr ungewöhnlich und unintuitiv an. Aber ich blieb erstmal
dran - schließlich muss es doch einen Grund geben, weshalb sich dieses Tool
schon seit 1992 behaupten kann[^1]. Ich nahm mir vor, Vim mindestens einen
Monat lang zu nutzen. Doch wie sollte ich das anstellen? Nano durch Vim zu
ersetzen ist eine Sache. VSCode durch Vim zu ersetzen eine ganze andere.

Glücklicherweise fand ich heraus, das Vim mehr als ein Editor war: es gibt Vim,
den _Editor_ und Vim, die _Bewegungsbefehle_ (engl. motions). Die Vim Motions
sind auf so gut wie jedes Programm übertragbar, egal ob Browser, Messenger oder
IDE. Für VSCode gibt es ebenfalls eine Erweiterung, mit der man die Vim-Befehle
ausführen konnte, ohne dabei auf die gewohnte IDE-Oberfläche verzichten zu
müssen.

## Die Erkenntnis

Der Monat ist mittlerweile rum. Um ehrlich zu sein ist schon ein halbes Jahr
vergangen, seit ich mit Vim begonnen habe. So richtig geklickt hat es jedoch
erst vor ein paar Wochen. Ich bin immer noch weit davon entfernt, ein
Vim-Experte zu sein. Dennoch wage ich ein vorläufiges Fazit zu ziehen:

> Vim ist einsteiger**un**freundlich, aber es ist nutzerfreundlich.

Das ist keinesfalls ein Widerspruch.

Vim erfordert viele Bereitschaften. Die Bereitschaft, dran zu bleiben. Die
Bereitschaft, alte Gewohnheiten loszulassen und sich auf eine neue Art des
Arbeitens einzulassen. Die Bereitschaft, einen anfänglichen
Produktivitätsverlust in Kauf zu nehmen und erst später davon profitieren zu
können. All das macht es einsteiger*un*freundlich.

Für alle diejenigen, die diese Bereitschaften an den Tag legen, bietet Vim
jedoch eine unvergleichliche Nutzerfreundlichkeit. Es ist ein bisschen so wie
beim Zehn-Finger-System: wenn ich es wirklich gut beherrsche, kann ich beinahe
so schnell schreiben, wie ich spreche. Mit Vim ist es ähnlich: sobald die
Tastenkombinationen ins Muskelgedächtnis übergegangen sind, kann ich Text
beinahe so schnell editieren, wie ich denke.

Vim hat sich wie kein anderes Tool an die Ergonomie der Hände angepasst[^2]. Man
muss die Finger kaum noch von der Tastatur-Grundreihe bewegen. Währenddessen
wird die Maus zum unwichtigen Nebencharakter. Gerade dieses Wegfallen der Maus
empfinde ich als enormen Produktivitätsboost und Wegbereiter für den
Flow-Zustand.

## Das große Ganze

All diese Erfahrungen haben mich ins Grübeln gebracht. Warum hält diese
Philosophie der Nutzerfokussierung (und nicht der Einsteigerfokussierung) nicht
stärker Einzug in andere digitale Tools, die wir regelmäßig verwenden?
Anfänger in etwas zu sein, ist meist eine sehr temporäre Phase. Und doch hat
die Mehrheit aller digitalen Anwendungen primär den Einsteiger im Blick und
versucht diesen mit intuitiven Benutzeroberflächen an die Hand zu nehmen.

Intuitiv bedienbar zu sein, ist heutzutage Standard und Buzzword zugleich.
Effizient oder praktisch zu sein, steht wesentlich seltener im Fokus. In meinen
Augen ist Intuitivität per se auch nichts Schlechtes. Eine Website, die ich nur
einmal im Jahr besuche, sollte durchaus ein hohes Maß an Intuitivität bieten.
Ich möchte möglichst ohne Nachdenken oder Studieren einer Anleitung zum Ziel
kommen. Die Hürde sollte so niedrig wie möglich sein. Bei einem Tool, das ich
täglich nutze, stelle ich die Intuitivität nicht zwangsläufig an erste Stelle.
Hier möchte ich maximale Effizienz, Präzision, Ergonomie und im Idealfall auch
einen gewissen Grad an Anpassbarkeit an meine persönlichen Bedürfnisse. Ich
bin bereit, Zeit in eine Lernkurve zu investieren, wenn das Werkzeug mir auf
lange Sicht erlaubt, Aufgaben schneller, flüssiger und mit weniger Reibung zu
erledigen.

<figure>

![Software Quadrants](/img/blog/software-quadrants.jpg 'Software Quadrants')

<figcaption>

Subjektive Einordnung gängiger Tools nach Nutzungshäufigkeit,
Einsteigerfreundlichkeit und Mächtigkeit (Kreisgröße). Tools verteilen sich
nicht zufällig, sondern entlang eines Spannungsfelds aus Nutzungshäufigkeit
und Einsteigerfreundlichkeit. Die "mächtigsten" Werkzeuge sind oft genau die,
die am schwersten zu erlernen sind.

</figcaption>

</figure>

Ich glaube, diese Unterscheidung zwischen Werkzeug- und Alltagssoftware ist der
entscheidende Punkt. Gute Werkzeuge erklären sich nicht von selbst. Gute
Werkzeuge wollen erlernt werden - so wie ein Musikinstrument. Warum akzeptieren
wir Lernkurven bei Instrumenten, aber nicht bei Software? Gute Werkzeuge
reduzieren nicht die Lernkurve. Gute Werkzeuge sorgen dafür, dass sich die
Lernkurve lohnt. Was wäre, wenn Software nicht primär darauf optimiert wäre,
möglichst viele Nutzer sofort abzuholen, sondern darauf, ihre engagiertesten
Nutzer maximal leistungsfähig zu machen?

All das sind Fragen, die ich mir in letzter Zeit stelle.

## Der ewige Anfänger

Vielleicht erinnerst du dich noch an Clippy, die berühmt-berüchtigte
Büroklammer aus den alten Microsoft-Office-Zeiten. Sie ist das perfekte Symbol
für das Problem moderner Software: Sie entlässt ihre Nutzer nie aus der
Anfängerrolle.

Viele Anwendungen sind hervorragend darin, den ersten Kontakt möglichst
reibungslos zu gestalten. Doch je länger man ein Tool nutzt, desto deutlicher
wird oft: Die Software ist immer noch auf denselben Anfänger optimiert wie am
ersten Tag. Sie hört nie damit auf, uns virtuell auf die Schulter zu klopfen
(und zu fragen, ob wir einen Brief schreiben wollen), anstatt uns mit unseren
Fähigkeiten wachsen zu lassen.

Werkzeuge wie Vim verfolgen eine völlig andere Philosophie. Sie behandeln den
Nutzer nicht als jemanden, der möglichst schnell zurechtkommen soll, sondern
als jemanden, der bereit ist, besser zu werden. Die Lernkurve ist kein
Versehen. Sie ist Teil des Konzepts.

Und wer glaubt, man könne Anwendern kein schwierig zu erlernendes Tool zumuten,
der unterschätzt die Psychologie hinter echter Meisterschaft. Paradoxerweise
sind es oft gerade die steilen Lernkurven, die eine unerschütterliche
Kundenbindung und tiefe intrinsische Motivation hervorrufen. Ein Werkzeug zu
beherrschen, das einem nicht alles mundgerecht serviert, erzeugt Stolz und ein
Gefühl digitaler Selbstwirksamkeit. Wenn Software uns fordert, wachsen wir an
ihr. Wenn sie uns unterfordert, langweilt sie uns.

## Schlussgedanken

Vim ist ein gutes Beispiel für hervorragendes Design. Vermutlich ist es schwer,
solch einen Grad an Perfektion zu erreichen. Aber man kann sich das ein oder
andere davon abschauen. Den Nutzer nicht länger als hilfsbedürftigen Anfänger,
sondern als mündigen Handwerker zu betrachten, wäre sicherlich ein guter
Anfang.

[^1]: Den Vorgänger vi gibt es sogar bereits seit 1976.
[^2]: Um genau zu sein hat sich Vim selbst nicht an die Ergonomie der Hände
angepasst. Vielmehr war es das von Bill Joy (der Erfinder von vi) verwendete
ADM-3A-Terminal, dessen Tastaturlayout die Pfeiltasten direkt auf den Tasten H,
J, K und L aufgedruckt hatte (vgl. [hier](https://de.wikipedia.org/wiki/Vi#/media/Datei:KB_Terminal_ADM3A.svg){:target="_blank"})
