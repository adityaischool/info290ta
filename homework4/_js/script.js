$( document ).ready(function() {
console.log( "ready!" );
fetchS();
reqListener();
allEventBinders();
});

function allEventBinders () {
  $( "h1" ).mouseenter(function() {
 /*$("h1").css({"border":"4px solid #FF3333"}); */
 $("h1").css({"background-color":"#FF3333"});
   console.log("Coming home");

});

    $( "h1" ).mouseleave(function() {
 $("h1").css({"background-color":""});
   console.log("Coming home");

});
$('tr').hover(function() {
    $(this).addClass('hover');
}, function() {
    $(this).removeClass('hover');
});

};

function reqListener () {
  console.log(this.responseText);
var oReq = new XMLHttpRequest();
oReq.onreadystatechange=function()
  {
  if (oReq.readyState==4 && oReq.status==200)
    {
    var obj1=JSON.parse(oReq.responseText);
    display(obj1);
    }
  } ;
oReq.open("get", "http://io.milowski.com/usgs/earthquakes/feed/v1.0/summary/all_hour.geojson", true);
oReq.send();
};

function fetchS(){
	console.log( "ready-2!" );
    $('#fetchbutton').click(function(event1){
    console.log("123");
     $('#quaketable').find("tr:gt(0)").remove();
 var resp=reqListener();
});
  };

function display(obj1){
  $("title").html("Earthquakes("+obj1.features.length+")");
  for (var i = 0, len = obj1.features.length; i < len; ++i) {
     var student = obj1.features[i];
     console.error("looping"+obj1.features[i].properties.mag);
     if (i%2==1) {
     $('#quaketable').append('<tr><td class="tg-vn4c">'+obj1.features[i].properties.mag+'</td><td class="tg-vn4c">'+obj1.features[i].properties.place+'</td><td class="tg-vn4c">'+obj1.features[i].properties.time+'</td><td class="tg-vn4c">'+obj1.features[i].geometry.coordinates[0]+'</td><td class="tg-vn4c">'+obj1.features[i].geometry.coordinates[1]+'</td><td class="tg-vn4c">'+obj1.features[i].geometry.coordinates[2]+'</td><td class="tg-vn4c"><a href="'+obj1.features[i].properties.url+'">Link</a></td></td></tr>')};
        if (i%2==0) {
     $('#quaketable').append('<tr><td class="tg-031e">'+obj1.features[i].properties.mag+'</td><td class="tg-031e">'+obj1.features[i].properties.place+'</td><td class="tg-031e">'+obj1.features[i].properties.time+'</td><td class="tg-031e">'+obj1.features[i].geometry.coordinates[0]+'</td><td class="tg-031e">'+obj1.features[i].geometry.coordinates[1]+'</td><td class="tg-031e">'+obj1.features[i].geometry.coordinates[2]+'</td><td class="tg-031e"><a href="'+obj1.features[i].properties.url+'">Link</a></td></td></tr>')};

   };



};