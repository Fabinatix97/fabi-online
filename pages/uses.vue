<template>
  <div class="uses">
    <h1>Uses</h1>
    <p>
      Hier findest du meinen persönlichen Stack aus Hardware, Software, Gadgets und Alltags-Tools –
      die Dinge, mit denen ich code, schreibe, denke, spiele und den Alltag organisiere. Kein
      Sponsoring, nur Zeug, das sich für mich bewährt hat.
    </p>

    <h3>IDE</h3>
    <ul>
      <li>
        VSCode mit
        <NuxtLink to="https://gist.github.com/Fabinatix97/1cfffcad192780aa2cfa87010e95df44"
          >minimalen Einstellungen</NuxtLink
        >
      </li>
      <li>
        Font: <NuxtLink to="https://www.jetbrains.com/de-de/lp/mono/">JetBrains Mono</NuxtLink>
      </li>
      <li>
        Color Theme:
        <NuxtLink
          to="https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme"
          >Palenight Operator</NuxtLink
        >
      </li>
      <li>
        File Icon Theme:
        <NuxtLink
          to="https://marketplace.visualstudio.com/items?itemName=Yummygum.city-lights-icon-vsc"
          >City Lights</NuxtLink
        >
      </li>
      <li>
        Product Icon Theme:
        <NuxtLink to="https://marketplace.visualstudio.com/items?itemName=antfu.icons-carbon"
          >Carbon Product Icons</NuxtLink
        >
      </li>
    </ul>

    <h3>Terminal</h3>
    <ul>
      <li>Prompt theme engine: <NuxtLink to="https://ohmyposh.dev/">oh-my-posh</NuxtLink></li>
      <li>
        Theme:
        <NuxtLink
          to="https://github.com/JanDeDobbeleer/oh-my-posh/blob/main/themes/multiverse-neon.omp.json"
          >multiverse-neon</NuxtLink
        >
      </li>
      <li>
        Font: <NuxtLink to="https://www.nerdfonts.com/font-downloads">MesloLG Nerd Font</NuxtLink>
      </li>
    </ul>

    <h3>Hardware</h3>
    <ul>
      <li>Unterwegs: Surface Book 3</li>
      <li>Zuhause: Acer, Intel i5-4670K @3.4 GHz, 32 GB RAM, Nvidia GTX 1060</li>
      <li>Monitor: LG UltraWide 21:9 Curved (34WR50QC-B)</li>
      <li>Tastatur: Keychron K2 Max</li>
    </ul>

    <h3>Apps</h3>
    <ul>
      <li>Für umfangreiche Notizen: <NuxtLink to="https://obsidian.md/">Obsidian</NuxtLink></li>
      <li>
        Für schnelle Notizen: <NuxtLink to="https://keep.google.com/">Google Notizen</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Uses',
  description:
    'Hier findest du meinen persönlichen Stack aus Hardware, Software, Gadgets und Alltags-Tools.',
  ogImage: '/img/about/fabionline.png',
})
</script>

<style lang="scss">
.uses {
  ul {
    margin-left: 3rem;
    list-style-type: disc;
    font-size: 1.125rem;
  }

  a {
    color: var(--primary);
    &:hover {
      color: var(--primaryhover);
    }
  }
}
</style>
