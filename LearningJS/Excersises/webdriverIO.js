const env = 'prod'

const envs = {
  stage: {
    stageApp: 'stageApp',
    path: 'path'
  },
  prod: {
    prodApp: 'prodApp',
    path: 'prodPath'
  }
}

function printEnv(){
  console.log(envs[env].path)
}

printEnv()