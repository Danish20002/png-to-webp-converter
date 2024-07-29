function convertToWebP() {
    const fileInput = document.getElementById('fileInput');
    const outputDiv = document.getElementById('output');
    const downloadButton = document.getElementById('downloadButton');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const webPDataUrl = canvas.toDataURL('image/webp');

                outputDiv.innerHTML = `<img src="${webPDataUrl}" alt="Converted WebP">`;
                downloadButton.href = webPDataUrl;
                downloadButton.style.display = 'block';
            };
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select a PNG file.');
    }
    
}