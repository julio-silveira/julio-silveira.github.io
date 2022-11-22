import trybewallet from '../assets/trybewallet.png'
import pixelart from '../assets/pixelart.png'

interface project {
  projectName: string
  description: string
  image: string
  urlDeploy: string
  urlGithub: string
  stacks: string[]
}

const projectList: project[] = [
  {
    projectName: 'TrybeWallet',
    description:
      'Esta é uma carteira de controle de gastos onde o usuário pode adicionar, remover e editar gastos e visualizar-los em uma tabela.',
    image: trybewallet,
    urlDeploy: 'https://trybewallet-pied.vercel.app/',
    urlGithub: 'https://github.com/julio-silveira/TrybeWallet',
    stacks: ['React', 'Redux', 'Material UI']
  },
  {
    projectName: 'Pixel Art',
    description:
      'Uma "tela" que permite a criação de pixel arts de 5x5 pixels até 50x50!',
    image: pixelart,
    urlDeploy: 'https://julio-silveira.github.io/pixel-art/',
    urlGithub: 'https://github.com/julio-silveira/pixel-art',
    stacks: ['Javascript', 'DOM', 'Bootstrap']
  }
]

export default projectList
