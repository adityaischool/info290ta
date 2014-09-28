$( document ).ready(function() {
console.log( "ready!" );
createNewTask();
removeOldTask();
});

function createNewTask(){
var count=0;

  $('#target').on("submit", function(event1){
  	event1.preventDefault();

  	if (document.getElementById("tbox").value == "") 
  	{
        $(".para").html("You gotta enter a task !!!");
  	}
  	if (document.getElementById("tbox").value != "") 
  	{
      changeMeter(0.1);

      count = count+1;
  		var taskname=document.getElementById("tbox").value;
    $("#tlist").append('<li class="item" id="itemid"'+count+' style="top: 999px"><p class="item_text">'+taskname+'<button type="button" class="todo-list-remove" id="button-num" >Remove Item</button></p></li>');
        $(".para").html("Item Added !!!");

  	}



  	{


    count++;}
  });  
}

function removeOldTask(){
	console.log( "ready-2!" );
    $(document).on('click', '.todo-list-remove',function(event1){
    console.log("123");
 $(this).parent().parent().animate({
width: "toggle"
}, 50000, function() {
// Animation complete.
});    $(this).parent().parent().remove();
    changeMeter(-0.1);
    $(".para").html("Item Removed !!!");

    });

};

function changeMeter(i){
  console.log( "changing meter" );
    $('#meter').value="0.1";
      console.log( $('#meter').value);

 };