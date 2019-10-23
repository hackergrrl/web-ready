# web-ready

A tiny command-line tool that serves a web page with a big button that says READY. Until the button is pressed, the process will not exit.

This lets you do neat things, like running `ready` on your laptop, `&&`-chained to a command you want to run at some time in the near future.

```
$ ready && picast video.mp4
```

You can run this command, walk off with your phone or tablet or friend's computer, and when you're ready, visit htt10.0.0.10:5000 (or whatever your local ip is), tap READY, and the video will start playing on the TV (in this case, using [picast](https://github.com/noffle/picast).

# License

ISC
