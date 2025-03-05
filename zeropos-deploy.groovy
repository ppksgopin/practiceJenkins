pipeline {
    agent {
        docker {
            image 'node:14.21-slim'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Test') {
            steps {
                sh 'echo "test text."'
            }
        }
    }
}