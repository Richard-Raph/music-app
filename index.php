<?php
echo "
    <!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' integrity='sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==' crossorigin='anonymous' referrerpolicy='no-referrer' />
            <link rel='stylesheet' href='assets/css/style.css' />
            <title>Music Web App</title>
        </head>
        <body>
            <div class='player'>
                <div class='wrapper'>
                    <div class='details'>
                        <div class='now-playing'>PLAYING x OF y</div>
                        <div class='track-art'>
                            <img id='track-image' src='' alt='Track Art' />
                        </div>
                        <div class='track-name'>Track Name</div>
                        <div class='track-artist'>Track Artist</div>
                    </div>
                    <div class='slider-container'>
                        <div class='current-time'>00:00</div>
                        <input type='range' min='0' max='100' title='seek' value='0' class='seek-slider' onchange='seekTo()' />
                        <div class='total-duration'>00:00</div>
                    </div>
                    <div class='slider-container'>
                        <i class='fa fa-volume-down'></i>
                        <input type='range' min='0' max='100' title='volume' value='100' class='volume-slider' onchange='setVolume()' />
                        <i class='fa fa-volume-up'></i>
                    </div>
                    <div class='buttons'>
                        <div class='random-track' onclick='randomTrack()'>
                            <i class='fas fa-random fa-1x' title='random'></i>
                        </div>
                        <div class='prev-track' onclick='prevTrack()'>
                            <i class='fa fa-step-backward fa-1x'></i>
                        </div>
                        <div class='playback-track' onclick='playbackTrack()'>
                            <i class='fa fa-3x'></i>
                        </div>
                        <div class='next-track' onclick='nextTrack()'>
                            <i class='fa fa-step-forward fa-1x'></i>
                        </div>
                        <div class='repeat-track' onclick='repeatTrack()'>
                            <i class='fa fa-repeat fa-1x' title='repeat'></i>
                        </div>
                    </div>
                    <div class='wave'>
                        <div class='loader'></div>
                    </div>
                </div>
            </div> 
            <script src='assets/js/script.js'></script>
        </body>
    </html>
";
?>