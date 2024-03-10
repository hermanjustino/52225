window.onload = function() {
    var sentences = ['Julian Hackney&emsp;&emsp;|', 'Bobby Hackney &emsp;&emsp;|', 'David Hackney &emsp;&emsp;|', 'Dannis Hackney &emsp;&emsp;'];
    var text = document.getElementById('scrolling-text');
    text.innerHTML = sentences.join(' &nbsp;&nbsp;&nbsp; '); // join sentences with a space

    document.getElementById('play-button').addEventListener('click', function() {
        var audioPlayer = document.getElementById('audio-player');
        audioPlayer.play();
    });
}
