# Web dev skills challenge boilerplate

## Installation requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Version control

### Git
Set [your identity](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

## Install / start application
1) Clone the application locally
2) `cd web-dev-skills-challenge-boilerplate`
3) Install composer dependencies through the container https://laravel.com/docs/11.x/sail#installing-composer-dependencies-for-existing-projects
4) `cp .env.example .env`
5) `./vendor/bin/sail up`
6) `./vendor/bin/sail artisan key:generate`
7) `./vendor/bin/sail npm ci`
8) `./vendor/bin/sail npm run dev`
9) `./vendor/bin/sail artisan migrate`
10) `./vendor/bin/sail artisan db:seed`

## Access application
[http://localhost](http://localhost)

## Push to remote

### Github
Create [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with scope 'repo'

## 3rd-party documentation
- [Laravel](https://laravel.com/docs/11.x)
- [Laravel Sail](https://laravel.com/docs/11.x/sail)
- [Vite](https://laravel.com/docs/11.x/vite#main-content)
- [Vue](https://v3.vuejs.org/guide/introduction.html)
- [Tailwind](https://tailwindcss.com/docs)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/)
