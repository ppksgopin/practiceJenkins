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
                    sh 'pwd'
                    sh 'node -v'
                    sh 'npm -v'
                }
           }
        }
    }
}
