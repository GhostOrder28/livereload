This is a simple live reload server that tracks html, css, js and php files. It is built with Node, Gulp and BrowserSync, to make this work you will need **Docker** (docker compose is reccomended):

1. First build the image, be sure to be in the root path of **this repository**:
  - if using docker compose: run `docker compose build`
  - if using vanilla docker: run `build . -t livereload`
2. Then run the container, be sure to be in the root path of **your workspace**:
  - if using docker compose: run `docker compose up`
  - if using vanilla docker: run `docker run --rm -p 3000:3000 -v <your project root path>:/srv/input livereload:latest`

# Motivation

If you use vscode you don't need this as vscode have its own live reload server, but I'm a vim user and recently I've started to learn php but missed the default hot reload feature included in many javascript development tools (like create-react-app or vue-cli). In my search I didn't found a straightforward solution so I decided to make my own liveserver with the information I gathered here and there.
