{
  "name": "assets",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build:css": "sass sass/main.scss sass/public/css/main.css --watch",
    "start:dev": "live-server html/tag.html"
  },
  "devDependencies": {
    "live-server": "^1.2.2",
    "sass": "^1.69.5"
  }
}