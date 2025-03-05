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
                    sshPublisher(publishers: [sshPublisherDesc(configName: 'Deploy-VM', sshCredentials: [encryptedPassphrase: '{AQAAABAAAAAgbzFnpqa7CNwj4wuzxt/+oqOFZrHTjpEzYieMJYBVip4ROIER3CBQkXfe4T7jxLNW}', key: '', keyPath: '', username: 'root'], transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'tar -xvf zerozero-build.tar.gz -C app', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'zerozero-build.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                }
           }
        }
    }
}




        