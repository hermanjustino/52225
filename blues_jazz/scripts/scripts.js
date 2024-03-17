window.onload = function() {
    var sentences = ['Stream Live In London Now&emsp;&emsp;|', 'Stream Live In London Now &emsp;&emsp;|', 'Stream Live In London Now &emsp;&emsp;|', 'Stream Live In London Now &emsp;&emsp;'];
    var text = document.getElementById('scrolling-text');
    text.innerHTML = sentences.join(' &nbsp;&nbsp;&nbsp; '); 
}
