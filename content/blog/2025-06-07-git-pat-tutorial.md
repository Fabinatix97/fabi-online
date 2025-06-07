---
title: 'Sichere Authentifizierung mit Git Access Tokens: Ein Praxisguide'
date: '2025-06-07'
status: 'published'
category: 'Tutorial'
tags:
  - 'git'
  - 'credentials'
  - 'access-token'
  - 'authentifizierung'
  - 'sicherheit'
  - 'security'
  - 'development'
  - 'best-practice'
coverImage: '/img/blog/git-credential-manager.jpg'
---

Access Token sind für viele Entwickler ein leidiges Thema. Oft werden sie als notwendiges Übel betrachtet – ein weiterer Schritt im Workflow, der Zeit kostet und bei falscher Handhabung schnell zu Sicherheitsproblemen führen kann. Trotzdem sind sie heute für den sicheren Zugriff auf Git-Repositories und APIs unerlässlich – sie sind die sicherere, flexiblere Alternative zu Passwörtern.

Die gute Nachricht: Es geht auch einfach! In diesem Guide zeige ich dir, wie du Git Personal Access Tokens korrekt einrichtest und verwaltest – sicher, effizient und ohne Kopfzerbrechen.

## Erstellung eines Tokens

Dieser Guide beschränkt sich auf GitLab und GitHub - die populärsten Git-Hosting-Plattformen. Über beide Plattformen können Personal Access Token (PAT) schnell und unkompliziert generiert werden.

> Falls du bereits weißt, wie man PATs generiert, kannst du diesen Abschnitt einfach überspringen.

::HeadingWithIcon{icon="mdi:gitlab" level="3"}
GitLab
::

