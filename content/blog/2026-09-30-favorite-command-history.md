---
title: 'Wie du nie wieder einen nützlichen Befehl vergisst'
date: '2026-09-30'
status: 'published'
category: 'Essay'
tags:
  - 'bash'
  - 'shell'
  - 'software'
  - 'produktivitaet'
  - 'tools'
  - 'mastery'
coverImage: '/img/blog/fzf-favorites.jpeg'
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
unscharf (_fuzzy_) an den gesuchten Befehl erinnerst.

Es gibt unzählige solcher Command Line Fuzzy Finder. Ich selbst nutze ein Tool
namens `fzf` und kann dieses nur wärmstens empfehlen. In den meisten
Linux-Distributionen ist `fzf` über den jeweiligen Paketmanager (`apt`, `dnf`,
etc.) verfügbar. Um es auf Windows/Mac zum Laufen zu bekommen oder die Binary
selber zu bauen, verweise ich an der Stelle auf die [umfangreiche
Installationsanleitung](https://github.com/junegunn/fzf#installation).

Sobald `fzf` erfolgreich installiert wurde, gilt es nur noch, das Tool in die
Shell zu integrieren. Im Falle der [GNU
Bash](https://www.gnu.org/software/bash/) muss einfach nur folgende Zeile an
den Inhalt deiner `~/.bashrc` angefügt werden:

```bash
eval "$(fzf --bash)"
```

Nachdem du deine Shell neu geladen hast (z. B. über `source ~/.bashrc`) sollte
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
Lesezeichen-Speicher fungieren. Ich nenne sie sinngemäß `~/.bash_favorites`.
Immer wenn dir ein Befehl begegnet, von dem du denkst, dass er in Zukunft
nochmal nützlich sein könnte, schreibst du ihn in diese Datei. Das muss nicht
immer sofort sein. Oft erkennt man erst ein paar Tage später, dass ein
bestimmter Befehl nützlich war. Sofern deine History groß genug eingestellt
ist, solltest du den Befehl schnell finden. Zum Testen schreiben wir erstmal
folgendes in die Datei:

```bash
# Rekursiv nach Warnungen und Fehlern suchen und dabei Git-Verzeichnisse ignorieren
grep -RInE --exclude-dir=.git 'ERROR|WARN' .
```

Es empfiehlt sich, oberhalb des Befehls einen kurzen Kommentar zu schreiben,
welcher den Befehl beschreibt. Bei einem Befehl wie diesem ist das besonders
hilfreich: Er durchsucht das aktuelle Verzeichnis rekursiv nach `ERROR` oder
`WARN`, ignoriert dabei `.git`-Verzeichnisse und zeigt zusätzlich Dateinamen
und Zeilennummern an. So erschließt sich auch später noch, welche Aufgabe der
Befehl löst und warum die einzelnen Optionen darin stehen.

## History und Favoriten vereinen

Nun ist es an der Zeit, die von dir kurierten, nützlichen Befehle schnell
erreichbar zu machen. Hierfür müssen wir folgendes unterhalb des ersten
`eval`-Statements in der `~/.bashrc` einfügen:

```bash
__fzf_history_with_favorites__() {
    local selected

    selected=$(
        {
            history | tac | sed -E 's/^ +[0-9]+ +//'
            grep -vE '^[[:space:]]*(#|$)' "$HOME/.bash_favorites" 2>/dev/null
        } |
            awk '!seen[$0]++' |
            fzf --no-preview --query "$READLINE_LINE"
    ) || return

    READLINE_LINE=$selected
    READLINE_POINT=${#READLINE_LINE}
}

bind -x '"\C-r": __fzf_history_with_favorites__'
```

Die Funktion `__fzf_history_with_favorites__` führt deine `history` mit deinen
Einträgen aus `~/.bash_favorites` zusammen. Dabei werden leere Zeilen und
Kommentare aus der Favoriten-Datei entfernt sowie doppelte Einträge aus beiden
Quellen zusammengeführt. Anschließend wird die Liste an `fzf` übergeben. Über
die Tastenkombination Ctrl + r kannst du ab sofort deine History inklusive
Favoriten per Fuzzy Finder durchsuchen (Sourcen nicht vergessen). Du solltest
jetzt den `grep`-Befehl aus unserem Beispiel in den `fzf`-Vorschlägen
wiederfinden.

## History richtig einstellen

Bevor ich es vergesse: prüfe mal, wie deine History eingestellt ist. Oft wird
sie standardmäßig auf 1000 oder gar 500 Einträge begrenzt. In den Anfängen von
Linux war Speicher oft begrenzt, weshalb man die Größe der Command History
ebenfalls möglichst gering gehalten hat. Heutzutage ist Speicher kein
limitierender Faktor mehr. Ich habe meine History wie folgt eingestellt:

```bash
HISTCONTROL=erasedups
HISTFILESIZE=5000
HISTSIZE=5000
```

Die Einstellung `erasedups` sorgt dafür, dass Befehle, die bereits in deiner
History enthalten sind, gar nicht erst gespeichert werden.

## Über Git-Repo persistieren

Vielleicht fragst du dich jetzt: Wieso erhöhen wir das History-Limit nicht
einfach auf eine Million? Nun ja, der Hauptgrund ist, dass deine History höchst
fragil ist. Wenn dein Betriebssystem auf einmal schlapp macht und all deine
Dateien unzugänglich oder gelöscht sind, ist auch deine History meist im Eimer.
Betrachte die Command History eher wie deinen Suchverlauf im Browser. Dieser
wird ja hin und wieder auch mal geleert.

Damit dir dasselbe nicht mit deinen Befehlsfavoriten passiert, kannst du sie
zunächst mittels eines Git-Repositorys versionieren und über Tools wie [GNU
Stow](https://www.gnu.org/software/stow/) symlinken. Das funktioniert dann z.
B. so:

```bash
# Aufsetzen des Git Repos
mkdir -p ~/personal_setup/bash_favorites
cd ~/personal_setup
git init -b main

# Verschieben der bereits erstellten Favoriten-Datei in das richtige Verzeichnis
mv ~/.bash_favorites ~/personal_setup/bash_favorites/

# Favoriten versionieren
git add bash_favorites/.bash_favorites
git commit -m "Add bash favorites"

# Jetzt werden die Favoriten in dein Home-Verzeichnis gesymlinked
stow bash_favorites
```

Anschließend kannst du das Repo über eine Git-Hosting-Plattform deiner Wahl
persistieren (zum Beispiel mit `git remote add origin ...` und `git push -u
origin main`). Je nach dem, wie sensibel die Befehle in deiner
`~/.bash_favorites` sind, solltest du ein privates Repository verwenden: Auch
Shell-Befehle können Passwörter, Tokens oder andere vertrauliche Informationen
enthalten.

## tl;dr

Mit `fzf` wird deine Shell-History zu einer komfortablen, durchsuchbaren
Befehlssammlung. Besonders hilfreiche Befehle kannst du zusätzlich mit kurzen
Kommentaren in `~/.bash_favorites` festhalten und gemeinsam mit deiner History
über `Ctrl + r` wiederfinden. Ein großzügiges History-Limit verhindert, dass
Befehle zu schnell verschwinden, während ein Git-Repository deine Favoriten
auch über einen Systemwechsel oder Datenverlust hinaus bewahrt. So entsteht mit
wenig Aufwand ein persönliches, dauerhaft verfügbares Nachschlagewerk für die
Kommandozeile.
