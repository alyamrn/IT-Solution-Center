document.getElementById('qrIcon').addEventListener('click', function () {
    // Path to your existing QR code image
    var qrImagePath = 'qrCode.jpg';

    // Maximum dimensions for the popup window and the image
    var maxWidth = 600;
    var maxHeight = 700;

    // Load the image to get its dimensions
    var img = new Image();
    img.src = qrImagePath;

    // Create a popup window with the image dimensions
    img.onload = function() {
        var imageWidth = Math.min(this.width, maxWidth);
        var imageHeight = Math.min(this.height, maxHeight);

        // Calculate popup window size
        var popupWidth = Math.min(imageWidth + 200, maxWidth);  // Add some padding if needed
        var popupHeight = Math.min(imageHeight + 250, maxHeight);  // Add some padding if needed

        // Calculate center position for the popup window
        var leftPosition = (window.innerWidth - popupWidth) / 2;
        var topPosition = (window.innerHeight - popupHeight) / 2;

        // Create a popup window with resizable and scrollbars
        var popup = window.open('', 'QR Code', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + leftPosition + ',top=' + topPosition + ',resizable=yes,scrollbars=yes');

        // Set the title of the popup window
        popup.document.title = 'WhatsApp QR Code';

        // Create a heading element and set its text content and styles
        var heading = document.createElement('h2');
        heading.textContent = 'WhatsApp QR Code';
        heading.style.textAlign = 'center';  // Center the text
        heading.style.fontSize = '44px';  // Set the font size

        // Create an image element and set its source and width
        var qrImage = document.createElement('img');
        qrImage.src = qrImagePath;
        qrImage.style.width = '100%'; // Ensure the image fills the popup

        // Append the heading and image to the popup window
        popup.document.body.appendChild(heading);
        popup.document.body.appendChild(qrImage);
    };
});
