all: clean install build install-ci package

clean:
	@echo "Cleaning up..."
	rm -rf node_modules dist out

install:
	@echo "Installing dependencies..."
	npm install

build:
	@echo "Building the project..."
	npm run build

install-ci:
	@echo "Installing dependencies for CI..."
	rm -rf node_modules
	npm ci

package: package@createProject package@readProject package@dependencies

package@createProject:
	mkdir -p dist/createProject
	cp out/project/createProject/* dist/createProject/
	zip -r ./dist/createProject.zip ./dist/createProject

package@readProject:
	mkdir -p dist/readProject
	cp out/project/readProject/* dist/readProject/
	zip -r ./dist/readProject.zip ./dist/readProject

package@dependencies:
	mkdir -p dist/dependencies
	cp -R out/lib dist/dependencies/
	mkdir -p dist/dependencies/nodejs
	cp package.json dist/dependencies/nodejs/
	cp package-lock.json dist/dependencies/nodejs/
	cd dist/dependencies/nodejs && npm install --omit=dev
	zip -r ./dist/dependencies.zip ./dist/dependencies