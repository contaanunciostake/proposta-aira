import { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const PropostaInvestimento = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1 - Capa
    {
      type: 'cover',
      title: 'AIra',
      subtitle: 'Sua Equipe de Vendas que Nunca Dorme',
      highlight: 'Proposta de Investimento',
      subtext: 'Para: Silas - Annex Vistorias',
      bg: 'from-emerald-600 to-green-600'
    },
    
    // Slide 2 - O Problema
    {
      type: 'problem',
      title: 'O Problema que a Gente Resolve',
      subtitle: 'Olha só a realidade das empresas hoje:',
      items: [
        { icon: '😴', title: 'Perdem 67% dos leads', desc: 'Cliente chama às 23h, empresa só responde às 9h. Ele já comprou do concorrente.' },
        { icon: '💸', title: 'Vendedor CLT = R$ 5.000+/mês', desc: 'Salário + FGTS + INSS + férias + 13º + plano de saúde = prejuízo' },
        { icon: '📉', title: 'Atendimento lento', desc: '45% dos leads desistem após 5min sem resposta. Cada minuto = dinheiro perdido.' },
        { icon: '⏰', title: 'Fim de semana? Feriado?', desc: 'Seu negócio para mas o concorrente vende 24/7. Você perde 30% das vendas.' }
      ]
    },

    // Slide 3 - A Solução
    {
      type: 'solution',
      title: 'A AIra é a Solução',
      subtitle: 'Assistente de vendas por IA que atende via WhatsApp com VOZ NATURAL',
      features: [
        { icon: '⚡', title: 'Resposta em 2 segundos', desc: 'Cliente não espera nem pra tomar fôlego' },
        { icon: '🧠', title: 'Sabe TUDO dos produtos', desc: 'Preço, estoque, ficha técnica - tudo na ponta da língua' },
        { icon: '🎯', title: 'Qualifica lead sozinha', desc: 'Descobre orçamento, urgência, interesse. Só passa lead quente.' },
        { icon: '📅', title: 'Agenda visitas', desc: 'Marca horário, envia lembrete, confirma presença. No automático.' },
        { icon: '🌙', title: '24/7 sem parar', desc: 'Nunca tira férias, nunca adoece, nunca pede aumento.' },
        { icon: '💰', title: 'Custo? 10x MENOR', desc: 'R$ 497/mês vs R$ 5.000/mês do CLT' }
      ]
    },

    // Slide 4 - O Investimento
    {
      type: 'investment',
      title: 'O Investimento',
      total: 'R$ 18.000',
      breakdown: [
        { label: 'Operacional (6 meses)', value: 'R$ 12.000', desc: 'R$ 2.000/mês - moradia + alimentação (igual Presley)', percent: 67 },
        { label: 'Capital Inicial', value: 'R$ 6.000', desc: 'Marketing + infraestrutura + reserva', percent: 33 }
      ],
      equity: '15% da empresa',
      payback: '3-4 meses'
    },

    // Slide 5 - Uso do Dinheiro
    {
      type: 'usage',
      title: 'Pra Onde Vai o Dinheiro',
      subtitle: 'R$ 6.000 de capital divididos assim:',
      items: [
        { icon: '📱', label: 'Marketing', value: 'R$ 4.000', desc: 'Meta Ads + Google Ads + YouTube. Trazer clientes pagantes.', percent: 67 },
        { icon: '💻', label: 'Infraestrutura', value: 'R$ 1.000', desc: 'Servidor, domínio, SSL, APIs. Manter tudo funcionando.', percent: 17 },
        { icon: '🔒', label: 'Reserva de Caixa', value: 'R$ 1.000', desc: 'Pra qualquer imprevisto ou emergência.', percent: 16 }
      ],
      note: '💡 Despesas fixas (R$ 250/mês) saem da receita, não afetam investimento!'
    },

    // Slide 6 - Como Funciona
    {
      type: 'business',
      title: 'Como a Gente Ganha Dinheiro',
      subtitle: 'Custos ridiculamente baixos = margem BRUTAL',
      plans: [
        { 
          name: 'Starter', 
          price: 'R$ 497/mês', 
          cost: 'R$ 39', 
          profit: 'R$ 458',
          margin: '92%',
          color: 'from-green-400 to-green-600'
        },
        { 
          name: 'Professional', 
          price: 'R$ 997/mês', 
          cost: 'R$ 78', 
          profit: 'R$ 919',
          margin: '92%',
          color: 'from-blue-400 to-blue-600',
          badge: 'MAIS VENDIDO'
        },
        { 
          name: 'Enterprise', 
          price: 'R$ 1.997/mês', 
          cost: 'R$ 157', 
          profit: 'R$ 1.840',
          margin: '92%',
          color: 'from-purple-400 to-purple-600'
        }
      ],
      note: 'Custo = IA (Claude + ElevenLabs) + Mercado Pago (4,99%)'
    },

    // Slide 7 - Projeções Realista
    {
      type: 'projections',
      title: 'Projeção Realista - 50 Clientes em 6 Meses',
      subtitle: 'Veja quanto VOCÊ e a EMPRESA ganham todo mês:',
      data: [
        { mes: 1, clientes: 3, receita: 1991, lucro: 1435, investidor: 215, empresa: 1220 },
        { mes: 2, clientes: 8, receita: 6476, lucro: 5268, investidor: 790, empresa: 4478 },
        { mes: 3, clientes: 15, receita: 11955, lucro: 9847, investidor: 1477, empresa: 8370 },
        { mes: 4, clientes: 25, receita: 19925, lucro: 16662, investidor: 2499, empresa: 14163 },
        { mes: 5, clientes: 38, receita: 30253, lucro: 25564, investidor: 3835, empresa: 21729 },
        { mes: 6, clientes: 50, receita: 39850, lucro: 34485, investidor: 5173, empresa: 29312 }
      ],
      total: { investidor: 13989, empresa: 79272 }
    },

    // Slide 8 - Seu Retorno
    {
      type: 'return',
      title: 'O Que Você Ganha',
      subtitle: 'Seu investimento: R$ 18.000 por 15% da empresa',
      returns: [
        { period: '6 meses', value: 'R$ 13.989', roi: '78%', status: 'Falta R$ 4K pro payback' },
        { period: '7 meses', value: 'R$ 19.162', roi: '106%', status: 'PAYBACK COMPLETO ✅' },
        { period: '12 meses', value: 'R$ 62.073', roi: '345%', status: 'Lucro de R$ 44K' }
      ],
      monthly: 'R$ 5.173/mês',
      highlight: 'A partir do mês 6, você recebe R$ 5 mil TODO MÊS'
    },

    // Slide 9 - Detalhamento Mês 6
    {
      type: 'breakdown',
      title: 'Mês 6 - 50 Clientes Pagando',
      subtitle: 'Veja de onde vem o dinheiro:',
      details: [
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

    // Slide 10 - Comparação Cenários
    {
      type: 'scenarios',
      title: 'Comparação: Conservador vs Realista vs Otimista',
      scenarios: [
        { 
          name: 'Conservador', 
          clients: 20, 
          revenue: 9940,
          profit6m: 27343,
          investor6m: 4102,
          payback: '12 meses',
          color: 'from-orange-400 to-orange-600'
        },
        { 
          name: 'Realista', 
          clients: 50, 
          revenue: 39850,
          profit6m: 93280,
          investor6m: 13989,
          payback: '7 meses',
          color: 'from-blue-400 to-blue-600',
          badge: 'NOSSA META'
        },
        { 
          name: 'Otimista', 
          clients: 100, 
          revenue: 79700,
          profit6m: 210000,
          investor6m: 31500,
          payback: '5 meses',
          color: 'from-green-400 to-green-600'
        }
      ]
    },

    // Slide 11 - Afiliados
    {
      type: 'affiliates',
      title: 'Programa de Afiliados',
      subtitle: 'Vendedores trazendo clientes pra gente',
      commission: '20% recorrente (vitalício)',
      examples: [
        { plan: 'Starter', monthly: 99, annual: 1193 },
        { plan: 'Professional', monthly: 199, annual: 2393 },
        { plan: 'Enterprise', monthly: 399, annual: 4793 }
      ],
      projection: {
        affiliates: 10,
        clientsPerMonth: '30-50',
        extraRevenue: 'R$ 15K-25K/mês',
        extraProfit: 'R$ 12K-20K/mês',
        investorShare: 'R$ 1.800-3.000/mês',
        investorAnnual: 'R$ 21.600-36.000/ano'
      }
    },

    // Slide 12 - Por Que Agora
    {
      type: 'timing',
      title: 'Por Que Investir AGORA?',
      reasons: [
        { 
          icon: '🚀', 
          title: 'Mercado Explodindo', 
          desc: 'IA pra vendas vai de US$ 2.5B → US$ 18B até 2030. Crescimento de 28,5% ao ano!'
        },
        { 
          icon: '⏰', 
          title: 'Timing Perfeito', 
          desc: 'Meta vai barrar IAs genéricas em jan/2026. Empresas vão MIGRAR pra soluções profissionais como AIra.'
        },
        { 
          icon: '🎯', 
          title: 'Sem Concorrência Real', 
          desc: 'Somos os ÚNICOS com voz natural + qualificação automática no Brasil.'
        },
        { 
          icon: '💰', 
          title: 'Margem de 92%', 
          desc: 'Negócio SaaS escala infinitamente. Mais clientes = quase zero custo adicional.'
        }
      ]
    },

    // Slide 13 - Riscos
    {
      type: 'risks',
      title: 'E os Riscos?',
      subtitle: 'A gente pensou em tudo:',
      risks: [
        { 
          risk: 'Meta barrar IA no WhatsApp', 
          solution: 'AIra é bot EMPRESARIAL (permitido). Proibição é só pra IAs genéricas tipo ChatGPT.',
          level: 'BAIXO'
        },
        { 
          risk: 'Clientes cancelarem (churn)', 
          solution: 'Trial de 14 dias + suporte dedicado + resultados comprovados = baixíssimo churn.',
          level: 'MÉDIO'
        },
        { 
          risk: 'Custo de IA subir', 
          solution: 'Contratos anuais com Claude/ElevenLabs + descontos volume.',
          level: 'BAIXO'
        },
        { 
          risk: 'Concorrência forte', 
          solution: 'Diferencial: VOZ natural + qualificação automática. Ninguém tem isso.',
          level: 'MÉDIO'
        }
      ]
    },

    // Slide 14 - Cronograma
    {
      type: 'timeline',
      title: 'Próximos 6 Meses',
      subtitle: 'O que acontece se você topar:',
      milestones: [
        { month: 'Mês 1', goal: '3-5 clientes', actions: ['Formalizar investimento', 'Setup marketing', 'Primeiras vendas'], invest: 'R$ 9.000 (1ª parcela)' },
        { month: 'Mês 2', goal: '8-10 clientes', actions: ['Escalar tráfego pago', 'Otimizar funil'], invest: 'R$ 9.000 (2ª parcela)' },
        { month: 'Mês 3', goal: '15-20 clientes', actions: ['Lançar afiliados', 'Primeiros cases'], invest: '-' },
        { month: 'Mês 4', goal: '25-30 clientes', actions: ['Empresa lucrando', 'Payback próximo'], invest: '-' },
        { month: 'Mês 5', goal: '38-45 clientes', actions: ['Lucro recorrente', 'Contratar suporte'], invest: '-' },
        { month: 'Mês 6', goal: '50 clientes', actions: ['PAYBACK completo', 'Distribuir lucros'], invest: '-' }
      ]
    },

    // Slide 15 - Termos
    {
      type: 'terms',
      title: 'Termos do Acordo',
      terms: [
        { label: 'Investimento Total', value: 'R$ 18.000' },
        { label: 'Sua Participação', value: '15% equity' },
        { label: 'Valuation Atual', value: 'R$ 120.000' },
        { label: 'Capital Inicial (mês 1)', value: 'R$ 6.000' },
        { label: 'Operacional', value: 'R$ 2.000/mês × 6 meses' },
        { label: 'Distribuição Lucros', value: 'Mensal a partir mês 4' },
        { label: 'Relatórios', value: 'Mensais + dashboards' },
        { label: 'Decisões Estratégicas', value: 'Você participa' },
        { label: 'Vesting', value: '15% em 4 anos (3,75%/ano)' }
      ],
      guarantee: 'Transparência total. Você vê TUDO que acontece na empresa.'
    },

    // Slide 16 - Call to Action
    {
      type: 'cta',
      title: 'Bora Junto?',
      subtitle: 'Agora é a hora de investir em TECNOLOGIA que escala infinitamente',
      pitch: 'Empresa operacional em 30 dias. Payback em 7 meses. Lucro recorrente vitalício.',
      benefits: [
        '✅ Produto funcionando',
        '✅ Margem de 92%',
        '✅ Payback em 7 meses',
        '✅ Mercado gigante',
        '✅ Sem concorrência real',
        '✅ Você recebe R$ 5K/mês a partir do 6º mês'
      ],
      decision: {
        yes: 'Investir = Lucro recorrente vitalício + empresa valendo R$ 1M+ em 12 meses',
        no: 'Não investir = Perder 6 meses de momentum + concorrência entra'
      }
    },

    // Slide 17 - Contato
    {
      type: 'contact',
      title: 'Vamos Conversar?',
      contact: {
        whatsapp: '(67) 99999-9999',
        email: 'contato@helixai.com.br',
        time: 'Respondemos em minutos'
      },
      nextSteps: [
        '1️⃣ Reunião presencial pra alinhar',
        '2️⃣ Assinar contrato',
        '3️⃣ Primeira parcela (R$ 9K)',
        '4️⃣ Começar HOJE'
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const renderSlide = (slide: any) => {
    switch(slide.type) {
      case 'cover':
        return (
          <div className={`h-full bg-gradient-to-br ${slide.bg} flex flex-col items-center justify-center text-white p-8`}>
            <div className="text-6xl font-bold mb-4">{slide.title}</div>
            <div className="text-2xl mb-8">{slide.subtitle}</div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-xl mb-4">{slide.highlight}</div>
            <div className="text-lg opacity-80">{slide.subtext}</div>
          </div>
        );

      case 'problem':
        return (
          <div className="min-h-full bg-gradient-to-br from-red-50 to-orange-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="grid grid-cols-2 gap-4">
              {slide.items.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="min-h-full bg-gradient-to-br from-blue-50 to-purple-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="grid grid-cols-3 gap-4">
              {slide.features.map((feat, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="text-3xl mb-2">{feat.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{feat.title}</h3>
                  <p className="text-sm text-gray-600">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'investment':
        return (
          <div className="h-full bg-gradient-to-br from-green-50 to-emerald-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{slide.title}</h2>
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-green-600 mb-2">{slide.total}</div>
                <div className="text-xl text-gray-600">Investimento Total</div>
              </div>
              <div className="space-y-4">
                {slide.breakdown.map((item, i) => (
                  <div key={i} className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xl font-bold text-gray-800">{item.label}</span>
                      <span className="text-2xl font-bold text-green-600">{item.value}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{item.desc}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: `${item.percent}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{slide.equity}</div>
                <div className="text-gray-700">Você fica dono de</div>
              </div>
              <div className="bg-purple-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{slide.payback}</div>
                <div className="text-gray-700">Payback estimado</div>
              </div>
            </div>
          </div>
        );

      case 'usage':
        return (
          <div className="h-full bg-gradient-to-br from-indigo-50 to-blue-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="grid gap-4 mb-4">
              {slide.items.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{item.label}</h3>
                      <span className="text-2xl font-bold text-indigo-600">{item.value}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{item.desc}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{width: `${item.percent}%`}}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-gray-700">{slide.note}</p>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="min-h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {slide.plans.map((plan, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {plan.badge && (
                    <div className="bg-yellow-400 text-center py-1 text-sm font-bold">{plan.badge}</div>
                  )}
                  <div className={`bg-gradient-to-br ${plan.color} p-6 text-white`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold">{plan.price}</div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Custo:</span>
                        <span className="font-bold text-red-600">{plan.cost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lucro:</span>
                        <span className="font-bold text-green-600">{plan.profit}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">{plan.margin}</div>
                          <div className="text-sm text-gray-600">Margem de lucro</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-700 font-semibold">{slide.note}</p>
            </div>
          </div>
        );

      case 'projections':
        return (
          <div className="min-h-full bg-gradient-to-br from-green-50 to-teal-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="p-3">Mês</th>
                    <th className="p-3">Clientes</th>
                    <th className="p-3">Receita</th>
                    <th className="p-3">Lucro Empresa</th>
                    <th className="p-3">Você (15%)</th>
                    <th className="p-3">Empresa (85%)</th>
                  </tr>
                </thead>
                <tbody>
                  {slide.data && slide.data.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 text-center font-bold">{row.mes || 0}</td>
                      <td className="p-3 text-center font-bold text-blue-600">{row.clientes || 0}</td>
                      <td className="p-3 text-right">R$ {(row.receita || 0).toLocaleString()}</td>
                      <td className="p-3 text-right font-bold text-green-600">R$ {(row.lucro || 0).toLocaleString()}</td>
                      <td className="p-3 text-right font-bold text-purple-600">R$ {(row.investidor || 0).toLocaleString()}</td>
                      <td className="p-3 text-right text-gray-600">R$ {(row.empresa || 0).toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="bg-gradient-to-r from-green-100 to-emerald-100 font-bold">
                    <td colSpan={4} className="p-3 text-right">TOTAL 6 MESES:</td>
                    <td className="p-3 text-right text-purple-600 text-lg">R$ {(slide.total?.investidor || 0).toLocaleString()}</td>
                    <td className="p-3 text-right text-gray-700 text-lg">R$ {(slide.total?.empresa || 0).toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-purple-100 p-4 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Seu investimento:</div>
                <div className="text-2xl font-bold text-purple-600">R$ 18.000</div>
              </div>
              <div className="bg-green-100 p-4 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Falta pra payback:</div>
                <div className="text-2xl font-bold text-green-600">R$ 4.011</div>
              </div>
            </div>
          </div>
        );

      case 'return':
        return (
          <div className="h-full bg-gradient-to-br from-yellow-50 to-amber-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="grid gap-4 mb-6">
              {slide.returns.map((ret, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{ret.period}</div>
                    <div className="text-gray-600">{ret.status}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">{ret.value}</div>
                    <div className="text-xl text-gray-600">ROI: {ret.roi}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl shadow-2xl p-8 text-white text-center">
              <div className="text-xl mb-2">A partir do mês 6:</div>
              <div className="text-5xl font-bold mb-2">{slide.monthly}</div>
              <div className="text-xl">{slide.highlight}</div>
            </div>
          </div>
        );

      case 'breakdown':
        return (
          <div className="min-h-full bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="grid gap-4 mb-6">
              {slide.details && slide.details.map((detail, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{detail.plan || ''}</h3>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{detail.qty || 0} clientes × R$ {detail.price || 0}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Receita</div>
                      <div className="text-xl font-bold text-blue-600">R$ {(detail.revenue || 0).toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Custo</div>
                      <div className="text-xl font-bold text-red-600">R$ {(detail.cost || 0).toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Lucro</div>
                      <div className="text-xl font-bold text-green-600">R$ {(detail.profit || 0).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Resumo do Mês 6:</h3>
              <div className="grid grid-cols-5 gap-4 text-center">
                <div>
                  <div className="text-sm opacity-80 mb-1">Receita Total</div>
                  <div className="text-2xl font-bold">R$ {(slide.summary?.revenue || 0).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-1">Custos</div>
                  <div className="text-2xl font-bold">R$ {(slide.summary?.costs || 0).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-1">Lucro</div>
                  <div className="text-2xl font-bold">R$ {(slide.summary?.profit || 0).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-1">Você (15%)</div>
                  <div className="text-2xl font-bold">R$ {(slide.summary?.investor || 0).toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-1">Empresa (85%)</div>
                  <div className="text-2xl font-bold">R$ {(slide.summary?.company || 0).toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'scenarios':
        return (
          <div className="h-full bg-gradient-to-br from-slate-50 to-gray-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{slide.title}</h2>
            <div className="grid grid-cols-3 gap-6">
              {slide.scenarios && slide.scenarios.map((scenario, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {scenario.badge && (
                    <div className="bg-yellow-400 text-center py-2 text-sm font-bold">{scenario.badge}</div>
                  )}
                  <div className={`bg-gradient-to-br ${scenario.color || 'from-blue-400 to-blue-600'} p-6 text-white text-center`}>
                    <h3 className="text-3xl font-bold mb-2">{scenario.name || ''}</h3>
                    <div className="text-5xl font-bold">{scenario.clients || 0}</div>
                    <div className="text-sm opacity-80">clientes</div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-sm text-gray-600">Receita Mensal:</div>
                      <div className="text-xl font-bold text-gray-800">R$ {(scenario.revenue || 0).toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Lucro em 6 meses:</div>
                      <div className="text-xl font-bold text-green-600">R$ {(scenario.profit6m || 0).toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Você recebe (15%):</div>
                      <div className="text-2xl font-bold text-purple-600">R$ {(scenario.investor6m || 0).toLocaleString()}</div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-sm text-gray-600">Payback:</div>
                      <div className="text-lg font-bold text-blue-600">{scenario.payback || 'N/A'}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'affiliates':
        return (
          <div className="min-h-full bg-gradient-to-br from-orange-50 to-red-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-6 text-white text-center mb-6">
              <div className="text-3xl font-bold mb-2">{slide.commission || ''}</div>
              <div className="text-lg">Afiliado ganha enquanto cliente estiver ativo</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {slide.examples && slide.examples.map((ex, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{ex.plan || ''}</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-gray-600">Por mês:</div>
                      <div className="text-2xl font-bold text-green-600">R$ {ex.monthly || 0}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Em 12 meses:</div>
                      <div className="text-xl font-bold text-gray-800">R$ {(ex.annual || 0).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {slide.projection && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Projeção com Afiliados:</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <div className="text-sm text-gray-600 mb-1">{slide.projection.affiliates || 0} afiliados trazem:</div>
                    <div className="text-xl font-bold text-blue-600">{slide.projection.clientsPerMonth || '0'} clientes/mês</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600 mb-1">Receita adicional:</div>
                    <div className="text-xl font-bold text-green-600">{slide.projection.extraRevenue || 'R$ 0'}</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded col-span-2">
                    <div className="text-sm text-gray-600 mb-1">Lucro líquido extra (após comissões):</div>
                    <div className="text-2xl font-bold text-purple-600">{slide.projection.extraProfit || 'R$ 0'}</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-3">💰 Sua Parte (15%) dos Afiliados:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm opacity-80">Por mês extra:</div>
                      <div className="text-2xl font-bold">{slide.projection.investorShare || 'R$ 0'}</div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Por ano extra:</div>
                      <div className="text-2xl font-bold">{slide.projection.investorAnnual || 'R$ 0'}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'timing':
        return (
          <div className="min-h-full bg-gradient-to-br from-pink-50 to-rose-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-6">
              {slide.reasons.map((reason, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-5xl mb-4">{reason.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-lg">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'risks':
        return (
          <div className="min-h-full bg-gradient-to-br from-red-50 to-orange-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="space-y-4">
              {slide.risks.map((risk, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{risk.risk}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          risk.level === 'BAIXO' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {risk.level}
                        </span>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <div className="text-sm text-gray-600 mb-1">Solução:</div>
                        <p className="text-gray-700">{risk.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="min-h-full bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{slide.subtitle}</p>
            <div className="space-y-4">
              {slide.milestones.map((milestone, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{milestone.month}</h3>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">{milestone.goal}</div>
                          {milestone.invest && (
                            <div className="text-sm text-gray-600">{milestone.invest}</div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {milestone.actions.map((action, j) => (
                          <span key={j} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="min-h-full bg-gradient-to-br from-gray-50 to-slate-50 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {slide.terms.map((term, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-sm text-gray-600 mb-2">{term.label}</div>
                  <div className="text-2xl font-bold text-gray-800">{term.value}</div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg p-6 text-white text-center">
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <div className="text-xl font-bold">{slide.guarantee}</div>
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className="h-full bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-4 text-center">{slide.title}</h2>
            <p className="text-2xl mb-6 text-center opacity-90">{slide.subtitle}</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="text-2xl text-center font-bold">{slide.pitch}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {slide.benefits.map((benefit, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-lg">
                  {benefit}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-500 rounded-xl p-6">
                <div className="text-xl font-bold mb-2">✅ Investir</div>
                <p>{slide.decision.yes}</p>
              </div>
              <div className="bg-red-500 rounded-xl p-6">
                <div className="text-xl font-bold mb-2">❌ Não investir</div>
                <p>{slide.decision.no}</p>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="h-full bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold mb-8">{slide.title}</h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl w-full">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">📱 {slide.contact.whatsapp}</div>
                <div className="text-2xl mb-2">📧 {slide.contact.email}</div>
                <div className="text-xl opacity-80">{slide.contact.time}</div>
              </div>
              <div className="border-t border-white/30 pt-6 mt-6">
                <h3 className="text-2xl font-bold mb-4 text-center">Próximos Passos:</h3>
                <div className="space-y-3">
                  {slide.nextSteps.map((step, i) => (
                    <div key={i} className="text-xl bg-white/10 rounded-lg p-3">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Helix AI</div>
              <div className="text-xl opacity-80">Você dorme. Ela vende. 🚀</div>
            </div>
          </div>
        );

      default:
        return <div>Slide não encontrado</div>;
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 relative overflow-auto">
        {renderSlide(slides[currentSlide])}
      </div>
      
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <button 
          onClick={prevSlide}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
        >
          <ChevronLeft size={20} />
          Anterior
        </button>
        
        <div className="text-white text-lg">
          Slide {currentSlide + 1} de {slides.length}
        </div>
        
        <button 
          onClick={nextSlide}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
        >
          Próximo
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PropostaInvestimento;