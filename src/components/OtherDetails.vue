<template>
    <div>
        <div id="features-1">
            <div class="writing-on-the-wall">Design & Exterior</div>
            <div class="drop-down-span"><router-link to='/'>+</router-link></div>
        </div>
       
        <div id="features-1"> 
            <div class="writing-on-the-wall">Interior</div> 
            <div class="drop-down-span">+</div> 
        </div>
               
        <div id="features-1">
            <div class="writing-on-the-wall">Power & Sound</div> 
            <div class="drop-down-span">+</div>
        </div>

        <div id="features-1">
            <div class="writing-on-the-wall">Wheels & Chasis</div> 
            <div class="drop-down-span">+</div> 
        </div>

        <div id="features-2">
            <div class="writing-on-the-wall">Performance & Fuel Economy</div>
            <div class="drop-down-span">+</div> 
        </div>

    </div>  
</template>

<script>
export default {
    name: 'OtherDetails'
}
</script>

<style>
#features-1{
    border-bottom: 0.1px solid dimgray;
    margin-left: 15px;
    width:675px;
    height: 44.6px;
}
#features-2{
    margin-left: 15px;
    width: 675px;
    height: 44.6px;
}
.writing-on-the-wall{
    float:left;
    margin-top: 3px;
    width:95%;
    height: 100%;
}
.drop-down-span{
    float:left;
    font-size: 50px;
    margin-top: -29px;
    width:5%;
    height: 90%;
}

</style>