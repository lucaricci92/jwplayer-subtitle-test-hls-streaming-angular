// jwplayer.component.ts
import { Component, OnInit } from '@angular/core';
declare var jwplayer: any;

@Component({
  selector: 'app-jwplayer',
  templateUrl: './jwplayer.component.html',
  styleUrls: ['./jwplayer.component.css'],
})
export class JwplayerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    jwplayer.key = 'ypdL3Acgwp4Uh2/LDE9dYh3W/EPwDMuA2yid4ytssfI=';
    // jwplayer.key = 'ITWMv7t88JGzI0xPwW8I0+LveiXX9SWbfdmt0ArUSyc=';

    const playerJw = jwplayer('myElement').setup({
      image:
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      height: window.innerHeight,
      autostart: false,
      file: 'https://www026.vipanicdn.net/streamhls/cd424a75f2cf08b23b1d7e32edb0620d/ep.1.1677647687.m3u8',
      title: 'Oceans',
      description: 'etoski on Codepen',
      aboutlink: 'https://www.jwplayer.com/',
      tracks: [
        {
          file: './assets/subtitle.srt',
          label: 'Italiano',
          kind: 'captions',
          default: 'true',
        },
      ],
      captions: { color: '#ffb800', fontSize: 30, backgroundOpacity: 0 },
      sharing: {
        sites: [
          'facebook',
          'twitter',
          'tumblr',
          'googleplus',
          {
            icon: '//support-static.jwplayer.com/images/awesome.svg',
            src: 'http://www.jwplayer.com/?',
            label: 'jwplayer',
          },
        ],
        code: encodeURI(
          "<iframe src='your_sharing_url' width='480' height='320'></iframe>"
        ),
        link: 'your_sharing_url',
      },
      width: 640,
      aspectratio: '16:9',
      mute: false,
      primary: 'html5',
    });
  }
}
