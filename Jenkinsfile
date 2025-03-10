pipeline {
    agent any
    tools {
        nodejs "my-nodejs"
    }
    
    stages {
        stage("Install Dependencies") {
            steps {
                nodejs("my-nodejs") {
                    sh 'pnpm install'
                }
            }
        }
        
        stage("Lint") {
            steps {
                nodejs("my-nodejs") {
                    sh 'pnpm lint'
                }
            }
        }

        stage("Type Check") {
            steps {
                nodejs("my-nodejs") {
                    sh 'pnpm tsc --noEmit'
                }
            }
        }
        
        stage("Build") {
            steps {
                nodejs("my-nodejs") {
                    sh 'pnpm build'
                }
            }
        }

        stage("Deploy to Testing") {
            when {
                branch 'develop'
            }
            steps {
                echo "Deploying to testing environment"
                // Add deployment steps here
            }
        }

        stage("Deploy to Production") {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying to production"
                // Add deployment steps here
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! Ready for deployment.'
        }
        failure {
            echo 'Pipeline failed! Check the logs for details.'
        }
    }
} 