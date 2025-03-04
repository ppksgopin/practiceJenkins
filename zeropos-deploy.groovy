pipeline {
    agent any
    stages {
        stage('Build') {
            steps{
                script {
                    sh 'docker run --rm node:14.21-slim node --version'
                }
                
            }
        }
    }
}