# apiech.github.io
 
Setting up heroku

Add the following as Buildpacks

    https://github.com/timanovsky/subdir-heroku-buildpack
    heroku/nodejs

Add the following Config Vars

    PROJECT_PATH server
    ORIGIN_URL https://apiech.com
    API_KEY "SEND GRID API KEY"
    TO_EMAIL "EMAIL TO SEND TO"
    FROM_EMAIL contact@apiech.com - can be anything but it must include the domain of the website 