document.getElementById('loadButton').addEventListener('click', function() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = ''; // Очищаем контейнер перед загрузкой новых картинок

            if (data && data.length > 0) {
                data.forEach(cat => {
                    const img = document.createElement('img');
                    img.src = cat.url;
                    img.alt = "Котик";
                    img.classList.add('catImage');
                    imageContainer.appendChild(img);
                });
            } else {
                alert('Не удалось загрузить картинки.');
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке картинок:', error);
        });
});