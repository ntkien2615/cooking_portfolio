function openModal(imageSrc) {
    // Tạo modal container
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;

    // Tạo hình ảnh trong modal
    const modalImage = document.createElement('img');
    modalImage.src = imageSrc;
    modalImage.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease;
    `;

    // Thêm vào modal
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    // Thêm animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '1';
    }, 10);

    // Đóng modal khi click
    modal.addEventListener('click', function() {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });

    // Đóng modal với phím ESC
    const handleEsc = function(event) {
        if (event.key === 'Escape') {
            modal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', handleEsc);
            }, 300);
        }
    };
    document.addEventListener('keydown', handleEsc);
}
