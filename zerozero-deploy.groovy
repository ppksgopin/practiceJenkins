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
                    sshPublisher(publishers: [sshPublisherDesc(configName: 'Deploy-VM', sshCredentials: [encryptedPassphrase: '{AQAAABAAAAAgrfmDFjmGzgYrhZO4VmbdXvHeersemqOnXrv18rpHKZGc462V8tNFVqAaCKT9E3oA}', key: '', keyPath: '', username: 'root'], transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'tar -xvf zerozero-build.tar.gz', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'zerozero-build.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                }
           }
        }
        stage('Deploy app') {
            steps {
                script {
                    def remote = [:]
                    remote.name = 'Deploy-VM'
                    remote.host = '172.19.117.190'
                    remote.user = 'root'
                    remote.password = 'Tifalockheart@0215'  // 或使用密鑰
                    remote.allowAnyHosts = true
                }
                sshCommand remote: remote, command: "ls -lrt"
            }
        }
    }
}