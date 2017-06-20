build:
	docker build -t dashboard-example .

run: build
	docker run -p 3000:80 dashboard-example