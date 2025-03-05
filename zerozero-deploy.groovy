pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:10.23.2'
                    args '-u root'
                }
            }
           steps {
                dir('zerozero-g2-react-develop') {
                    sh 'chown -R $(whoami):$(whoami) ~/.npm'
                    sh 'npm install'
                }
           }
        }
    }
}
