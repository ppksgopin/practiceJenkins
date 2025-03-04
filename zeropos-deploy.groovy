pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                dir('ZeroPOSApi-release')
                {
                    sh 'npm install'
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
