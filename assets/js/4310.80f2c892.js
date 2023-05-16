"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[4310],{84310:(e,t,i)=>{i.r(t),i.d(t,{dyte_livestream_player:()=>d});var a=i(67503),s=i(51922),r=i(51306),n=(i(60804),i(50528)),o=i(21237);const d=class{constructor(e){(0,a.r)(this,e),this.dyteAPIError=(0,a.c)(this,"dyteAPIError",7),this.showLatencyIndicator=!1,this.LoadPlayer=(e=this.ivsPlayer)=>{this.player&&e&&(e.attachHTMLVideoElement(this.player),e.setAutoplay(!0),e.setVolume(1))},this.livestreamUpdateListener=e=>{var t,i;this.livestreamState=e,"LIVESTREAMING"===e?(this.LoadPlayer(),this.getPlaybackUrl(),(null===(i=null===(t=this.meeting.__internals__)||void 0===t?void 0:t.browserSpecs)||void 0===i?void 0:i.isIOSMobile())||(this.fetchLatency(),this.updateLatency=setInterval(this.fetchLatency,2e3)),o.s.enableSource("livestream-player")):(this.showLatencyIndicator=!1,this.updateLatency&&clearInterval(this.updateLatency),o.s.disableSource("livestream-player"))},this.getLoadingState=()=>{let e="",t=!1,i=!1;switch(this.livestreamState){case"IDLE":e=this.t("Waiting to go live."),t=!0,i=!1;break;case"STARTING":e=this.t("Livestream is starting..."),t=!0,i=!0;break;case"STOPPING":e=this.t("Livestream is stopping..."),t=!0,i=!0;break;case"LIVESTREAMING":this.playerState!==n.P.PLAYING&&(e=this.t("Livestream is starting..."),i=!0,t=!0);break;default:t=!1,e=this.t(""),i=!0}return{isLoading:t,loadingMessage:e,showIcon:i}},this.getErrorState=()=>{var e,t;let i=!1,a="";return"LIVESTREAMING"!==this.livestreamState?(i=!1,a=this.t(""),{isError:i,errorMessage:a}):(this.isSupported||(i=!0,a=this.t("Player not supported.")),this.playbackUrl||(i=!0,a=this.t("Playback URL not found.")),this.playerError&&(i=!0,a=this.t(null!==(t=null===(e=this.playerError)||void 0===e?void 0:e.message)&&void 0!==t?t:"An unknown error occured.")),{isError:i,errorMessage:a})},this.fetchLatency=()=>{this.ivsPlayer&&(this.latency=this.ivsPlayer.getLiveLatency())},this.stopRebuffer=e=>{this.ivsPlayer.setRebufferToLive(!1),this.latency=e,clearInterval(this.updateLatency),this.updateLatency=setInterval(this.fetchLatency,2e3)},this.resetSyncLivestream=()=>{const e=this.ivsPlayer.getLiveLatency();this.stopRebuffer(e),this.dyteAPIError.emit({trace:this.t("livestreamPlayer.rebuffer.error"),message:this.t("Could not sync livestream please try again later.")})},this.syncLiveStream=()=>{clearInterval(this.updateLatency),this.latency=-1,this.ivsPlayer.setRebufferToLive(!0);const e=setTimeout(this.resetSyncLivestream,15e3);this.updateLatency=setInterval((()=>{const t=this.ivsPlayer.getLiveLatency();t<10&&(this.stopRebuffer(t),clearTimeout(e))}),1e3)},this.meeting=void 0,this.size=void 0,this.t=(0,r.u)(),this.iconPack=s.d,this.playbackUrl=void 0,this.isSupported=!0,this.playerState=n.P.IDLE,this.livestreamState="IDLE",this.playerError=void 0,this.latency=0,this.audioPlaybackError=!1}AddPlayerListeners(e=this.ivsPlayer){Object.values(Object.assign(Object.assign({},n.d),n.P)).forEach((t=>{n.e.includes(t)||null==e||e.addEventListener(t,(i=>{var a,s,r;t!==n.P.IDLE&&t!==n.P.PLAYING&&t!==n.d.ERROR&&t!==n.P.READY||(this.playerState=t),t===n.d.ERROR&&(this.playerError=i),t===n.P.IDLE&&e.isPaused()&&e.play(),t===n.d.AUDIO_BLOCKED&&(this.audioPlaybackError=!0),this.playerState!==n.P.PLAYING||(null===(s=null===(a=this.meeting.__internals__)||void 0===a?void 0:a.browserSpecs)||void 0===s?void 0:s.isIOSMobile())?this.showLatencyIndicator=!1:this.showLatencyIndicator=!0,this.meeting.__internals__.logger.info(`IVS.Player.${t}`,i),n.f.includes(t)&&(null===(r=this.meeting.__internals__.callStats)||void 0===r||r.ivsPlayerEvent(t,i))}))}))}getPlaybackUrl(e=this.ivsPlayer){this.playbackUrl=this.meeting.livestream.playbackUrl,this.playbackUrl&&e&&(e.load(this.playbackUrl),e.play())}onPlayerRef(e){this.player=e,o.s.addSource("livestream-player",this.player,!!this.playbackUrl),this.playbackUrl&&o.s.enableSource("livestream-player")}connectedCallback(){this.meetingChanged(this.meeting),window.onDyteLivestreamPlayer=e=>{e?(this.isSupported=!0,this.ivsPlayer=e,this.AddPlayerListeners(e),this.LoadPlayer(e),this.getPlaybackUrl(e)):this.isSupported=!1},this.sendLatencyToCallStats=setInterval((()=>{var e;this.fetchLatency(),null===(e=this.meeting.__internals__.callStats)||void 0===e||e.livestreamLatency(this.latency)}),1e4)}disconnectedCallback(){window.onDyteLivestreamPlayer=void 0,this.meeting.livestream.removeListener("livestreamUpdate",this.livestreamUpdateListener),clearInterval(this.sendLatencyToCallStats),this.ivsPlayer.load(""),this.ivsPlayer=void 0,this.player=void 0}async componentDidLoad(){const e=document.createElement("script");e.type="module",e.innerHTML="\n    import IVSPlayer from 'https://cdn.jsdelivr.net/npm/amazon-ivs-player@1.16.0/+esm'\n    let player = undefined;\n    if (IVSPlayer.isPlayerSupported) {\n      player = IVSPlayer.create({\n        wasmBinary:\n          'https://unpkg.com/amazon-ivs-player@1.11.0/dist/assets/amazon-ivs-wasmworker.min.wasm',\n        wasmWorker:\n          'https://unpkg.com/amazon-ivs-player@1.11.0/dist/assets/amazon-ivs-wasmworker.min.js',\n      });\n    }\n    window.onDyteLivestreamPlayer && window.onDyteLivestreamPlayer(player);\n    ",document.body.appendChild(e)}meetingChanged(e){null!=e&&(this.livestreamState=this.meeting.livestream.state,"LIVESTREAMING"===this.livestreamState&&(this.LoadPlayer(),this.getPlaybackUrl(),o.s.enableSource("livestream-player")),this.meeting.livestream.on("livestreamUpdate",this.livestreamUpdateListener))}render(){if(!(0,n.s)(this.meeting))return;const{isError:e,errorMessage:t}=this.getErrorState(),{isLoading:i,loadingMessage:s,showIcon:r}=this.getLoadingState();return(0,a.h)(a.H,null,(0,a.h)("div",{class:"player-container"},(0,a.h)("video",{ref:e=>this.onPlayerRef(e),playsInline:!0}),this.audioPlaybackError&&(0,a.h)("div",{class:"unmute-popup"},(0,a.h)("h3",null,this.t("audio_playback.title")),(0,a.h)("p",null,this.t("audio_playback.description")),(0,a.h)("dyte-button",{kind:"wide",onClick:()=>{this.player.muted=!1,this.audioPlaybackError=!1},title:this.t("audio_playback"),iconPack:this.iconPack,t:this.t},this.t("audio_playback"))),this.showLatencyIndicator&&(0,a.h)("div",{class:"latency-controls"},(this.latency>10||this.latency<0)&&(0,a.h)("div",{class:"sync-live-stream",onClick:this.syncLiveStream},-1===this.latency?(0,a.h)("dyte-spinner",{id:"icon",part:"spinner",iconPack:this.iconPack,t:this.t,size:"sm"}):"Skip to Live")),e&&(0,a.h)("div",{class:"loader"},(0,a.h)("dyte-icon",{icon:this.iconPack.warning,t:this.t}),(0,a.h)("p",null,t)),!e&&i&&(0,a.h)("div",{class:"loader"},r&&(0,a.h)("dyte-spinner",{id:"icon",part:"spinner",iconPack:this.iconPack,t:this.t,size:"md"}),(0,a.h)("p",null,s))))}static get watchers(){return{meeting:["meetingChanged"]}}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.player-container{position:relative;margin:var(--dyte-space-4, 16px);display:flex;flex-grow:1;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px)}video{z-index:0;height:100%;width:100%;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.loader{position:absolute;z-index:10;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;flex-direction:column;align-items:center;justify-content:center}p{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:16px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.latency-controls{position:absolute;bottom:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);z-index:20;display:flex;flex-direction:row;align-items:center}.sync-live-stream{cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);font-size:12px}.unmute-popup{position:absolute;z-index:30 !important;display:flex;width:var(--dyte-space-72, 288px);flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px);text-align:center;max-width:70%}.unmute-popup h3{margin:var(--dyte-space-0, 0px);font-size:16px;font-weight:500}.unmute-popup p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);font-size:14px}"},21237:(e,t,i)=>{i.d(t,{P:()=>n,s:()=>o});const a=720,s=1280,r=(e,t,i,a,s,r)=>{const n=s,o=r,d=Math.min(i/n,a/o);let l,c,h,v,p=n*d,u=o*d,y=1;return p<i&&(y=i/p),Math.abs(y-1)<1e-14&&u<a&&(y=a/u),p*=y,u*=y,h=n/(p/i),v=o/(u/a),l=.5*(n-h),c=.5*(o-v),l<0&&(l=0),c<0&&(c=0),h>n&&(h=n),v>o&&(v=o),[l,c,h,v,e,t,i,a]};var n;!function(e){e.CAMERA="CAMERA",e.MIC="MIC",e.END="END"}(n||(n={}));const o=new class{constructor(){this.tracks=[],this.sources=[],this.enabled=!1}isSupported(){return!!window.chrome&&document.pictureInPictureEnabled}cleanup(){this.isSupported()&&void 0!==document.exitPictureInPicture&&null!==document.pictureInPictureElement&&document.exitPictureInPicture(),this.canvas=void 0,this.video=void 0,this.tracks=[],this.request=void 0}createCanvas(){const e=document.createElement("canvas");e.height=a,e.width=s,this.canvas=e}setupEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("hangup",(()=>{e(n.END)}))}mountAudioEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",(()=>{e(n.MIC)}))}mountVideoEvents(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",(()=>{e(n.CAMERA)}))}unmountAudioEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglemicrophone",void 0)}unmountVideoEvents(){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setActionHandler("togglecamera",void 0)}drawGrid(e,t,i){if(void 0===this.canvas)return;const n=this.canvas.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,s,a);let o=0,d=0;for(;o<715;){let a=0;for(;a<1275&&d<i;){const i=this.tracks[d],[s,l,c,h,v,p,u,y]=r(a,o,e,t,i.videoWidth,i.videoHeight);n.drawImage(i,s,l,c,h,v,p,u,y),d+=1,a+=e}o+=t}}paintCanvas(){const e=this.tracks.length,[t,i]=(e=>{switch(e){case 0:case 1:return[s,a];case 2:return[Math.floor(640),a];case 3:case 4:return[Math.floor(640),Math.floor(360)];default:return[Math.floor(426.6666666666667),Math.floor(360)]}})(e);this.drawGrid(t,i,e)}animate(){void 0!==this.tracks&&this.paintCanvas(),void 0!==this.request&&(this.request=requestAnimationFrame((()=>this.animate())))}create(e,t,i){this.cleanup(),this.createCanvas(),this.setupEvents(i);const r=document.createElement("video");r.height=a,r.width=s,r.autoplay=!0,r.srcObject=this.canvas.captureStream(24),this.video=r,this.video.onloadedmetadata=()=>{try{e(),this.video.onleavepictureinpicture=()=>{t()}}catch(i){t(i.getMessage())}},this.paintCanvas()}updateMediaSession(e,t){void 0!==navigator.mediaSession&&(e===n.CAMERA&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setCameraActive(t),e===n.MIC&&void 0!==navigator.mediaSession.setMicrophoneActive&&navigator.mediaSession.setMicrophoneActive(t))}updateVideoSources(){const e=Object.values(this.sources).filter((e=>e.enabled)),t=[];e.map((e=>{t.push(e.element)})),this.tracks=t}enableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!0),this.updateVideoSources()}disableSource(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!1),this.updateVideoSources()}addSource(e,t,i){this.sources[e]={element:t,enabled:i}}removeSource(e){delete this.sources[e]}removeAllSource(){this.sources=[]}enable(){this.enabled=!0,this.request=requestAnimationFrame((()=>this.animate())),this.video.requestPictureInPicture()}disable(){this.enabled=!1,cancelAnimationFrame(this.request),this.request=void 0,document.exitPictureInPicture()}}}}]);