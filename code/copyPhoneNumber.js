document.getElementById('phoneIcon').addEventListener('click', function () {

    var phoneNumber = '011-3751 0254';

    var tempInput = document.createElement('input');
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    document.execCommand('copy');

    document.body.removeChild(tempInput);

    alert('Our contact number have been copy to your clipboard, feel free to contact us at +6' + phoneNumber);
});