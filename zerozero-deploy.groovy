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
                    sshPublisher(publishers: [sshPublisherDesc(configName: 'Deploy-VM', sshCredentials: [encryptedPassphrase: '{AQAAABAAAAAgA1tVXvjP2qbJJ54rEm9OlNhbWtSUJRVHVD7BydIxVJWQDz+IP6lasW52JhDm0Pfm}', key: '', keyPath: '', username: 'root'], transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'zerozero-build.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                }
           }
        }
        stage('Remote and deploy') {
            steps {
                script {
                    withCredentials([
                        encryptedPassphrase: '{AQAAABAAAAAgA1tVXvjP2qbJJ54rEm9OlNhbWtSUJRVHVD7BydIxVJWQDz+IP6lasW52JhDm0Pfm}', key: '', keyPath: '', username: 'root']) {
                            sh """
                                pwd
                            """
                        }
                                                
                    
                }
            }
        }
    }
}




        