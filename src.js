
        function placeorder(){

            document.getElementById("ordersummary").style.display="block";     
             document.getElementById("orderform").style.display="none";  
            uname=document.getElementById("txtName");
            mobile=document.getElementById("txtMobile");
            burger=document.getElementById("optburger");
            roller=document.getElementById("otpRoller");
            fries=document.getElementById("optfires");

            var mcost=0;
            var acost=0;

            var mname=" ";
            var aname=" ";

            if(burger.checked){
                mcost=150;
                mnane=burger.value;
            }
            if(roller.checked){
                mcost=200;
                mname=roller.value;
            }
            if(fries.checked){
                acost=60;
                mcost+=acost;
                aname+=fries.value+"<br>"
            }

            document.getElementById("lblName:").innerHTML=uname.value;
            document.getElementById("lblMobile").innerHTML=mobile.value;
            document.getElementById("lblmeal").innerHTML=mname;
            document.getElementById("lbladd").innerHTML=aname;
            document.getElementById("lblAmount").innerHTML=mcost;


        }