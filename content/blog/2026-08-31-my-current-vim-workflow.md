---
title: 'Meine Vim-Kenntnisse nach einem Jahr'
date: '2026-08-31'
status: 'published'
category: 'Essay'
tags:
  - 'vim'
  - 'neovim'
  - 'software'
  - 'produktivitaet'
  - 'tools'
  - 'mastery'
coverImage: '/img/blog/neovim-home.jpg'
---

Seit ungefähr einem Jahr beschäftige ich mich nun mit Vim. Angefangen hat
alles mit einer internen Linux-Schulung und dem Vorsatz, dem etwas
eigenwilligen Texteditor zumindest einen Monat lang eine ehrliche Chance zu
geben. Aus dem Monat ist mittlerweile ein Jahr geworden. In dieser Zeit habe
ich _Learning the vi and Vim Editors_ von Arnold Robbins und Elbert Hannah
gelesen, zahlreiche Videos zu Vim und Neovim geschaut und vor allem viel
ausprobiert.

Dieser Artikel soll weder ein Vim-Tutorial noch eine vollständige Auflistung
aller Funktionen werden. Dafür gibt es das Benutzerhandbuch – und Menschen,
die Vim bereits seit mehreren Jahrzehnten verwenden. Ich möchte stattdessen
festhalten, wie ich Vim nach meinem ersten Jahr tatsächlich nutze: Welche
Befehle sind bereits ins Muskelgedächtnis übergegangen? Welche Konzepte finde
ich besonders nützlich? Und von welchen Funktionen weiß ich zwar, denke im
entscheidenden Moment aber trotzdem nicht daran?

Der Text ist damit vor allem eine Momentaufnahme. Vermutlich werde ich einige
der folgenden Gewohnheiten in ein paar Jahren umständlich oder sogar ziemlich
unsinnig finden. Genau deshalb möchte ich sie aufschreiben.

## Vom File Tree zur direkten Suche

