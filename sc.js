document.addEventListener("DOMContentLoaded", function() {
    // Устанавливаем сегодняшнюю дату как значение для start_date
    var today = new Date();
    var todayString = today.toISOString().split('T')[0];
    document.getElementById("start_date").value = todayString;
    document.getElementById("start_date").min = todayString;

    // Устанавливаем минимальную дату для end_date на 2 дня позже
    updateEndDateMin(today);
});

document.getElementById("start_date").addEventListener("change", function () {
    var startDate = new Date(this.value);
    updateEndDateMin(startDate);
    document.getElementById("end_date").value = ''; // Сбрасываем значение end_date
    checkButtonState(); // Проверяем состояние кнопки
});

function updateEndDateMin(startDate) {
    var twoDaysLater = new Date(startDate);
    twoDaysLater.setDate(startDate.getDate() + 2);
    
    // Обновляем минимальную дату для end_date
    var minEndDate = twoDaysLater.toISOString().split('T')[0];
    document.getElementById("end_date").setAttribute('min', minEndDate);
    
    // Проверяем и сбрасываем end_date, если выбрана недопустимая дата
    var endDateInput = document.getElementById("end_date");
    if (new Date(endDateInput.value) < twoDaysLater) {
        endDateInput.value = '';
    }
}

document.getElementById("end_date").addEventListener("change", function() {
    var startDate = new Date(document.getElementById("start_date").value);
    var minEndDate = new Date(startDate);
    minEndDate.setDate(startDate.getDate() + 2);

    // Проверяем, что выбранная дата возврата не меньше минимально допустимой
    if (new Date(this.value) < minEndDate) {
        alert("Дата возврата должна быть минимум на 2 дня позже даты начала.");
        this.value = '';
    }

    checkButtonState(); // Проверяем состояние кнопки
});