Template.codeEditor.rendered = function(){

    // Initialize codeMirror plugin

    var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true,
        theme:"ambiance"
    });

    var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true
    });
}