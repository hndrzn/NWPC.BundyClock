function highlightButton(button) {
    
    var buttons = document.querySelectorAll('.time-in, .time-out, .lunch-in, .lunch-out');
    buttons.forEach(function (btn) {
        btn.classList.remove('highlight');
    });

    button.classList.add('highlight');
}
