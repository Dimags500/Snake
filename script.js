
      
        document.onkeydown = checkKey;

        let x = getViewport();
        const w = x[0]-140;
        const h = x[1]-30 ;
        let t = 0;
        let l = 0;
        let box = document.getElementById('box');
        let inter;
        let speed = 5;
        let snakeLen ; 

        let target = document.getElementsByClassName('target');
        document.onload= targetLoad();

        function targetLoad()
        {
            let top = Math.floor(Math.random() * (h- 100));
            let left = Math.floor(Math.random() * (w- 100));


            target[0].style.top = top+'px';
            target[0].style.left = left+'px';
        }



    function checkKey(e) {

        snakeLen = box.innerHTML += '*';


    e = e || window.event;


        clearInterval(inter);

        if (e.keyCode == '32') {
            //space

            clearInterval(inter);
            snakeLen = 'stop';


        }

    if (e.keyCode == '38') {
        // up arrow


       inter = setInterval(() => {
            box.style.top = t+'px';
            if(t > 0 )
                t--;
            
        }, speed);

      

    }
     if (e.keyCode == '40') {
        // down arrow

        inter = setInterval(() => {
         
            box.style.top = t+'px';
            if(t<h )
                t++;
            
        }, speed);
    }
     if (e.keyCode == '37') {
       // left arrow



      inter = setInterval(() => {
            box.style.left = l+'px';
            if( l > 0 )
                l--;
        }, speed);

     

    }
     if (e.keyCode == '39') {
       // right arrow





      inter = setInterval(() => {
            box.style.left = (l).toString()+'px';
            if(l<w )
                l++;
        }, speed);

        // setInterval(() => {
        //     box.innerHTML = l;
        // }, speed);

    }

}


        //
        function getViewport() {

            var viewPortWidth;
            var viewPortHeight;

            // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
            if (typeof window.innerWidth != 'undefined') {
                viewPortWidth = window.innerWidth,
                    viewPortHeight = window.innerHeight
            }

            // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
            else if (typeof document.documentElement != 'undefined'
                && typeof document.documentElement.clientWidth !=
                'undefined' && document.documentElement.clientWidth != 0) {
                viewPortWidth = document.documentElement.clientWidth,
                    viewPortHeight = document.documentElement.clientHeight
            }

            // older versions of IE
            else {
                viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
                    viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
            }
            return [viewPortWidth, viewPortHeight];
        }