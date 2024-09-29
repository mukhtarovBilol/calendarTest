document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    
    // Устанавливаем минимальную дату на сегодня
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', formattedDate);
});