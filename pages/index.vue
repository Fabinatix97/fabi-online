<template>
    <main>
        <div class="container">
            <div class="title-img-wrapper">
                <img src="/assets/img/profile-inverted.png" class="title-img"/>
            </div>
            <div class="animated-text">
                <p class="hey">Hey </p>
                <p class="fabian">ich bin Fabian👋</p>
                <div class="content">
                    <div class="content__container">
                        <p class="content__container__text">Ich bin</p>
                        <ul class="content__container__list">
                            <li class="content__container__list__item">Pilot.</li>
                            <li class="content__container__list__item">DevOps Engineer.</li>
                            <li class="content__container__list__item">Aviation Management-Alumni.</li>
                            <li class="content__container__list__item">Ex-Postbote.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Auf dieser Seite erwarten dich Book-Reviews, Tutorials, aber vor allem Essays. Ja, richtig gelesen: Essays – inspiriert durch persönliche Erfahrungen, Bücher oder aktuelle Ereignisse. Dies soll ein Ort sein, an dem ich meine Gedanken zu verschiedensten Themen mit dir teilen möchte.</p>
                </div>
                <div>
                    <router-link to="/my-post">
                        <button id="myButton" color="white" class="foo bar">Go!</button>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<style>

.container{
    display: flex;
}

.title-img-wrapper {
    position: absolute;
    width: 50%;
    z-index: 0;
}

.title-img {
    width: 80%;
}

.animated-text {
    margin-top: 50px;
    width: 50%;
    z-index: 1;
}

.hey {
    margin-bottom: 10px;
    font-size: 60px;
    font-style: italic;
}

.fabian {
    margin: 0px;
    font-size: 60px;
    font-weight: 600;
}




.content {
	position: relative;
	margin-top: 0em;
	height: 80px;
	overflow: hidden;
}

.content__container {
    font-weight: 600;
	font-size: 26px;
	line-height: 60px;
    overflow: hidden;
    height: 60px;
    padding: 0;
}

.content__container__text {
	display: inline;
	float: left;
	font-size: 26px;
	line-height: 60px;
	margin-top: 5px;
}

.content__container__list {
	color: #2271b1;
	margin-top: 5px;
	padding-left: 85px;
	text-align: left;
	list-style: none;
	animation: change 12s infinite;
}

.content__container__list__item {
	line-height: 60px;
	margin: 0;
}

@keyframes change {
	0%, 12.66%, 100% {transform:translate3d(0,0,0);}
	16.66%, 29.32% {transform:translate3d(0,-25%,0);}
	33.32%,45.98% {transform:translate3d(0,-50%,0);}
	49.98%,62.64% {transform:translate3d(0,-75%,0);}
	66.64%,79.3% {transform:translate3d(0,-50%,0);}
	83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

</style>