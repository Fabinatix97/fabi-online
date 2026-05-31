<template>
  <div class="uses">
    <h1>Uses</h1>
    <p>
      Hier findest du meinen persönlichen Stack aus Hardware, Software, Gadgets und Alltags-Tools –
      die Dinge, mit denen ich code, schreibe, denke, spiele und den Alltag organisiere. Kein
      Sponsoring, nur Zeug, das sich für mich bewährt hat.
    </p>

    <h3>Software</h3>
    <ul>
      <li>
        OS: <NuxtLink to="https://fedoraproject.org/">Fedora Linux</NuxtLink> +
        <NuxtLink to="https://hypr.land/">Hyprland</NuxtLink> = 🤌
      </li>
      <li>
        IDE (seit kurzem): Neovim mit
        <NuxtLink to="https://github.com/Fabinatix97/dotfiles/tree/main/nvim/.config/nvim"
          >diesen Einstellungen</NuxtLink
        >
      </li>
      <li>
        IDE (hin und wieder): VSCode mit
        <NuxtLink to="https://gist.github.com/Fabinatix97/f52c41a20eea701a82829bb8ce005223"
          >minimalen Einstellungen</NuxtLink
        >
      </li>
      <li>
        Terminal-Emulator: <NuxtLink to="https://github.com/kovidgoyal/kitty">kitty</NuxtLink> mit
        der default Bash
      </li>
      <li>
        Terminal-Prompt: <NuxtLink to="https://starship.rs/">starship</NuxtLink> mit
        <NuxtLink to="https://starship.rs/presets/tokyo-night">tokyo-night</NuxtLink> preset
      </li>
      <li>
        Terminal-Font:
        <NuxtLink to="https://www.nerdfonts.com/font-downloads">CaskaydiaCove Nerd Font</NuxtLink>
      </li>
      <li>
        Alles weitere ist in meinem
        <NuxtLink to="https://github.com/Fabinatix97/dotfiles">Dotfiles-Repo</NuxtLink> zu finden
      </li>
    </ul>

    <h3>Hardware</h3>
    <ul>
      <li>Unterwegs: Surface Book 3</li>
      <li>Zuhause: Acer, Intel i5-4670K @3.4 GHz, 32 GB RAM, Nvidia GTX 1060</li>
      <li>Monitor: LG UltraWide 21:9 Curved (34WR50QC-B)</li>
      <li>Tastatur: Keychron K2 Max, CHERRY MX Silent Red Switches</li>
    </ul>

    <h3>Apps</h3>
    <ul>
      <li>Für umfangreiche Notizen: <NuxtLink to="https://obsidian.md/">Obsidian</NuxtLink></li>
      <li>
        Für schnelle Notizen: <NuxtLink to="https://keep.google.com/">Google Notizen</NuxtLink>
      </li>
      <li>
        Um meinen Obsidian-Vault synchron zu halten, wenn ich am Handy bin:
        <NuxtLink to="https://github.com/ViscousPot/GitSync">GitSync</NuxtLink>
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
    font-size: var(--text-lg);
    line-height: 2rem;
  }

  a {
    color: var(--primary);
    &:hover {
      color: var(--primaryhover);
    }
  }
}
</style>
