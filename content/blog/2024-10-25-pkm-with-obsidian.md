---
title: "The Power of Simplicity: Ein minimalistischer Ansatz für digitale Notizen"
date: "2024-10-25"
categories: 
  - "essay"
tags: 
  - "bottom-up"
  - "markdown"
  - "minimalismus"
  - "notiz-app"
  - "obsidian"
  - "pkm"
coverImage: "desk-setup-comparison.jpg"
---

Schreibst du dir regelmäßig Sachen auf? Gedanken, Ideen oder vielleicht etwas Gelerntes, das du nicht vergessen möchtest? Falls ja, kennst du sicher das folgende Problem: Notizen verschwinden in endlosen Verzeichnissen, sind schwer wiederzufinden oder verlieren durch unübersichtliche Strukturen an Wert. Damit bist du nicht alleine: Untersuchungen von Microsoft zeigen, dass der durchschnittliche Angestellte 76 Stunden pro Jahr mit der Suche nach verschollenen Notizen oder Dateien verbringt[1](#eb733a3b-9ed6-4f2f-b68f-c96960a13b95). Im Privatleben ergeht es den meisten von uns ähnlich. Nicht verwunderlich also, dass das Thema _Personal Knowledge Management_ - kurz PKM - immer größere Bekanntheit erlangt. Mittlerweile gibt es unzählige Werkzeuge zum Schreiben und Organisieren von Notizen. Keines davon hat meine Art des Notierens jedoch so nachhaltig geprägt wie Obsidian.

In diesem Artikel möchte ich dir zeigen, wie Obsidian meine Herangehensweise an das Schreiben von Notizen radikal verändert hat und warum ich überzeugt bin, dass diese Art des Notierens auch in Zukunft bestehen wird.

<!--more-->

## PK.. was?

Vielleicht fragst du dich, was es mit PKM (Personal Knowledge Management) auf sich hat. Beim PKM geht es um den bewussten Umgang mit Informationen, die uns im Alltag begegnen: Bücher, Artikel, Gespräche oder Gedanken. Ziel ist es, dieses Wissen so zu strukturieren, dass es nicht nur leicht zugänglich, sondern auch nützlich ist. Digitale Tools wie Notiz-Apps oder Wissensdatenbanken spielen hierbei eine große Rolle, aber noch entscheidender ist der Kerngedanke hinter PKM: Es geht darum, aktiv und systematisch Informationen zu erfassen, zu verarbeiten und zu verknüpfen, um ein persönliches Wissensnetzwerk zu schaffen.

Manche bezeichnen PKM auch als zweites Gehirn[2](#730bd8d0-22c1-4734-b85d-878e9e6ca207), da unser biologisches Gehirn zwar hervorragend im kreativen Denken, jedoch weniger effektiv im Speichern bzw. Abrufen von Informationen ist. Ein PKM-System kann daher als Erweiterung unserer kognitiven Fähigkeiten dienen, indem es uns hilft, Wissen zu organisieren und zugänglich zu machen, sodass wir es effektiv nutzen können.

.plant-div { /\*background-image: linear-gradient(#D4E2E5, #E4F2D7);\*/ border-radius: 5px; display: flex; align-items: center; justify-content: center; } <div></div> .plant-p { font-size: clamp(40px, 10vw, 100px); color: #BA7B72; margin: 5px; white-space: nowrap; /\* Zeilenumbruch verhindern \*/ } <div></div> .neel-dark-theme .plant-div { background-image: none; /\*background-image: linear-gradient(#2E4043, #425130);\*/ }

🌱→🪴→🌳

Doch Wissen ist keine statische Ressource, sondern wächst und verändert sich im Laufe der Zeit. In der PKM-Bubble spricht man daher auch vom Konzept des digitalen Gartens. Notizen (und das darin enthaltene Wissen) sind wie Pflanzen. Sie werden durch einen Gedanken gesät und benötigen Zeit und Pflege, um zu wachsen und sich zu entwickeln. Wie im Gartenbau ist nicht jede Idee von Anfang an perfekt oder vollständig. Viele Notizen sind halbfertige Gedanken, die im Laufe der Zeit reifen und sich weiterentwickeln. Dieser Prozess des kontinuierlichen Lernens und Anpassens macht den digitalen Garten zu einem lebendigen Organismus, der Kreativität und Exploration fördert. Er wächst mit dir.

Aber wie lässt sich dieses Konzept konkret umsetzen? Genau hier setzt Obsidian an.

## Obsidian

Obsidian ist ein noch recht junger Player auf dem Markt für Notizapps. Inspiriert durch das gleichnamige vulkanische Gesteinsglas, das in der Steinzeit als Material für Werkzeuge und Waffen geschätzt wurde, erhebt Obsidian den Anspruch, ein langlebiges und effektives Werkzeug für das Management von Wissen und Ideen zu sein. Die App hat sich seit ihrer Erscheinung im Jahr 2020 schnell einen Namen gemacht und wird von vielen[3](#f47f10a6-951a-43c4-a8f5-83670e0d53ff) als heiliger Gral des PKM angesehen. Doch inwiefern hebt sich Obsidian von Evernote & Co. ab?

Nüchtern betrachtet ist Obsidian einfach nur ein Markdown-Editor. Notizen werden in Obsidian nämlich im Markdown-Format geschrieben (mehr dazu [gleich](#markdown-magic)). Zudem bietet das Programm die Möglichkeit, Notizen miteinander zu verlinken und deren Beziehungen zueinander in einer interaktiven Graph-Ansicht zu visualisieren. Daneben gibt es jede Menge Plugins (sowohl von Obsidian selbst als auch von der Community), mit denen sich die Anwendung ganz an die eigenen Vorlieben anpassen lässt. Abgesehen davon ist die Software für den persönlichen Gebrauch völlig kostenlos und schnell installiert. Kein Account, keine Cloud, keine umständliche Einrichtung.

<figure>

![](/img/blog/obsidian-vault.png)

<figcaption>

Obsidians Benutzeroberfläche besticht durch minimalistisches Design und Fokus auf das Wesentliche. Links: ein Dateibrowser, Mittig: eine gerenderte Markdown-Notiz, Rechts: die Graph-Ansicht. Auch eine mobile Version für iOS und Android gibt es. _Foto von [Obsidian](https://obsidian.md/)_

</figcaption>

</figure>

Obsidian hat sich dem Grundsatz verschrieben, dass sich Tools an die Denkweise jedes Einzelnen anpassen sollten, nicht umgekehrt[4](#4105baeb-88e0-4438-8715-1c66f12fdcb6). Doch vor kurzem bin ich zu dem Schluss gekommen, dass dieses noble Manifest nicht ganz der Wahrheit entspricht. Obsidian hat _meine_ Denkweise angepasst. Und ich will dir zeigen wieso!

## Markdown Magic

Markdown wurde 2004 von John Gruber entwickelt, um eine leicht lesbare und einfach zu schreibende Auszeichnungssprache zu schaffen, die in HTML konvertierbar ist. Ziel war es, auch technisch weniger versierten Nutzern das Erstellen formatierter Inhalte für Webseiten zu ermöglichen.

Das folgende...

```
# Mein Artikel

Dies ist ein einfacher Absatz, der erklärt, was Markdown ist.

## Vorteile von Markdown

- einfach zu lesen
- leicht zu schreiben
- in HTML umwandelbar

[Mehr erfahren](https://www.example.com)
```

... entspricht demselben wie das hier ...

```
<h1>Mein Artikel</h1>

<p>Dies ist ein einfacher Absatz, der erklärt, was Markdown ist.</p>

<h2>Vorteile von Markdown</h2>

<ul>
    <li>einfach zu lesen</li>
    <li>leicht zu schreiben</li>
    <li>in HTML umwandelbar</li>
</ul>

<a href="https://www.example.com">Mehr erfahren</a>
```

... und wird schließlich wie folgt gerendert ...

.custom-div { background-color: #F5F5F5; color: #333333; margin-bottom: 40px; padding: 9.5px; border: 1px solid #ccc; border-radius: 4px; } <div></div> .neel-dark-theme .custom-div { background-color: #19191C; color: #E8EAED;&lt;br>}

# Mein Artikel

Dies ist ein einfacher Absatz, der erklärt, was Markdown ist.

## Vorteile von Markdown

- einfach zu lesen
- leicht zu schreiben
- in HTML umwandelbar

[Mehr erfahren](https://www.example.com)

Die minimalistische und einfach zu verstehende Syntax[5](#75135e05-79e5-4362-ab09-6a7e4eb4cb3b) von Markdown ist jedoch nicht nur für Blogger und HTML-Phobiker attraktiv, sondern eignet sich auch hervorragend als Grundlage für Notizen. Gerade weil Markdown so minimalistisch ist, sorgt es dafür, dass man sich voll und ganz auf den Inhalt konzentrieren kann.

Nun könnte man annehmen, dass die Limitationen hinsichtlich Layout und Formatierung die Kreativität einschränke. Ich behaupte: es ist genau andersherum! Einschränkungen führen oft zu originelleren Lösungen, da sie das Gehirn dazu zwingen, innerhalb klarer Grenzen kreative Wege zu finden. Wenn ein Künstler mit nur einem einzigen Bleistift anstelle eines ganzen Farbsortiments arbeitet, ist er gezwungen, durch Schattierungen und Linienführung besondere Effekte zu erzielen, was zu beeindruckenderen Ergebnissen führen kann, als wenn er unbegrenzt viele Materialien zur Verfügung hätte.

Mir persönlich hilft Markdown auch dabei, im Flow[6](#5d0c61f4-c36e-4910-a3f5-0bd0a0d862be) zu bleiben oder gar erst in diesen zu kommen. Anstatt ständig durch Kontextmenüs zu navigieren, Farben auszuwählen oder sich mit verschiedenen Formatierungen auseinanderzusetzen, ermöglicht Markdown, sich komplett auf das Schreiben und Denken zu konzentrieren. Man weiß zu jeder Zeit, ob man sich mit seinem Cursor noch innerhalb eines fettgedruckten Abschnitts befindet oder diesen schon verlassen hat - etwas, was man von den heutigen WYSIWYG-Editoren nicht immer behaupten kann[7](#9cb13bec-e7be-40a7-8685-4512ecf1fa0c). Es lässt sich schwer beschreiben, aber dadurch, dass es so wenig Formatierungsmöglichkeiten gibt und diese intuitiv und simpel sind (z. B. eine Überschrift durch `#` oder Listenpunkte durch `-`), wird der Denkfluss kaum gestört.

<figure>

![](/img/blog/keyboard-mind-extension.jpg)

<figcaption>

Wenn man im Markdown-Flow ist, fühlt es sich an, als würde man seine Gedanken direkt auf den Bildschirm übertragen

</figcaption>

</figure>

Obsidian setzt dem Ganzen die Krone auf. Mit der Live-Vorschau (WYSIWYG, aber viel besser) und den gut durchdachten Tastenkombinationen, wie dem Multi-Cursor oder dem Verschieben ganzer Textblöcke, wird Markdown zu einem wahren Schreibvergnügen. Die Tastatur wird so zur natürlichen Erweiterung des eigenen Denkens. Fast so, als wäre man Albus Dumbledore und würde die eigenen Gedanken per Zauberstab direkt in das Denkarium ablegen - Markdown Magic.

## Organisches Wachstum

Früher habe ich meine Notizen stets in Ordnern abgelegt. Um genau zu sein, habe ich zuerst einen oder mehrere (Unter-)Ordner angelegt, ehe ich mit dem Anfertigen von Notizen begonnen habe. Das Bedürfnis, Dinge in bestimmten Verzeichnissen abzulegen, um sie dann vermeintlich leichter wiederzufinden, steckt in fast jedem von uns. Schon im Kindergarten lernen wir, Dinge zu sortieren und zu kategorisieren – sei es durch Farben, Formen oder Themen. Diese frühen Erfahrungen prägen unsere Herangehensweise an Organisation und Struktur im späteren Leben. Und an Ordnung und Struktur ist per se auch nichts verkehrt. Doch wenn es um die Organisation von Notizen geht, ist eine top-down-Herangehensweise (erst Ordner erstellen und dann Notizen anfertigen) meines Erachtens nicht optimal.

Stell dir vor, du hast über das Jahr hinweg eine Reihe unterschiedlichster Bücher gelesen und dir Notizen dazu angefertigt. Am Jahresende möchtest du die Notizen an einem zentralen Ort sammeln und organisieren. Das für uns natürlichste wäre nun, diese Notizen in verschiedene Ordner zu packen, z. B. basierend auf den Genres, Themen oder Autoren. Vielleicht legst du stattdessen auch einen Ordner für Romane, einen für Sachbücher, einen für Biografien und so weiter an. Innerhalb dieser Ordner könntest du dann noch weitere Unterordner erstellen, um die Notizen nach spezifischen Themen oder Kategorien zu strukturieren.

![](/img/blog/massive-wall-filled-with-folders.jpg)

Das mag anfangs noch ganz gut klappen, jedoch wirst du irgendwann an eine Grenze stoßen. Spätestens wenn es dich mehr Zeit kostet, die Notiz dem passenden Ordner bzw. Unterordner zuzuordnen, als sie zu schreiben, wird die Ordnersystematik zur Bremse für deine Kreativität und Produktivität. Wenn du später eine bestimmte Notiz suchen möchtest, wirst du dich durch unzählige Ordner und Unterordner klicken müssen, ohne eine Garantie dafür zu haben, dass du sie auch tatsächlich findest.

Außerdem wirst du mit der Zeit feststellen, dass manche Notizen mehrere Themen betreffen und je nach Blickwinkel nicht so leicht in einen einzigen Ordner passen. Die starre Struktur des Ordnersystems zwingt dich dazu, deine Gedanken in vorgegebene Kategorien zu pressen, anstatt sie frei fließen zu lassen. Dadurch verlierst du wertvolle Verbindungen zwischen den einzelnen Notizen und schränkst deine Fähigkeit ein, neue Erkenntnisse zu gewinnen.

Wäre es nicht besser, die Themen und Kategorien _natürlich_ entstehen zu lassen? Beim bottom-up-Ansatz startest du zunächst vollkommen ohne Struktur. Wenn eine kritische Masse an Notizen entstanden ist oder du das Bedürfnis verspürst, ein wenig Struktur in deine Notizen zu bringen, beginnst du damit, deine Notizen miteinander zu vergleichen und in Verbindung zu bringen[8](#79c7217e-b90a-4de1-8484-3b81a036a3ac). In Tools wie Obsidian ist es möglich, diese Verbindungen direkt im Markdown-Text zu erstellen und in einem Graphen zu betrachten. Anhand des Graphen wirst du feststellen, dass plötzlich Cluster entstehen, also Gruppen von eng miteinander verbundenen Notizen (vgl. Animation unten). Diese Cluster stehen sozusagen für Ordner, jedoch mit dem entscheidenden Vorteil, dass sie überlappen können und nicht so trennscharf sind. Diese losen Assoziationen werden der Art, wie unser eigenes Gehirn Informationen speichert und miteinander verknüpft, deutlich gerechter.

<figure>

<figcaption>

Entwicklung meines eigenen Notizbestands in Obsidian über die Zeit. Die Punkte (Knoten) stellen Notizen dar, die Striche (Kanten) stellen Verbindungen zwischen Notizen dar. Je größer ein Knoten, desto mehr Verlinkungen weist die Notiz auf. Zu Beginn gab es viele alleinstehende Notizen (Waisen), die jedoch nach und nach miteinander zu einem großen Wissensnetz verbunden wurden.

</figcaption>



</figure>

Ein weiterer Vorteil des bottom-up-Ansatzes ist die verbesserte Auffindbarkeit von Notizen. Bei top-down musst du stets den gesamten Pfad von der Wurzel bis zur gesuchten Information kennen und durchlaufen. Eine bottom-up-Struktur eröffnet dir hingegen mehrere Zugangswege zur gesuchten Information. Anstatt dich zu fragen, "In welchem Ordner habe ich diese Notiz abgelegt?", fragst du dich bei bottom-up zum Beispiel, "Mit welchen anderen Notizen oder Themen hat diese Notiz zu tun?". Das funktioniert natürlich nur, sofern du deine Notizen gut miteinander verknüpft und/oder mit Tags versehen hast. Zwar bedarf es anfangs etwas Umgewöhnung, aber du wirst schnell feststellen, wie viel intuitiver (und spaßiger) es ist, sich assoziativ durch die eigenen Inhalte zu bewegen. Das gleicht dann fast dem [Wikipedia-Spiel](https://de.wikipedia.org/wiki/Wikipedia:Spiele/Wikirace), bei dem man von einem beliebigen Artikel zu einem festgelegten Artikel navigiert, indem man ausschließlich Wikilinks nutzt - nur eben mit dem Unterschied, dass es sich um dein ganz persönliches Wikipedia handelt.

## Notizen für die Ewigkeit

Neben dem Verzicht auf starre Verzeichnisstrukturen hat mir Obsidian auch klar gemacht, wie wichtig es ist, die eigenen Notizen physisch zu besitzen – soweit das Wort _physisch_ im Kontext _digitaler_ Notizen Sinn macht. Da die Notizen als Markdown-Dateien auf meinem Computer liegen, habe ich die volle Kontrolle. Ich entscheide, wie und wo meine Notizen gespeichert werden, und ich kann jederzeit auf sie zugreifen, auch ohne Internetverbindung. Natürlich trage ich auch die Verantwortung, regelmäßige Back-ups zu machen, um den Verlust meiner Daten zu verhindern.

Ein wahres PKM-System sollte nicht an den Lebenszyklus einer Notizapp gebunden sein. Es soll dir die Freiheit geben, deine Notizen langfristig und unabhängig zu verwalten. Besonders in Zeiten, in denen viele Tools proprietäre Datenformate[9](#91045dcb-38a8-4d27-9628-853b50344c8d) verwenden oder auf Cloud-Dienste angewiesen sind, ist es beruhigend zu wissen, dass ich meine Notizen in einem offenen, zukunftssicheren Dateiformat besitze. Das vermeidet nicht nur Vendor-Lock-in, sondern sorgt auch dafür, dass ich meine Notizen auch in Jahren noch mit minimalen Mitteln lesen und bearbeiten kann.

<figure>

![](/img/blog/old-ibm-pc.jpg)

<figcaption>

Wenn du sicherstellen möchtest, dass deine Notizen auch noch im Jahr 2060 oder 2160 lesbar sind, ist es ratsam, sie so zu speichern, dass sie auch auf einem Computer aus den 1960er Jahren gelesen werden können.[10](#34b82e0d-130f-47c2-ac33-a7597123c620)

</figcaption>

</figure>

## tl;dr

Obsidian hat mir gezeigt, wie kraftvoll ein minimalistischer Ansatz für das Notizenmachen sein kann. Die Kombination aus Markdown, Verlinkungen und einer dynamischen bottom-up-Struktur ermöglicht es, ein persönliches Wissensnetzwerk aufzubauen, das mit mir wächst und sich ständig weiterentwickelt. Das Schöne an diesem Ansatz ist, dass er nicht an ein bestimmtes Tool gebunden ist. Egal ob ich morgen ein anderes Notizprogramm verwende oder meine Notizen in einem einfachen Texteditor bearbeite - die zugrundeliegenden Prinzipien sowie die Markdown-Dateien an sich bleiben erhalten. In diesem Sinne: Danke, Obsidian!

Neugierig geworden? Auch wenn es in diesem Artikel natürlich um allgemeine PKM-Prinzipien ging, kann ich dir nur wärmstens empfehlen, Obsidian einfach mal auszuprobieren. Ich bin mir sicher, es wird deine Perspektive auf das Notizenmachen und die Organisation von Wissen nachhaltig verändern.

 [![](/img/blog/obsidian-logo-gradient.png) Hier geht's zu Obsidian](https://obsidian.md/)

* * *

## Fußnoten