$(document).ready(function(){
   $('#addBtn').click(function(){
    var addItem = $('#addedItem').val();   
    $('#itemList').append(`<li class="list-group-item">${addItem}</li>`);
    $("input:text").val("");
    return false;
});
$("#removeBtn").click(function(){
    var removeItem = $('#removedItem').val();
   $('li').remove(`:contains(${removeItem})`);
   $("input:text").val("");
   return false; 
})
})

