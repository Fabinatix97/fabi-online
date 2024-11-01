---
title: "Center of Pressure, Aerodynamic Center & Co: Schlüsselkonzepte der Aerodynamik"
date: "2023-08-28"
categories: 
  - "aviation-knowledge"
tags: 
  - "aerodynamik"
coverImage: "flow-over-aerofoils.png"
---

# Center of Pressure, Aerodynamic Center & Co: Schlüsselkonzepte der Aerodynamik

In der faszinierenden Welt der Aerodynamik spielen Begriffe wie Druckpunkt, Aerodynamisches Zentrum & Co. eine entscheidende Rolle. Diese Konzepte sind von zentraler Bedeutung, wenn es darum geht, wie sich Flugzeuge und andere Objekte in der Luft bewegen. Da auch ich mich manchmal schwer damit tue, diese Begriffe auseinanderzuhalten, möchte ich diese nun so gut es geht erläutern.

<!--more-->

**1\. Druckpunkt (engl. _Center of Pressure_ – CoP):** Der Druckpunkt ist ein imaginärer Punkt auf einer Tragfläche, an welchem der resultierende Vektor aus Auftrieb und Widerstand wirkt. Imaginär deshalb, weil Auftriebs- und Widerstandskräfte natürlich nicht nur an einem Punkt, sondern über die gesamte Tragfläche verteilt sind.

In gewisser Weise ähnelt der Druckpunkt einer Tragfläche dem Schwerpunkt eines Flugzeugs. Während der Schwerpunkt der Punkt ist, um den die Massenverteilung eines Körpers gleichmäßig ausbalanciert ist, handelt es sich beim Druckmittelpunkt um den Punkt, an dem die Druckschwankungen auf der Oberfläche eines Körpers gleichmäßig ausbalanciert sind.

Doch wozu wird dieser Punkt benötigt? Der Druckpunkt spielt vor allem für die Flugzeugentwicklung eine Rolle. In Kombination mit dem Schwerpunkt wirkt sich der Druckpunkt auf die Längsstabilität und damit auch auf die Manövrierfähigkeit eines Flugzeugs aus.

Der Druckpunkt ist jedoch abgesehen von symmetrischen Tragflächenprofilen nicht an einer festen Stelle verortet, wie etwa der Schwerpunkt (auch dieser ist streng genommen durch den Treibstoffverbrauch während des Fluges nicht vollkommen fix). Vielmehr wandert er in Abhängigkeit vom Anstellwinkel der Tragfläche, welcher die Druckverteilung um das Profil herum beeinflusst (siehe Animation).

<figure>

![](/img/blog/center-of-pressure.gif)

<figcaption>

Eine Erhöhung des Anstellwinkels bewirkt eine Verlagerung der Druckverteilung nach vorne. Damit wandert auch der Druckpunkt (CoP) nach vorne.

</figcaption>

</figure>

Dies macht die Konstruktion von Flugzeugen äußerst kompliziert, weshalb Ingenieure auf ein anderes Konzept namens Aerodynamisches Zentrum zurückgreifen.

**2\. Aerodynamisches Zentrum **(engl. _Aerodynamic Center_)**:** Das aerodynamische Zentrum ist ein fester Punkt auf der Tragfläche (genauer gesagt auch der Profilsehne), welcher von Ingenieuren genutzt wird, um dem Problem der Druckpunktwanderung und damit der weiteren Verkomplizierung Rechnung zu tragen.

Zwar ändert das aerodynamische Zentrum nichts an der Druckverteilung – der Auftrieb wirkt weiterhin am Druckpunkt. Allerdings ist das Drehmoment am aerodynamischen Zentrum stets gleich groß. Drehmoment? Ganz richtig: wenn Auftriebs- und Gewichtskraft nicht am selben Punkt wirken (und das tun sie so gut wie nie), entsteht ein Drehmoment. Dieses wird in der Fachsprache auch _pitching moment_ genannt, da es ein nach oben bzw. nach unten Neigen der Flugzeugnase zur Folge hat.

Hierfür ein weiteres Schaubild zum besseren Verständnis:

<figure>

![](/img/blog/aerodynamic-center.jpg)

<figcaption>

Egal wo der Druckpunkt (CoP) liegt (dieser wird ja vom Anstellwinkel beeinflusst), das Drehmoment (M) bleibt stets konstant.

</figcaption>

</figure>

Mithilfe des aerodynamischen Zentrums, welches typischerweise bei 25 % der Profilsehne liegt, ist es nun also leichter möglich, Aussagen über die Längsstabilität eines Flugzeugs zu treffen. Hierzu muss man noch wissen, dass das Höhenleitwerk eines Flugzeugs (meist) Abtrieb und somit ein hecklastiges Moment erzeugt. Kopflastige Momente sind also zu begrüßen. In Bezug auf den Schwerpunkt (engl. _Center of Gravity_ – CoG) gilt:

<table><tbody><tr><td></td><td><strong>Effekt einer Auftriebszunahme</strong></td><td><strong>Stabilität</strong></td></tr><tr><td>CoG vor AC</td><td>kopflastiges Moment</td><td>stabil</td></tr><tr><td>CoG gleich AC</td><td>kein Moment</td><td>neutral</td></tr><tr><td>CoG hinter AC</td><td>hecklastiges Moment</td><td>instabil</td></tr></tbody></table>

**3\. Neutralpunkt (engl. _Neutral Point_):** Der Neutralpunkt ist im Grunde genommen nur ein Synonym für das aerodynamische Zentrum. In der Fachliteratur wird der Begriff jedoch häufig verwendet, um zwischen Tragfläche und gesamtem Flugzeug zu differenzieren. Während sich das aerodynamische Zentrum lediglich auf die Tragfläche bezieht, berücksichtigt der Neutralpunkt das gesamte Flugzeug.

**4\. Staupunkt (engl. _Stagnation Point_):** Der Staupunkt (nicht zu verwechseln mit dem Druckpunkt) ist der Punkt, an dem die Strömung völlig zur Ruhe kommt und an welchem der Gesamtdruck am höchsten ist. Im Horizontalflug liegt der Staupunkt meist an der Vorderkante der Tragfläche. Verändert sich jedoch der Anstellwinkel, so wandert der Staupunkt – ähnlich wie beim Druckpunkt. Eine Erhöhung des Anstellwinkels nach oben hat zur Folge, dass der Staupunkt an die Unterseite der Tragfläche wandert.

<figure>

![](/img/blog/stagnation-point.gif)

<figcaption>

Eine Erhöhung des Anstellwinkels bewirkt, dass der Staupunkt an die Unterseite der Tragfläche wandert. Dieser Effekt wird sich bei kleinen Flugzeugen häufig zu Nutze gemacht, um Überziehwarnanlagen zu realisieren.

</figcaption>

</figure>

**5\. Umschlagpunkt (engl. Transition Point):** Der Umschlagpunkt ist der Punkt, an dem die Grenzschicht von einer laminaren in eine turbulente Strömung übergeht.

![](/img/blog/stagnation-transition-separation.jpg)

**6\. Ablösungspunkt (engl. Separation Point):** Der Ablösungspunkt ist der Punkt, an dem sich die Grenzschicht ablöst.

([Titelbild](https://commons.wikimedia.org/wiki/File:FlowOverAerofoils_W3C.svg) von [Michael Pätzold](http://www.michael-paetzold.de/) / [Creative Commons BY-SA-3.0 de](https://creativecommons.org/licenses/by-sa/3.0/de/legalcode))
