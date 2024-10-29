<template>
    <main id="title" class="bg-gradient-to-r from-backgreen to-backblue">
        <div class="container">

            <div class="person">
                <div class="person-container">
                    <div class="person-container-inner">
                        <img src="/public/img/background.jpg" class="circle"/>
                        <img src="/public/img/profile-close.png" class="img img1" />
                    </div>
                </div>
            </div>

            <div class="animated-text">
                <p class="hey">Hey,</p>
                <span class="fabian">ich bin </span>
                <span class="highlight before:bg-button">
                    <span class="text">Fabian</span>
                </span>
            </div>

        </div>
        <div class="column">
            <!--<div class="content">
                <div class="content__container">
                    <p class="content__container__text">Ich bin</p>
                    <ul class="content__container__list">
                        <li class="content__container__list__item">Pilot.</li>
                        <li class="content__container__list__item">DevOps Engineer.</li>
                        <li class="content__container__list__item">Aviation Management-Alumni.</li>
                        <li class="content__container__list__item">Ex-Postbote.</li>
                    </ul>
                </div>
            </div>-->
            <div>
                <p>Auf dieser Seite erwarten dich Book-Reviews, Tutorials, aber vor allem Essays. Ja, richtig gelesen: Essays – inspiriert durch persönliche Erfahrungen, Bücher oder aktuelle Ereignisse. Dies soll ein Ort sein, an dem ich meine Gedanken zu verschiedensten Themen mit dir teilen möchte.</p>
            </div>
            <div class="buttons text-button">
                <router-link to="/about">
                    <button class="btn bg-white hover:bg-button hover:text-white" type="button"><span>👋🏼 Über mich</span></button>
                </router-link>
                <router-link to="/blog/my-post">
                    <button class="btn bg-white hover:bg-button hover:text-white" type="button"><span>🗒️ Blog</span></button>
                </router-link>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

.btn {
    font-weight: 600;
    font-size: 20px;
    position: relative;

    display: block;
    margin: 30px auto;
    padding: 0;

    overflow: hidden;

    border-width: 0;
    outline: none;
    border-radius: 30px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);

    transition: background-color .3s, transform .3s;;
}

.btn:hover, .btn:focus {
    transform: scale(1.1);
}

.btn > * {
    position: relative;
}

.btn span {
    display: block;
    padding: 12px 24px;
}

.btn:before {
    content: "";
    
    position: absolute;
    top: 50%;
    left: 50%;
    
    display: block;
    width: 0;
    padding-top: 0;
        
    border-radius: 100%;
    
    background-color: rgba(236, 240, 241, .3);
    
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.btn:active:before {
    width: 120%;
    padding-top: 120%;
    
    transition: width .2s ease-out, padding-top .2s ease-out;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 40px;
}

p {
    font-size: 20px;
}

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
    &:after {
        background-color: #f2f2f2;
        height: 10px;
        position: absolute;
        top: 390px;
        width: 100%;
    }
    &:hover {
        transform: scale(0.54);
    }
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

.img1 {
    left: 22px;
    top: 190px;
    width: 340px;
}

#title {
    position: relative;
    overflow: hidden;
}

#title::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, #575757 5%, transparent 20%);
    background-size: 20px 20px;
    pointer-events: none;
    opacity: 0.1;
}

.container{
    display: flex;
    flex-direction: row;
    @media (max-width: 586px) {
        flex-direction: column;
        align-items: center;
    }
    &:hover .img {
        transform: translateY(0) scale(1.2);
    }
}

.column {
    margin-left: 50px;
    margin-right: 50px;
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
        transform: perspective(300px) skewX(10deg) rotateX(10deg) rotateY(20deg) scale(1.15) translateX(10px);
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
    width: 50%;
    z-index: 1;
    @media (min-width: 587px) {
        margin-top: 70px;
    }
}

.hey {
    margin-bottom: -10px;
    font-size: 60px;
    font-style: italic;
}

.fabian {
    font-size: 60px;
    font-weight: 600;
}

// .content {
// 	position: relative;
// 	height: 80px;
// 	overflow: hidden;
//     @media (max-width: 808px) {
//         margin-top: 60px;
//     }
//     @media (max-width: 586px) {
//         margin-top: 100px;
//     }
// }

// .content__container {
//     font-weight: 600;
// 	font-size: 26px;
// 	line-height: 60px;
//     overflow: hidden;
//     height: 60px;
//     padding: 0;
//     @media (max-width: 603px) {
//         font-size: 20px;
//     }
//     @media (max-width: 504px) {
//         font-size: 14px;
//     }
// }

// .content__container__text {
// 	display: inline;
// 	float: left;
// 	margin-top: 5px;
// }

// .content__container__list {
// 	color: #2271b1;
// 	margin-top: 5px;
// 	padding-left: 85px;
// 	list-style: none;
// 	animation: change 12s infinite;
//     @media (max-width: 603px) {
//         padding-left: 68px;
//     }
// }

// .content__container__list__item {
// 	line-height: 60px;
// }

// @keyframes change {
// 	0%, 12.66%, 100% {transform:translate3d(0,0,0);}
// 	16.66%, 29.32% {transform:translate3d(0,-25%,0);}
// 	33.32%,45.98% {transform:translate3d(0,-50%,0);}
// 	49.98%,62.64% {transform:translate3d(0,-75%,0);}
// 	66.64%,79.3% {transform:translate3d(0,-50%,0);}
// 	83.3%,95.96% {transform:translate3d(0,-25%,0);}
// }

</style>