Beginnen wir mit der Navigation zwischen Dateien. Aktuell arbeite ich noch
recht häufig mit einem klassischen File Tree. Dafür nutze ich
[netrw](https://neovim.io/doc/user/pi_netrw.html){:target="_blank"}, den
eingebauten Dateiexplorer von Vim und Neovim. Mit der Taste `-` öffne ich das
Verzeichnis der aktuellen Datei und kann mich von dort durch das Projekt
bewegen. `-` fühlt sich für mich am intuitivsten an, weil die Standard-Taste,
mit der man in netrw eine Ebene nach oben springt, ebenfalls `-` ist.

Für meinen Bedarf ist netrw vollkommen ausreichend. Natürlich gibt es
interessante Alternativen wie
[oil.nvim](https://github.com/stevearc/oil.nvim){:target="_blank"}, mit denen
man ein Verzeichnis wie einen normalen Buffer bearbeiten kann. Dateien lassen
sich dann ähnlich verschieben, umbenennen oder löschen wie gewöhnlicher Text.
Das finde ich durchaus spannend. Trotzdem versuche ich bei grundlegenden
Funktionen möglichst nah am Standard zu bleiben. In meinem Arbeitsalltag
hantiere ich regelmäßig auf Servern, auf denen nur Vim oder teilweise sogar
nur vi installiert ist. Dort hilft mir ein aufwendig konfigurierter
Dateiexplorer wenig.

Gleichzeitig versuche ich, den File Tree immer seltener zu verwenden. In einem
bekannten Projekt weiß ich meist schon ungefähr, welche Datei ich suche. Dann
ist es schneller, den Namen direkt über
[Telescope](https://github.com/nvim-telescope/telescope.nvim){:target="_blank"}
einzugeben, anstatt mich durch mehrere Verzeichnisse zu klicken. Mit
`find_files` suche ich nach Dateien, mit `live_grep` nach Text im gesamten
Projekt. Beides verwende ich täglich, obwohl es vermutlich nur einen kleinen
Teil dessen abdeckt, was Telescope eigentlich kann.

<figure>

![Telescope in Action](/img/blog/neovim-telescope.jpg 'Telescope in Action')

</figure>

Den File Tree nutze ich deshalb vor allem dann, wenn ich einen unbekannten
Bereich des Projekts erkunden und dessen Struktur verstehen möchte. Für alles,
was ich bereits kenne, greife ich zunehmend zur Suche. Die wenigen Dateien,
zwischen denen ich während einer Aufgabe ständig hin- und herspringe, lege ich
zusätzlich in [Harpoon](https://github.com/ThePrimeagen/harpoon){:target="_blank"}
ab. So hat mittlerweile jedes Werkzeug eine recht klare Aufgabe: netrw zum
Erkunden, Telescope zum Finden und Harpoon zum schnellen Wechseln.

## Wie ich mich innerhalb einer Datei bewege

Bei Vim denkt man vermutlich zuerst an `h`, `j`, `k` und `l`. Tatsächlich
verwende ich zumindest `j` und `k` weiterhin häufig, oft zusammen mit einem
Count. Wenn das Ziel zehn Zeilen weiter unten liegt, tippe ich `10j`, anstatt
zehnmal dieselbe Taste zu drücken. Relative Zeilennummern sind dafür aus
meiner Sicht unverzichtbar. Ohne sie müsste ich den Abstand entweder selbst
zählen oder im Kopf subtrahieren – beides möchte ich beim Programmieren eher
nicht tun.

Noch häufiger nutze ich allerdings `Ctrl-d` und `Ctrl-u`, um jeweils eine
halbe Bildschirmseite nach unten oder oben zu springen. Für den Anfang und
das Ende einer Datei sind `gg` und `G` inzwischen ebenfalls vollständig ins
Muskelgedächtnis übergegangen.

Wenn das Ziel nicht sichtbar ist, suche ich meistens mit `/`. Selbst bei
vergleichsweise kurzen Distanzen ist das für mich oft schneller, als mich mit
mehreren Bewegungsbefehlen dorthin vorzuarbeiten. `f` verwende ich ebenfalls,
allerdings deutlich seltener. Interessanterweise muss ich bei den jeweiligen
Wiederholungsbefehlen manchmal noch kurz überlegen: War es jetzt `n` für den
nächsten Suchtreffer oder `;` für die nächste Fundstelle von `f`? Die
rückwärts gerichteten Varianten `?` und `F` verwende ich so gut wie nie.
Offenbar ist es für mich einfacher, ein paar Zeichen zu weit zu springen und
dann zurückzugehen, als von Anfang an in die andere Richtung zu suchen.

Marks sind ein weiteres Konzept, das ich theoretisch nützlich finde. Mit `ma`
lässt sich eine Position markieren, mit `` `a `` kann man später exakt dorthin
zurückspringen. In der Praxis denke ich nur selten daran. Ähnlich geht es mir
mit der Jump List.

## Wie ich Text bearbeite

Der Moment, in dem Vim für mich wirklich Sinn ergab, hatte weniger mit der
Navigation als mit Text Objects zu tun. Kombinationen wie `ciw`, `ci"` oder
`ci(` gehören mittlerweile zu meinen meistgenutzten Befehlen. Ich muss nicht
erst ein Wort oder den Inhalt einer Klammer markieren und danach löschen.
Stattdessen beschreibe ich direkt, was ich ändern möchte.

Genau darin liegt für mich weiterhin die größte Stärke von Vim. Die einzelnen
Befehle lassen sich wie Bestandteile einer Sprache kombinieren. `c` steht für
_change_, `i` für _inside_ und `w` für _word_. Aus drei kleinen Bausteinen
wird „ändere den Inhalt dieses Wortes“. Dasselbe Prinzip funktioniert mit
Anführungszeichen, Klammern, Absätzen und zahlreichen anderen Textbereichen.
Irgendwann hört man auf, die einzelnen Buchstaben bewusst zu übersetzen.

Daneben besteht mein Alltag aus ziemlich unspektakulären Befehlen: `yy` zum
Kopieren einer Zeile, `dd` zum Löschen und `p` zum Einfügen. Gerade diese
einfachen Kombinationen zeigen aber gut, warum sich Vim nach einiger Zeit so
flüssig anfühlt. Für viele kleine Änderungen muss ich weder etwas markieren
noch die Hände von ihrer normalen Position auf der Tastatur wegbewegen.

Eine Funktion, die ich erst kürzlich gelernt habe, ist `gq`. Damit lässt sich
Text neu formatieren und entsprechend der eingestellten Textbreite umbrechen.
Bei Markdown-Dateien verwende ich beispielsweise `vipgq`: Absatz auswählen
und anschließend formatieren.

## Der unterschätzte Punkt

Einer meiner liebsten Vim-Befehle ist der Punkt `.`. Er wiederholt die letzte
Änderung. Das klingt zunächst nicht besonders spektakulär, lässt sich aber mit
fast allem kombinieren.

Möchte ich beispielsweise dasselbe Wort an mehreren Stellen ändern, suche ich
nach dem ersten Vorkommen, ändere es mit `ciw`, springe mit `n` zum nächsten
Treffer und wiederhole die Änderung mit `.`. Danach wechseln sich nur noch `n`
und `.` ab. Ich verwende den Punkt bereits regelmäßig und habe trotzdem das
Gefühl, sein Potenzial noch nicht vollständig auszunutzen. Häufig bemerke ich
erst im Nachhinein, dass ich eine Änderung so wesentlich einfacher hätte
wiederholen können.

Macros verfolgen eine ähnliche Idee, gehen aber noch einen Schritt weiter.
Eine ganze Folge von Befehlen lässt sich aufzeichnen und anschließend beliebig
oft abspielen. Wenn ich ein passendes Problem erkenne, sind Macros äußerst
praktisch. Das Erkennen ist allerdings der schwierige Teil. Meist beginne ich
eine Änderung von Hand und stelle erst beim fünften Durchlauf fest, dass ein
Macro sinnvoll gewesen wäre.

## Vim und die Kommandozeile

Ein größerer Teil von _Learning the vi and Vim Editors_ beschäftigt sich mit
dem Ex-Editor, der noch immer unter der Oberfläche von Vim steckt. Vor dem
Buch war die kleine Kommandozeile, die nach einem Doppelpunkt erscheint, für
mich hauptsächlich der Ort für `:w`, `:q` und gelegentlich `:split`. Inzwischen
verstehe ich deutlich besser, wie Bereiche, Befehle und reguläre Ausdrücke
dort zusammenspielen.

Besonders häufig nutze ich Suchen und Ersetzen. Mit
`:%s/search/replace/gc` gehe ich durch alle Treffer einer Datei und bestätige
jede Ersetzung einzeln. Das `c` am Ende ist für mich wichtig, weil ich so nicht
blind jede Fundstelle verändere. Gleichzeitig hat mich die Verwendung von
`:s` endlich dazu gezwungen, reguläre Ausdrücke vernünftig zu lernen, anstatt
deren Syntax jedes Mal neu nachzuschlagen.

Noch interessanter finde ich die Verbindung zur Linux-Kommandozeile. Mit `:!`
kann Vim praktisch jedes verfügbare Kommando ausführen. Ein markierter Bereich
lässt sich mit `!sort` direkt durch `sort` schicken; die Ausgabe ersetzt
anschließend den ursprünglichen Text. Mit `:r !command` landet die Ausgabe
eines Befehls direkt in der aktuellen Datei. Dadurch stehen nicht nur die
Funktionen des Editors zur Verfügung, sondern auch Werkzeuge wie `sort`, `jq`
oder `column`.

Wenn ich die Shell doch einmal direkt benötige, lege ich Neovim mit `Ctrl-z`
in den Hintergrund. Nach dem Shell-Befehl bringt mich `fg` zurück in den
Editor. Diese enge Verbindung zwischen Editor und Kommandozeile ist eine der
Eigenschaften, die ich an Vim besonders mag. Viele grafische Editoren können
externe Programme natürlich ebenfalls ausführen. In Vim fühlt es sich jedoch
wie ein natürlicher Bestandteil des Editors an und nicht wie eine nachträglich
angebaute Funktion.

## Mein aktueller Werkzeugkasten

Neovim selbst bildet nur die Grundlage meines Setups. Einige Plugins möchte
ich inzwischen nicht mehr missen. Telescope, Harpoon und netrw habe ich
bereits erwähnt. Für die Arbeit mit Git verwende ich täglich
[Lazygit](https://github.com/jesseduffield/lazygit){:target="_blank"}, das ich
direkt aus Neovim heraus öffne.

<figure>

![Lazygit in Action](/img/blog/neovim-lazygit.jpg 'Lazygit in Action')

</figure>

Lazygit nimmt mir viele wiederkehrende Git-Befehle ab, ohne vollständig zu
verbergen, was im Hintergrund passiert. Jede Aktion wird in einen normalen
Git-Befehl übersetzt und im Command Log angezeigt. Dadurch kann ich bequem
arbeiten und lerne nebenbei weiterhin etwas über Git. Diese Kombination
gefällt mir deutlich besser als grafische Oberflächen, bei denen kaum
nachvollziehbar ist, welcher Befehl gerade ausgeführt wurde.

Daneben kümmert sich mein Setup um LSP, Autovervollständigung, Formatierung,
Linting und Debugging. Meine vollständige Konfiguration liegt öffentlich in
meinen
[Dotfiles](https://github.com/Fabinatix97/dotfiles/tree/main/nvim/.config/nvim){:target="_blank"}.
Sie verändert sich weiterhin regelmäßig. Gerade das ist einer der Gründe,
weshalb ich meine Lua-Kenntnisse ausbauen möchte: Ich will die Konfiguration
nicht nur aus Beispielen zusammensetzen, sondern besser verstehen und gezielter
an meinen Workflow anpassen können.

## Was ich kenne, aber kaum verwende

Ein Jahr mit Vim reicht problemlos aus, um mehr Funktionen kennenzulernen, als
man anschließend tatsächlich benutzt. Neben Marks und Macros betrifft das bei
mir vor allem Registers außerhalb der System-Zwischenablage. Ich weiß, dass ich
gelöschten oder kopierten Text gezielt in verschiedenen Registern ablegen und
später wieder abrufen kann. In der Praxis verwende ich meistens trotzdem den
einfachsten Weg.

Auch Folds mit `zf`, `zo` und `zc` habe ich ausprobiert, aber noch nicht in
meinen Alltag integriert. Dasselbe gilt für die eingebaute
Insert-Mode-Completion über `Ctrl-x`, Abbreviations mit `:ab`, die
Rechtschreibprüfung über `:setlocal spell` und die Command-History mit
`Ctrl-f`. All diese Funktionen sind nützlich. Bisher sind die Situationen, in
denen ich an sie denke, allerdings seltener als die Situationen, in denen ich
sie gebrauchen könnte.

Außerdem begegnet mir in Videos regelmäßig `:norm`. Damit lässt sich ein
Normal-Mode-Befehl auf einen ganzen Zeilenbereich anwenden. Das klingt genau
nach einer Funktion, die ich sehr nützlich finden werde, sobald ich mich
endlich ernsthaft damit beschäftige. Ähnlich sieht es mit dem gezielten
Verschieben und Skalieren von Splits aus: Ich weiß, dass es geht, greife aber
noch nicht selbstverständlich zu den passenden Befehlen.

In einem Jahr kann ich diesen Artikel erneut lesen und prüfen, was davon
inzwischen sitzt. Vielleicht verwende ich dann Marks täglich, erledige
Änderungen mit `:norm`, die ich heute noch einzeln vornehme, und schüttele über
`0i` den Kopf. Vielleicht hat sich auch kaum etwas verändert und ich arbeite
weiterhin mit denselben zwanzig Befehlen.

Beides wäre in Ordnung. Vim zu lernen bedeutet für mich nicht, irgendwann
jeden Befehl auswendig zu kennen. Es bedeutet, den eigenen Werkzeugkasten nach
und nach zu erweitern – und gelegentlich festzustellen, dass eine Funktion,
die man seit Monaten kennt, plötzlich im Muskelgedächtnis angekommen ist.
