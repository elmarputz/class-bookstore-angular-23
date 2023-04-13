## Launch App 

* export current user and group to UID and GID 
* `export UID=$(id -u) && export GID=$(id -g)`
* `docker compose run --service-ports angular`
* `ng serve --host 0.0.0.0 --public-host PUBLIC_DOMAIN_OR_IP`