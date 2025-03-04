pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:14.21-slim'
                }
            }
            steps{
                sh 'node --version'
            }
        }
    }
}
