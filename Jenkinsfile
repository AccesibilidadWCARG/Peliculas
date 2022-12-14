pipeline {
    agent any

    tools { nodejs "node"}

    environment {
            CI = 'true'
    }
    
    stages {
        stage('Build') {
            steps {
                //bat 'npm install pm2 -g'
                //bat 'npm install'
                bat 'echo "Hello World"'
            }
        }
     stage('Test') {
                    steps {
                        //bat './jenkins/scripts/test.bat'
                        bat 'echo "Hello World"'
                    }
     }
     stage('Deliver') {
     steps {
      //bat 'pm2 start src\\App.js --name myapp'
                bat './jenkins/scripts/deliver.bat'
        }
     }
    
     stage('WCARG') {
            steps {
                bat './jenkins/scripts/WCARG.bat'
            }
        }
     

    }
}
