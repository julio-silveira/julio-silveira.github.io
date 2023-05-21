interface project {
  projectName: string
  description: string
  urlDeploy?: string
  urlGithub: string
  stacks: string[]
}

const projectList: project[] = [
  {
    projectName: 'Price updater',
    description:
      'Feature de atualização de preços de produtos em uma loja virtual. Possui uma api documentada e 100% de cobertura de testes no backend.',
    urlGithub: 'https://github.com/julio-silveira/shopper-challenge',
    stacks: ['Typescript', 'NestJS', 'Prisma']
  },
  {
    projectName: 'Search Engine',
    description:
      'Um buscador de produtos que faz raspagem de dados nos sites do Mercado livre e Buscapé.',
    urlDeploy: 'https://lexart.up.railway.app/',
    urlGithub: 'https://github.com/julio-silveira/lexart-challenge-app',
    stacks: ['Typescript', 'Express', 'Cheerio']
  },
  {
    projectName: 'Api Consumer',
    description:
      'Um consumidor de apis que acessa diversas apis e renderiza informações.',
    urlGithub: 'https://github.com/julio-silveira/desafio-sharenergy-2023-01',
    stacks: ['Typescript', 'NestJS', 'MongoDB']
  },
  {
    projectName: 'Bank APP',
    description:
      'Um aplicativo de banco que permite a criação de contas e transferências entre contas.',
    urlDeploy: 'https://jsbank.vercel.app/',
    urlGithub: 'https://github.com/julio-silveira/bank-app',
    stacks: ['Typescript', 'Express', 'Sequelize']
  },
  {
    projectName: 'App de delivery',
    description:
      'App de delivery para uma distribuidora de bebidas para dona Tereza.',
    urlDeploy: 'https://www.youtube.com/watch?v=L_Hp2j1ogMY',
    urlGithub: 'https://github.com/julio-silveira/delivery-app',
    stacks: ['React', 'Express.js', 'MySQL']
  },
  {
    projectName: 'App de Receitas',
    description:
      'Um aplicativo de receitas que permite a visualização de receitas, busca por receitas e filtragem por categorias.',
    urlDeploy: 'https://web-recipesapp.vercel.app/#/',
    urlGithub: 'https://github.com/julio-silveira/recipes-app',
    stacks: ['React', 'Material UI', 'Context API']
  },
  {
    projectName: 'TrybeWallet',
    description:
      'Esta é uma carteira de controle de gastos onde o usuário pode adicionar, remover e editar gastos e visualizar-los em uma tabela.',
    urlDeploy: 'https://trybewallet-pied.vercel.app/',
    urlGithub: 'https://github.com/julio-silveira/TrybeWallet',
    stacks: ['React', 'Redux', 'Material UI']
  },
  {
    projectName: 'Pixel Art',
    description:
      'Uma "tela" que permite a criação de pixel arts de 5x5 pixels até 50x50!',
    urlDeploy: 'https://julio-silveira.github.io/pixel-art/',
    urlGithub: 'https://github.com/julio-silveira/pixel-art',
    stacks: ['Javascript', 'DOM', 'Bootstrap']
  }
]

export default projectList
