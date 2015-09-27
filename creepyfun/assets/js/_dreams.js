$(document).ready(function () {
    $('#CopyDirectLinkButton').on('click', function () {
        $('#CopyDirectLink').select();
        document.execCommand("copy");
    })

    $('#DislikeButton').on('click', function () {
        toggleLike(false);
    })

    $('#LikeButton').on('click', function () {
        toggleLike(true);
    })

    var toggleLike = function (thumbsUp) {
        if (thumbsUp) {
            $('#LikeButton').toggleClass('btn-primary')
            $('#LikeButton').toggleClass('btn-success')
            $('#DislikeButton').removeClass('btn-primary')
            $('#DislikeButton').addClass('btn-danger')
        } else {
            $('#DislikeButton').toggleClass('btn-primary')
            $('#DislikeButton').toggleClass('btn-danger')
            $('#LikeButton').removeClass('btn-primary')
            $('#LikeButton').addClass('btn-success')
        }
        
        if ($('#LikeButton').hasClass('btn-primary')) {
            $.ajax({
                type: 'POST',
                url: '/dreams/' + $('#id').val(),
                data: { like: true, dislike: false }
            });
        } else if ($('#DislikeButton').hasClass('btn-primary')) {
            $.ajax({
                type: 'POST',
                url: '/dreams/' + $('#id').val(),
                data: { like: false, dislike: true }
            });
        } else {
            $.ajax({
                type: 'POST',
                url: '/dreams/' + $('#id').val(),
                data: { like: false, dislike: false }
            });
        }
    }
})