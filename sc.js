document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    
    // Устанавливаем минимальную дату на сегодня
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', formattedDate);
    
    const form = document.getElementById('dateForm');

    form.addEventListener('submit', function(e) {
        const selectedDate = new Date(dateInput.value);
        today.setHours(0, 0, 0, 0); // Устанавливаем время на 00:00:00

        if (selectedDate < today) {
            e.preventDefault(); // Отменяем отправку формы
            alert('Выберите дату сегодня или в будущем.');
            dateInput.value = ''; // Очищаем поле ввода
        }
    });
});