<template>
    <nav class="navbar">
      <ul class="nav-links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">Über mich</NuxtLink></li>
        <li><NuxtLink to="/my-post">Blog</NuxtLink></li>
        <li><NuxtLink to="/impressum">Impressum</NuxtLink></li>
        <li>
            <a href="https://www.linkedin.com/in/fabian-weiss/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/img/linkedin-icon.png" alt="LinkedIn" class="social-icon" />
            </a>
        </li>
        <li>
            <a href="https://github.com/Fabinatix97" target="_blank" rel="noopener noreferrer">
            <img src="/assets/img/github-icon.png" alt="GitHub" class="social-icon" />
            </a>
        </li>
      </ul>
    </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    border: 1px solid #E9E9E9;
    background-color: white;
    margin-bottom: 20px;
    font-weight: 500;
}
.nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
}
.nav-links li {
    transition: color 0.3s;
    margin-right: 10px;
}
.nav-links li:last-child {
    margin-right: 0;
}
.nav-links li:hover {
    color: #3498db;
}
.social-icon {
  width: 20px;
  height: 20px;
  opacity: 0.7;
}
.social-icon:hover {
    filter: invert(0.3) sepia(1) saturate(4) hue-rotate(160deg) contrast(1.5) brightness(0.8)
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #0E74AF;
}
</style>