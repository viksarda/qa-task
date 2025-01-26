#Makefile was created to help with docker commands. Main scripts are located inside 'package.json'

#Build the docker containers
up:
	docker compose up -d

#Shuts down the containers
down:
	docker compose down -v

#Run tests inside the docker container (Firstly build the container "make up")
e2e:
	docker exec qa-task-cypress-1 npm run e2e

#Prunes every image and volume (Make sure there are no active containers)
prune:
	docker system prune -a --volumes

#Enter inside the container
debug:
	docker exec -it qa-task-cypress-1 /bin/bash