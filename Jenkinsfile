pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Clone repository') {
            steps {
                git url: 'https://github.com/bizlex/cypressDemo.git', branch: 'main'
            }
        }
        stage('Install dependencies') {
            steps {
                withEnv(["PATH+NODEJS=${tool 'nodejs'}/bin"]) {
                    sh 'npm install'
                }
            }
        }
        stage('Run Cypress tests and generate reports') {
            steps {
                ansiColor('xterm') {
                    withEnv(["PATH+NODEJS=${tool 'nodejs'}/bin"]) {
                       sh 'npm run cy:report'
                    }
                }
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'results/mochawesome-html-report/',
                reportFiles: 'Cypress_HMTL_Report.html',
                reportName: 'Cypress Test Report'
            ])
        }
    }
}