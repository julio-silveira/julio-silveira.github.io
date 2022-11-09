interface project {
  projectName: string
  description: string
  image: string
  urlDeploy: string
  urlGithub: string
}

const projectList: project[] = [
  {
    projectName: 'TrybeWallet',
    description: 'Inserir Descrição Aqui',
    image:
      'https://images.squarespace-cdn.com/content/v1/5168923ce4b02d0863352e09/1615918087268-0KKTJJTMNE65GGBMONV4/McDonalds_Q121_WalletSandwich.gif?format=500w',
    urlDeploy: 'https://trybewallet-pied.vercel.app/',
    urlGithub: 'https://github.com/julio-silveira/TrybeWallet'
  },
  {
    projectName: 'TrybeWallet2',
    description: 'Inserir Descrição Aqui2',
    image:
      'https://images.squarespace-cdn.com/content/v1/5168923ce4b02d0863352e09/1615918086678-J8Y3TUM8PKI8Z1JVN6KZ/McDonalds_Q121_THX.gif?format=500w',
    urlDeploy: 'https://trybewallet-pied.vercel.app/',
    urlGithub: 'https://github.com/julio-silveira/TrybeWallet'
  }
]

export default projectList
