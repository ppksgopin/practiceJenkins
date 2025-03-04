pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            agent {
                docker {
                    image 'node:14.21-slim'
                    args '-v ZeroPOSApi-release:/run'
                }
            }
            steps {
                sh 'cd /run'
                sh 'pwd'
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
