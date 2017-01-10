Template.formUpload.rendered = function(){

    var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
        lineNumbers: true,
        matchBrackets: true
    });

    var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
        lineNumbers: true,
        matchBrackets: true
    });

    var editor_two = CodeMirror.fromTextArea(document.getElementById("code3"), {
        lineNumbers: true,
        matchBrackets: true
    });
};