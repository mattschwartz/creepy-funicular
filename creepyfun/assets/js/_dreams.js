$(document).ready(function () {
    $('#CopyDirectLinkButton').on('click', function () {
        $('#CopyDirectLink').select();
        document.execCommand("copy");
    })
})