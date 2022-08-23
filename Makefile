#.PHONY: build start
INSTALL_DIR=./node_modules/typescript/bin/
TSC=$(INSTALL_DIR)tsc

.PHONY: help
help:			## Show the help.
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@fgrep "##" Makefile | fgrep -v fgrep

.PHONY: build
build:			## Build the project
	$(TSC)

.PHONY: start
start:			## Run start script
	$(TSC)
	npm run start

.PHONY: docker-build
docker-build:		## Build docker image
	docker build . -f docker/Dockerfile -t clean-arch-ts:latest

.PHONY: clean
clean:			## Remove node_modules
	rm -rf node_modules

.PHONY: install
install:		## Install packages
	make clean
	npm i