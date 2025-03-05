pipeline {
    agent {
        docker {
            image: node:14.21-slim
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