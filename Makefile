JEKYLL_IMAGE=jekyll/jekyll
NODE_IMAGE=node:lts
APP=tifenn-guillas.github.io

.DEFAULT_GOAL := help

help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'


##
## Useful targets:
##---------------------------------------------------------------------------
install:        ## Install project dependencies
install:
	docker run --rm --volume="$(PWD):/srv/jekyll" -it $(JEKYLL_IMAGE) bundle install
	docker run --rm --volume="$(PWD):/src" -it $(NODE_IMAGE) bash -c "cd /src && npm install -g gulp && yarn && gulp"

jekyll:         ## Shell into Jekyll server
jekyll:
	docker run --rm --volume="$(PWD):/srv/jekyll" -it $(JEKYLL_IMAGE) bash

node:           ## Shell into Node container
node:
	docker run --rm --volume="$(PWD):/src" -it $(NODE_IMAGE) bash -c "cd /src && bash"

start:          ## Run the Jekyll development server
start:
	docker run --name $(APP) --rm --volume="$(PWD):/srv/jekyll" --publish 80:4000 -it $(JEKYLL_IMAGE) jekyll serve --destination dist

stop:           ## Stop the Jekyll development server
stop:
	docker stop $(APP)

restart:        ## Restart the Jekyll development server
restart:	stop start

build:          ## Build application for production
build:
	docker run --rm -v $(PWD):/srv/jekyll jekyll/builder:latest bash -c "chmod -R 777 /srv/jekyll && jekyll build --destination dist --trace"

