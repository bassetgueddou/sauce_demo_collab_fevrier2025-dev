pipeline {
    agent {
        docker {
            image "cypress/browsers"
            args '--entrypoint=""'
        }
    }

    parameters { string(name: 'TAGS', defaultValue: 'staging', description: 'tags') }

    stages {
        stage('installation') {
            steps {
                sh "npm ci"

            }
        }

        stage('lancer tous les tests') {
            steps {
                sh "npx cypress run --env grepTags=@${params.TAGS}"
            }
        }
    }

    post{
        always {
            echo 'Archivage des rapports...'
            junit 'cypress/results/*/.xml'        }
    }
}