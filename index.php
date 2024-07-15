<?php
    echo "
        <!DOCTYPE html />
        <html lang='en'>
        <head>
            <meta charset='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <link rel='stylesheet' href='assets/css/style.css' />
            <title>Music Web App</title>
        </head>
        <body>
            <div class='player'>
                <div class='wrapper'>
                    <div class='details'>
                        <div class='now-playing'>PLAYING x OF y</div>
                        <div class='track-art'></div>
                        <div class='track-name'>Track Name</div>
                        <div class='track-artist'>Track Artist</div>
                    </div>
                    <div class='slider-container'>
                        <div class='current-time'>00:00</div>
                        <input type='range' min='1' max='100' volume='0' class='seek-slider' onchange='seekTo()' />
                        <div class='total-duration'>00:00</div>
                    </div>
                    <div class='slider-container'>
                        <i class='fa fa-volume-down'></i>
                        <input type='range' min='1' max='100' volume=')' class='volume-slider' onchange='setVolume()' />
                        <i class='fa fa-volume-up'></i>
                    </div>
                    <div class='buttons'>
                        <div class='random-track' onclick='randomTrack()'>
                            <i class='fas fa-random fa-2x' title='random'></i>
                        </div>
                        <div class='prev-track' onclick='prevTrack()'>
                            <i class='fa fa-step-backward fa-2x'></i>
                        </div>
                        <div class='playpause-track' onclick='playpauseTrack()'>
                            <i class='fa fa-play-circle fa-5x'></i>
                        </div>
                        <div class='next-track' onclick='nextTrack()'>
                            <i class='fa fa-step-forward fa-2x'></i>
                        </div>
                        <div class='repeat-track' onclick='repeatTrack()'>
                            <i class='fa fa-repeat fa-2x' title='repeat'></i>
                        </div>
                    </div>
                    <div id=wave' class='loader'>
                        <span class='stroke'></span>
                        <span class='stroke'></span>
                        <span class='stroke'></span>
                        <span class='stroke'></span>
                        <span class='stroke'></span>
                        <span class='stroke'></span>
                        <span class='stroke'></span>
                    </div>
                </div>
            </div> 
            <script src='assets/js/script.js'></script>
        </body>
        </html>
    ";
?>