IMAGE=nextjs
APP=tifenn-guillas.github.io
UID := 1000
GID := 1000

.DEFAULT_GOAL := help

help:
	@echo ""
	@echo "Useful targets:"
	@echo ""
	@echo "  install  > Install project dependencies"
	@echo "  node     > Shell into Node container"
	@echo "  start    > Run the application in development mode"
	@echo "  stop     > Stop the application"
	@echo "  restart  > Restart the application in development mode"
	@echo "  build    > Build the application for production"
	@echo ""

# DO NOT NOT LAUNCH THIS ONE. IT'S FOR TO INIT A PROJECT.
init:
	docker build -t $(IMAGE) .
	docker run -it --user $(UID):$(GID) --volume="$(CURDIR):/src" $(IMAGE) bash -c "[ ! -f package.json ] && npx create-next-app@latest"

install:
	docker build -t $(IMAGE) .
	docker run --rm --volume="$(CURDIR):/src" -it $(IMAGE) bash -c "yarn"

node:
	docker run --rm --volume="$(CURDIR):/src" -it $(IMAGE) bash -c "cd /src && bash"

start:
	docker run --name $(APP) --rm --volume="$(PWD):/src" --publish 80:80 --workdir /src -it $(IMAGE) yarn run dev

stop:
	docker stop $(APP)

restart:	stop start

build:
	#docker run --rm -v $(PWD):/srv/jekyll jekyll/builder:latest bash -c "chmod -R 777 /srv/jekyll && jekyll build --destination dist --trace"
	docker run --name $(APP) --rm --volume="$(PWD):/src" --workdir /src -it $(IMAGE) yarn run build

