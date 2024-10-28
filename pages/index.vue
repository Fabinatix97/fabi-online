<template>
    <main id="title">
        <div class="container">

            <div class="person">
                <div class="person-container">
                    <div class="person-container-inner">
                        <img src="/assets/img/background.jpg" class="circle"/>
                        <img src="/assets/img/profile-close.png" class="img img1" />
                    </div>
                </div>
            </div>

            <div class="animated-text">
                <p class="hey">Hey,</p>
                <span class="fabian">ich bin </span>
                <span class="highlight">
                    <span class="text">Fabian</span>
                </span>
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

<style lang="scss" scoped>


.person {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 280px;
}
.person-container {
  border-radius: 50%;
  height: 312px;
  -webkit-tap-highlight-color: transparent;
  transform: scale(0.48);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 400px;
}
.person-container:after {
  background-color: #f2f2f2;
  height: 10px;
  position: absolute;
  top: 390px;
  width: 100%;
}
.person-container:hover {
  transform: scale(0.54);
}
.person-container-inner {
  clip-path: path(
    "M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z"
  );
  position: relative;
  transform-origin: 50%;
  top: -200px;
}
.circle {
  background-color: #fee7d3;
  border-radius: 50%;
  cursor: pointer;
  height: 380px;
  left: 10px;
  pointer-events: none;
  position: absolute;
  top: 210px;
  width: 380px;
}
.img {
  pointer-events: none;
  position: relative;
  transform: translateY(20px) scale(1.15);
  transform-origin: 50% bottom;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.container:hover .img {
  transform: translateY(0) scale(1.2);
}
.img1 {
  left: 22px;
  top: 190px;
  width: 340px;
}

#title {
    background-image: linear-gradient(45deg, #caffc5, #97fff6);
}

.container{
    display: flex;
}

.highlight {
    color: white;
    margin: 0px;
    font-size: 60px;
    font-weight: 600;
    display: inline-block;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: perspective(300px) skewX(5deg) rotateX(-5deg) rotateY(5deg) scale(1.15);
        background-image: linear-gradient( 45deg, #368af7, #7a2eac );
        z-index: -1;
        transition: all 0.3s;
        border-radius: 1rem;
    }
    &:hover:before {
        transform: perspective(300px) skewX(-5deg) rotateX(-10deg) rotateY(-5deg) scale(1.2);
    }
}

.text {
    // fix safari bug
    display: inline-block;
    transform: translateZ(100px);
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