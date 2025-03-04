pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:14.21-slim'
                    args '-v ZeroPOSApi-release:/run'
                }
            }
            steps{
                sh 'node --version'
            }
        }
    }
}
