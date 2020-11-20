(this["webpackJsonpdemo-site"]=this["webpackJsonpdemo-site"]||[]).push([[0],{11:function(e,i,t){},12:function(e,i,t){},13:function(e,i,t){"use strict";t.r(i);var n=t(0),o=t(1),a=t(4),d=t.n(a),s=(t(11),t(2)),r=t.n(s),c=t(5),l=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"intro_div",children:Object(n.jsx)("h4",{children:"I'm all over the internet!"})}),Object(n.jsxs)("div",{className:"link_logos",children:[Object(n.jsx)("a",{className:"link first",href:"https://github.com/rhinehardtc",title:"Go to my GitHub page!",target:"_blank",children:Object(n.jsx)("img",{className:"link_icon",src:"./GitHub-Mark-120px-plus.png",alt:"GitHub","aria-label":"Link to my GitHub"})}),Object(n.jsx)("a",{className:"link second",href:"https://www.youtube.com/channel/UCjvhU_Gzr-YF5b2azyQpCww?view_as=subscriber",title:"Go to my YouTube channel!",target:"_blank",children:Object(n.jsx)("img",{className:"link_icon",src:"./youtube_social_circle_red.png",alt:"YouTube","aria-label":"Link to my YouTube channel"})}),Object(n.jsx)("a",{className:"link third",href:"https://www.linkedin.com/in/cameron-rhinehardt-0358a0161/",title:"Go to my LinkedIn page!",target:"_blank",children:Object(n.jsx)("img",{className:"link_icon",src:"./linkedin-circle.png",alt:"LinkedIn","aria-label":"Link to my LinkedIn"})}),Object(n.jsx)("a",{className:"link fourth",href:"https://www.instagram.com/cameronsduck/?hl=en",title:"Go to my Instagram page!",target:"_blank",children:Object(n.jsx)("img",{className:"link_icon",src:"./instagram.png",alt:"Instagram","aria-label":"Link to my Instagram"})})]})]})},h=function(){var e=Object(o.useState)("about"),i=Object(c.a)(e,2),t=i[0],a=i[1];Object(o.useEffect)((function(){console.log(t)}));var d,s=window.innerHeight,h=!1;window.addEventListener("scroll",(function(){var e,i=window.pageYOffset;i<s?(h=!1,e=0+i/s):(h=!0,e=1),document.querySelector(".section_div").style.opacity=e}));var w={color:"red",marginLeft:"1%",textDecoration:"none"},u={color:"black"},j={color:"red"},m={about:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"intro_div",children:[Object(n.jsx)("h1",{children:"Hello!"}),Object(n.jsx)("div",{className:"img_of_me",children:Object(n.jsx)(r.a,{preload:function(e){d=e.loadImage("./me.jpg")},setup:function(e,i){e.createCanvas(e.windowWidth/5,e.windowHeight/2.5).parent(i),d.resize(e.windowWidth/5,0),e.noStroke(),e.fill(255,0,0)},draw:function(e){e.image(d,0,0,e.windowWidth/6,e.windowHeight/4),e.background(255,253,147),d.loadPixels();var i=Math.floor(e.constrain(e.mouseX/4,2,40));if(d)for(var t=0;t<d.height;t+=i)for(var n=0;n<d.width;n+=i){var o=t*d.width+n,a=i*((255-d.pixels[4*o])/255);e.ellipse(n,t,a,a)}e.noLoop()},mouseMoved:function(e){!0===h&&d&&e.mouseX>e.windowWidth/200&&e.mouseY<d.height/8*7&&e.loop()}})})]}),Object(n.jsxs)("div",{className:"intro_text",children:[Object(n.jsxs)("p",{children:["My name is Cameron Rhinehardt. I'm a creative and passionate person who loves to take on new challenges and opportunities to learn. My hobbies include playing guitar, creating",Object(n.jsx)("a",{href:"https://youtu.be/JnKXg-ciL78",title:"Vapor93 on YouTube",target:"_blank",style:w,children:"synthwave music"}),", animation, painting,",Object(n.jsx)("a",{href:"https://photos.app.goo.gl/THZHY2451R8AL8148",title:"Photos I Have Taken",target:"_blank",style:w,children:"photography"}),",",Object(n.jsx)("a",{href:"https://photos.app.goo.gl/YUG2TTpmW5SqcnUa6",title:"R E T R O  A E S T H E T I C  P H O T O S",target:"_blank",style:w,children:"digital photo editing"}),", cooking, and the emerging world of VR!"]}),Object(n.jsx)("p",{children:"I graduated from Florida Atlantic University with a degree in Fine Arts in 2016. I had done a few gallery showings of my work while working at Microsoft from about 2015 to 2020 and decided that I would like to join the worlds of art and tech, so I enrolled in and graduated from FlatIron bootcamp with a certification in software engineering. Now I find myself quickly falling in love with the world of programming!"}),Object(n.jsx)("p",{children:"I also studied Japanese in highschool and college for six years and continue to enjoy practicing on my own. Hopefully you can see some of my creativity shine in this, my personal site. For further details on some of my skills, click on the items in the list to the left."})]})]}),"Ruby on Rails":Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h2",{children:"Ruby on Rails"})}),JavaScript:Object(n.jsx)("h2",{children:"JavaScrump"}),React:Object(n.jsx)("h1",{children:"React"}),HTML5:Object(n.jsx)("h1",{children:"HTML5"}),CSS3:Object(n.jsx)("h1",{children:"CSS3"}),"And More!":Object(n.jsx)("h3",{children:"Wait, there's more?"}),"Social Links":Object(n.jsx)(l,{})};return Object(n.jsxs)("div",{className:"section_div",children:[Object(n.jsx)("div",{className:"section_left_div",children:["Ruby on Rails","JavaScript","React","HTML5","CSS3","And More!","Social Links"].map((function(e){return Object(n.jsx)("div",{className:"skill",onClick:function(){return a(t===e?"about":e)},style:t===e?j:u,children:t===e?"About Me":e},e)}))}),Object(n.jsx)("div",{className:"section_right_div",children:m[t]})]})};t(12);var w=function(){var e=2,i=1;return Object(n.jsxs)("div",{className:"main_div",children:[Object(n.jsx)("div",{className:"p5_shapes_div",children:Object(n.jsx)(r.a,{setup:function(e,i){e.createCanvas(e.windowWidth,e.windowHeight/2).parent(i)},draw:function(t){t.background(137,134,193);var n=t.mouseX;e+=.05*(n-e);var o=t.mouseY;i+=.05*(o-i);var a=t.color(255,0,0);t.fill(a),t.noStroke(),t.ellipse(e,t.windowHeight/3.3,t.windowWidth/7,t.windowWidth/7),a=t.color("#fffd7ad1"),t.fill(a),t.stroke(255,0,0),t.strokeWeight(t.windowWidth/150),t.square(t.windowWidth/7,i-750,t.windowWidth/15),t.square(t.windowWidth/7,i-600,t.windowWidth/15),t.square(t.windowWidth/7,i-450,t.windowWidth/15),t.square(t.windowWidth/7,i-300,t.windowWidth/15),t.square(t.windowWidth/7,i-150,t.windowWidth/15),t.square(t.windowWidth/7,i,t.windowWidth/15),t.square(t.windowWidth/7,i+150,t.windowWidth/15),t.square(t.windowWidth/7,i+300,t.windowWidth/15),t.square(t.windowWidth/7,i+450,t.windowWidth/15),t.square(t.windowWidth/7,i+600,t.windowWidth/15),t.square(t.windowWidth/7,i+750,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i-750,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i-600,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i-450,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i-300,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i-150,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i+150,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i+300,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i+450,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i+600,t.windowWidth/15),t.square(t.windowWidth/7*5.57,i+750,t.windowWidth/15)}})}),Object(n.jsxs)("header",{className:"welcome_header",children:[Object(n.jsx)("p",{children:"Welcome!"}),Object(n.jsx)("h6",{className:"scroll_down",children:"\u25bc Scroll Down to Learn About Me \u25bc"})]}),Object(n.jsx)(h,{})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(i){var t=i.getCLS,n=i.getFID,o=i.getFCP,a=i.getLCP,d=i.getTTFB;t(e),n(e),o(e),a(e),d(e)}))};d.a.render(Object(n.jsx)(w,{}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.558a17ec.chunk.js.map