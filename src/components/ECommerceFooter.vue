<template>
<div>

        <div id="top">
            <div id="column-one">
                <div id="column-one-container">
                    <h5 id="little-headers">LET US HELP YOU</h5>
                    <a>Help center</a><br>
                    <a>Contact Us</a><br>
                    <a>How to shop on Gbogbonise</a><br>
                    <a>Delivery Options and timeliness</a><br>
                    <a>How to return a Car on Gbogbonise</a><br>
                    <a>Corporate and bulk purchases</a><br>
                </div>
            </div>

            <div id="column-two">
                <div id="column-two-container">
                    <h5 id="little-headers">ABOUT GBOGBONISE</h5>
                    <a>About us</a><br>
                    <a>Jumia Careers</a><br>
                    <a>Jumia Express</a><br>
                    <a>Terms and Conditions</a><br>
                    <a>Privacy policy</a><br>
                    <a>Tech Week</a><br>
                    <a>Gbogbonise Prime</a><br>
                </div>
            </div>

            <div id="column-three">
                <div id="column-three-container">
                    <h5 id="little-headers">MAKE MONEY ON GBOGBONISE</h5>
                    <a>Sell on Gbogbonise</a><br>
                    <a>Become an Affiliate Partner</a><br>
                    <a>Become a Sales Consultant</a><br>
                </div>
            </div>

            <div id="column-four">
                <div id="column-four-container">
                    <div id="column-four-container-top"><h5 id="little-headers">GBOGBONISE INTERNATIONAL</h5></div>
                    <div id="column-four-container-left">
                        <a>South Africa</a><br>
                        <a>Ghana</a><br>
                        <a>Togo</a><br>
                        <a>Algeria</a><br>
                        <a>Egypt</a><br>
                        <a>Cameroon</a><br>
                    </div>
                    <div id="column-four-container-right">
                        <a>USA</a><br>
                        <a>England</a><br>
                        <a>France</a><br>
                        <a>China</a><br>
                        <a>Germany</a><br>
                    </div>
                </div>
            </div>
        </div>

        <div id="middle">
            <div id="middle-left">
                <div id="middle-left-top"><h5 id="little-headers">JOIN US ON</h5></div>
                <div id="middle-left-bottom"><span><i class="fab fa-twitter-square"></i></span></div>
            </div>
            <div id="middle-right">
                <div id="middle-right-top"><h5 id="little-headers">PAYMENT METHODS AND DELIVERY PARTNERS</h5></div>
                <div id="middle-right-bottom"></div>
            </div>
        </div>

        <div id="bottom">
            <div>
                <a>TRACTORS</a><span> | </span>
                <a>COMBINE HARVESTERS</a><span> | </span>
                <a>MOTOR CYCLES</a><span> | </span>
                <a>BULLDOZERS</a><span> | </span>
                <a>TRAILERS</a><span> | </span>
                <a>ARMOURED VEHICLES</a>
            </div>
            <div>
            &copy; 2020
            </div> 
        </div>
    </div>
    
</template>

<script>
export default {
    name:'ECommerceFooter'
}
</script>

<style scoped>
*{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 12px;
}
#little-headers{
    font-size: 15px;
}

#top, #middle, #bottom{
    width: 95%;
    margin-top: 10px;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 10px;
}
#top{
    height: 170px;
}
#middle{
    height: 50px;
}
#bottom{
    text-align: center;
    border-top: 4px solid rebeccapurple;
    height: 30px;
}

#column-one, #column-two, #column-three, #column-four{
    float:left;
    width:25%;
    height: 100%;
}

#column-one-container, #column-two-container, #column-three-container, #column-four-container{
    width:90%;
    height: 100%;
    margin-left: 5%;
    margin-right: 5%;
}

#column-four-container-top{
    float:left;
    width: 100%;
    height: 10%;
}
#column-four-container-left, #column-four-container-right{
    float: left;
    margin-top:8px;
    width:48%;
    height: 90%;
}
#column-four-container-left{
    margin-right: 4%;
}


#middle-left{
    float:left;
    width:25%;
    height: 100%;
}
#middle-left-top, #middle-left-bottom{
    width:94%;
    margin-left: 3%;
    margin-right: 3%;
}
#middle-left-top{
    height: 25%;

}
#middle-left-bottom{
    height: 75%;
}
#middle-right{
    float: left;
    width:75%;
    height: 100%;
}
#middle-right-top, #middle-right-bottom{
    width:97%;
    margin-left: 1.5%;
    margin-right: 1.5%;
}
#middle-right-top{
    height: 25%;

}
#middle-right-bottom{
    height: 75%;
}



</style>