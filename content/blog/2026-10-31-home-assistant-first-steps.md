---
title: 'Dein Zuhause ist smarter als du denkst'
date: '2026-10-31'
status: 'published'
category: 'Essay'
tags:
  - 'smart-home'
  - 'home-assistant'
  - 'automation'
  - 'zigbee'
  - 'diy'
  - 'raspberrypi'
coverImage: '/img/blog/smart-home-cover.png'
---

Lange dachte ich, dass Smart Home nur etwas für Leute ist, die ein modernes
Eigenheim besitzen, welches bereits beim Bau "smart" gedacht wurde. Ich ging
davon aus, dass die Einrichtung eines solchen Smart Home zudem sehr zeit- und
kostenaufwendig sei und eine Vielzahl an Apps zur Steuerung erfordern würde.
Diese Annahmen waren vermutlich darin begründet, dass ich im Juli 2025 bereits
einen _smarten_ LED-Streifen von Philips für etwa 40 Euro gekauft habe und
diesen nur über die Hue-App bedienen konnte. Für die Integration mit Google
Assistant oder Amazon Alexa hätte ich mir für weitere knapp 45 Euro die Philips
Hue Bridge zulegen müssen. Dafür war ich einfach zu geizig - zum Glück wie sich
später heraus stellen sollte.

Das änderte sich, als ich mich Anfang diesen Monats tiefer mit meiner FRITZ!Box
auseinander gesetzt habe. Ich habe von der Möglichkeit erfahren, sogenannte
DNS-Filter einzurichten, um beispielsweise Werbung zu umgehen [^1]. Während ich
mich damit beschäftigte, fiel mir rein zufällig der Bereich "Smart Home" in der
FRITZ!Box Oberfläche auf [^2]. Dort stieß ich dann ziemlich schnell auf die
Möglichkeit, Zigbee-Geräte anzumelden. Beim Wort "Zigbee" klingelte es bei mir.
Habe ich das nicht schonmal irgendwo gehört? Auf der Stelle kraxelte ich hoch
in unseren Speicher, um mir nochmal die Verpackung des LED-Streifens anzusehen
(ja, ich gehöre der Fraktion der Verpackungsaufheber an). Und da stand es -
weiß auf schwarz: zigbee.

<figure>

![Hue ist Zigbee-kompatibel](/img/blog/hue-zigbee.jpg 'Hue ist Zigbee-kompatibel')

<figcaption>

Hue ist Zigbee-kompatibel!

</figcaption>

</figure>

Keine drei ChatGPT-Prompts später und schon hatte ich die LED-Streifen über die
FRITZ!Box-Oberfläche zu meinem Heimnetzwerk hinzugefügt. Das war ein echtes
Wow-Erlebnis für mich. Mit der FRITZ!App Smart Home konnte ich die LEDs nun
ein- und ausschalten. Zu meiner Überraschung ging das sogar noch deutlich
schneller als bei der Hue-App. Dort musste ich nach Öffnen der App stets
mehrere Sekunden warten, bevor ich die LEDs ansteuern konnte. Bye-bye, Hue-App!

<figure>

![Zigbee über FRITZ!Box](/img/blog/fritzbox-zigbee.png 'Zigbee über FRITZ!Box')

<figcaption>

Zigbee über FRITZ!Box

</figcaption>

</figure>

Schnell fand ich heraus, dass man über die FRITZ!Box auch einfache
Automatisierungen erstellen konnte. Da ich den LED-Streifen an der Hinterkante
meines Schreibtischs angebracht habe, war mein erster Gedanke, diesen ein- bzw.
aus zu schalten, je nachdem ob mein PC an oder aus war. Leider war der
Online-Status eines Heimnetz-Geräts (in dem Fall der Status meines PCs) nicht
als Auslöser für eine Routine auswählbar. Und auch sonst war das Potential für
nützliche Automatismen sehr begrenzt.

Das war aber nicht weiter schlimm. Nach kurzer Recherche stieß ich nämlich auf
Home Assistant [^3]. Und was soll ich sagen... es hat mich umgehauen. Die
Möglichkeiten zur Automatisierung sind schier grenzenlos. Es gab so viel zu
entdecken und auszuprobieren.

Was mich aber am meisten überraschte: Home Assistant hat bereits eine ganze
Menge sogenannter _Integrationen_ selbstständig erkannt (Integrationen sind
Softwarekomponenten, die es Home Assistant ermöglichen, eine Verbindung zu
anderer Software und anderen Plattformen herzustellen [^4]). So hat Home
Assistant beispielsweise über die Integration "Internet Printing Protocol
(IPP)" automatisch meinen Drucker gefunden.

Auch die elektrische Zahnbürste und meine digitale Körperwaage konnte Home
Assistant über entsprechende Integrationen eigenständig auffinden - ohne dass
ich dafür auch nur einen Finger krumm machen musste.

<figure>

![Zahnbürste im Home Assistant](/img/blog/home-assistant-toothbrush.png 'Zahnbürste im Home Assistant')

<figcaption>

Allein meine Zahnbürste verfügt über neun Echtzeit-Sensoren. Von Batteriestand
über Putz-Modus bis hin zu ausgeübtem Druck beim Zähneputzen.

</figcaption>

Und das ist im Prinzip die Haupterkenntnis aus meiner bisherigen Home Assistant
Journey: das eigene Zuhause ist oft smarter als man zunächst denkt. Und dank
Home Assistant erhalte _ich_ die volle Hoheit über _meine_ Geräte - nicht der
Hersteller, für dessen Cloud ich unter Umständen auch noch zahlen muss. Also
worauf wartest du? Schnapp dir ein Raspberry Pi und sei gespannt, was Home
Assistant bei dir so alles findet!

[^1]: Danke an [heise & c't für die
    Inspiration](https://youtu.be/2wV86EHBGpY?si=FGZ7mNsySWbpb7vQ&t=232).
[^2]: Auf deiner FRITZ!Box muss mindestens FRITZ!OS 7.50 oder neuer installiert
    sein, damit Zigbee-Geräte in der Benutzeroberfläche der FRITZ!Box angezeigt
    werden können (vgl.
    [FAQ](https://fritz.com/apps/service/zigbee/4088_Zigbee-FAQ)). Eine
    umfangreiche Liste von FRITZ!Box-Geräten jeweils mit Angabe der aktuellsten
    FRITZ!OS-Version findet man
    [hier](https://fritz.com/pages/status-produktunterstuetzung). Eine Liste
    aller von FRITZ! unterstützter Zigbee-Geräte findet man
    [hier](https://fritz.com/pages/zigbee).
[^3]: [Home Assisant](https://www.home-assistant.io/) gilt heutzutage als _der_
    Standard für lokale, herstellerübergreifende Smart-Home-Automatisierung.
    Zum Einstieg in Home Assistant kann ich dir [dieses
    Video](https://youtu.be/VJqUzFei8-o) nur wärmstens
    empfehlen - es hat mir selbst sehr geholfen.
[^4]: Mehr zu den Konzepten von Home Assistant und der anfangs etwas
    ungewöhnlichen Terminologie findet man
    [hier](https://www.home-assistant.io/getting-started/concepts-terminology).
