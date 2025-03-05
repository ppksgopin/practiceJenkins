pipeline {
    agent any

    stages {
        stage('Build') {
           steps {
                dir('zerozero-g2-react-develop') {
                    sh 'pwd && ls -al'
                }
           }
        }
    }
}
