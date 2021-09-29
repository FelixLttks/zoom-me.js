zoom-me.js
You just saw a demo of a use-case. With zoom-me.js its super easy to implement a cool looking zoom effect on an image at the top of your webpage.

how to use it?
download it here or on github
put the file inside your project folder
link the file by putting <script src="zoom-me.js" defer></script> inside your <head></head>
inside your <body>, wrap all inside <dic class="content" id="content"></body>
put <div id="zoom-container" data-zoom="4" data-zoomSpeed="400" style=" width: 100vw; height: 100vh; overflow: hidden;"> <img id="zoom" src="helloImg.png" style=" width: 100%; height: 100%; object-fit: cover;"> </div> before step 4)
now modify the parameters to fit your needs :)
the parameters
data-zoom: the zoom factor which the image has when the site loads
data-zoomSpeed: the speed of the zoom when scrolling, higher = slower
src: the path to your image
note that you have to adjust the min-height of body via css
thats it
If you have any questions, feel free to contact me on discord @Feljx#0260 or via github @Felixpointexe
