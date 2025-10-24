import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, Users, Target, Zap, Shield, Calendar, Bot, Sparkles, ArrowUpRight, AlertTriangle, CheckCircle, Clock, Award } from 'lucide-react';

const PropostaInvestimento = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Stars background component
  const StarsBackground = () => (
    <>
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 3}s`
          }}
        />
      ))}
    </>
  );

  const slides = [
    // Slide 1 - Capa
    {
      type: 'cover',
      title: 'AIra',
      subtitle: 'Sua Equipe de Vendas que Nunca Dorme',
      highlight: 'Proposta de Investimento',
      subtext: 'Para: Silas - Annex Vistorias'
    },

    // Slide 2 - O Problema
    {
      type: 'problem',
      title: 'O Problema que a Gente Resolve',
      subtitle: 'Olha só a realidade das empresas hoje:',
      items: [
        { icon: AlertTriangle, title: 'Perdem 67% dos leads', desc: 'Cliente chama às 23h, empresa só responde às 9h. Ele já comprou do concorrente.' },
        { icon: DollarSign, title: 'Vendedor CLT = R$ 5.000+/mês', desc: 'Salário + FGTS + INSS + férias + 13º + plano de saúde = prejuízo' },
        { icon: TrendingUp, title: 'Atendimento lento', desc: '45% dos leads desistem após 5min sem resposta. Cada minuto = dinheiro perdido.' },
        { icon: Clock, title: 'Fim de semana? Feriado?', desc: 'Seu negócio para mas o concorrente vende 24/7. Você perde 30% das vendas.' }
      ]
    },

    // Slide 3 - A Solução
    {
      type: 'solution',
      title: 'A AIra é a Solução',
      subtitle: 'Assistente de vendas por IA que atende via WhatsApp com VOZ NATURAL',
      features: [
        { icon: Zap, title: 'Resposta em 2 segundos', desc: 'Cliente não espera nem pra tomar fôlego' },
        { icon: Bot, title: 'Sabe TUDO dos produtos', desc: 'Preço, estoque, ficha técnica - tudo na ponta da língua' },
        { icon: Target, title: 'Qualifica lead sozinha', desc: 'Descobre orçamento, urgência, interesse. Só passa lead quente.' },
        { icon: Calendar, title: 'Agenda visitas', desc: 'Marca horário, envia lembrete, confirma presença. No automático.' },
        { icon: Clock, title: '24/7 sem parar', desc: 'Nunca tira férias, nunca adoece, nunca pede aumento.' },
        { icon: DollarSign, title: 'Custo? 10x MENOR', desc: 'R$ 497/mês vs R$ 5.000/mês do CLT' }
      ]
    },

    // Slide 4 - O Investimento
    {
      type: 'investment',
      title: 'O Investimento',
      total: 'R$ 18.000',
      breakdown: [
        { label: 'Operacional (6 meses)', value: 'R$ 12.000', desc: 'R$ 2.000/mês - moradia + alimentação', percent: 67 },
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
        { icon: Target, label: 'Marketing', value: 'R$ 4.000', desc: 'Meta Ads + Google Ads + YouTube. Trazer clientes pagantes.', percent: 67 },
        { icon: Bot, label: 'Infraestrutura', value: 'R$ 1.000', desc: 'Servidor, domínio, SSL, APIs. Manter tudo funcionando.', percent: 17 },
        { icon: Shield, label: 'Reserva de Caixa', value: 'R$ 1.000', desc: 'Pra qualquer imprevisto ou emergência.', percent: 16 }
      ],
      note: 'Despesas fixas (R$ 250/mês) saem da receita, não afetam investimento!'
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
          margin: '92%'
        },
        {
          name: 'Professional',
          price: 'R$ 997/mês',
          cost: 'R$ 78',
          profit: 'R$ 919',
          margin: '92%',
          badge: 'MAIS VENDIDO'
        },
        {
          name: 'Enterprise',
          price: 'R$ 1.997/mês',
          cost: 'R$ 157',
          profit: 'R$ 1.840',
          margin: '92%'
        }
      ],
      note: 'Custo = IA (Claude + ElevenLabs) + Mercado Pago (4,99%)'
    },

    // Slide 7 - Projeções
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

    // Slide 9 - Call to Action
    {
      type: 'cta',
      title: 'Bora Junto?',
      subtitle: 'Agora é a hora de investir em TECNOLOGIA que escala infinitamente',
      pitch: 'Empresa operacional em 30 dias. Payback em 7 meses. Lucro recorrente vitalício.',
      benefits: [
        'Produto funcionando',
        'Margem de 92%',
        'Payback em 7 meses',
        'Mercado gigante',
        'Sem concorrência real',
        'R$ 5K/mês a partir do 6º mês'
      ],
      decision: {
        yes: 'Investir = Lucro recorrente vitalício + empresa valendo R$ 1M+ em 12 meses',
        no: 'Não investir = Perder 6 meses de momentum + concorrência entra'
      }
    },

    // Slide 10 - Contato
    {
      type: 'contact',
      title: 'Vamos Conversar?',
      contact: {
        whatsapp: '(67) 99999-9999',
        email: 'contato@helixai.com.br',
        time: 'Respondemos em minutos'
      },
      nextSteps: [
        'Reunião presencial pra alinhar',
        'Assinar contrato',
        'Primeira parcela (R$ 9K)',
        'Começar HOJE'
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const renderSlide = (slide: any) => {
    switch(slide.type) {
      case 'cover':
        return (
          <div className="min-h-full bg-black flex flex-col items-center justify-center text-white p-8 relative">
            <StarsBackground />
            <div className="relative z-10 text-center">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/50 mx-auto mb-8 animate-pulse">
                <span className="text-4xl">◆</span>
              </div>
              <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-3xl mb-8 text-white/80">{slide.subtitle}</p>
              <div className="card-glass px-10 py-6 rounded-2xl text-2xl mb-4 inline-block border-neon-green glow-green">
                {slide.highlight}
              </div>
              <p className="text-xl text-white/60 mt-6">{slide.subtext}</p>
            </div>
          </div>
        );

      case 'problem':
        return (
          <div className="min-h-full bg-black p-8 relative">
            <StarsBackground />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-3 flex items-center gap-3">
                <AlertTriangle className="text-red-400 h-12 w-12" />
                {slide.title}
              </h2>
              <p className="text-2xl text-white/70 mb-8">{slide.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {slide.items.map((item: any, i: number) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="card-glass p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all group">
                      <Icon className="h-12 w-12 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/70 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="min-h-full bg-black p-8 relative">
            <StarsBackground />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-3">
                <Sparkles className="text-green-400 h-12 w-12 animate-pulse" />
                {slide.title}
              </h2>
              <p className="text-2xl text-white/70 mb-8">{slide.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {slide.features.map((feat: any, i: number) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="card-glass p-7 rounded-2xl border border-green-500/20 hover:border-green-500/50 hover:glow-green transition-all group">
                      <Icon className="h-10 w-10 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                      <p className="text-white/70 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'investment':
        return (
          <div className="min-h-full bg-black p-8 relative">
            <StarsBackground />
            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-8 text-center">{slide.title}</h2>
              <div className="card-glass rounded-3xl p-10 border border-green-500/20 glow-green mb-8">
                <div className="text-center mb-10">
                  <div className="text-8xl font-bold text-neon-green mb-3">{slide.total}</div>
                  <div className="text-2xl text-white/60">Investimento Total</div>
                </div>
                <div className="space-y-6">
                  {slide.breakdown.map((item: any, i: number) => (
                    <div key={i} className="border-l-4 border-green-500 pl-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-2xl font-bold text-white">{item.label}</span>
                        <span className="text-3xl font-bold text-neon-green">{item.value}</span>
                      </div>
                      <p className="text-white/70 mb-4 text-lg">{item.desc}</p>
                      <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full transition-all duration-1000"
                          style={{width: `${item.percent}%`}}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-glass p-8 rounded-2xl text-center border border-green-500/20">
                  <div className="text-4xl font-bold text-neon-green mb-3">{slide.equity}</div>
                  <div className="text-white/70 text-lg">Você fica dono de</div>
                </div>
                <div className="card-glass p-8 rounded-2xl text-center border border-green-500/20">
                  <div className="text-4xl font-bold text-neon-green mb-3">{slide.payback}</div>
                  <div className="text-white/70 text-lg">Payback estimado</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'usage':
        return (
          <div className="min-h-full bg-black p-8 relative">
            <StarsBackground />
            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-3">{slide.title}</h2>
              <p className="text-2xl text-white/70 mb-8">{slide.subtitle}</p>
              <div className="space-y-6 mb-6">
                {slide.items.map((item: any, i: number) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="card-glass p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all">
                      <div className="flex items-center gap-6">
                        <Icon className="h-12 w-12 text-green-400" />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="text-2xl font-bold text-white">{item.label}</h3>
                            <span className="text-3xl font-bold text-neon-green">{item.value}</span>
                          </div>
                          <p className="text-white/70 mb-4 text-lg">{item.desc}</p>
                          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                              style={{width: `${item.percent}%`}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="card-glass border border-amber-500/30 p-6 rounded-xl">
                <p className="text-white/80 text-lg flex items-center gap-3">
                  <Sparkles className="text-amber-400" />
                  {slide.note}
                </p>
              </div>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="min-h-full bg-black p-8 relative">
            <StarsBackground />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-3">{slide.title}</h2>
              <p className="text-2xl text-white/70 mb-8">{slide.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {slide.plans.map((plan: any, i: number) => (
                  <div key={i} className="card-glass rounded-2xl overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all hover:glow-green group">
                    {plan.badge && (
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-center py-2 text-sm font-bold text-white">
                        {plan.badge}
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-white">
                      <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
                      <div className="text-4xl font-bold">{plan.price}</div>
                    </div>
                    <div className="p-8">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span className="text-white/60">Custo:</span>
                          <span className="font-bold text-red-400 text-xl">{plan.cost}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                          <span className="text-white/60">Lucro:</span>
                          <span className="font-bold text-green-400 text-xl">{plan.profit}</span>
                        </div>
                        <div className="text-center pt-4">
                          <div className="text-5xl font-bold text-neon-green mb-2">{plan.margin}</div>
                          <div className="text-sm text-white/60">Margem de lucro</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-glass border border-green-500/30 p-6 rounded-xl">
                <p className="text-white/80 font-semibold text-lg text-center">{slide.note}</p>
              </div>
            </div>
          </div>
        );

      case 'projections':
        return (
          <div className="min-h-full bg-black p-8 relative">
            <StarsBackground />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-3">{slide.title}</h2>
              <p className="text-2xl text-white/70 mb-8">{slide.subtitle}</p>
              <div className="card-glass rounded-2xl overflow-hidden border border-green-500/20">
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead className="bg-gradient-to-r from-green-600 to-emerald-600">
                      <tr>
                        <th className="p-4 text-left">Mês</th>
                        <th className="p-4 text-left">Clientes</th>
                        <th className="p-4 text-right">Receita</th>
                        <th className="p-4 text-right">Lucro</th>
                        <th className="p-4 text-right">Você (15%)</th>
                        <th className="p-4 text-right">Empresa (85%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {slide.data.map((row: any, i: number) => (
                        <tr key={i} className={`border-b border-white/10 ${i % 2 === 0 ? 'bg-white/5' : ''}`}>
                          <td className="p-4 font-bold">{row.mes}</td>
                          <td className="p-4 font-bold text-green-400">{row.clientes}</td>
                          <td className="p-4 text-right">R$ {row.receita.toLocaleString()}</td>
                          <td className="p-4 text-right font-bold text-emerald-400">R$ {row.lucro.toLocaleString()}</td>
                          <td className="p-4 text-right font-bold text-neon-green text-xl">R$ {row.investidor.toLocaleString()}</td>
                          <td className="p-4 text-right text-white/70">R$ {row.empresa.toLocaleString()}</td>
                        </tr>
                      ))}
                      <tr className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 font-bold text-lg">
                        <td colSpan={4} className="p-4 text-right">TOTAL 6 MESES:</td>
                        <td className="p-4 text-right text-neon-green text-2xl">R$ {slide.total.investidor.toLocaleString()}</td>
                        <td className="p-4 text-right text-white text-xl">R$ {slide.total.empresa.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="card-glass p-6 rounded-xl border border-purple-500/30">
                  <div className="text-sm text-white/60 mb-2">Seu investimento:</div>
                  <div className="text-3xl font-bold text-purple-400">R$ 18.000</div>
                </div>
                <div className="card-glass p-6 rounded-xl border border-green-500/30">
                  <div className="text-sm text-white/60 mb-2">Falta pra payback:</div>
                  <div className="text-3xl font-bold text-green-400">R$ 4.011</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'return':
        return (
          <div className="min-h-full bg-black p-8 relative">
            <StarsBackground />
            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-3">{slide.title}</h2>
              <p className="text-2xl text-white/70 mb-8">{slide.subtitle}</p>
              <div className="space-y-6 mb-8">
                {slide.returns.map((ret: any, i: number) => (
                  <div key={i} className="card-glass rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">{ret.period}</div>
                      <div className="text-white/60 text-lg">{ret.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold text-neon-green mb-1">{ret.value}</div>
                      <div className="text-xl text-green-400">ROI: {ret.roi}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-glass border-2 border-green-500 rounded-3xl p-10 text-center glow-green animate-pulse-glow">
                <div className="text-2xl text-white/80 mb-3">A partir do mês 6:</div>
                <div className="text-7xl font-bold text-neon-green mb-3">{slide.monthly}</div>
                <div className="text-2xl text-white/90">{slide.highlight}</div>
              </div>
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className="min-h-full bg-black flex flex-col items-center justify-center text-white p-8 relative">
            <StarsBackground />
            <div className="relative z-10 max-w-5xl">
              <h2 className="text-7xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {slide.title}
              </h2>
              <p className="text-3xl mb-8 text-center text-white/80">{slide.subtitle}</p>
              <div className="card-glass px-10 py-8 rounded-3xl text-2xl mb-10 text-center border border-green-500/30 glow-green">
                {slide.pitch}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {slide.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="card-glass p-6 rounded-2xl text-lg flex items-center gap-3 border border-green-500/20">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card-glass border-2 border-green-500 rounded-2xl p-8 glow-green">
                  <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-400" />
                    Investir
                  </div>
                  <p className="text-white/80 text-lg">{slide.decision.yes}</p>
                </div>
                <div className="card-glass border-2 border-red-500/50 rounded-2xl p-8">
                  <div className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-400">
                    <AlertTriangle />
                    Não investir
                  </div>
                  <p className="text-white/70 text-lg">{slide.decision.no}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="min-h-full bg-black flex flex-col items-center justify-center text-white p-8 relative">
            <StarsBackground />
            <div className="relative z-10 max-w-3xl w-full">
              <h2 className="text-6xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {slide.title}
              </h2>
              <div className="card-glass rounded-3xl p-10 mb-10 border border-green-500/30 glow-green">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold mb-4">📱 {slide.contact.whatsapp}</div>
                  <div className="text-3xl mb-4">📧 {slide.contact.email}</div>
                  <div className="text-xl text-white/60">{slide.contact.time}</div>
                </div>
                <div className="border-t border-white/20 pt-8 mt-8">
                  <h3 className="text-3xl font-bold mb-6 text-center text-neon-green">Próximos Passos:</h3>
                  <div className="space-y-4">
                    {slide.nextSteps.map((step: string, i: number) => (
                      <div key={i} className="bg-white/5 rounded-xl p-5 text-xl flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Helix AI
                </div>
                <div className="text-2xl text-white/70">Você dorme. Ela vende. 🚀</div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="min-h-full bg-black flex items-center justify-center">
            <p className="text-white/70">Slide não encontrado</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col">
      <div className="flex-1 relative overflow-auto">
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation Footer */}
      <div className="card-glass border-t border-white/10 p-4 flex items-center justify-between relative z-10">
        <button
          onClick={prevSlide}
          className="btn-primary-neon text-white px-8 py-3 rounded-xl flex items-center gap-2 font-semibold"
        >
          <ChevronLeft size={20} />
          Anterior
        </button>

        <div className="text-white text-lg font-medium">
          Slide {currentSlide + 1} de {slides.length}
        </div>

        <button
          onClick={nextSlide}
          className="btn-primary-neon text-white px-8 py-3 rounded-xl flex items-center gap-2 font-semibold"
        >
          Próximo
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PropostaInvestimento;
