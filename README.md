#blue-green-DevOps-Project
Blue-Green Deployment CI/CD Pipeline (Jenkins + Docker + Nginx + Monitoring)

Overview:

This project demonstrates a real-world DevOps CI/CD pipeline implementing Blue-Green Deployment with zero downtime, 
automated via Jenkins and monitored using Prometheus & Grafana.


Architecture:



Tech Stack:

1. Node.js (Express)
2. Docker & Docker Compose
3. Jenkins (CI/CD Pipeline)
4. Nginx (Reverse Proxy)
5. Prometheus (Metrics)
6. Grafana (Visualization)


Deployment Strategy:

Blue → Current live version
Green → New version deployment
After successful health check → traffic switches to Green
If failure → rollback to Blue


Setup:

1. Clone Repo-
git clone https://github.com/Mahimtule/blue-green-DevOps-Project.git
cd blue-green-DevOps-Project

2. Create Network-
docker network create devops-net
Add All the containers in this network

3. Setup Jenkins-
docker run -d \--name jenkins \-p 8080:8080 \-p 50000:50000 \-v jenkins_home:/var/jenkins_home \ -v /var/run/docker.sock:/var/run/docker.sock \jenkins/jenkins:lts

docker exec -u root -it jenkins bash

apt update && apt install docker.io -y

apt install docker-compose -y

exit

4. Start Services-
docker compose -f docker-compose.nginx.yml up -d
docker compose -f docker-compose.monitoring.yml up -d
docker compose -f docker-compose.blue.yml up -d


Access:

App- http://localhost
Jenkins- http://localhost:8080
Prometheus- http://localhost:9090
Grafana- http://localhost:3001


CI/CD Pipeline (Jenkins)

Pipeline automates:
Build Docker image
Deploy to inactive environment
Run health checks
Switch traffic via Nginx
Update active environment
Rollback on failure


GitHub Webhook:

Integrated using ngrok
Automatically triggers pipeline on every git push


Monitoring:

Prometheus collects:
Application metrics (/metrics)
Container metrics (cAdvisor)
System metrics (Node Exporter)

Grafana dashboards show:
CPU & Memory usage (selected containers)
Request count & rate
Blue Green Health state


Key Learnings:

Blue-Green Deployment strategy
CI/CD automation with Jenkins
Docker networking & container orchestration
Reverse proxy (Nginx) traffic switching
Monitoring with Prometheus & Grafana
Real-world debugging & troubleshooting


Author:

Mueez Mahimtule

GitHub: https://github.com/Mahimtule
LinkedIn: http://linkedin.com/in/mahimtule-mueez
