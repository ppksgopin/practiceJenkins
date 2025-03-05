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
                    sh 'npm install && npm install --save-dev assets-webpack-plugin@3.9.12 && npm run build:stage'
                    sh 'tar -cvf zerozero-build-stage.tar.gz'
                }
           }
        }
    }
}
