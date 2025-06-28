const markAllBtn = document.getElementById('mark-all');
const notifications = document.querySelectorAll('.notification');
const unreadCountEl = document.getElementById('unread-count');

let unreadCount = document.querySelectorAll('.notification.unread').length;
unreadCountEl.textContent = unreadCount;

const updateUnreadCount = () => {
    unreadCountEl.textContent = unreadCount;
};

notifications.forEach(notification => {
    notification.addEventListener('click', () => {
        if (notification.classList.contains('unread')) {
            notification.classList.remove('unread');
            notification.classList.add('read');
            unreadCount--;
            updateUnreadCount();
        }
    });
});

markAllBtn.addEventListener('click', () => {
    notifications.forEach(notification => {
        if (notification.classList.contains('unread')) {
            notification.classList.remove('unread');
            notification.classList.add('read');
        }
    });
    unreadCount = 0;
    updateUnreadCount();
});