<script>
        const kangal = document.querySelector("#kangal");
        const kaktus = document.querySelector("#kaktus");

        var puan = 0;
        function zipla() {
            puan =puan+ 5;
            console.log(puan);
            document.getElementById("puan").innerHTML ="Score: " + puan;
            if (kaktus.classList != "kaktus-animate") {
                kaktus.classList.add("kaktus-animate");
            }

            if (kangal.classList != "kangal-animate") {
                kangal.classList.add("kangal-animate");
                setTimeout(function () {
                    kangal.classList.remove("kangal-animate");
                },500)
            }
            kangal.classList.add("kangal-animate");
        }
        var yanma = setInterval(function () {
            var kangalc = parseInt(window.getComputedStyle(kangal).getPropertyValue("bottom"));
            var kaktusc = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));
            
            if (kaktusc > 0 && kaktusc < 70 && kangalc < 70) {
                alert("Game Over.. Your score is:"+puan);   
            }
        }, 10)



    </script>