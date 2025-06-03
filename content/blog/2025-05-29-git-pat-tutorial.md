---
title: 'Sichere Authentifizierung mit Git Access Tokens: Ein Praxisguide'
date: '2025-05-29'
status: 'unpublished'
category: 'Essay'
tags:
  - 'vscode'
  - 'spezialisierung'
  - 'mastery'
  - 'software'
  - 'development'
  - 'tools'
  - 'produktivitaet'
coverImage: '/img/blog/git-credential-manager.jpg'
---

Access Token sind für viele Entwickler ein leidiges Thema. Oft werden sie als notwendiges Übel betrachtet – ein weiterer Schritt im Workflow, der Zeit kostet und bei falscher Handhabung schnell zu Sicherheitsproblemen führen kann. Trotzdem sind sie heute für den sicheren Zugriff auf Git-Repositories und APIs unerlässlich – sie sind die sicherere, flexiblere Alternative zu Passwörtern.

Die gute Nachricht: Es geht auch einfach! In diesem Guide zeige ich dir, wie du Git Personal Access Tokens korrekt einrichtes t und verwaltest – sicher, effizient und ohne Kopfzerbrechen.

## Erstellung eines Tokens

Dieser Guide beschränkt sich auf GitLab und GitHub - die populärsten Git-Hosting-Plattformen. Über beide Plattformen können Personal Access Token (PAT) schnell und unkompliziert generiert werden.

> Falls du bereits weißt, wie man PATs generiert kannst du diesen Abschnitt einfach überspringen.

### 🦊 GitLab

1. Klicke auf dein Profilbild und wähle die Option **Edit profile**.
2. Klicke in der linken Seitenleiste auf **Access tokens**.
3. Klicke auf **Add new token**, um einen neuen Token zu erstellen.
4. Neben **Token name**, **Token description** und **Expiration date** ist hier vor allem das Auswählen der **Scopes** wichtig (mehr dazu [hier](https://docs.gitlab.com/user/profile/personal_access_tokens/#personal-access-token-scopes)). Wähle hier nur das aus, was du wirklich benötigst - für die meisten dürfte `write_repository` ausreichen.
5. Klicke abschließend auf **Create personal access token** und speichere den Token an einem sicheren Ort (z. B. in einem Passwort-Manager).

Für detailliertere Informationen empfehle ich [diese Seite](https://docs.gitlab.com/user/profile/personal_access_tokens/).

### 🪼 GitHub

1. Klicke auf dein Profilbild und wähle die Option **Settings**.
2. Klicke in der linken Seitenleiste auf **Developer settings**.
3. Klicke in der linken Seitenleiste auf **Personal access tokens**. Du hast die Wahl zwischen einem **Fine-grained token** und einem **Classic token**. GitHub empfiehlt, wann immer möglich, **Fine-grained token** zu verwenden, daher konzentrieren wir uns in diesem Guide auf diese Option.
4. **Token name**, **Description**, **Resource owner** und **Expiration** sollte selbst erklärend sein. Unter **Repository access** kann eingestellt werden, auf welche Repositories der Token zugreifen kann. Wähle hier nur das aus, was du wirklich benötigst. Ich habe beispielsweise für jedes Repository einen eigenen Token angelegt - das entspräche der Option **Only select repositories**.
5. Unter **Permissions** können schließlich die *eigentlichen* Zugriffsrechte konfiguriert werden. Auch hier gilt das Least-Privilege-Prinzip. Für den Wald-und-Wiesen-Entwickler genügen folgende Einstellungen:
    - Repository permissions: Contents → Read and write
    - Repository permissions: Metadata → Read-only

Für detailliertere Informationen empfehle ich [diese Seite](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

## Wie es *nicht* gemacht werden sollte

Nachdem die Vorarbeiten erledigt sind, geht es nun darum, den Token in der lokalen Entwicklung einzusetzen. In vielen Dokumentationen und einschlägigen Threads wird meist folgendes empfohlen:

```js [file.js]{2} meta-info=val
export default () => {
  console.log('Code block')
}
```

Ohne Titel:

```bash
# Für GitHub
git clone https://<username>:<personal_token>@github.com/USERNAME/REPO.git
```

Oder, falls das Repo schon mittels Username und Passwort geklont wurde und nachträglich ein Token hinzugefügt werden soll:

```bash
# Für GitHub
git remote set-url origin https://<username>:<personal_token>@github.com/USERNAME/REPO.git
```

Beide Methoden haben bei genauerer Betrachtung jedoch einen entscheidenden Nachteil: der Token wird jeweils im Klartext (!) in der lokalen Git-Konfigurationsdatei `.git/config` gespeichert - und taucht damit möglicherweise auch in Shell-Historys oder Skripten auf, wo er leicht ausgelesen werden kann. Falls du deine anderen Passwörter sonst auch in einer einfachen txt-Datei speichern solltest, ist das vielleicht genau die richtige Methode für dich – allen anderen sei dringend davon abgeraten.

Besser wäre es, den Token verschlüsselt zu speichern. Wie gut, dass Git eine eingebaute Möglichkeit bietet, um sogenannte Credential Helper zu nutzen. Diese Helfer speichern Zugangsdaten – darunter auch PATs – sicher im jeweiligen System-Store. Ein weit verbreiteter und empfehlenswerter Credential Helper ist der Git Credential Manager (GCM), der unter Windows bereits mit **Git for Windows** mitgeliefert wird, aber auch auf anderen Betriebssystemen nachinstalliert werden kann. Der GCM speichert Zugangsdaten sicher...

- ... unter Windows im Windows Credential Manager
- ... unter macOS im macOS Keychain
- ... unter Linux je nach Konfiguration z. B. mit libsecret oder gnome-keyring

Ich zeige dir, was es hierbei zu beachten gibt und wie du den GCM bestmöglich für dich einrichtest.

## Windows

Öffne deine Git Bash und führe folgende Befehle aus:

```bash
git config --global credential.helper manager
git config --global credential.useHttpPath true
```

Ein paar Hinweise hierzu: Falls du eine alte Git-Version nutzt (älter als 2.39), musst du beim ersten Befehl `manger` durch `manager-core` ersetzen. Der zweite Befehl sorgt dafür, dass Git beim Speichern und Abrufen der Zugangsdaten nicht nur die Domain, sondern auch den vollständigen HTTP-Pfad der Repository-URL berücksichtigt. Das ist besonders nützlich, wenn du mehrere Repositories mit ähnlichen URLs auf derselben Domain verwendest, da so die Zugangsdaten korrekt zugeordnet werden.

[//]: # (Screenshot von Windows Anmeldeinformationsverwaltung einfügen)

Das ist alles. Ab sofort erscheint beim ersten Zugriff auf ein Remote-Repository (z. B. bei `git push` oder `git pull`) ein Anmeldefenster des Windows Credential Managers, in dem du deine Zugangsdaten eingeben kannst. Diese werden anschließend sicher gespeichert und bei zukünftigen Zugriffen automatisch verwendet. Du musst deine Anmeldedaten also nur noch einmal eingeben.

## WSL

Für WSL ist die Vorgehensweise recht ähnlich. Der einzige Unterschied besteht darin, dass für den `credential.helper` der vollständige Pfad zur GCM-Executable angegeben werden muss. Öffne deine WSL-Konsole und führe folgenden Befehl aus:

```bash
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
git config --global credential.useHttpPath true
```

## Linux

