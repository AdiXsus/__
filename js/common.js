const awesomeEffect=t=>{let o=t.el,e="",l=t.text,i=t.possible?t.possible:'ABCDEFASIRUWJFCKSJHYWRKJEsdfskdjfk-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}',r=t.delay?t.delay:70;const a=(t,e)=>{setTimeout((t=>{o.innerText=e}),t*r)};for(let t=0;t<l.length+1;t++){e=l.substr(0,t);for(let o=t;o<l.length;o++)e+=i.charAt(Math.floor(Math.random()*i.length));a(t,e),e=""}};function init(){document.querySelector(".preloader > div").style.borderTopColor=config.preloaderColor,setTimeout((()=>{document.querySelector(".preloader").classList.add("loaded")}),1e3*config.preloaderDelay);new Vue({el:"#asif-page",data:{title:config.title,titleVisible:!1,copyrightText:config.copyrightText,social:config.social,isPlaying:!1,titleColor:config.titleColor,titleShadowColor:config.titleShadowColor,copyrightTextColor:config.copyrightTextColor,socialColor:config.socialColor,socialShadowColor:config.socialShadowColor,playButtonColor:config.playButtonColor,playButtonShadowColor:config.playButtonShadowColor,preloaderColor:config.preloaderColor,SOCIAL:{instagram(t){t.trim();return"https://bit.ly/insta_adix"},steam(t){t.trim();return"https://bit.ly/3wVwxh6"},discord(t){t.trim();return"https://bit.ly/3DdaPri"},twitter(t){t.trim();return"https://bit.ly/3CU3HBu"},spotify(t){t.trim();return"https://spoti.fi/3q7RAJw"},aboutme(t){t.trim();return"https://bit.ly/3Qm2O7D"}}},methods:{stopPlay(){this.isPlaying=!1,this.titleVisible=!1},startPlay(){this.$refs["background-video"];let t=this.$refs.title;this.$refs["background-video"].play(),this.$refs["background-video"].muted=!1,this.isPlaying=!0,setTimeout((()=>{this.titleVisible=!0,awesomeEffect({el:t,text:this.title}),setInterval((()=>{awesomeEffect({el:t,text:this.title})}),1050),setInterval((()=>{awesomeEffect({el:document.querySelector(".asif-page-copyright"),text:this.copyrightText})}),2e3)}),1e3*config.showDelay)},getSocialLink(t,o){return this.SOCIAL[t](o)}},mounted(){let t=this.$refs["background-video"];t.addEventListener("canplay",(t=>{})),t.addEventListener("ended",(t=>{this.stopPlay()}))},computed:{TitleStyle(){return{color:this.titleColor,textShadow:`3px 3px 0 ${this.titleShadowColor}`}},CopyRightStyle(){return{color:this.copyrightTextColor}},SocialStyle(){return{color:this.socialColor,textShadow:`3px 3px 0 ${this.socialShadowColor}`}},PlayButtonStyle(){return{color:this.playButtonColor,textShadow:`3px 3px 0 ${this.playButtonShadowColor}`}}}})}window.addEventListener("load",init);
