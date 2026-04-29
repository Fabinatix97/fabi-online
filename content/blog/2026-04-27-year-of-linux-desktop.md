---
title: 'Der Pinguin in der Brandung'
date: '2026-04-29'
status: 'published'
category: 'Essay'
tags:
  - 'desktop'
  - 'linux'
  - 'operating systems'
  - 'windows'
  - 'wsl'
coverImage: '/img/blog/penguin-above-the-sea-of-fog.png'
---

Es ist ziemlich genau ein Jahr her, seitdem ich Linux auf meinen Laptop
installiert habe. Bis dahin war ich ein weitgehend zufriedener Windows-Nutzer.
Klar, unter Windows war nicht alles perfekt, aber es lief stabil und man konnte
so gut wie jedes Programm ohne Probleme nutzen. Warum also der Wechsel?

## Meine Linux-Reise

Es fing alles mit WSL an. WSL steht für _Windows-Subsystem für Linux_ (ich fände
ja _Linux-Subsystem für Windows_ deutlich logischer) und ist eine in Windows
integrierte Linux-Laufzeitumgebung, die es ermöglicht, Linux-Kommandozeilen-Tools
und Anwendungen direkt unter Windows auszuführen, ohne den Overhead einer
klassischen virtuellen Maschine oder eines Dual-Boot-Setups. Während meines
Wirtschaftsinformatik-Studiums, vor allem aber während meiner Arbeit als
Software-Entwickler habe ich die Vorzüge dieser Integration über die Jahre sehr
zu schätzen gelernt. Ich hatte das Beste aus beiden Welten: die umfangreiche
Kompatibilität mit allerlei Desktop-Anwendungen durch Windows einerseits und
die Vorzüge der mächtigen Linux-Kommandozeile durch WSL andererseits.

<figure>

![WSL](/img/blog/wsl.png 'WSL')

<figcaption>

Windows Subsystem für Linux (WSL)

</figcaption>

</figure>

Als ich nach meinem Studium tiefer in die Softwareentwicklung eingestiegen bin,
habe ich mich immer öfter dabei ertappt, dass mein gesamter Workflow – von Git
über VS Code Remote bis zum Docker-Container – fast ausschließlich in der
Linux-Umgebung stattfand. Oft war das Öffnen von WSL das erste, was ich tat,
nachdem ich mich eingeloggt habe. Und so wurde Windows für mich immer mehr zum
Subsystem neben Linux (vielleicht hat Microsoft ja doch recht mit ihrem
WSL-Akronym).

Getrieben durch diese Erkenntnis stellte ich mir die Frage, ob ich Linux nicht
direkt als Betriebssystem nutzen könnte. Du musst wissen: Linux war keineswegs
fremd für mich. Auf meinem ersten PC lief Ubuntu, weil mein Dad damals etwas
mehr Kontrolle darüber haben wollte, was ich anstellte (unter Windows war das
deutlich schwieriger zu regeln). Also beschloss ich kurzerhand, auf meinem
privaten Laptop Windows etwas Speicher wegzunehmen und den frei gewordenen
Platz Ubuntu zukommen zu lassen. Mit diesem Dual-Boot-Setup hatte ich wie schon
zuvor das Beste aus beiden Welten. Außerdem gefiel mir die Vorstellung, dass
mein Surface Laptop von nun an auch eine Linux-Distribution versorgen musste.

Copilot+PC? Nein, danke. Linux+PC? Hell yeah.

## Linux ist erwachsen geworden

