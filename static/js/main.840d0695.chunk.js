(this.webpackJsonpcryptoquote=this.webpackJsonpcryptoquote||[]).push([[0],[,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/reward-01.97b0e411.jpg"},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o,n=a(0),i=a.n(n),r=a(7),s=a.n(r),l=(a(14),a(2),a(1));function h(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],r=a[1];return i.a.createElement("div",{className:"NoPuzzle"},i.a.createElement("div",null,"Enter the cypher or plaintext:"),i.a.createElement("div",null,i.a.createElement("textarea",{rows:10,cols:80,value:o,onChange:function(e){return r(e.target.value)}})),i.a.createElement("div",null,i.a.createElement("button",{style:{fontSize:"24pt"},onClick:function(){return e.setCypher(o)}},"Play")),i.a.createElement("div",null,i.a.createElement("button",{style:{fontSize:"24pt"},onClick:function(){return e.setPlainText(o)}},"Scramble & Play")),i.a.createElement("div",null,i.a.createElement("button",{style:{fontSize:"24pt"},onClick:e.useRandomQuote},"Random (from list of ",e.randomQuoteCount,")")))}function u(e){var t=e.isSelectedKey?"key selected":"key";return i.a.createElement("div",{style:{width:"42px",height:"100px",border:"solid 1px black",borderRadius:"5px"}},i.a.createElement("div",{style:{height:"30px"}},i.a.createElement("span",{className:t},e.fromKey)),i.a.createElement("div",{style:{height:"30px",marginTop:"10px"}},i.a.createElement("span",{className:"value"},e.toKey)))}function c(e){return i.a.createElement("div",null,function(e,t){var a=Array.from(e.keys()).map((function(a){return i.a.createElement("td",{key:a},i.a.createElement(u,{fromKey:a,toKey:e.get(a)||"",isSelectedKey:a===t}))}));return i.a.createElement("div",null,i.a.createElement("table",{id:"keymap"},i.a.createElement("tbody",null,i.a.createElement("tr",null,a))))}(e.keymap,e.selectedKey))}function y(e){var t=e.isSelectedKey?"key selected":"key";return i.a.createElement("div",{style:{width:"42px",height:"100px",fontSize:"18pt"}},i.a.createElement("div",{style:{height:"30px"}},i.a.createElement("span",{className:t},e.fromKey)),i.a.createElement("div",{style:{height:"30px",marginTop:"5px"}},i.a.createElement("span",{className:"value"},e.toKey)))}function d(e){return i.a.createElement("div",null,function(e,o,n){var r=function(e,t){var o=[],n=a(e,t),i=Object(l.a)(n,2),r=i[0],s=i[1];for(;r.length>0;){o.push(r);var h=a(s,t),u=Object(l.a)(h,2);r=u[0],s=u[1]}return o}(n,35).map((function(a,n){return function(e,a,o,n){var r=o.split("").map((function(o){return i.a.createElement(y,{isSelectedKey:o===a,fromKey:o,toKey:t(e,o)})})).map((function(e,t){return i.a.createElement("div",{style:{float:"left"},key:n.toString()+"_"+t},e)}));return i.a.createElement("div",{key:n},r,i.a.createElement("div",{style:{clear:"both"}}))}(e,o,a,n)}));return i.a.createElement("div",null,r)}(e.keymap,e.selectedKey,e.cypher));function t(e,t){return e.has(t.toUpperCase())?e.get(t.toUpperCase()):t}function a(e,t){if(e.length<=t)return[e,""];for(var a=t+1;a>0&&" "!==e.charAt(a);)--a;return a>1?[e.substring(0,a),e.substring(a)]:[e,""]}}function p(){return i.a.createElement("div",null,i.a.createElement("p",{style:{fontWeight:"bold"}},"To unset a letter, press the SPACEBAR after pressing the letter. To invoke UNDO, use the BACKSPACE key."))}!function(e){e.NO_PUZZLE="NO_PUZZLE",e.PLAYING="PLAYING"}(o||(o={}));var m=a(8),f=a.n(m);function g(e){var t,a=Object(n.useState)(!1),o=Object(l.a)(a,2),r=o[0],s=o[1];return Object(n.useEffect)((function(){0!==e.remaining||r||setTimeout((function(){s(!0)}),2500)})),0!==e.remaining||r?(t=e.remaining,i.a.createElement("div",null,"You have ",t," letters left to guess.")):i.a.createElement("div",null,i.a.createElement("img",{src:f.a,alt:"You won!",style:{width:"300px",borderRadius:"15px",border:"10px solid puple"}}))}function w(e){var t=Object(n.useRef)(null);Object(n.useEffect)((function(){t&&t.current&&t.current.focus()}),[]);var a=Object(n.useState)(""),o=Object(l.a)(a,2),r=o[0],s=o[1],h=function(e,t){var a=new Set(Array.from(e).filter(y)),o=new Set(Array.from(t.keys()).filter((function(e){return""!==t.get(e)}))),n=0;return a.forEach((function(e){o.has(e)&&++n})),a.size-n}(e.cypher,e.keymap);return i.a.createElement("div",{ref:t,tabIndex:0,className:"Playing",onKeyDown:function(t){return function(t){var a=t.key.toUpperCase();1===a.length&&a>="A"&&a<="Z"?""!==r?(function(t){return void 0===Array.from(e.keymap.values()).find((function(e){return t===e}))}(a)&&m(r,a),s("")):s(a):" "===a?""!==r&&(m(r,""),u()):"BACKSPACE"===a&&(u(),e.invokeUndo())}(t)}},i.a.createElement(c,{keymap:e.keymap,selectedKey:r}),i.a.createElement(p,null),i.a.createElement(g,{remaining:h}),i.a.createElement(d,{cypher:e.cypher,keymap:e.keymap,selectedKey:r}));function u(){s("")}function y(e){var t=e.toUpperCase();return t>="A"&&t<="Z"}function m(t,a){e.mapKey(t,a)}}var v=a(5),b=[{plainText:"The greatest glory in living lies not in never falling, but in rising every time we fall.",author:"Nelson Mandela"},{plainText:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{plainText:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma \u2013 which is living with the results of other people's thinking.",author:"Steve Jobs"},{plainText:"If life were predictable it would cease to be life, and be without flavor.",author:"Eleanor Roosevelt"},{plainText:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",author:"Oprah Winfrey"},{plainText:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",author:"James Cameron"},{plainText:"Life is what happens when you're busy making other plans.",author:"John Lennon"},{plainText:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",author:"Mother Teresa"},{plainText:"When you reach the end of your rope, tie a knot in it and hang on.",author:"Franklin D. Roosevelt"},{plainText:"Always remember that you are absolutely unique. Just like everyone else.",author:"Margaret Mead"},{plainText:"Don't judge each day by the harvest you reap but by the seeds that you plant.",author:"Robert Louis Stevenson"},{plainText:"The future belongs to those who believe in the beauty of their dreams.",author:"Eleanor Roosevelt"},{plainText:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",author:"Benjamin Franklin"},{plainText:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",author:"Helen Keller"},{plainText:"It is during our darkest moments that we must focus to see the light.",author:"Aristotle"},{plainText:"Whoever is happy will make others happy too.",author:"Anne Frank"},{plainText:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{plainText:"You will face many defeats in life, but never let yourself be defeated.",author:"Maya Angelou"},{plainText:"The greatest glory in living lies not in never falling, but in rising every time we fall.",author:"Nelson Mandela "},{plainText:"Never let the fear of striking out keep you from playing the game.",author:"Babe Ruth"},{plainText:"Life is either a daring adventure or nothing at all.",author:"Helen Keller"},{plainText:"Many of life's failures are people who did not realize how close they were to success when they gave up.",author:"Thomas A. Edison"},{plainText:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",author:"Dr. Seuss"},{plainText:"Success is not final; failure is not fatal: It is the courage to continue that counts.",author:"Winston S. Churchill"},{plainText:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},{plainText:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{plainText:"If you really look closely, most overnight successes took a long time.",author:"Steve Jobs"},{plainText:"The secret of success is to do the common thing uncommonly well.",author:"John D. Rockefeller Jr."},{plainText:"I find that the harder I work, the more luck I seem to have.",author:"Thomas Jefferson"},{plainText:"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",author:"Barack Obama"},{plainText:"You miss 100% of the shots you don't take.",author:"Wayne Gretzky"},{plainText:"Whether you think you can or you think you can't, you're right.",author:"Henry Ford"},{plainText:"I have learned over the years that when one's mind is made up, this diminishes fear.",author:"Rosa Parks"},{plainText:"I alone cannot change the world, but I can cast a stone across the water to create many ripples.",author:"Mother Teresa"},{plainText:"Nothing is impossible, the word itself says, \u2018I'm possible!'",author:"Audrey Hepburn"},{plainText:"The question isn't who is going to let me; it's who is going to stop me.",author:"Ayn Rand"},{plainText:"The only person you are destined to become is the person you decide to be.",author:"Ralph Waldo Emerson"}],T=[{plainText:"You know you\u2019re in love when you can\u2019t fall asleep because reality is finally better than your dreams.",author:"Dr. Suess"},{plainText:"I\u2019m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\u2019t handle me at my worst, then you sure as hell don\u2019t deserve me at my best.",author:"Marilyn Monroe"},{plainText:"Get busy living or get busy dying.",author:"Stephen King"},{plainText:"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",author:"Mark Caine"},{plainText:"Twenty years from now you will be more disappointed by the things that you didn\u2019t do than by the ones you did do.",author:"Mark Twain"},{plainText:"When I dare to be powerful \u2013 to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",author:"Audre Lorde"},{plainText:"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",author:"David Brinkley"},{plainText:"I can\u2019t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",author:"Herbert Bayard Swope"},{plainText:"Would you like me to give you a formula for success? It\u2019s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn\u2019t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that\u2019s where you will find success.",author:"Thomas J. Watson"},{plainText:"It is hard to fail, but it is worse never to have tried to succeed.",author:"Theodore Roosevelt"},{plainText:"Let us always meet each other with smile, for the smile is the beginning of love.",author:"Mother Theresa"},{plainText:"Challenges are what make life interesting and overcoming them is what makes life meaningful.",author:"Joshua J. Marine"},{plainText:"Love is a serious mental disease.",author:"Plato"},{plainText:"Our greatest fear should not be of failure\u2026 but of succeeding at things in life that don\u2019t really matter.",author:"Francis Chan"},{plainText:"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.",author:"Leonardo Da Vinci"},{plainText:"Remember that the happiest people are not those getting more, but those giving more.",author:"H. Jackson Brown, Jr."},{plainText:"It is our choices, that show what we truly are, far more than our abilities.",author:"J. K Rowling"},{plainText:"Only put off until tomorrow what you are willing to die having left undone.",author:"Pablo Picasso"},{plainText:"Many of life\u2019s failures are people who did not realize how close they were to success when they gave up.",author:"Thomas A. Edison"},{plainText:"If you want to live a happy life, tie it to a goal, not to people or things.",author:"Albert Einstein"},{plainText:"Success is just a war of attrition. Sure, there\u2019s an element of talent you should probably possess. But if you just stick around long enough, eventually something is going to happen.",author:"Dax Shepard"},{plainText:"The opposite of love is not hate; it\u2019s indifference.",author:"Elie Wiesel"},{plainText:"The good news is that the moment you decide that what you know is more important than what you have been taught to believe, you will have shifted gears in your quest for abundance. Success comes from within, not from without.",author:"Elie Wiesel"},{plainText:"I never knew how to worship until I knew how to love.",author:"Henry Ward Beecher"},{plainText:"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",author:"Harriet Tubman"},{plainText:"It is impossible to escape the impression that people commonly use false standards of measurement \u2014 that they seek power, success and wealth for themselves and admire them in others, and that they underestimate what is of true value in life.",author:"Sigmund Freud"},{plainText:"A friend is someone who gives you total freedom to be yourself.",author:"Jim Morrison"},{plainText:"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",author:"Harriet Tubman"},{plainText:"Live in the sunshine, swim the sea, drink the wild air.",author:"Ralph Waldo Emerson"},{plainText:"Life is trying things to see if they work.",author:"Ray Bradbury"},{plainText:"Success in business requires training and discipline and hard work. But if you\u2019re not frightened by these things, the opportunities are just as great today as they ever were.",author:"David Rockefeller"},{plainText:"The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors.",author:"Napoleon Hill"},{plainText:"Your time is limited, so don\u2019t waste it living someone else\u2019s life. Don\u2019t be trapped by dogma \u2013 which is living with the results of other people\u2019s thinking.",author:"Steve Jobs"},{plainText:"Success is how high you bounce when you hit bottom.",author:"George S. Patton"},{plainText:"You will face many defeats in life, but never let yourself be defeated.",author:"Maya Angelou"},{plainText:"May you live all the days of your life.",author:"Jonathan Swift"},{plainText:"Success is not final, failure is not fatal: it is the courage to continue that counts.",author:"Winston Churchill"},{plainText:"You\u2019re not obligated to win. You\u2019re obligated to keep trying. To the best you can do everyday.",author:"Jason Mraz"},{plainText:"If you don\u2019t design your own life plan, chances are you\u2019ll fall into someone else\u2019s plan. And guess what they have planned for you? Not much.",author:"Jim Rohn"},{plainText:"The question isn\u2019t who is going to let me; it\u2019s who is going to stop me.",author:"Ayn Rand"},{plainText:"The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.",author:"Thomas A. Edison"},{plainText:"The successful warrior is the average man, with laser-like focus.",author:"Bruce Lee"},{plainText:"A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.",author:"Bob Dylan"},{plainText:"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",author:"Bil Keane"},{plainText:"Life isn\u2019t about finding yourself. Life is about creating yourself.",author:"George Bernard Shaw"},{plainText:"The whole secret of a successful life is to find out what is one\u2019s destiny to do, and then do it.",author:"Henry Ford"},{plainText:"Success? I don\u2019t know what that word means. I\u2019m happy. But success, that goes back to what in somebody\u2019s eyes success means. For me, success is inner peace. That\u2019s a good day for me.",author:"Denzel Washington"},{plainText:"A kiss is a lovely trick designed by nature to stop speech when words become superfluous.",author:"Ingrid Bergman"},{plainText:"Do not go where the path may lead; go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{plainText:"We are what we repeatedly do; excellence, then, is not an act but a habit.",author:"Aristotle"},{plainText:"Always forgive your enemies; nothing annoys them so much.",author:"Oscar Wilde"},{plainText:"The big lesson in life, baby, is never be scared of anyone or anything.",author:"Frank Sinatra"},{plainText:"Love is an irresistible desire to be irresistibly desired.",author:"Robert Frost"},{plainText:"Those who believe in telekinetics, raise my hand.",author:"Kurt Vonnegut"},{plainText:"I only regret that I have but one life to give for my country.",author:"Nathan Hale"},{plainText:"The person who reads too much and uses his brain too little will fall into lazy habits of thinking.",author:"Albert Einstein"},{plainText:"Better to have loved and lost, than to have never loved at all.",author:"St. Augustine"},{plainText:"Every child is an artist, the problem is staying an artist when you grow up.",author:"Pablo Picasso"},{plainText:"Have no fear of perfection, you\u2019ll never reach it.",author:"Salvador Dali"},{plainText:"Life is not a problem to be solved, but a reality to be experienced.",author:"S\xf8ren Kierkegaard"},{plainText:"Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",author:"Leo Burnett"},{plainText:"Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.",author:"George Bernard Shaw"},{plainText:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"},{plainText:"Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.",author:"Oscar Wilde"},{plainText:"What you do speaks so loudly that I cannot hear what you say.",author:"Ralph Waldo Emerson"},{plainText:"Spread love everywhere you go: first of all in your own house. Give love to your children, to your wife or husband, to a next door neighbor. Let no one ever come to you without leaving better and happier. Be the living expression of God\u2019s kindness; kindness in your face, kindness in your eyes, kindness in your smile, kindness in your warm greeting.",author:"Mother Theresa"},{plainText:"You must be the change you wish to see in the world.",author:"Gandhi"},{plainText:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{plainText:"Keep your face to the sunshine and you can never see the shadow.",author:"Helen Keller"},{plainText:"The best way out is always through.",author:"Robern Frost"},{plainText:"The dream crossed twilight between birth and dying.",author:"T. S. Eliot"},{plainText:"Don\u2019t think. Thinking is the enemy of creativity. It\u2019s self-conscious, and anything self-conscious is lousy. You can\u2019t try to do things. You simply must do things.",author:"Ray Bradbury"},{plainText:"The power of imagination makes us infinite.",author:"John Muir"},{plainText:"Doing the best at this moment puts you in the best place for the next moment.",author:"Oprah Winfrey"},{plainText:"Originality is nothing but judicious imitation.",author:"Voltaire"},{plainText:"Life is made of ever so many partings welded together.",author:"Charles Dickens"}];function x(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",a=function(e){var t,a,o=e.length;for(;0!==o;)a=Math.floor(Math.random()*o),t=e[o-=1],e[o]=e[a],e[a]=t;return e}(Array.from(t)),o=Array.from(t),n=new Map,i=0;i<o.length;++i)n.set(o[i],a[i]);var r=Array.from(e.toUpperCase()).map((function(e){return n.has(e)?n.get(e):e})).join("");return console.log("Plain text: ".concat(e)),console.log("Encrypted: ".concat(r)),r}function k(){return[].concat(Object(v.a)(b),Object(v.a)(T))}function E(){var e=Object(n.useState)(o.NO_PUZZLE),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),c=u[0],y=u[1],d=Object(n.useState)(function(){for(var e=new Map,t=0;t<26;++t){var a=String.fromCharCode(65+t);e.set(a,"")}return e}()),p=Object(l.a)(d,2),m=p[0],f=p[1],g=Object(n.useState)([]),v=Object(l.a)(g,1)[0];function b(e){y(e.toUpperCase()),r(o.PLAYING)}function T(e){var t=x(e);console.log("Plain text: ".concat(e)),console.log("Encrypted: ".concat(t)),b(t)}function E(){var e=function(){var e=k();return e[Math.floor(Math.random()*e.length)]}();T(e.plainText+(e.author?"-- "+e.author:""))}function S(){var e=v.pop();void 0!==e&&f(e)}function I(e,t){!function(e,t){var a=new Map(m);a.set(e,t),f(a)}(e,t),v.push(m)}return i.a.createElement("div",{className:"Game"},function(){switch(a){case o.NO_PUZZLE:return i.a.createElement(h,{randomQuoteCount:k().length,setCypher:b,setPlainText:T,useRandomQuote:E});case o.PLAYING:return i.a.createElement(w,{cypher:c,keymap:m,mapKey:I,invokeUndo:S})}}())}var S=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.840d0695.chunk.js.map