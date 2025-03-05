pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:10.23.2'

                }
            }
           steps {
                dir('zerozero-g2-react-develop') {
                    sh 'sudo chown -R $(whoami):$(whoami) ~/.npm'
                    sh 'npm install'
                }
           }
        }
    }
}
