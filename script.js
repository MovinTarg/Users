$(document).ready(function(){
    $("form").submit(function() {
        console.log($(this).serialize());
        $("tbody").append("<tr><td>"+$("input[name='firstname']").val()+"</td><td>"+$("input[name='lastname']").val()+"</td><td>"+$("input[name='email']").val()+"</td><td>"+$("input[name='contact']").val()+"</td></tr>");
        $("input").val("");
        return false;
    });
});