1. Klicke auf dein Profilbild und wähle die Option **Edit profile**.
2. Klicke in der linken Seitenleiste auf **Access tokens**.
3. Klicke auf **Add new token**, um einen neuen Token zu erstellen.
4. Neben **Token name**, **Token description** und **Expiration date** ist hier vor allem das Auswählen der **Scopes** wichtig (mehr dazu [hier](https://docs.gitlab.com/user/profile/personal_access_tokens/#personal-access-token-scopes)). Wähle hier nur das aus, was du wirklich benötigst - für die meisten dürfte `write_repository` ausreichen.
5. Klicke abschließend auf **Create personal access token** und speichere den Token an einem sicheren Ort (z. B. in einem Passwort-Manager).

Für detailliertere Informationen empfehle ich dir [diese Seite](https://docs.gitlab.com/user/profile/personal_access_tokens/).

::HeadingWithIcon{icon="mdi:github" level="3"}
GitHub
::

1. Klicke auf dein Profilbild und wähle die Option **Settings**.
2. Klicke in der linken Seitenleiste auf **Developer settings**.
3. Klicke in der linken Seitenleiste auf **Personal access tokens**. Du hast die Wahl zwischen einem **Fine-grained token** und einem **Classic token**. GitHub empfiehlt, wann immer möglich, **Fine-grained token** zu verwenden, daher konzentrieren wir uns in diesem Guide auf diese Option.
4. **Token name**, **Description**, **Resource owner** und **Expiration** sollte selbsterklärend sein. Unter **Repository access** kann eingestellt werden, auf welche Repositories der Token zugreifen kann. Wähle hier nur das aus, was du wirklich benötigst. Ich habe beispielsweise für jedes Repository einen eigenen Token angelegt - das entspräche der Option **Only select repositories**.
5. Unter **Permissions** können schließlich die *eigentlichen* Zugriffsrechte konfiguriert werden. Auch hier gilt das [Least-Privilege-Prinzip](https://en.wikipedia.org/wiki/Principle_of_least_privilege). Für den Wald-und-Wiesen-Entwickler genügen folgende Einstellungen:
    - Repository permissions: Contents → Read and write
    - Repository permissions: Metadata → Read-only

Für detailliertere Informationen empfehle ich dir [diese Seite](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

## Wie es *nicht* gemacht werden sollte

Nachdem die Vorarbeiten erledigt sind, geht es nun darum, den Token in der lokalen Entwicklung einzusetzen. In vielen Dokumentationen und einschlägigen Threads wird meist folgendes empfohlen:

```bash
# Für GitHub
git clone https://<username>:<personal_token>@github.com/USERNAME/REPO.git
```

Oder, falls das Repo schon mittels Username und Passwort geklont wurde und nachträglich ein Token hinzugefügt werden soll:

```bash
# Für GitHub
git remote set-url origin https://<username>:<personal_token>@github.com/USERNAME/REPO.git
```

Beide Methoden haben bei genauerer Betrachtung jedoch einen entscheidenden Nachteil: der Token wird jeweils im Klartext (!) in der lokalen Git-Konfigurationsdatei `.git/config` gespeichert - und taucht damit möglicherweise auch in Shell-Histories oder Skripten auf, wo er leicht ausgelesen werden kann. Falls du deine anderen Passwörter sonst auch in einer einfachen `.txt`-Datei speichern solltest, ist das vielleicht genau die richtige Methode für dich – allen anderen sei dringend davon abgeraten.

Besser wäre es, den Token verschlüsselt zu speichern. Wie gut, dass Git eine eingebaute Möglichkeit bietet, um sogenannte [Credential Helper](https://git-scm.com/doc/credential-helpers) zu nutzen. Diese Helfer speichern Zugangsdaten – darunter auch PATs – sicher im jeweiligen System-Store. Ein weit verbreiteter und empfehlenswerter Credential Helper ist der [Git Credential Manager (GCM)](https://github.com/git-ecosystem/git-credential-manager), der unter Windows bereits mit **Git for Windows** mitgeliefert wird, aber auch auf anderen Betriebssystemen nachinstalliert werden kann. Der GCM speichert Zugangsdaten sicher...

- ... unter Windows im Windows Credential Manager.
- ... unter macOS im macOS Keychain.
- ... unter Linux im jeweiligen Secret Service (z. B. GNOME Keyring).

Ich zeige dir, was es hierbei zu beachten gibt und wie du den GCM bestmöglich für dich einrichtest.

## Windows

Öffne deine Git Bash und führe folgende Befehle nacheinander aus:

```bash
git config --global credential.helper manager
git config --global credential.useHttpPath true
```

**Ein paar Hinweise hierzu:** Falls du eine alte Git-Version nutzt (älter als 2.39), musst du beim ersten Befehl `manger` durch `manager-core` ersetzen. Der zweite Befehl sorgt dafür, dass Git beim Speichern und Abrufen der Zugangsdaten nicht nur die Domain (z. B. GitHub), sondern auch den vollständigen HTTP-Pfad der Repository-URL berücksichtigt. Das ist besonders nützlich, wenn du mehrere Repositories mit ähnlichen URLs auf derselben Domain verwendest, da so die Zugangsdaten korrekt zugeordnet werden.

[//]: # (Screenshot von Windows Anmeldeinformationsverwaltung einfügen)

Das ist alles. Ab sofort erscheint beim ersten Zugriff auf ein Remote-Repository (z. B. bei `git push` oder `git pull`) ein Anmeldefenster des Windows Credential Managers, in dem du deine Zugangsdaten eingeben kannst. Diese werden anschließend sicher gespeichert und bei zukünftigen Zugriffen automatisch verwendet. Du musst deine Anmeldedaten also nur noch einmal eingeben.

## WSL

Für WSL ist die Vorgehensweise recht ähnlich. Der einzige Unterschied besteht darin, dass für den `credential.helper` der vollständige Pfad zur GCM-Executable angegeben werden muss. Öffne deine WSL-Konsole und führe folgende Befehle nacheinander aus:

```bash
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
git config --global credential.useHttpPath true
```

## Linux

Lade zunächst den [aktuellsten Tarball des Git Credential Managers](https://github.com/git-ecosystem/git-credential-manager/releases/latest) aus dem offiziellen GitHub-Repository herunter (z. B. `gcm_linux_amd64.<version>.tar.gz` für 64-Bit-Linux). Öffne anschließend ein Terminal deiner Wahl und führe folgende Befehle nacheinander aus:

```bash
tar -xvf <path-to-tarball> -C /usr/local/bin
git-credential-manager configure
```

Anschließend müssen noch ein paar Konfigurationen vorgenommen werden:

```bash
git config --global credential.credentialStore secretservice
git config --global credential.useHttpPath true
```

**Ein paar Hinweise hierzu:** Der erste Befehl sorgt dafür, dass der GCM die Zugangsdaten im aktiven Secret Service (z. B. GNOME Keyring) speichert. Falls du mehr zum Secret Service und Keyrings erfahren möchtest, kann ich dir [diesen Artikel](https://itnext.io/what-is-linux-keyring-gnome-keyring-secret-service-and-d-bus-349df9411e67) sehr empfehlen. Der zweite Befehl sorgt dafür, dass Git beim Speichern und Abrufen der Zugangsdaten nicht nur die Domain (z. B. GitHub), sondern auch den vollständigen HTTP-Pfad der Repository-URL berücksichtigt. Das ist besonders nützlich, wenn du mehrere Repositories mit ähnlichen URLs auf derselben Domain verwendest, da so die Zugangsdaten korrekt zugeordnet werden.

Das ist alles. Ab sofort erscheint beim ersten Zugriff auf ein Remote-Repository (z. B. bei `git push` oder `git pull`) ein passendes Anmeldefenster, in dem du deinen Personal Access Token eingeben kannst. Dieser wird anschließend sicher gespeichert und bei zukünftigen Zugriffen automatisch verwendet.

<figure>

![](/img/blog/pat-dialogs.png)

<figcaption>

Bei der ersten Aktion, die eine Authentifizierung verlangt, öffnet der Git Credential Manager automatisch ein zum Remote-Repository passendes Login-Dialogfenster, über welches neben Benutzername und Passwort auch ein Access Token eingegeben werden kann.

</figcaption>

</figure>

## Fazit

Wie du siehst, ist der sichere Umgang mit Git Access Tokens alles andere als kompliziert. Durch die Nutzung des Git Credential Managers kannst du deine Tokens sicher speichern und verwalten, ohne dass sie im Klartext in Konfigurationsdateien oder der Shell-History auftauchen. Das spart nicht nur Zeit, sondern erhöht auch maßgeblich die Sicherheit deiner Entwicklungsumgebung.