Und wieder stellte ich nach einiger Zeit fest, dass ich immer seltener in
Windows bootete. Falls ich doch mal eine Excel-Datei bearbeiten musste, so
nutzte ich einfach die Online-Version im Browser (das geht mittlerweile sogar
ganz ohne Microsoft 365 Abo). Generell wurde mir bewusst, dass sich heutzutage
ohnehin fast alles im Browser abspielt. Gefühlt jede Software ist mittlerweile
eine Webapplikation - selbst Programme, die wie herkömmliche Desktop-Anwendungen
anmuten. So gesehen, tritt das Betriebssystem und etwaige Inkompatibilitäten
immer mehr in den Hintergrund. Solange ich einen halbwegs aktuellen Browser
habe, kann ich den Großteil meines Alltags ungeachtet des Betriebssystems
bewältigen. Darüber hinaus, haben [Flatpak](https://flatpak.org/) & Co. das alte Problem der
"Dependency Hell" elegant gelöst. Da die Anwendungen in einer Art Sandbox
laufen, bringen sie ihre eigenen Bibliotheken einfach mit. Kein Konflikt mehr
mit dem restlichen System, kein Bangen bei Updates – es läuft einfach. Auch
Gaming ist dank Projekten wie Proton und Steam Deck schon lange kein Argument
mehr gegen Linux. Ist das _Jahr des Linux-Desktops_ - der seit Jahrzehnten
bestehende Running Gag in der Tech-Community - also nun endlich doch da?

Für mich persönlich: ja! Ich habe Windows auf meinem Privatgerät mittlerweile
komplett gelöscht und den Schritt bisher keine Sekunde bereut. Auch Ubuntu
gehört der Vergangenheit an. Es musste Platz machen für [Fedora](https://fedoraproject.org/), das für mich
als Entwickler einfach viel mehr Sinn macht (Fedora ist Upstream von Red Hat
Enterprise Linux, also genau die Grundlage, die auf Millionen von
Unternehmensservern läuft – wie cool ist das denn?). In Kombination mit dem
Tiling Window Manager [Hyprland](https://hypr.land/) ist mein Setup sowohl funktional als auch
hübsch anzuschauen. Selbst die GNOME Desktop-Umgebung, mit der Fedora
out-of-the-box kommt, muss sich in meinen Augen keineswegs hinter macOS & Co.
verstecken. Alles wirkt ruhig, aufgeräumt und intuitiv.

<figure>

![GNOME Desktop](/img/blog/gnome-laptop.webp 'GNOME Desktop')

<figcaption>

GNOME Desktop sieht mittlerweiliche ziemlich schick aus, findest du nicht?

</figcaption>

</figure>

## Basar schlägt Kathedrale

Wenn ich heute auf Windows oder macOS schaue, habe ich manchmal das Gefühl, dass
Linux gar nicht viel unternehmen muss, um populärer zu werden. Durch die Flut
an Features, die weniger aus Nutzerbedürfnissen als vielmehr aus strategischem
Druck entstehen, wirken diese Systeme zunehmend wie etwas, das ständig erweitert,
umgebaut und neu positioniert werden muss – oft ohne klaren Mehrwert für die,
die es täglich benutzen. Gerade der aktuelle KI-Hype verstärkt diesen Eindruck.
Neue Assistenten und Funktionen tauchen plötzlich überall auf, nicht unbedingt,
weil sie gebraucht werden, sondern um zu zeigen: Hey, wir können auch KI.

Dabei ist diese Art, Software zu bauen, nichts Neues. In _The Cathedral and the
Bazaar_ beschreibt Raymond diese Methode als "Kathedrale": ein System, das
zentral geplant, von wenigen gesteuert und in großen, bewusst gesetzten
Schritten weiterentwickelt wird. Im Moment kommt es mir so vor, als würden die
Architekten dieser Kathedralen vor lauter Angst, den KI-Anschluss zu verlieren,
wahllos blinkende Leuchtreklamen an ihre gotischen Fassaden schrauben (selbst den
Architekten scheint dies langsam bewusst zu werden, liest man zwischen den
Zeilen dieses [Windows-Insider Blogposts](https://blogs.windows.com/windows-insider/2026/03/20/our-commitment-to-windows-quality/)).

<figure>

![Kathedrale vs. Basar](/img/blog/cathedral-vs-bazaar.jpg 'Kathedrale vs. Basar')

<figcaption>

Kathedrale vs. Basar

</figcaption>

</figure>

Linux dagegen funktioniert wie ein Basar: Viele kleine Beiträge entstehen aus
konkreten Bedürfnissen der Community. Das führt nicht immer zu sofortiger
Perfektion, aber zu stetiger Verbesserung.

> Windows can be a piece of shit sometimes and it's constantly getting worse.
> And Linux can be a piece of shit sometimes and it's constantly getting better.
>
> ~ [The WAN Show March 20, 2026 - 1:06:03](https://www.youtube.com/live/4PKfzGPZ2_A?si=TbButkA_EenGmvj7&t=3963)

Etwas zugespitzt, klar. Aber die Tendenz ist schwer zu übersehen.

## Du hast es selbst in der Hand

Am Ende geht es nicht darum, welches Logo beim Hochfahren deines Rechners
erscheint oder ob du jede Kleinigkeit an deinem System verändern kannst. Es
geht um die Frage, ob dein Computer ein Werkzeug ist, das dir dient, oder eine
Plattform, auf der du lediglich Gast bist.

Windows und macOS fühlen sich zunehmend wie Mietwohnungen an: Man darf dort
wohnen, aber man darf die Wände nicht streichen, und der Vermieter kommt
ungefragt vorbei, um neue Tracking-Sensoren zu installieren oder die Möbel
umzustellen. Linux hingegen ist das Eigenheim. Ja, man muss sich manchmal
selbst um das Dach kümmern, aber am Ende des Tages gehört jede Zeile
Konfiguration dir.

## Der "Just for Fun"-Faktor

Aber weißt du, was der eigentliche Grund ist, warum ich nicht zurückkehre? Es
ist nicht nur die Kontrolle oder die Privatsphäre. Es ist der Spaß.

Linus Torvalds nannte sein Buch über die Entstehung von Linux _Just for Fun_.
Er hat das System nicht gebaut, um eine Weltmacht zu stürzen oder den nächsten
großen Technologiekonzern zu gründen. Er hat es getan, weil er es konnte und
weil es verdammt viel Freude macht, Dinge zu erschaffen, die genau so
funktionieren, wie man es sich vorstellt.

Diesen Geist spüre ich bei Linux an jeder Ecke. Alles lässt sich so
konfigurieren, wie ich es möchte. Der Fantasie sind keine Grenzen gesetzt.
Ich werde dabei nicht angeleitet. Stattdessen werde ich dazu eingeladen, Dinge
selbst herauszufinden und dabei automatisch neues zu lernen. Erinnert mich
irgendwie an ein gutes Zelda-Game, wenn ich so darüber nachdenke. Es scheint
als besäße Linux eine inhärente Gamification. Es kann natürlich auch sein, dass
das nur der Nerd in mir so sieht.

All das macht mich nicht immer produktiver. Aber es macht Spaß! Es ist das
digitale Äquivalent dazu, am Wochenende an einem Oldtimer in der Garage zu
schrauben.

## Ein Plädoyer für die Neugier

Ich möchte niemanden missionieren. Wir alle schweben in unserer ganz eigenen
Tech-Bubble. Wer mit Windows glücklich ist oder wem das Apple Ökosystem den
Alltag erleichtert – go for it! Aber für alle, die das Gefühl haben, die
Kontrolle über ihr wichtigstes Werkzeug schleichend zu verlieren, ist die Zeit
reif für einen Blick über den Tellerrand. Dank Live-USBs war es nie einfacher,
Linux unverbindlich auszuprobieren.

Für mich war der Wechsel ein echtes Aha-Erlebnis. Es war die Rückbesinnung auf
den Grundgedanken, mit dem wir alle mal angefangen haben: Die Freude am
Entdecken.

Der Pinguin mag in der Brandung der großen Tech-Giganten klein wirken, aber er
ist verdammt gut darin, zu schwimmen. Und das Wasser? Das ist herrlich
erfrischend.
