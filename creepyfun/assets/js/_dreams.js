$(document).ready(function () {
    $('#CopyDirectLinkButton').on('click', function () {
        $('#CopyDirectLink').select();
        document.execCommand("copy");
    })
    
    $('#DislikeButton').on('click', function() {
        $(this).toggleClass('btn-primary')
        $(this).toggleClass('btn-danger')
    })
    
    $('#LikeButton').on('click', function() {
        $(this).toggleClass('btn-primary')
        $(this).toggleClass('btn-success')
    })
})