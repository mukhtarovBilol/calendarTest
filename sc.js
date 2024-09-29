document.addEventListener("DOMContentLoaded", function() {
    // Устанавливаем сегодняшнюю дату как значение для start_date
    var today = new Date();
    var todayString = today.toISOString().split('T')[0];
    document.getElementById("start_date").value = todayString;
    document.getElementById("start_date").min = todayString;

    // Устанавливаем минимальную дату для end_date на 2 дня позже
    var twoDaysLater = new Date();
    twoDaysLater.setDate(today.getDate() + 2);
    var twoDaysLaterString = twoDaysLater.toISOString().split('T')[0];
    document.getElementById("end_date").min = twoDaysLaterString;
});

document.getElementById("start_date").addEventListener("change", function () {
    var startDate = new Date(this.value);
    var twoDaysLater = new Date(startDate);
    twoDaysLater.setDate(startDate.getDate() + 2);
    
    // Обновляем минимальную дату для end_date
    var minEndDate = twoDaysLater.toISOString().split('T')[0];
    document.getElementById("end_date").setAttribute('min', minEndDate);
    
    // Сбрасываем значение end_date, если выбрана новая start_date
    document.getElementById("end_date").value = '';
    
    checkButtonState(); // Проверяем состояние кнопки
});