document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .arrow-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #00ff90;
            color: #000;
            font-size: 24px;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 50%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            transition: background-color 0.3s, color 0.3s;
        }

        .arrow-button:hover {
            background-color: #B108B1;
            color: #fff;
        }
    `;

    document.head.appendChild(style);

    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        mainImage.style.border = '6px solid';
        mainImage.style.borderTopColor = '#B108B1'; // Purple on the top
        mainImage.style.borderLeftColor = '#B108B1'; // Purple on the left
        mainImage.style.borderBottomColor = '#00ff90'; // Green on the bottom
        mainImage.style.borderRightColor = '#00ff90'; // Green on the right
    }
});