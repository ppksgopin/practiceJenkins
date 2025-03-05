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
                    sh 'install && npm install --save-dev assets-webpack-plugin@3.9.12 && npm run build:stage'
                    sh 'tar -cvf zerozero-build-stage.tar.gz'
                }
           }
        }
        stage('transfer file') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'Deploy-VM', sshCredentials: [encryptedPassphrase: '{AQAAABAAAAAgTWxrUBQJGUm4jGIMUwU+g3jsABzDbgi/5bzXrNte036qUeAnHfg3osNpkyLf1DXw}', key: '', keyPath: '', username: 'root'], transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'zerozero-build-stage.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}
