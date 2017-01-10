Template.toastrNotification.events({

    // Handle notifications buttons

    'click #showsimple' : function(){
        toastr.success('Without any options','Simple notification!')
    },

    'click #showtoast' : function(){
        var i = -1;
        var toastCount = 0;
        var $toastlast;
        var getMessage = function () {
            var msg = 'Hi, welcome to Inspinia. This is example of Toastr notification box.';
            return msg;
        };

        var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
        var msg = $('#message').val();
        var title = $('#title').val() || '';
        var $showDuration = $('#showDuration');
        var $hideDuration = $('#hideDuration');
        var $timeOut = $('#timeOut');
        var $extendedTimeOut = $('#extendedTimeOut');
        var $showEasing = $('#showEasing');
        var $hideEasing = $('#hideEasing');
        var $showMethod = $('#showMethod');
        var $hideMethod = $('#hideMethod');
        var toastIndex = toastCount++;
        toastr.options = {
            closeButton: $('#closeButton').prop('checked'),
            debug: $('#debugInfo').prop('checked'),
            progressBar: $('#progressBar').prop('checked'),
            positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
            onclick: null
        };
        if ($('#addBehaviorOnToastClick').prop('checked')) {
            toastr.options.onclick = function () {
                alert('You can perform some custom action after a toast goes away');
            };
        }
        if ($showDuration.val().length) {
            toastr.options.showDuration = $showDuration.val();
        }
        if ($hideDuration.val().length) {
            toastr.options.hideDuration = $hideDuration.val();
        }
        if ($timeOut.val().length) {
            toastr.options.timeOut = $timeOut.val();
        }
        if ($extendedTimeOut.val().length) {
            toastr.options.extendedTimeOut = $extendedTimeOut.val();
        }
        if ($showEasing.val().length) {
            toastr.options.showEasing = $showEasing.val();
        }
        if ($hideEasing.val().length) {
            toastr.options.hideEasing = $hideEasing.val();
        }
        if ($showMethod.val().length) {
            toastr.options.showMethod = $showMethod.val();
        }
        if ($hideMethod.val().length) {
            toastr.options.hideMethod = $hideMethod.val();
        }
        if (!msg) {
            msg = getMessage();
        }
        $("#toastrOptions").text("Command: toastr["
            + shortCutFunction
            + "](\""
            + msg
            + (title ? "\", \"" + title : '')
            + "\")\n\ntoastr.options = "
            + JSON.stringify(toastr.options, null, 2)
        );
        toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
    },

    'click #cleartoasts' : function(){
        toastr.clear()
    }


});

