---
title: 'Wie du nie wieder einen nützlichen Befehl vergisst'
date: '2026-09-30'
status: 'unpublished'
category: 'Essay'
tags:
  - 'bash'
  - 'shell'
  - 'software'
  - 'produktivitaet'
  - 'tools'
  - 'mastery'
coverImage: '/img/blog/neovim-home.jpg'
---

Ist es dir auch schonmal so gegangen wie mir? Du hattest irgendwann in der
Vergangenheit ein ganz bestimmtes Problem und weißt noch, dass du es damals
mithilfe eines ganz bestimmten Shell-Befehls lösen konntest? Möglicherweise ein
Befehl, den du dir über einen längeren Trial-and-Error-Prozess mühsam
erarbeitet hast? Du durchstöberst mittels Ctrl + r deine Command History, aber
musst schließlich feststellen, dass der Befehl schon zu weit zurückliegt (über
das History-Limit) oder du gar dein Terminal vor kurzem neu aufsetzen musstest
und damit alle deine alten Befehle futsch sind.

Damit ist jetzt Schluss. Ich möchte dir in diesem Beitrag eine Möglichkeit
zeigen, wie du nie wieder einen nützlichen Befehl verlierst.

## Fuzzy Finder

Doch bevor wir beginnen, empfehle ich dir zunächst, einen sogenannten Fuzzy
Finder für die Befehlszeile zu installieren. Er wird dir die Suche nach deinen
vergangen Befehlen unheimlich erleichtern, vor allem wenn du dich nur noch
unscharf (_fuzzy_) des Befehls erinnerst.

Es gibt unzählige solcher Command Line Fuzzy Finder. Ich selbst nutze ein Tool
namens `fzf` und kann dieses nur wärmstens empfehlen. In den meisten
Linux-Distributionen ist `fzf` über den jeweligen Paketmanager (`apt`, `dnf`, etc.)
verfügbar. Um es auf Windows/Mac zum Laufen zu bekommen oder die Binary selber
zu bauen, verweise ich an der Stelle auf die [umfangreiche
Installationsanleitung](https://github.com/junegunn/fzf#installation).

Sobald `fzf` erfolgreich installiert wurde, gilt es nur noch, das Tool in die
Shell zu integrieren. Für `bash` einfach folgendes in die `~/.bashrc`
schreiben:

```bash
eval "$(fzf --bash)"
```

Nachdem du deine Shell neu geladen hast (z. B. über `source .bashrc`) sollte
`fzf` bereits funktionieren. Prüfe es, indem du Ctrl + r drückst, während sich
der Cursor in der Befehlszeile befindet. Es sollte in etwa so aussehen:

<figure>

![netrw in Action](/img/blog/fzf-initial.jpg 'fzf in Action')

<figcaption>

fzf in Action

</figcaption>

</figure>

## Favoriten speichern

Jetzt legen wir eine neue Datei im Home-Verzeichnis an. Diese soll als eine Art
Lesezeichen-Speicher fungieren. Ich nennen sie `~/.bash_favorites`. Zum Testen
schreiben wir folgendes in die Datei:

```bash
ls -la
```

## History und Favoriten vereinen



## Über dotfiles persistieren


