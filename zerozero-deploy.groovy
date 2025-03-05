pipeline {
    agent any

    environment {
        DOCKER_HOST = "unix:///var/run/docker.sock"
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'docker:24.0-cli' // 使用帶有 Docker 客戶端的官方鏡像
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                script {
                    sh 'docker pull node:14.21-slim'
                    sh 'docker images'
                }
            }
        }
    }
}
