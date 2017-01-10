Template.notifications.rendered = function () {

    // Popover demo
    $("[data-toggle=popover]").popover({
        trigger: "focus"
    });

    // Tooltips demo
    $("[data-toggle=tooltip]").tooltip();
}