var WsccGraphic=function(e){function t(t){for(var n,o,l=t[0],r=t[1],a=t[2],h=0,m=[];h<l.length;h++)o=l[h],s[o]&&m.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(d&&d(t);m.length;)m.shift()();return c.push.apply(c,a||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],n=!0,l=1;l<i.length;l++){var r=i[l];0!==s[r]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},s={1:0},c=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonpWsccGraphic=window.webpackJsonpWsccGraphic||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var d=r;return c.push(["/7QA",0]),i()}({"/7QA":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("IrFB");i("aE5D"),i("7K3S");var s=i("vDqi"),c=i("IH7M"),o=function(){function e(e,t){void 0===e&&(e="sections.json"),void 0===t&&(t="");var n=this;this.sectionConfig=e,this.hashTarget=t,this.http=s.default,this.scrollMode="inner",this.defaultState=!0,this.activeSection="",this.smoothScroll=i("2Cuo"),this.firstScroll=!0,this.graphicMiddle=0,this.itemClicked={},this.sections={},this.loadSections().subscribe(function(e){var t=document.getElementById("WsccSvgGraphic"),i=t.classList.contains("home"),s="none"===window.getComputedStyle(t.parentElement).getPropertyValue("display");n.scrollMode=i?"home":"inner",n.graphicMiddle=s?0:Math.ceil(t.getBoundingClientRect().height/2)-75,window.addEventListener("resize",function(){var e="none"===window.getComputedStyle(t.parentElement).getPropertyValue("display");n.graphicMiddle=e?0:Math.ceil(t.getBoundingClientRect().height/2)-75}),n.populateSections(e)},function(e){console.log(e)})}return e.prototype.getOffsetTop=function(e){var t=e.getBoundingClientRect(),i=window.pageYOffset||document.documentElement.scrollTop;return t.top+i-this.graphicMiddle},e.prototype.loadSections=function(){return n.from(this.http.get(this.sectionConfig))},e.prototype.populateSections=function(e){var t=this;this.sections=e.data;var i=function(i){n.sections[i]=new c.Section(e.data[i],!0),n.sections[i].element=document.getElementById(i+"-ring");var s=n.sections[i].anchor,o=document.getElementById(n.sections[i].anchor);n.sections[i].jumplink=document.getElementById(s+"-jl"),void 0===n.sections[i].children&&(n.sections[i].element.addEventListener("click",function(){t.itemClicked={},t.toggleSection(i),t.smoothScroll(t.getOffsetTop(document.getElementById(s)))}),n.sections[i].element.addEventListener("mouseover",function(){t.sections[i].element.classList.contains("disabled")||t.sections[i].element.classList.add("hover")}),n.sections[i].element.addEventListener("mouseout",function(){t.sections[i].element.classList.contains("disabled")||t.sections[i].element.classList.remove("hover")}));var l=n.sections[i].jumplink;l&&l.addEventListener("click",function(e){for(var i in e.preventDefault(),t.itemClicked={},t.sections)for(var n in t.sections[i].jumplink&&t.sections[i].jumplink.classList.remove("active-jl"),t.sections[i].children)t.sections[i].children[n].jumplink&&t.sections[i].children[n].jumplink.classList.remove("active-jl");t.smoothScroll(t.getOffsetTop(document.getElementById(s)),"1800")}),document.getElementById(s+"-jl2")&&l.addEventListener("click",function(e){e.preventDefault(),t.itemClicked={},t.smoothScroll(t.getOffsetTop(document.getElementById(s)),"1800")}),document.getElementById("back-to-top").addEventListener("click",function(e){e.preventDefault(),t.smoothScroll(0,"1800")});var r=function(e){var s=n.sections[i].children[e].anchor;n.sections[i].children[e].active=!1,n.sections[i].children[e].element=document.getElementById(s),n.sections[i].children[e].textContainer=document.getElementById(s+"-container"),n.sections[i].children[e].jumplink=document.getElementById(s+"-jl");var c=n.sections[i].children[e].element,o=n.sections[i].children[e].textContainer,l=n.sections[i].children[e].jumplink;l&&l.addEventListener("click",function(n){for(var s in n.preventDefault(),t.itemClicked={},t.itemClicked[i]=parseInt(e),t.sections)for(var c in t.sections[s].jumplink&&t.sections[s].jumplink.classList.remove("active-jl"),t.sections[s].children)t.sections[s].children[c].jumplink&&t.sections[s].children[c].jumplink.classList.remove("active-jl");t.toggleComponent(i,e),t.smoothScroll(t.getOffsetTop(o),"1800")});var r=document.getElementById(s+"-jl2");r&&r.addEventListener("click",function(n){n.preventDefault(),t.itemClicked={},t.itemClicked[i]=parseInt(e),t.toggleComponent(i,e),t.smoothScroll(t.getOffsetTop(o),"1800")}),c&&(c.addEventListener("keydown",function(n){n.preventDefault()," "!==n.key&&"Enter"!==n.key||(t.itemClicked={},t.itemClicked[i]=parseInt(e),t.toggleComponent(i,e),t.smoothScroll(t.getOffsetTop(o),"1800"))}),c.addEventListener("click",function(){t.itemClicked={},t.itemClicked[i]=parseInt(e),t.toggleComponent(i,e),t.smoothScroll(t.getOffsetTop(o),"1800")}),c.addEventListener("mouseover",function(){c.classList.contains("disabled")||c.classList.add("hover")}),c.addEventListener("mouseout",function(){c.classList.contains("disabled")||c.classList.remove("hover")})),o&&"inner"==n.scrollMode&&o.querySelector(".header").addEventListener("click",function(n){n.preventDefault(),t.itemClicked={},t.itemClicked[i]=parseInt(e),t.toggleComponent(i,e),t.smoothScroll(t.getOffsetTop(o),"1800")})};for(var a in n.sections[i].children)r(a);var d="inner"==n.scrollMode?document.getElementById("five-youth-tenets"):document.getElementById("coordination");window.addEventListener("scroll",function(){if(d){var e=d.getBoundingClientRect().top-t.graphicMiddle,n=d.getBoundingClientRect().bottom-t.graphicMiddle,s=t.getOffsetTop(d)-e;if(e>150&&n>150)for(var c in t.sections)for(var l in t.sections[c].active=!0,t.sections[c].element.classList.remove("grayscale"),"coordination"===i&&t.sections[i].element.classList.remove("active"),s>20?(t.sections[c].element.classList.contains("disabled")&&t.sections[c].element.classList.add("grayscale"),"coordination"===c&&t.sections[c].element.classList.add("active")):t.sections[c].element.classList.contains("disabled")&&t.sections[c].element.classList.remove("grayscale"),t.sections[c].jumplink&&t.sections[c].jumplink.classList.remove("active-jl"),t.activeSection="",t.firstScroll||(t.itemClicked={}),t.sections[c].children)t.sections[c].children[l].active=!1,t.sections[c].children[l].element&&(t.sections[c].children[l].element.classList.remove("grayscale"),t.firstScroll||(t.disableItem(c,l),t.sections[c].children[l].jumplink&&t.sections[c].children[l].jumplink.classList.remove("active-jl"))),s>20?t.sections[c].children[l].element.classList.contains("disabled")&&t.sections[c].children[l].element.classList.add("grayscale"):t.sections[c].children[l].element.classList.contains("disabled")&&t.sections[c].children[l].element.classList.remove("grayscale")}if(o&&(e=o.getBoundingClientRect().top-t.graphicMiddle,n=o.getBoundingClientRect().bottom-t.graphicMiddle,e<20&&n>20))for(var c in t.activeSection=i,t.enableRing(i,!0),t.firstScroll=!1,"coordination"===i&&t.sections[i].element.classList.add("active"),t.sections)for(var r in t.sections[c].children)t.sections[c].children[r].jumplink&&t.sections[c].children[r].jumplink.classList.remove("active-jl");if(t.sections[i].children)for(var a in t.sections[i].children){var h=document.getElementById(t.sections[i].children[a].anchor+"-container");if(h&&(e=h.getBoundingClientRect().top-t.graphicMiddle,n=h.getBoundingClientRect().bottom-t.graphicMiddle,e<20&&n>20)){for(var c in t.sections[i].active=!0,t.sections[i].element.classList.remove("grayscale"),t.sections)c!==i&&(t.sections[c].active=!1,t.sections[c].element.classList.add("grayscale"),"coordination"===i&&t.sections[i].element.classList.remove("active"),t.sections[c].jumplink&&t.sections[c].jumplink.classList.remove("active-jl"));for(var r in t.sections[i].children[a].element.classList.remove("grayscale"),t.sections[i].children[a].jumplink&&t.sections[i].children[a].jumplink.classList.add("active-jl"),t.sections[i].children)r!==a&&(t.sections[i].children[r].element&&t.sections[i].children[r].element.classList.add("grayscale"),t.sections[i].children[r].jumplink&&t.sections[i].children[r].jumplink.classList.remove("active-jl"))}}})},n=this;for(var s in e.data)i(s);""!=this.hashTarget&&this.simulateClick(document.getElementById(this.hashTarget))},e.prototype.simulateClick=function(e){var t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)},e.prototype.toggleComponent=function(e,t){if(this.activeSection=e,this.sections[e].children[t].active=!!this.defaultState||!this.sections[e].children[t].active,this.sections[e].children[t].active){for(var i in this.sections[e].children[t].textContainer.classList.add("openContainer"),this.enableRing(e),this.sections)i!==e&&this.disableRing(i);for(var n in this.sections[e].children)n!==t&&this.disableItem(e,n)}else this.disableItem(e,t);this.defaultState=!1},e.prototype.toggleSection=function(e){e!==this.activeSection&&(this.activeSection=e,this.sections[e].active=!!this.defaultState||!this.sections[e].active),this.defaultState=!1},e.prototype.disableItem=function(e,t){this.sections[e].children[t]&&this.sections[e].children[t].textContainer&&(this.sections[e].children[t].active=!1,this.sections[e].children[t].textContainer.classList.remove("openContainer"))},e.prototype.disableRing=function(e){for(var t in this.sections[e].active=!1,this.sections[e].element.classList.add("grayscale"),"coordination"===e&&this.sections[e].element.classList.remove("active"),this.sections[e].jumplink&&this.sections[e].jumplink.classList.remove("active-jl"),this.sections[e].children)this.itemClicked[e]!=parseInt(t)&&this.disableItem(e,t)},e.prototype.enableRing=function(e,t){for(var i in void 0===t&&(t=!1),this.sections[e].active=!0,this.sections[e].element.classList.remove("grayscale"),this.sections[e].jumplink&&this.sections[e].jumplink.classList.add("active-jl"),this.sections)i!==e&&this.disableRing(i);if(t)for(var n in this.sections[e].children)this.sections[e].children[n].element&&this.sections[e].children[n].element.classList.remove("grayscale")},e}();t.WsccGraphic=o},IH7M:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){void 0===t&&(t=!1),this.active=!1,this.anchor=e.anchor,this.active=t,this.paths=void 0===e.paths?[]:e.paths,this.svgId=void 0===e.svgId?"":e.svgId,this.children=e.children};t.Section=n}}).WsccGraphic;