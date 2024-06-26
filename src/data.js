// import images
import BitconImg from './assets/img/bitcon.png';
import EthereumImg from './assets/img/ethereum.png';
import LitecoinImg from './assets/img/litecoin.png';

export const navData = [
  {
    name: 'Produtos',
    href: '#products',
  },
  {
    name: 'Recursos',
    href: '#features',
  },
  {
    name: 'Sobre',
    href: '#about',
  },
  {
    name: 'Contato',
    href: '#contact',
  },
];

export const currency = [
  {
    image: BitconImg,
    name: 'Bitcoin',
    abbr: 'BTC',
    description:
      'Moeda digital na qual é mantido um registro das transações.',
  },
  {
    image: EthereumImg,
    name: 'Ethereum',
    abbr: 'ETH',
    description:
      'Tecnologia Blockchain para criar e executar aplicativos digitais descentralizados.',
  },
  {
    image: LitecoinImg,
    name: 'Litecoin',
    abbr: 'LTC',
    description:
      'Criptomoeda que permite pagamentos instantâneos para qualquer pessoa no mundo.',
  },
];
