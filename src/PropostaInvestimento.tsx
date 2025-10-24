import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, Users, Target, Zap, Shield, Calendar, Bot, Sparkles, ArrowUpRight, AlertTriangle, CheckCircle, Clock, Award, BarChart3, TrendingDown, Phone, LineChart, Briefcase, Lock, FileText } from 'lucide-react';

const PropostaInvestimento = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Handle touch events for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Handle mouse events for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMouseEnd(0);
    setMouseStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!mouseStart || !mouseEnd) return;

    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  // Stars background component
  const StarsBackground = () => (
    <>
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite ${Math.random() * 2}s`
          }}
        />
      ))}
    </>
  );

  const nextSlide = () => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
      setDirection(null);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
      setDirection(null);
    }, 300);
  };

  const slides = [
    // Slide 1 - Capa Premium
    {
      type: 'cover',
      title: 'AIra',
      subtitle: 'Sua Assistente de Vendas com IA',
      tagline: 'Seu time de vendas trabalhando 24h, até quando você dorme',
      highlight: 'Proposta de Parceria',
      presenter: 'Victor Von Müller'
    },

    // Slide 2 - Cenário Atual do Mercado
    {
      type: 'problem',
      title: 'O Problema Que Tá na Cara',
      subtitle: 'Todo dia tem dinheiro sendo deixado na mesa',
      stats: [
        { icon: TrendingDown, value: '67%', label: 'Leads Perdidos', desc: 'Cliente manda mensagem depois do expediente? Era. Dois em cada três leads são perdidos assim.' },
        { icon: Clock, value: '45%', label: 'Desistem na Hora', desc: 'Demorou 5 minutos pra responder? Pode esquecer, o cliente já foi embora.' },
        { icon: DollarSign, value: '30%', label: 'Vendas que Não Rolam', desc: 'Final de semana, feriado, horário de almoço... um terço das vendas some por aí.' },
        { icon: AlertTriangle, value: 'R$ 5K+', label: 'Vendedor Custa Caro', desc: 'Salário + encargos + benefícios + dor de cabeça. E só trabalha 8h por dia.' }
      ]
    },

    // Slide 3 - A Solução AIra
    {
      type: 'solution',
      title: 'AIra: A IA que Vende Pra Você',
      subtitle: 'Conversa natural, entende o cliente e fecha o deal sozinha',
      features: [
        { icon: Zap, title: 'Responde Como Você Quiser', desc: 'Configure o tempo de resposta: instantâneo ou com delay pra parecer humano. O cliente nunca vai saber que é IA.' },
        { icon: Bot, title: 'Sabe Tudo da Empresa', desc: 'Preço, produto, estoque, condições... ela conhece seu negócio melhor que muito vendedor.' },
        { icon: Target, title: 'Separa Quem É Cliente de Verdade', desc: 'Identifica automaticamente quem tem grana, pressa e interesse real de comprar.' },
        { icon: Calendar, title: 'Cuida da Agenda', desc: 'Agenda reunião, manda lembrete, confirma horário. Tudo sozinha.' },
        { icon: Clock, title: 'Nunca Para', desc: 'Sem pausa pra café, sem férias, sem atestado. Tá lá trabalhando 24/7/365.' },
        { icon: DollarSign, title: 'Custa 90% Menos', desc: 'Comparado com vendedor CLT, AIra custa uma mixaria e produz o triplo.' }
      ]
    },

    // Slide 3.5 - Estrutura Completa do SaaS
    {
      type: 'platform',
      title: 'Plataforma Completa Pronta',
      subtitle: 'Não é só a IA. É um ecossistema inteiro de vendas automatizado.',
      features: [
        {
          icon: Sparkles,
          title: 'Landing Pages que Vendem',
          desc: 'Páginas de vendas prontas, bonitas e otimizadas. Cliente clica e compra direto, com pagamento via Mercado Pago.',
          badge: 'AUTOMATIZADO'
        },
        {
          icon: Users,
          title: 'CRM do Cliente',
          desc: 'Painel completo pro cliente configurar a IA, ver conversas, métricas e resultados em tempo real.',
          badge: 'SELF-SERVICE'
        },
        {
          icon: Shield,
          title: 'CRM Admin',
          desc: 'Controle total: gerenciar clientes, acompanhar receita, métricas, suporte. Tudo num lugar só.',
          badge: 'GESTÃO TOTAL'
        },
        {
          icon: Target,
          title: 'CRM Afiliados',
          desc: 'Sistema de afiliados completo: cada afiliado tem painel próprio, links únicos e acompanha comissões.',
          badge: 'CRESCIMENTO'
        },
        {
          icon: DollarSign,
          title: 'Vendas 100% Automáticas',
          desc: 'Cliente chega, paga, acessa, configura. Zero atrito. Zero intervenção manual.',
          badge: 'ESCALÁVEL'
        },
        {
          icon: Lock,
          title: 'Infraestrutura Robusta',
          desc: 'Tudo rodando em cloud, seguro, rápido e pronto pra escalar. Não precisa construir nada.',
          badge: 'ENTERPRISE'
        }
      ]
    },

    // Slide 4 - Estrutura do Investimento
    {
      type: 'investment-intro',
      title: 'Como Funciona o Investimento',
      subtitle: 'Pagamento gradual e inteligente',
      totalValue: 'R$ 24.000',
      equity: '15% é Seu',
      structure: [
        { phase: 'Entrada Inicial', value: 'R$ 2.000', timing: 'Agora', desc: 'Infraestrutura, domínios, APIs e setup inicial. Tudo pra começar operando.' },
        { phase: 'Mês 1', value: 'R$ 3.000', timing: 'Primeiro mês', desc: 'Equipe 3 pessoas. Foco em finalizar produto e preparar pra lançar.' },
        { phase: 'Meses 2-4', value: 'R$ 4.333/mês', timing: '3 meses', desc: 'R$ 3.000 equipe + R$ 1.333 marketing/mês. Fase de aquisição de clientes.' },
        { phase: 'Meses 5-6', value: 'R$ 3.000/mês', timing: 'Últimos 2 meses', desc: 'Apenas equipe. Marketing já se paga com a receita!' }
      ],
      highlight: 'R$ 2 mil de entrada + investimento gradual = total R$ 24 mil = 15% da empresa',
      breakdown: 'R$ 2k entrada + R$ 3k (mês 1) + R$ 13k (meses 2-4) + R$ 6k (meses 5-6) = R$ 24k total'
    },

    // Slide 5 - Detalhamento do Investimento
    {
      type: 'capital-breakdown',
      title: 'Como o Investimento é Distribuído',
      subtitle: 'Pagamento gradual focado em resultado',
      items: [
        {
          icon: Users,
          label: 'Equipe (6 meses)',
          value: 'R$ 18.000',
          percent: 75,
          desc: 'R$ 3.000/mês para 3 pessoas em Campo Grande: aluguel (R$ 1.200), internet (R$ 100), mercado, alimentação e despesas pessoais. Time full-time dedicado.',
          breakdown: 'Aluguel R$ 1.200 + Internet R$ 100 + Alimentação/Mercado + Despesas pessoais = R$ 3k/mês'
        },
        { icon: Target, label: 'Marketing (meses 2-4)', value: 'R$ 4.000', percent: 17, desc: 'R$ 1.333/mês nos meses 2, 3 e 4. Anúncios Meta e Google pra escalar após o produto estar pronto.' },
        { icon: Bot, label: 'Entrada + Infraestrutura', value: 'R$ 2.000', percent: 8, desc: 'Servidor, domínio, APIs, certificados, setup inicial. Tudo pra começar operando no primeiro dia.' }
      ],
      note: 'Vantagem: você não precisa desembolsar R$ 24 mil de uma vez. O investimento é gradual e estratégico!',
      timeline: 'Mês 1: R$ 3k | Meses 2-4: R$ 4.333/mês | Meses 5-6: R$ 3k/mês',
      strategy: 'Mês 1 = finalizar produto | Meses 2-4 = crescimento acelerado | Meses 5-6 = autossustentável'
    },

    // Slide 6 - Operacional Mensal
    {
      type: 'operational',
      title: 'Os R$ 3 Mil Por Mês da Equipe',
      subtitle: 'Investimento nos desenvolvedores em Campo Grande',
      description: 'Esse valor garante que o time está 100% focado no produto, sem preocupações financeiras',
      breakdown: [
        {
          item: 'Aluguel',
          value: 'R$ 1.200',
          desc: 'Casa compartilhada para os 3 membros da equipe em Campo Grande.'
        },
        {
          item: 'Internet',
          value: 'R$ 100',
          desc: 'Conexão de qualidade pra trabalhar sem interrupções.'
        },
        {
          item: 'Alimentação e Mercado',
          value: 'R$ 1.200',
          desc: 'Compras de mercado e alimentação para os 3 durante o mês todo.'
        },
        {
          item: 'Despesas Pessoais',
          value: 'R$ 500',
          desc: 'Um pouco de grana pra cada um ter liberdade financeira e focar 100% no projeto.'
        }
      ],
      total: 'R$ 18.000 nos 6 meses',
      note: 'E olha só: no 4º mês a própria receita já cobre esse custo. Você para de botar dinheiro!',
      teamNote: 'Time dedicado full-time e sem preocupações = produto evolui rápido e com qualidade.'
    },

    // Slide 7 - Modelo de Negócio
    {
      type: 'business-model',
      title: 'Como a Grana Entra',
      subtitle: 'Cliente paga todo mês e a margem é absurda',
      plans: [
        { name: 'Starter', price: 'R$ 497', cost: 'R$ 39', profit: 'R$ 458', margin: '92%', target: 'Empresas menores' },
        { name: 'Professional', price: 'R$ 997', cost: 'R$ 78', profit: 'R$ 919', margin: '92%', badge: 'CAMPEÃO DE VENDAS', target: 'Empresas médias' },
        { name: 'Enterprise', price: 'R$ 1.997', cost: 'R$ 157', profit: 'R$ 1.840', margin: '92%', target: 'As grandonas' }
      ],
      metrics: [
        { label: 'Margem Bruta', value: '92%' },
        { label: 'Retorno do Investimento', value: '2-3 meses' },
        { label: 'Valor x Custo Cliente', value: '8:1' },
        { label: 'Taxa de Cancelamento', value: '<5%' }
      ]
    },

    // Slide 8 - Projeção Financeira 6 Meses
    {
      type: 'projections',
      title: 'Quanto Dá Pra Fazer em 6 Meses',
      subtitle: 'Crescimento real, sem viagem: 50 clientes pagando todo mês',
      data: [
        { mes: 1, clientes: 3, receita: 1991, lucro: 1435, investidor: 215, empresa: 1220, mrr: 1991 },
        { mes: 2, clientes: 8, receita: 6476, lucro: 5268, investidor: 790, empresa: 4478, mrr: 6476 },
        { mes: 3, clientes: 15, receita: 11955, lucro: 9847, investidor: 1477, empresa: 8370, mrr: 11955 },
        { mes: 4, clientes: 25, receita: 19925, lucro: 16662, investidor: 2499, empresa: 14163, mrr: 19925 },
        { mes: 5, clientes: 38, receita: 30253, lucro: 25564, investidor: 3835, empresa: 21729, mrr: 30253 },
        { mes: 6, clientes: 50, receita: 39850, lucro: 34485, investidor: 5173, empresa: 29312, mrr: 39850 }
      ],
      total: { receita: 110450, lucro: 93261, investidor: 13989, empresa: 79272 }
    },

    // Slide 9 - Distribuição Mês 6
    {
      type: 'month-detail',
      title: 'Como Fica o Mês 6',
      subtitle: '50 clientes pagantes = R$ 39.850 entrando todo mês',
      distribution: [
        { plan: 'Starter', qty: 30, price: 497, revenue: 14910, cost: 1914, profit: 12996 },
        { plan: 'Professional', qty: 15, price: 997, revenue: 14955, cost: 1916, profit: 13039 },
        { plan: 'Enterprise', qty: 5, price: 1997, revenue: 9985, cost: 1285, profit: 8700 }
      ],
      summary: {
        revenue: 39850,
        costs: 5365,
        profit: 34485,
        investor: 5173,
        company: 29312
      }
    },

    // Slide 10 - Retorno do Investimento
    {
      type: 'roi',
      title: 'Quando Você Recupera o Investimento',
      subtitle: 'Investimento: R$ 24 mil → Retorno: 15% de todos os lucros pra sempre',
      milestones: [
        {
          period: 'Mês 6',
          accumulated: 13989,
          percentRecovered: 58,
          status: 'Base de 50 clientes consolidada',
          description: 'Você já recebeu R$ 13.989 dos seus R$ 24.000. Faltam R$ 10.011 pro payback completo.',
          monthlyProfit: 5173,
          highlight: false
        },
        {
          period: 'Mês 9-10',
          accumulated: 24000,
          percentRecovered: 100,
          status: 'PAYBACK COMPLETO!',
          description: 'Você recuperou todo o investimento. A partir daqui, é lucro puro. E você ainda tem 15% da empresa!',
          monthlyProfit: 5173,
          highlight: true
        },
        {
          period: 'Mês 12',
          accumulated: 62073,
          percentRecovered: 259,
          status: 'Lucro líquido acumulado',
          description: 'R$ 62 mil recebidos em 12 meses. Você já lucrou R$ 38 mil acima do investimento inicial.',
          monthlyProfit: 5173,
          highlight: false
        }
      ],
      recurring: {
        monthly: 'R$ 5.173',
        annual: 'R$ 62.073',
        message: 'E esse valor continua pingando na sua conta todo mês, enquanto você mantém 15% da empresa'
      },
      longTerm: 'Em 24 meses você recebe R$ 124 mil | Em 36 meses: R$ 186 mil | Crescimento contínuo'
    },

    // Slide 11 - Cenários de Projeção
    {
      type: 'scenarios',
      title: 'E Se...?',
      subtitle: 'Três jeitos que isso pode rolar (todos lucrativos)',
      scenarios: [
        {
          name: 'Se Pegar Leve',
          clients: 20,
          mrr: 9940,
          profit6m: 27343,
          investor6m: 4102,
          payback: '12 meses',
          color: 'amber'
        },
        {
          name: 'Cenário Real',
          clients: 50,
          mrr: 39850,
          profit6m: 93280,
          investor6m: 13989,
          payback: '7 meses',
          badge: 'ESSE É O PLANO',
          color: 'green'
        },
        {
          name: 'Se Decolar',
          clients: 100,
          mrr: 79700,
          profit6m: 210000,
          investor6m: 31500,
          payback: '5 meses',
          color: 'emerald'
        }
      ]
    },

    // Slide 12 - Programa de Afiliados
    {
      type: 'affiliates',
      title: 'Afiliados Trazendo Cliente',
      subtitle: 'Mais gente vendendo pra gente, ganhando 20% pra sempre',
      commission: '20% pra sempre',
      examples: [
        { plan: 'Starter', monthly: 99, annual: 1193 },
        { plan: 'Professional', monthly: 199, annual: 2393 },
        { plan: 'Enterprise', monthly: 399, annual: 4793 }
      ],
      projection: {
        affiliates: '10-15 afiliados vendendo',
        clientsMonth: '30-50 clientes extras por mês',
        extraRevenue: 'R$ 15 mil - R$ 25 mil a mais/mês',
        extraProfit: 'R$ 12 mil - R$ 20 mil de lucro extra (já descontando as comissões)',
        investorExtra: 'R$ 1.800 - R$ 3 mil extras pra você/mês',
        investorAnnual: 'R$ 21 mil - R$ 36 mil/ano só dos afiliados'
      }
    },

    // Slide 13 - Oportunidade de Mercado
    {
      type: 'market',
      title: 'Por Que Agora?',
      subtitle: 'O timing tá perfeito pra entrar',
      opportunities: [
        {
          icon: TrendingUp,
          title: 'Mercado Explodindo',
          desc: 'IA pra vendas vai de US$ 2,5 bilhões pra US$ 18 bilhões até 2030. Tá crescendo mais de 28% ao ano.',
          metric: '+28,5% ao ano'
        },
        {
          icon: Clock,
          title: 'Hora de Entrar É Agora',
          desc: 'Meta vai restringir IAs genéricas em 2026. Quem chegar primeiro com solução profissional leva tudo.',
          metric: 'Chegou primeiro, ganhou'
        },
        {
          icon: Target,
          title: 'Ninguém Mais Tem Isso',
          desc: 'Somos os únicos no Brasil com voz natural de verdade + qualificação automática de cliente.',
          metric: 'Exclusividade'
        },
        {
          icon: BarChart3,
          title: 'Escala Rápido',
          desc: '92% de margem significa que cada cliente novo é quase lucro puro. Dá pra crescer muito rápido.',
          metric: 'Cresce sem parar'
        }
      ]
    },

    // Slide 14 - Gestão de Riscos
    {
      type: 'risks',
      title: 'E os Riscos?',
      subtitle: 'Sendo sincero sobre o que pode dar errado (e como evitar)',
      risks: [
        {
          risk: 'WhatsApp Mudar as Regras',
          level: 'BAIXO',
          mitigation: 'AIra é bot empresarial oficial. A Meta não só permite como incentiva esse tipo de uso.',
          impact: 'Quase zero'
        },
        {
          risk: 'Cliente Cancelar',
          level: 'MÉDIO',
          mitigation: 'Cliente testa 14 dias grátis, a gente ajuda a configurar tudo, dá suporte e mostra resultado rápido.',
          impact: 'Dá pra controlar'
        },
        {
          risk: 'IA Ficar Mais Cara',
          level: 'BAIXO',
          mitigation: 'Já temos contrato anual com Claude e ElevenLabs. Quanto mais usar, mais desconto ganha.',
          impact: 'Quase nada'
        },
        {
          risk: 'Concorrente Aparecer',
          level: 'MÉDIO',
          mitigation: 'A voz natural é difícil de fazer. E quem chega primeiro fica com os clientes e a reputação.',
          impact: 'Dá pra gerenciar'
        }
      ]
    },

    // Slide 15 - Roadmap e Cronograma
    {
      type: 'timeline',
      title: 'Como Vai Ser os 6 Meses',
      subtitle: 'O plano mês a mês, sem enrolação',
      milestones: [
        {
          month: 'Mês 1',
          goal: '3-5 clientes',
          investment: 'R$ 6 mil (pra começar) + R$ 2 mil (operacional)',
          activities: ['Assinar contrato e liberar a grana', 'Botar anúncios no ar', 'Começar a vender']
        },
        {
          month: 'Mês 2',
          goal: '8-10 clientes',
          investment: 'R$ 2 mil (operacional)',
          activities: ['Aumentar os anúncios', 'Melhorar o funil de vendas', 'Ajustar o produto']
        },
        {
          month: 'Mês 3',
          goal: '15-20 clientes',
          investment: 'R$ 2 mil (operacional)',
          activities: ['Abrir programa de afiliados', 'Mostrar casos de sucesso', 'Testar novos canais']
        },
        {
          month: 'Mês 4',
          goal: '25-30 clientes',
          investment: 'Receita já paga tudo!',
          activities: ['Empresa no lucro', 'Começando a pagar o investimento de volta', 'Primeira grana pingando']
        },
        {
          month: 'Mês 5',
          goal: '38-45 clientes',
          investment: 'Receita paga tudo',
          activities: ['Receita recorrente firme', 'Contratar alguém pra ajudar', 'Aumentar time']
        },
        {
          month: 'Mês 6',
          goal: '50 clientes',
          investment: 'Receita paga tudo',
          activities: ['Você pegou todo investimento de volta!', 'Começa a pingar grana todo mês', 'Planejar próxima fase']
        }
      ]
    },

    // Slide 16 - Termos e Governança
    {
      type: 'terms',
      title: 'Os Termos do Acordo',
      subtitle: 'Tudo preto no branco, sem letra miúda',
      terms: [
        { category: 'A Grana', items: [
          { label: 'Total do Investimento', value: 'R$ 24.000' },
          { label: 'Entrada Inicial', value: 'R$ 2.000' },
          { label: 'Mês 1', value: 'R$ 3.000 (equipe)' },
          { label: 'Meses 2-4', value: 'R$ 4.333/mês (equipe + marketing)' },
          { label: 'Meses 5-6', value: 'R$ 3.000/mês (equipe)' },
          { label: 'Sua Parte', value: '15% da empresa' }
        ]},
        { category: 'Valuation', items: [
          { label: 'Valuation Pré-Money', value: 'R$ 136.000' },
          { label: 'Valuation Pós-Money', value: 'R$ 160.000' },
          { label: 'Vesting', value: '4 anos (3,75%/ano)' }
        ]},
        { category: 'Como Funciona', items: [
          { label: 'Lucro na Sua Conta', value: 'Todo mês a partir do 4º' },
          { label: 'Relatórios', value: 'Mensal + dashboard sempre aberto' },
          { label: 'Decisões Importantes', value: 'Você participa' },
          { label: 'Transparência', value: 'Acesso total aos números' }
        ]},
        { category: 'Bônus Incluso', items: [
          { label: 'Robô AIra Grátis', value: '1 licença completa' },
          { label: 'Valor do Robô', value: 'R$ 997/mês (R$ 11.964/ano)' },
          { label: 'Para Usar Na', value: 'Annex Vistorias' },
          { label: 'Custos Operacionais', value: 'Já inclusos no investimento' }
        ]}
      ]
    },

    // Slide 17 - Bônus Exclusivo para Annex
    {
      type: 'bonus',
      title: 'Bônus Exclusivo Para Você',
      subtitle: 'Além dos 15% da empresa, você ganha um presente valioso',
      bonuses: [
        {
          icon: Sparkles,
          title: 'Robô AIra Grátis Pra Sempre',
          value: 'R$ 997/mês',
          description: 'Você recebe 1 robô AIra completo pra usar na Annex Vistorias. Todos os custos operacionais já estão inclusos no investimento. É seu, de graça, pra sempre.',
          benefits: [
            'Atendimento 24/7 pros seus clientes',
            'Qualificação automática de leads',
            'Agendamento de vistorias',
            'Sem custo mensal pra você',
            'Todos os custos de operação já pagos',
            'Configuração personalizada pra Annex'
          ],
          highlight: true
        }
      ],
      totalValue: 'R$ 11.964',
      note: 'Valor do bônus no primeiro ano. Economiza quase 50% do seu investimento só usando o robô!'
    },

    // Slide 18 - Chamada para Ação
    {
      type: 'cta',
      title: 'Bora Fazer Isso Acontecer?',
      subtitle: 'Tudo pronto pra começar agora',
      value_props: [
        'Produto já funciona e tá vendendo',
        'Margem de 92% (absurdo de lucro)',
        'Em 7 meses você pega tudo de volta',
        'Mercado de R$ 18 bilhões até 2030',
        'Ninguém mais tem essa tecnologia',
        'Grana pingando na conta todo mês'
      ],
      contact: {
        name: 'Victor Von Müller',
        phone: '(42) 9 9930-0611',
        company: 'Helix AI',
        tagline: 'A tecnologia que trabalha enquanto você dorme'
      },
      steps: [
        'Bater um papo e alinhar tudo',
        'Marcar uma reunião pra falar pessoalmente',
        'Assinar o contrato (tudo certinho)',
        'Em 1 semana já tá rodando'
      ]
    }
  ];

  const renderSlide = (slide: any) => {
    const baseClasses = "min-h-full bg-gradient-to-br from-black via-gray-900 to-black p-4 sm:p-6 md:p-12 relative";

    switch(slide.type) {
      case 'cover':
        return (
          <div className={`${baseClasses} flex flex-col items-center justify-center`}>
            <StarsBackground />
            <div className="relative z-10 text-center max-w-4xl px-4">
              {/* Logo AIra */}
              <div className="mb-6 sm:mb-8">
                <img
                  src="/AIra_Logotipo.png"
                  alt="AIra"
                  className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl"
                />
              </div>

              {/* Subtítulo */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-2 sm:mb-3 font-light">{slide.subtitle}</p>
              <p className="text-base sm:text-lg md:text-xl text-emerald-400/80 mb-8 sm:mb-12 font-medium">{slide.tagline}</p>

              {/* Badge de Proposta */}
              <div className="mb-8 sm:mb-12">
                <div className="card-glass px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl sm:rounded-2xl border border-emerald-500/30 inline-block">
                  <p className="text-base sm:text-xl md:text-2xl text-white font-semibold tracking-wide">{slide.highlight}</p>
                </div>
              </div>

              {/* Informações do Apresentador */}
              <div className="card-glass px-6 py-4 sm:px-8 sm:py-6 rounded-xl border border-white/10 inline-block">
                <div className="text-white/70 text-xs sm:text-sm mb-2">Apresentado por</div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">{slide.presenter}</div>
              </div>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 text-center sm:text-left">{slide.title}</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 text-center sm:text-left">{slide.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6">
                {slide.stats.map((stat: any, i: number) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="card-glass p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all group">
                      <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-lg sm:rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-red-400" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 mb-1 sm:mb-2">{stat.value}</div>
                          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 md:mb-3">{stat.label}</h3>
                          <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">{stat.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mensagem conversacional */}
              <div className="card-glass p-4 sm:p-5 md:p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base md:text-lg text-white/90">
                    <span className="font-bold text-emerald-400">Imagina pegar 67% a mais de cliente</span> que hoje você perde porque ninguém tá lá pra atender.
                    Com AIra, cada lead vira venda - e <span className="font-semibold text-white">você embolsa 15% de todo lucro</span> que rolar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="mb-8 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4">
                  <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-400" />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center sm:text-left">{slide.title}</h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-white/70 text-center sm:text-left">{slide.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {slide.features.map((feat: any, i: number) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="card-glass p-5 sm:p-7 rounded-xl sm:rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all group">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 sm:mb-5 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feat.title}</h3>
                      <p className="text-white/70 leading-relaxed text-sm sm:text-base">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'platform':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="mb-8 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 mb-4">
                  <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-400" />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center sm:text-left">{slide.title}</h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-white/70 text-center sm:text-left">{slide.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {slide.features.map((feat: any, i: number) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="card-glass p-5 sm:p-7 rounded-xl sm:rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all group relative overflow-hidden">
                      {feat.badge && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-md">
                          <span className="text-xs font-bold text-emerald-400">{feat.badge}</span>
                        </div>
                      )}
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 sm:mb-5 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 pr-16">{feat.title}</h3>
                      <p className="text-white/70 leading-relaxed text-sm sm:text-base">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 sm:mt-12 card-glass p-5 sm:p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-white/90">
                    <span className="font-bold text-emerald-400">Tudo isso já tá pronto e funcionando.</span> Não precisa desenvolver nada. É só investir, começar a vender e escalar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'investment-intro':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">{slide.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6">{slide.subtitle}</p>

                {/* Equity no Topo */}
                <div className="inline-block">
                  <div className="card-glass px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl border-2 border-emerald-500/30">
                    <div className="text-xs sm:text-sm text-white/60 mb-2 uppercase tracking-wide">Você Recebe</div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-400">{slide.equity}</div>
                    <div className="text-sm sm:text-base text-white/70 mt-1">Pra sempre</div>
                  </div>
                </div>
              </div>

              {/* Estrutura de Investimento - Valores Individuais */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {slide.structure.map((item: any, i: number) => (
                  <div key={i} className="card-glass p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{item.phase}</h3>
                        <p className="text-white/60 text-sm">{item.timing}</p>
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-emerald-400">{item.value}</div>
                    </div>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Valor Total - No Final */}
              <div className="card-glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-emerald-500/30 text-center mb-6 sm:mb-8">
                <div className="text-xs sm:text-sm text-white/60 mb-2 sm:mb-3 uppercase tracking-wide">Investimento Total (somando tudo)</div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-emerald-400 mb-2">{slide.totalValue}</div>
                <div className="text-sm sm:text-base text-white/70">Pagamento gradual em 6 meses</div>
              </div>

              {/* Highlight Boxes */}
              <div className="space-y-4">
                <div className="card-glass p-4 sm:p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium">{slide.highlight}</p>
                  </div>
                </div>

                {slide.breakdown && (
                  <div className="card-glass p-4 sm:p-5 rounded-xl border border-blue-500/30 bg-blue-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-xs sm:text-sm md:text-base text-white/80 font-mono">{slide.breakdown}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'capital-breakdown':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-center sm:text-left">{slide.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 text-center sm:text-left">{slide.subtitle}</p>
              </div>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {slide.items.map((item: any, i: number) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="card-glass p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 flex-shrink-0">
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-400" />
                        </div>
                        <div className="flex-1 w-full">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">{item.label}</h3>
                            <span className="text-2xl sm:text-3xl font-bold text-emerald-400">{item.value}</span>
                          </div>
                          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">{item.desc}</p>
                          {item.breakdown && (
                            <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10">
                              <p className="text-xs sm:text-sm text-white/60 font-mono">{item.breakdown}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 sm:h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-green-500 h-full rounded-full transition-all duration-1000"
                          style={{width: `${item.percent}%`}}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-4">
                <div className="card-glass p-4 sm:p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base md:text-lg text-white/90">{slide.note}</p>
                  </div>
                </div>

                {slide.timeline && (
                  <div className="card-glass p-4 sm:p-5 rounded-xl border border-blue-500/30 bg-blue-500/5">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-xs sm:text-sm md:text-base text-white/80 font-mono">{slide.timeline}</p>
                    </div>
                  </div>
                )}

                {slide.strategy && (
                  <div className="card-glass p-4 sm:p-5 rounded-xl border border-purple-500/30 bg-purple-500/5">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                      <p className="text-xs sm:text-sm md:text-base text-white/80">{slide.strategy}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'operational':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-center sm:text-left">{slide.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 mb-2 sm:mb-3 text-center sm:text-left">{slide.subtitle}</p>
                <p className="text-sm sm:text-base md:text-lg text-white/60 text-center sm:text-left">{slide.description}</p>
              </div>

              <div className="card-glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-emerald-500/30 mb-6 sm:mb-8">
                <div className="space-y-4 sm:space-y-6">
                  {slide.breakdown.map((item: any, i: number) => (
                    <div
                      key={i}
                      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 sm:py-5 border-b border-white/10 last:border-0 ${
                        item.highlight ? 'bg-emerald-500/5 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 rounded-lg' : ''
                      }`}
                    >
                      <div className="flex-1 mb-3 sm:mb-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white">{item.item}</h3>
                          {item.highlight && (
                            <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded text-xs font-bold text-emerald-400">
                              EQUIPE
                            </span>
                          )}
                        </div>
                        <p className="text-white/60 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-emerald-400 sm:ml-6">{item.value}</div>
                    </div>
                  ))}

                  <div className="pt-6 mt-6 border-t-2 border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-white">Total 6 Meses:</span>
                    <span className="text-3xl sm:text-4xl font-bold text-emerald-400">{slide.total}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="card-glass p-4 sm:p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base md:text-lg text-white/90">
                      <span className="font-bold text-blue-400">{slide.teamNote}</span>
                    </p>
                  </div>
                </div>

                <div className="card-glass p-4 sm:p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base md:text-lg text-white/90">{slide.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'business-model':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-white/70">{slide.subtitle}</p>
              </div>

              {/* Planos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {slide.plans.map((plan: any, i: number) => (
                  <div key={i} className="card-glass rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                    {plan.badge && (
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-center py-2 text-sm font-bold text-white">
                        {plan.badge}
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-emerald-600 to-green-600 p-8 text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-sm opacity-80 mb-3">{plan.target}</div>
                      <div className="text-5xl font-bold">{plan.price}</div>
                      <div className="text-sm opacity-80 mt-2">por mês</div>
                    </div>
                    <div className="p-6 bg-black/20">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="text-white/60 text-sm">Custo:</span>
                          <span className="font-bold text-red-400">{plan.cost}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="text-white/60 text-sm">Lucro:</span>
                          <span className="font-bold text-emerald-400 text-xl">{plan.profit}</span>
                        </div>
                        <div className="text-center pt-4">
                          <div className="text-5xl font-bold text-emerald-400 mb-1">{plan.margin}</div>
                          <div className="text-xs text-white/60">MARGEM BRUTA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Métricas Chave */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {slide.metrics.map((metric: any, i: number) => (
                  <div key={i} className="card-glass p-6 rounded-xl border border-emerald-500/20 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                    <div className="text-sm text-white/70">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'projections':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-center sm:text-left">{slide.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 text-center sm:text-left">{slide.subtitle}</p>
              </div>

              {/* Versão Mobile - Cards */}
              <div className="block lg:hidden space-y-4 mb-8">
                {slide.data.map((row: any, i: number) => (
                  <div key={i} className="card-glass p-4 rounded-xl border border-emerald-500/20">
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-white">Mês {row.mes}</span>
                        <span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-sm font-bold text-emerald-400">
                          {row.clientes} clientes
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-white/60 mb-1">MRR</div>
                        <div className="text-base font-bold text-white">R$ {row.mrr.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/60 mb-1">Lucro</div>
                        <div className="text-base font-bold text-green-400">R$ {row.lucro.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/60 mb-1">Você (15%)</div>
                        <div className="text-lg font-bold text-emerald-400">R$ {row.investidor.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/60 mb-1">Empresa (85%)</div>
                        <div className="text-base font-bold text-white/70">R$ {row.empresa.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Total Mobile */}
                <div className="card-glass p-5 rounded-xl border-2 border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 to-green-500/20">
                  <div className="text-center mb-3">
                    <div className="text-sm text-white/80 mb-2 uppercase tracking-wider">Total 6 Meses</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xs text-white/60 mb-1">Você (15%)</div>
                      <div className="text-2xl font-bold text-emerald-400">R$ {slide.total.investidor.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-white/60 mb-1">Empresa (85%)</div>
                      <div className="text-xl font-bold text-white">R$ {slide.total.empresa.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Versão Desktop - Tabela */}
              <div className="hidden lg:block card-glass rounded-3xl overflow-hidden border border-emerald-500/20 mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead className="bg-gradient-to-r from-emerald-600 to-green-600">
                      <tr>
                        <th className="p-4 text-left font-semibold">Mês</th>
                        <th className="p-4 text-left font-semibold">Clientes</th>
                        <th className="p-4 text-right font-semibold">MRR</th>
                        <th className="p-4 text-right font-semibold">Lucro</th>
                        <th className="p-4 text-right font-semibold">Você (15%)</th>
                        <th className="p-4 text-right font-semibold">Empresa (85%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {slide.data.map((row: any, i: number) => (
                        <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/5' : 'bg-black/20'}`}>
                          <td className="p-4 font-bold text-white">{row.mes}</td>
                          <td className="p-4 font-bold text-emerald-400">{row.clientes}</td>
                          <td className="p-4 text-right text-white/90">R$ {row.mrr.toLocaleString()}</td>
                          <td className="p-4 text-right font-bold text-green-400">R$ {row.lucro.toLocaleString()}</td>
                          <td className="p-4 text-right font-bold text-emerald-400 text-lg">R$ {row.investidor.toLocaleString()}</td>
                          <td className="p-4 text-right text-white/70">R$ {row.empresa.toLocaleString()}</td>
                        </tr>
                      ))}
                      <tr className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 font-bold text-lg border-t-2 border-emerald-500/30">
                        <td colSpan={4} className="p-5 text-right text-white">TOTAL 6 MESES:</td>
                        <td className="p-5 text-right text-emerald-400 text-2xl">R$ {slide.total.investidor.toLocaleString()}</td>
                        <td className="p-5 text-right text-white text-xl">R$ {slide.total.empresa.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

      case 'month-detail':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-white/70">{slide.subtitle}</p>
              </div>

              <div className="space-y-6 mb-8">
                {slide.distribution.map((item: any, i: number) => (
                  <div key={i} className="card-glass p-8 rounded-2xl border border-emerald-500/20">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white">{item.plan}</h3>
                        <p className="text-white/60 mt-1">{item.qty} clientes × R$ {item.price}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-white/60 mb-2">Receita</div>
                        <div className="text-2xl font-bold text-white">R$ {item.revenue.toLocaleString()}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/60 mb-2">Custo</div>
                        <div className="text-2xl font-bold text-red-400">R$ {item.cost.toLocaleString()}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/60 mb-2">Lucro</div>
                        <div className="text-2xl font-bold text-emerald-400">R$ {item.profit.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-glass p-10 rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-green-500/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Resumo Consolidado - Mês 6</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">Receita Total</div>
                    <div className="text-3xl font-bold text-white">R$ {slide.summary.revenue.toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">Custos</div>
                    <div className="text-3xl font-bold text-red-400">R$ {slide.summary.costs.toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">Lucro</div>
                    <div className="text-3xl font-bold text-green-400">R$ {slide.summary.profit.toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">Você (15%)</div>
                    <div className="text-4xl font-bold text-emerald-400">R$ {slide.summary.investor.toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">Empresa (85%)</div>
                    <div className="text-3xl font-bold text-white">R$ {slide.summary.company.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'roi':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-center sm:text-left">{slide.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 text-center sm:text-left">{slide.subtitle}</p>
              </div>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {slide.milestones.map((milestone: any, i: number) => (
                  <div key={i} className={`card-glass p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 transition-all ${
                    milestone.highlight
                      ? 'border-emerald-500 shadow-lg shadow-emerald-500/30 bg-emerald-500/5'
                      : 'border-emerald-500/20 hover:border-emerald-500/40'
                  }`}>
                    <div className="flex flex-col gap-4">
                      {/* Cabeçalho */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl sm:text-3xl font-bold text-white">{milestone.period}</div>
                          {milestone.highlight && (
                            <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                              <span className="text-xs sm:text-sm font-bold text-emerald-400">PAYBACK</span>
                            </div>
                          )}
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-1">
                            {milestone.accumulated.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </div>
                          <div className="text-sm sm:text-base text-white/60">
                            {milestone.percentRecovered}% do investimento recuperado
                          </div>
                        </div>
                      </div>

                      {/* Barra de progresso */}
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                          style={{width: `${Math.min(milestone.percentRecovered, 100)}%`}}
                        />
                      </div>

                      {/* Descrição */}
                      <div className="space-y-2">
                        <div className="text-base sm:text-lg font-semibold text-white">{milestone.status}</div>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed">{milestone.description}</p>
                        {milestone.monthlyProfit && (
                          <div className="flex items-center gap-2 text-sm text-emerald-400">
                            <DollarSign className="h-4 w-4" />
                            <span>Recebimento mensal: R$ {milestone.monthlyProfit.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recorrência */}
              <div className="card-glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-green-500/10 text-center mb-6">
                <div className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4">{slide.recurring.message}</div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-400 mb-3 sm:mb-4">{slide.recurring.monthly}</div>
                <div className="text-lg sm:text-xl md:text-2xl text-white/70">
                  No primeiro ano: <span className="font-bold text-white">{slide.recurring.annual}</span>
                </div>
              </div>

              {/* Visão de longo prazo */}
              {slide.longTerm && (
                <div className="card-glass p-5 sm:p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-purple-400 mb-2">Projeção de longo prazo:</div>
                      <p className="text-xs sm:text-sm md:text-base text-white/80">{slide.longTerm}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'scenarios':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">{slide.title}</h2>
                <p className="text-xl text-white/70 text-center">{slide.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {slide.scenarios.map((scenario: any, i: number) => (
                  <div key={i} className={`card-glass rounded-2xl overflow-hidden border-2 ${
                    scenario.badge ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' : 'border-white/10'
                  }`}>
                    {scenario.badge && (
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-center py-3 text-sm font-bold text-white">
                        {scenario.badge}
                      </div>
                    )}
                    <div className={`bg-gradient-to-br from-${scenario.color}-600 to-${scenario.color}-700 p-8 text-white text-center`}>
                      <h3 className="text-3xl font-bold mb-4">{scenario.name}</h3>
                      <div className="text-7xl font-bold mb-2">{scenario.clients}</div>
                      <div className="text-sm opacity-80">clientes</div>
                    </div>
                    <div className="p-8 space-y-4">
                      <div>
                        <div className="text-sm text-white/60 mb-1">MRR:</div>
                        <div className="text-2xl font-bold text-white">R$ {scenario.mrr.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">Lucro 6 meses:</div>
                        <div className="text-2xl font-bold text-emerald-400">R$ {scenario.profit6m.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">Você recebe (15%):</div>
                        <div className="text-3xl font-bold text-emerald-400">R$ {scenario.investor6m.toLocaleString()}</div>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-sm text-white/60 mb-1">Payback:</div>
                        <div className="text-xl font-bold text-white">{scenario.payback}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'affiliates':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-white/70">{slide.subtitle}</p>
              </div>

              <div className="card-glass p-8 rounded-2xl border border-emerald-500/30 mb-8 text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-3">{slide.commission}</div>
                <div className="text-lg text-white/70">Comissão vitalícia sobre cada cliente indicado</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {slide.examples.map((ex: any, i: number) => (
                  <div key={i} className="card-glass p-8 rounded-2xl border border-emerald-500/20 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">{ex.plan}</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-white/60 mb-2">Comissão mensal:</div>
                        <div className="text-4xl font-bold text-emerald-400">R$ {ex.monthly}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-2">Receita anual:</div>
                        <div className="text-2xl font-bold text-white">R$ {ex.annual.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-glass p-10 rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-green-500/10">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Projeção com Afiliados Ativos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">Afiliados Ativos:</div>
                    <div className="text-3xl font-bold text-white">{slide.projection.affiliates}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">Clientes Adicionais/Mês:</div>
                    <div className="text-3xl font-bold text-emerald-400">{slide.projection.clientsMonth}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">Receita Extra/Mês:</div>
                    <div className="text-3xl font-bold text-white">{slide.projection.extraRevenue}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">Lucro Líquido Extra:</div>
                    <div className="text-3xl font-bold text-emerald-400">{slide.projection.extraProfit}</div>
                  </div>
                </div>
                <div className="border-t-2 border-emerald-500/30 pt-8">
                  <div className="text-center mb-4">
                    <div className="text-xl text-white/70 mb-2">Sua Parte Adicional (15%):</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-white/60 mb-2">Por Mês:</div>
                      <div className="text-5xl font-bold text-emerald-400">{slide.projection.investorExtra}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-white/60 mb-2">Por Ano:</div>
                      <div className="text-5xl font-bold text-emerald-400">{slide.projection.investorAnnual}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-white/70">{slide.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {slide.opportunities.map((opp: any, i: number) => {
                  const Icon = opp.icon;
                  return (
                    <div key={i} className="card-glass p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                      <div className="flex items-start gap-6">
                        <div className="h-16 w-16 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-8 w-8 text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-bold text-white">{opp.title}</h3>
                            <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                              <span className="text-xs font-bold text-emerald-400">{opp.metric}</span>
                            </div>
                          </div>
                          <p className="text-white/70 leading-relaxed">{opp.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'risks':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-white/70">{slide.subtitle}</p>
              </div>

              <div className="space-y-6">
                {slide.risks.map((risk: any, i: number) => (
                  <div key={i} className="card-glass p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`px-4 py-2 rounded-lg border-2 ${
                          risk.level === 'BAIXO'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                            : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        }`}>
                          <span className="text-sm font-bold">{risk.level}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">{risk.risk}</h3>
                        <div className="card-glass p-5 rounded-xl border border-emerald-500/20 mb-3">
                          <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                              <div className="text-sm text-emerald-400 font-semibold mb-2">MITIGAÇÃO:</div>
                              <p className="text-white/80 leading-relaxed">{risk.mitigation}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-white/60">
                          Impacto: <span className="text-white font-semibold">{risk.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-white/70">{slide.subtitle}</p>
              </div>

              <div className="space-y-6">
                {slide.milestones.map((milestone: any, i: number) => (
                  <div key={i} className="card-glass p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-3xl font-bold text-white border-2 border-emerald-400/30">
                          {i + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{milestone.month}</h3>
                            <div className="text-lg text-emerald-400 font-semibold">{milestone.goal}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-white/60 mb-1">Investimento:</div>
                            <div className="text-lg font-bold text-white">{milestone.investment}</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {milestone.activities.map((activity: string, j: number) => (
                            <div key={j} className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-white/90 text-sm">
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-white/70">{slide.subtitle}</p>
              </div>

              <div className="space-y-8">
                {slide.terms.map((section: any, i: number) => (
                  <div key={i}>
                    <h3 className="text-2xl font-bold text-emerald-400 mb-6">{section.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.items.map((item: any, j: number) => (
                        <div key={j} className="card-glass p-6 rounded-xl border border-white/10">
                          <div className="text-sm text-white/60 mb-2">{item.label}</div>
                          <div className="text-2xl font-bold text-white">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'bonus':
        return (
          <div className={baseClasses}>
            <StarsBackground />
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">{slide.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70">{slide.subtitle}</p>
              </div>

              <div className="max-w-4xl mx-auto mb-8">
                {slide.bonuses.map((bonus: any, i: number) => {
                  const Icon = bonus.icon;
                  return (
                    <div
                      key={i}
                      className="card-glass p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-emerald-500 shadow-xl shadow-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-green-500/10"
                    >
                      <div className="text-center mb-6">
                        <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4">
                          <span className="text-xs sm:text-sm font-bold text-emerald-400">PRESENTE INCLUSO</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-center mb-8">
                        <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
                          <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-400" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{bonus.title}</h3>
                        <div className="text-emerald-400 text-2xl sm:text-3xl font-bold mb-2">
                          {bonus.value}
                          <span className="text-base text-white/60 ml-2">de economia/ano</span>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                          {bonus.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {bonus.benefits.map((benefit: string, j: number) => (
                          <div key={j} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-white/70">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="card-glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-green-500/10">
                <div className="text-center">
                  <div className="text-base sm:text-lg text-white/70 mb-3">Valor Total dos Bônus</div>
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-emerald-400 mb-4">{slide.totalValue}</div>
                  <div className="text-sm sm:text-base md:text-lg text-white/80">
                    {slide.note}
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 card-glass p-5 sm:p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm sm:text-base md:text-lg text-white/90">
                      <span className="font-bold text-blue-400">Investimento de R$ 24 mil = 15% da empresa + Robô AIra grátis (R$ 11.964/ano).</span> Você já sai ganhando desde o primeiro dia usando a IA na Annex pra atender seus clientes!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className={`${baseClasses} flex flex-col justify-center`}>
            <StarsBackground />
            <div className="relative z-10 max-w-6xl mx-auto text-center">
              <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                {slide.title}
              </h2>
              <p className="text-2xl text-white/80 mb-12">{slide.subtitle}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {slide.value_props.map((prop: string, i: number) => (
                  <div key={i} className="card-glass p-5 rounded-xl border border-emerald-500/20 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white text-left text-sm">{prop}</span>
                  </div>
                ))}
              </div>

              <div className="card-glass p-12 rounded-3xl border-2 border-emerald-500/30 mb-12">
                <div className="mb-8">
                  <div className="text-4xl font-bold text-white mb-3">{slide.contact.name}</div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{slide.contact.phone}</div>
                  <div className="text-xl text-white/70">{slide.contact.company}</div>
                  <div className="text-lg text-white/60 mt-3">{slide.contact.tagline}</div>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Próximas Etapas:</h3>
                  <div className="space-y-4">
                    {slide.steps.map((step: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 text-left">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-white/90 text-lg">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-lg text-white/60">
                Bora construir isso junto e ficar rico vendendo com IA
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${baseClasses} flex items-center justify-center`}>
            <p className="text-white/70">Slide não encontrado</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col">
      <div
        className="flex-1 relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Setas de Navegação Vertical */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-emerald-500/20 hover:bg-emerald-500/40 backdrop-blur-sm border border-emerald-500/30 rounded-full p-3 sm:p-4 text-white transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-emerald-500/20 hover:bg-emerald-500/40 backdrop-blur-sm border border-emerald-500/30 rounded-full p-3 sm:p-4 text-white transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Container com animação de slide */}
        <div
          className="h-full transition-transform duration-300 ease-in-out overflow-auto"
          style={{
            transform: direction === 'left'
              ? 'translateX(-100%)'
              : direction === 'right'
              ? 'translateX(100%)'
              : 'translateX(0)',
            opacity: isTransitioning ? 0.5 : 1,
          }}
        >
          {renderSlide(slides[currentSlide])}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="card-glass border-t border-white/10 p-4 sm:p-5 relative z-10">
        {/* Paginação Estilizada */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <span className="text-emerald-400 font-bold text-lg">{currentSlide + 1}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">{slides.length}</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-white/10"></div>
            <div className="text-white/80 font-medium text-sm text-center sm:text-left">
              {slides[currentSlide].title || slides[currentSlide].highlight || 'AIra'}
            </div>
          </div>

          {/* Indicadores de página */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setDirection(index > currentSlide ? 'left' : 'right');
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setIsTransitioning(false);
                      setDirection(null);
                    }, 300);
                  }
                }}
                className={`transition-all ${
                  index === currentSlide
                    ? 'w-8 h-2 bg-emerald-500'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                } rounded-full`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rodapé com logo AIra */}
        <div className="flex items-center justify-center gap-3 pt-3 border-t border-white/5">
          <img
            src="/AIra_Logotipo.png"
            alt="AIra"
            className="h-6 w-auto opacity-80"
          />
          <span className="text-white/40 text-sm">|</span>
          <span className="text-white/60 text-sm hidden sm:inline">A tecnologia que trabalha enquanto você dorme</span>
        </div>
      </div>
    </div>
  );
};

export default PropostaInvestimento;
