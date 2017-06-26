build_client:
	cd client; webpack

build_server:
	tsc -p server

build_docker:
	docker build -t dashboard-example .

run: build_server build_client build_docker
	docker run -p 3000:3000 dashboard-example