$(document).ready(function () {
    $(document).on('change', '#ImageUpload', function () {
        var input = $(this).find('input'),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        $('#ImageUploadLabel').text(label.substring(0, 33) + '... ');
        input.trigger('fileselect', [numFiles, label]);
    });

    $(document).on('change', '#PatternUpload', function () {
        var input = $(this).find('input');
        var numFiles = input.get(0).files ? input.get(0).files.length : 1;
        var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        
        if (label.length <= 33) {
            $('#PatternUploadLabel').text(label + ' ');
        } else {
            $('#PatternUploadLabel').text(label.substring(0, 33) + '... ');
        }
        
        input.trigger('fileselect', [numFiles, label]);
    });
})