import { Banknote, Bean, Bike, HandCoins, LucideBook, LucideBuilding, LucideHeart, ShieldAlert, Users } from "lucide-react";
export type ThematicArea = {
  title: string;
  specificObjective: string;
  proposals: string[];
  icon: React.ReactNode; // Agora aceitando um ReactNode
};

export const thematicAreasList: ThematicArea[] = [
  {
    title: "SAÚDE",
    specificObjective: "Ampliar e qualificar os serviços de saúde, garantindo acesso e atendimento humanizado para todos.",
    proposals: [
      "Ampliar o Pronto Atendimento (PA) e transformá-lo em uma UPA 24h.",
      "Instalar o Centro Especializado em Reabilitação (CER).",
      "Ampliar as especialidades médicas disponíveis no município.",
      "Construir um novo PSF no bairro Freitas.",
      "Buscar a instalação de um Centro de Especialidades Regional.",
      "Implementar o Programa Melhor em Casa para atendimento domiciliar.",
      "Ampliar o Centro de Especialidades Odontológicas (CEO) com ortodontia para crianças.",
      "Adquirir novas ambulâncias para o PA e SAMU.",
      "Adquirir um novo Odontomóvel para atendimento odontológico nas comunidades rurais.",
      "Intensificar e ampliar o cuidado com a saúde mental no município.",
      "Implantar o serviço de pequenas cirurgias no Pronto Atendimento (PA).",
      "Reformar e ampliar a UBS de Gravatá-Açú.",
      "Abrir uma âncora de UBS para atendimento em Cepilho.",
      "Retomar o Programa Municipal “Remígio na Medida Certa” nas Academias de Saúde e praças públicas com o apoio do NASF.",
      "Implantar novas Academias de Saúde em diferentes pontos da cidade e readequar as academias existentes.",
      "Implantar o teleatendimento nas unidades básicas de saúde.",
      "Incentivar o uso de plantas medicinais e fitoterápicos, capacitando os Agentes Comunitários de Saúde (ACS), comunidades e profissionais de saúde, integrando o saber medicinal com o saber popular.",
      "Criar o programa 'Farmácia Sentinela', abrangendo os PSF's do Coelho e Lagoa do Mato como pilotos.",
      "Criar um centro de zoonose com atendimento veterinário, em parceria com a secretaria municipal de agricultura e meio ambiente."
    ],
    icon: <LucideHeart className="text-white"/> // Substitua por seu componente de ícone
  },
  {
    title: "EDUCAÇÃO",
    specificObjective: "Fortalecer e modernizar a educação municipal, garantindo acesso de qualidade para todos.",
    proposals: [
      "Ampliar a rede de Escolas em Tempo Integral.",
      "Reestruturar as Escolas em Tempo Integral, com a aquisição de equipamentos e ampliação das instalações para melhor aproveitamento do espaço com atividades lúdicas e pedagógicas.",
      "Fornecer livros de autores remigenses para as bibliotecas das escolas municipais.",
      "Manter um programa permanente de combate ao analfabetismo.",
      "Reformar e estruturar as escolas municipais para oferecer um ambiente adequado ao aprendizado.",
      "Modernizar os serviços educacionais através do programa 'Conecta Remígio', digitalizando as informações para melhorar os serviços prestados.",
      "Adaptar as escolas municipais para garantir acessibilidade às Pessoas com Deficiência (PCDs).",
      "Ampliar e modernizar a frota de ônibus escolares, assegurando a rastreabilidade dos veículos.",
      "Ampliar as compras locais através do PNAE, priorizando produtos orgânicos ou agroecológicos e fortalecendo a economia local."
    ],
    icon: <LucideBook className="text-white"/> // Substitua por seu componente de ícone
  },
  {
    title: "INFRAESTRUTURA",
    specificObjective: "Melhorar a infraestrutura urbana e rural, promovendo acessibilidade, mobilidade e qualidade de vida.",
    proposals: [
      "Implementar o programa Pavimenta Remígio III, com melhorias das vias urbanas em relação ao fluxo, acessibilidade e inclusão.",
      "Reestruturar o programa Clique Luz.",
      "Construir um Terminal Rodoviário.",
      "Construir um portal em uma das entradas da cidade.",
      "Revitalizar e promover a acessibilidade das calçadas do centro da cidade.",
      "Criar o programa Dignidade Remigense, visando a construção e/ou ampliação de conjuntos habitacionais, melhorias nas vias públicas e saneamento básico.",
      "Construir um novo cemitério municipal.",
      "Revitalizar a garagem municipal para melhor organização da frota de veículos.",
      "Melhorar o reordenamento do trânsito com as novas ruas asfaltadas."
    ],
    icon: <LucideBuilding className="text-white"/> // Substitua por seu componente de ícone
  },
  {
    title: "CULTURA, TURISMO E DESENVOLVIMENTO ECONÔMICO",
    specificObjective: "Promover o desenvolvimento econômico sustentável, valorizando a cultura local e o turismo.",
    proposals: [
      "Trazer a folha de pagamento da prefeitura municipal para Remígio.",
      "Criar a Casa do Empreendedor, apoiando o empreendedorismo rural e urbano.",
      "Construir um Centro de Formação para o Desenvolvimento Econômico urbano e rural.",
      "Criar o Centro do Artesanato Remigense, espaço destinado à qualificação e comercialização de produtos.",
      "Implantar uma praça de recreação e alimentação na Lagoa Parque.",
      "Criar um calendário de eventos municipais, incluindo festividades religiosas, para incentivar o turismo de eventos.",
      "Criar o Distrito Industrial Remigense.",
      "Reestruturar o Mercado Público e a Feira Livre, fortalecendo os micros e pequenos empresários e incentivando o empreendedorismo local.",
      "Implantar o SIM (Serviço de Inspeção Municipal) para apoiar o empreendedorismo local.",
      "Elaborar o Plano Municipal de Turismo, com o objetivo de estruturar e organizar as atividades turísticas de forma sustentável.",
      "Viabilizar parcerias para a realização de cursos técnicos e profissionalizantes com oportunidades de estágio no município.",
      "Buscar parcerias para a instalação de uma nova instituição financeira em Remígio, facilitando o acesso ao crédito e movimentando a economia local.",
      "Implantar um programa de incentivo aos artistas e manifestações culturais do município."
    ],
    icon: <HandCoins className="text-white"/> // Substitua por seu componente de ícone
  },
  {
    title: "DESENVOLVIMENTO SOCIAL",
    specificObjective: "Garantir a inclusão social e o bem-estar da população mais vulnerável, promovendo a equidade e a justiça social.",
    proposals: [
      "Fortalecer o Programa de Aquisição de Alimentos (PAA), em parceria com outras secretarias e governos Estadual e Federal.",
      "Criar um programa de Segurança Alimentar e Nutricional.",
      "Implementar um Centro de Atendimento aos Autistas.",
      "Buscar parcerias para fortalecer a APAE e seus serviços.",
      "Oferecer atendimento às pessoas em situação de rua, com apoio psicossocial e de profissionais de diversas áreas.",
      "Modernizar a legislação municipal para possibilitar a arrecadação de recursos para fundos municipais da criança e adolescentes e dos idosos.",
      "Fortalecer e incentivar os grupos de combate à violência de gênero e ao feminicídio.",
      "Apoiar, incentivar, estimular e conscientizar sobre o combate à LGBTfobia.",
      "Garantir apoio ao movimento negro, promovendo campanhas de combate ao preconceito racial, social e religioso, fortalecendo as pautas e datas referentes a esta classe social."
    ],
    icon: <Users className="text-white"/> // Substitua por seu componente de ícone
  },
  {
    title: "SEGURANÇA",
    specificObjective: "Garantir a segurança e tranquilidade da população, através de ações integradas de prevenção e monitoramento.",
    proposals: [
      "Criar o Programa Remígio de Olho Aberto, com a implementação de um Centro de Monitoramento abrangendo áreas rurais e urbanas.",
      "Reestruturar a Guarda Municipal para auxiliar na segurança patrimonial e na tranquilidade da população."
    ],
    icon: <ShieldAlert className="text-white"/> // Substitua por seu componente de ícone
  },
  {
    title: "AGRICULTURA E MEIO AMBIENTE",
    specificObjective: "Promover o desenvolvimento sustentável, integrando práticas agrícolas e ambientais que valorizem o potencial do município.",
    proposals: [
      "Fortalecer o programa de produção de algodão agroecológico e a agroecologia em Remígio.",
      "Incentivar a produção agropecuária para fornecimento ao PAA e ao PNAE.",
      "Criar um programa de arborização de vias públicas.",
      "Implantar o Programa Remígio que Produz, incentivando a produção agropecuária de forma sustentável.",
      "Apoiar e incentivar as associações rurais."
    ],
    icon: <Bean className="text-white"/> // Substitua por seu componente de ícone
  },
  {
    title: "ESPORTES",
    specificObjective: "Incentivar a prática esportiva e promover a saúde e o bem-estar através do esporte.",
    proposals: [
      "Apoiar a criação de uma Liga Municipal de Futebol Amador.",
      "Criar um circuito de Corridas Noturnas de Remígio.",
      "Organizar os Jogos Municipais com diversas modalidades esportivas.",
      "Criar o Parque Esportivo da Lagoa Parque.",
      "Criar as olimpíadas escolares em parceria com a Secretaria Municipal de Educação."
    ],
    icon: <Bike className="text-white"/> // Substitua por seu componente de ícone
  },
  {
    title: "GESTÃO ADMINISTRATIVA E FINANCEIRA",
    specificObjective: "Modernizar a gestão pública, garantindo eficiência, transparência e inovação nos serviços prestados à população.",
    proposals: [
      "Implantar o programa 'Conecta Remígio', que visa digitalizar e informatizar os serviços da prefeitura, trazendo mais agilidade e acessibilidade para os cidadãos.",
      "Implementar o programa 'Bem Estar' para os servidores municipais.",
      "Garantir o pagamento de salários dos funcionários efetivos em dia dentro do mês trabalhado.",
      "Elaborar o orçamento de forma participativa, onde a população terá voz na destinação de parte dos recursos municipais, priorizando investimentos conforme as necessidades locais.",
      "Implementar o Programa de Capacitação Contínua para Servidores, visando a atualização e aprimoramento das competências técnicas e administrativas, garantindo maior eficiência nos serviços públicos."
    ],
    icon: <Banknote className="text-white"/> // Substitua por seu componente de ícone
  }
];
