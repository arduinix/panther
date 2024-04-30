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

package: package@createProject package@deleteProject package@readProject package@listProjects package@updateProject

package@createProject:
	mkdir -p dist/createProject
	cp out/project/createProject.js* dist/createProject/
	zip -r ./dist/createProject.zip ./dist/createProject

package@deleteProject:
	mkdir -p dist/deleteProject
	cp out/project/deleteProject.js* dist/deleteProject/
	zip -r ./dist/deleteProject.zip ./dist/deleteProject

package@readProject:
	mkdir -p dist/readProject
	cp out/project/readProject.js* dist/readProject/
	zip -r ./dist/readProject.zip ./dist/readProject

package@listProjects:
	mkdir -p dist/listProjects
	cp out/project/listProjects.js* dist/listProjects/
	zip -r ./dist/listProjects.zip ./dist/listProjects

package@updateProject:
	mkdir -p dist/updateProject
	cp out/project/updateProject.js* dist/updateProject/
	zip -r ./dist/updateProject.zip ./dist/updateProject