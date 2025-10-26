// Minimal JS: enhance audio UI later
document.addEventListener('DOMContentLoaded', function(){
  // Auto pause other audios when one plays
  document.querySelectorAll('audio').forEach(function(a){
    a.addEventListener('play', function(){
      document.querySelectorAll('audio').forEach(function(other){
        if(other !== a) other.pause();
      });
    });
  });
});
