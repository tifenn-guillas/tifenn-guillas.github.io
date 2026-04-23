NODE_IMAGE := "node:lts"
APP := "tifenn-guillas.github.io"

[private]
default:
    @just --list

# Install project dependencies
install:
    docker run --rm --volume="{{justfile_directory()}}:/app" -w /app {{NODE_IMAGE}} npm install

# Run the development server (http://localhost:4321)
dev:
    docker run --name {{APP}} --rm --volume="{{justfile_directory()}}:/app" -w /app --publish 4321:4321 -it {{NODE_IMAGE}} npm run dev -- --host

# Stop the development server
stop:
    docker stop {{APP}}

# Build application for production
build:
    docker run --rm --volume="{{justfile_directory()}}:/app" -w /app {{NODE_IMAGE}} npm run build

# Preview the production build (http://localhost:4321)
preview:
    docker run --name {{APP}} --rm --volume="{{justfile_directory()}}:/app" -w /app --publish 4321:4321 -it {{NODE_IMAGE}} npm run preview -- --host

# Open a shell in the Node container
shell:
    docker run --rm --volume="{{justfile_directory()}}:/app" -w /app -it {{NODE_IMAGE}} bash
