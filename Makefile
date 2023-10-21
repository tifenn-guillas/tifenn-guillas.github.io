JEKYLL_IMAGE=jekyll/jekyll
NODE_IMAGE=node:lts
APP=tifenn-guillas.github.io

.DEFAULT_GOAL := help

help:
	@echo ""
	@echo "Useful targets:"
	@echo ""
	@echo "  install  > Install project dependencies"
	@echo "  jekyll   > Shell into Jekyll server"
	@echo "  node     > Shell into Node container"
	@echo "  start    > Run the Jekyll development server"
	@echo "  stop     > Stop the Jekyll development server"
	@echo "  restart  > Restart the Jekyll development server"
	@echo "  build    > Build application for production"
	@echo ""

install:
	docker run --rm --volume="$(PWD):/srv/jekyll" -it $(JEKYLL_IMAGE) bundle install
	docker run --rm --volume="$(PWD):/src" -it $(NODE_IMAGE) bash -c "cd /src && npm install -g gulp && yarn && gulp"

jekyll:
	docker run --rm --volume="$(PWD):/srv/jekyll" -it $(JEKYLL_IMAGE) bash

node:
	docker run --rm --volume="$(PWD):/src" -it $(NODE_IMAGE) bash -c "cd /src && bash"

start:
	docker run --name $(APP) --rm --volume="$(PWD):/srv/jekyll" --publish 4000:4000 -it $(JEKYLL_IMAGE) jekyll serve --destination dist

stop:
	docker stop $(APP)

restart:	stop start

build:
	docker run --rm -v $(PWD):/srv/jekyll jekyll/builder:latest bash -c "chmod -R 777 /srv/jekyll && jekyll build --destination dist --trace"

