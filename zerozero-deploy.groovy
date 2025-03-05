pipeline {
    agent any

    stages {
        stage('Build and transfer') {
            agent {
                docker {
                    image 'node:10.23.2'
                    args '-u root'
                    reuseNode true
                }
            }
           steps {
                dir('zerozero-g2-react-develop') {
                    sh 'npm install && npm install --save-dev assets-webpack-plugin@3.9.12 && npm run build:stage'
                    sh 'tar -czvf zerozero-build.tar.gz dist/ public/ config/ node_modules/'
                    sshPublisher(publishers: [sshPublisherDesc(configName: 'Deploy-VM', sshCredentials: [encryptedPassphrase: '{AQAAABAAAAAgUFU7XkBcFQEZroMNYvFVfDGmnrgDwztjUpeUbI0ir6+Jr/JSJBNimjhoiW2woFP5}', key: '', keyPath: '', username: 'root'], transfers: [sshTransfer(cleanRemote: false, excludes: '',
                        execCommand: '''tar -xvf zerozero-build.tar.gz -C app
                        docker build -t zerozero-img-stage:latest .
                        docker run -t -d -p 8081:8000 -v /opt/web/logs:/home/node/app/logs --name zerozero-web-stage zerozero-img-stage:latest''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'zerozero-build.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                }
           }
        }
    }
}