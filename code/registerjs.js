var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.innerHTML = "<i class=\"material-icons-sharp\">thumb_up_off_alt</i>";
        check++;
    }
    else
    {
        cta.innerHTML = "<i class=\"material-icons-sharp\">touch_app</i>";
        check = 0;
    }
})