
document.querySelectorAll('.textnav').forEach(function(block) {
    block.addEventListener('click', function() {
        this.blur();
    });
});
document.querySelectorAll('.navicons').forEach(function(icons) {
    icons.addEventListener('click', function() {
        this.blur();
    });
});
document.querySelectorAll('.explore').forEach(function(explore) {
    explore.addEventListener('click', function() {
        this.blur();
    });
});
document.querySelectorAll('.slidebutton').forEach(function(button) {
    button.addEventListener('mousedown', function(event) {
        event.preventDefault();
        this.blur();
    });
});
document.querySelectorAll('.submit').forEach(function(submit) {
    submit.addEventListener('mousedown', function(event) {
        event.preventDefault();
        this.blur();
    });
});