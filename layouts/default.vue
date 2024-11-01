<template>
    <div class="layout-container">
        <nuxt-page />
        <!--<div class="theme-toggle">
            <button @click="pageUp">Page Up</button>
        </div>-->
    </div>
</template>

<style>
.layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Stellt sicher, dass der Container die volle Höhe des Viewports einnimmt */
}

.theme-toggle {
    margin-top: auto; /* Schiebt den Button-Container nach unten */
    padding: 10px; /* Optional: Fügen Sie etwas Innenabstand hinzu */
    background-color: rgba(255, 255, 255, 0.8); /* Hintergrundfarbe (optional) */
    position: fixed; /* Fixiert den Button-Container */
    bottom: 0; /* Setzt den Container an den unteren Rand */
    left: 0; /* Setzt den Container an die linke Seite */
    width: 100%; /* Füllt die gesamte Breite aus */
    text-align: center; /* Zentriert den Button horizontal */
}
</style>  