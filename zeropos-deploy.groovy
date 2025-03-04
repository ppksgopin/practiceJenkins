pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                dir('ZeroPOSApi-release')
                {
                    sh 'pwd'
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
