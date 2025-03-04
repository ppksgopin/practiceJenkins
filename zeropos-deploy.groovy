pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                script {
                    docker.image('node:14.21-slim').inside {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
