import ClientCalc from './components/ui/ClientCalc.jsx'
import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Clock, DollarSign, Target, TrendingUp, Plus, Minus } from 'lucide-react'
import automationHero from './assets/automation_hero.jpg'
import aiInterface from './assets/ai_interface_russian.jpg'
import './App.css'

function App() {
  const [channels, setChannels] = useState('1')
  const [requests, setRequests] = useState('1000')
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  })

  const calculatePrice = () => {
    let basePrice = 250000
    
    if (channels === '2') {
      basePrice = 350000
    } else if (channels === '3') {
      basePrice = 450000
    }
    
    if (requests === '5000') {
      basePrice += 100000
    } else if (requests === 'unlimited') {
      basePrice += 250000
    }
    
    return basePrice.toLocaleString('ru-RU')
  }

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbw_cqKho2eTCBqVxO7C_Shl0eyH1rSwg5mA8LDgUbYUhDH-x5wLiKypO7lDT_bzbPygvg/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      })
      
      const result = await response.json()
      
      if (response.ok) {
        alert('Спасибо за заявку! Наши специалисты свяжутся с вами в ближайшее время.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          message: ''
        })
      } else {
        alert(result.error || 'Произошла ошибка при отправке заявки')
      }
    } catch (error) {
      alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
    }
  }

  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Круглосуточная доступность",
      property: "Ваш ИИ-ассистент работает 24/7 без перерывов и выходных.",
      advantage: "Клиенты всегда получают мгновенные ответы и поддержку, даже в нерабочее время.",
      benefit: "Вы не упускаете ни одной продажи и повышаете лояльность клиентов."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      title: "Экономия ресурсов",
      property: "ИИ-ассистент автоматизирует рутинные задачи и обрабатывает большой объем запросов.",
      advantage: "Сокращаются расходы на персонал и время, затрачиваемое на однотипные операции.",
      benefit: "Высвобождаются ресурсы для развития бизнеса и стратегических задач."
    },
    {
      icon: <Target className="w-12 h-12 text-red-500" />,
      title: "Персонализация общения",
      property: "ИИ-ассистент обучается на данных о клиентах и адаптирует свои ответы.",
      advantage: "Каждый клиент получает индивидуальный подход и релевантную информацию.",
      benefit: "Увеличивается конверсия и улучшается клиентский опыт."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
      title: "Масштабируемость",
      property: "ИИ-ассистент легко справляется с любым объемом входящих запросов.",
      advantage: "Вы можете расширять свой бизнес без ограничений по обработке клиентских обращений.",
      benefit: "Ваш бизнес готов к росту и новым возможностям."
    }
  ]

  const testimonials = [
    {
      content: "«Раньше администратор не успевала всем отвечать. Бот сам предлагает свободные окна, записывает и присылает напоминания — опозданий стало меньше. Раз в неделю приходит понятный отчёт: сколько обращений, сколько записей и из каких каналов. Удобно и без лишних слов.»",
      author: "Данияр Нурланов",
      position: "Администратор многопрофильной клиники"
    },
    {
      content: "Наш ИИ-бот стал настоящим спасением! Он принимает заказы, отвечает на вопросы о меню и часах работы, даже помогает с бронированием столиков. Мы заметили, что клиенты стали чаще возвращаться, потому что им удобно общаться с нашим ботом. Спасибо «Вечному ИИ» за такое классное решение!",
      author: "Алия Калиева",
      position: "Владелица «Цветы у дома»"
    },
    {
      content: "Я в техниках не силён, но подключение заняло один день. Бот принимает заявки из Instagram и WhatsApp, спрашивает марку авто, проблему и предлагает время. В конце недели вижу цифры в отчёте — сколько обращений, сколько записей, откуда пришли. Переписка перестала отвлекать мастеров.",
      author: "Тимур Аманжолов",
      position: "Владелец сервиса по ремонту автомобилей"
    }
  ]

  const faqItems = [
    {
      question: "Что такое ИИ-ассистент и чем он отличается от обычного чат-бота?",
      answer: "ИИ-ассистент — это продвинутый чат-бот, который использует искусственный интеллект для понимания естественного языка, обучения на данных и предоставления более персонализированных и релевантных ответов. В отличие от обычных чат-ботов с заранее заданными сценариями, ИИ-ассистент способен вести более сложные диалоги, обучаться и адаптироваться."
    },
    {
      question: "Сколько времени занимает разработка ИИ-ассистента?",
      answer: "Сроки разработки зависят от сложности проекта и ваших требований. Базовые решения могут быть готовы за 3-7 дней, а более сложные и кастомизированные проекты могут занять от 2 до 4 недель."
    },
    {
      question: "Какие каналы связи может поддерживать ИИ-ассистент?",
      answer: "Наши ИИ-ассистенты могут быть интегрированы с различными каналами связи, включая WhatsApp, Telegram, ваш веб-сайт, Instagram Direct, а также с внутренними системами, такими как CRM и Google Sheets."
    },
    {
      question: "Нужны ли специальные технические знания для использования ИИ-ассистента?",
      answer: "Нет, наши решения разрабатываются с учетом простоты использования. Мы предоставляем полную документацию и обучение, а также оказываем поддержку, чтобы вы могли легко управлять своим ИИ-ассистентом без специальных технических знаний."
    },
    {
      question: "Можно ли обучить ИИ-ассистента на данных моей компании?",
      answer: "Да, это одна из ключевых особенностей наших ИИ-ассистентов. Мы можем обучить его на ваших внутренних документах, базе знаний, истории переписки с клиентами, чтобы он максимально точно отвечал на вопросы, специфичные для вашего бизнеса."
    },
    {
      question: "Как происходит оплата услуг?",
      answer: "Оплата производится поэтапно, согласно договору. Мы предлагаем различные варианты оплаты, включая ежемесячную подписку или единовременную оплату за разработку и внедрение, в зависимости от выбранного пакета и кастомизации."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white py-20 lg:py-32 w-full">
        <div className="container mx-auto px-[10px] sm:px-4 lg:px-[40px] max-w-screen-xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                ИИ-ассистент, который продаёт, отвечает и не берёт отпуск
              </h1>
              <p className="text-xl lg:text-2xl font-medium opacity-90">
                Создадим ИИ-бота под ваш бизнес за 3–7 дней.
              </p>
              <p className="text-lg lg:text-xl opacity-80">
                24/7 продажи, автоматизация задач и довольные клиенты.
              </p>
              <Button 
                onClick={scrollToForm}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Рассчитать стоимость
              </Button>
            </div>
            <div className="animate-fade-in-right">
              <img 
                src={automationHero} 
                alt="ИИ-ассистент для бизнеса"
                className="w-full max-w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-[10px] sm:px-4 lg:px-[40px] max-w-screen-xl w-full">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-16">О нас</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                «Вечный ИИ» — команда разработчиков, дизайнеров и продюсеров, которые создают умных ИИ-ассистентов для малого и среднего бизнеса. Мы подключаем ИИ ко всем вашим каналам: WhatsApp, Telegram, сайт, Instagram, CRM, Google Sheets.
              </p>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Наши боты не просто отвечают — они продают, консультируют и экономят вам время.
              </p>
            </div>
            <div>
              <img 
                src={aiInterface} 
                alt="Интерфейс ИИ-ассистента"
                className="max-w-full w-full h-auto mx-auto rounded-2xl shadow-xl block object-contain"
                style={{maxHeight: '420px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-[10px] sm:px-4 lg:px-[40px] max-w-screen-xl w-full">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-16">Преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-500 w-full max-w-xl mx-auto"
              >
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>
                  <div className="space-y-3 text-left">
                    <p className="text-gray-600">
                      <span className="font-semibold text-blue-600">Свойство:</span> {benefit.property}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-blue-600">Преимущество:</span> {benefit.advantage}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-blue-600">Выгода:</span> {benefit.benefit}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}

      {/* Testimonials Section */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-[10px] sm:px-4 lg:px-[40px] max-w-screen-xl w-full">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-16">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full max-w-xl mx-auto">
                <CardContent className="space-y-6">
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-[10px] sm:px-4 lg:px-[40px] max-w-screen-xl w-full">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-16">Частые вопросы</h2>
          <div className="max-w-4xl mx-auto space-y-4 w-full">
            {faqItems.map((item, index) => (
              <Card key={index} className="overflow-hidden w-full max-w-full">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-800 pr-4">{item.question}</span>
                    {activeAccordion === index ? (
                      <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    )}
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white w-full">
        <div className="container mx-auto px-[10px] sm:px-4 lg:px-[40px] max-w-screen-xl w-full">
          <div className="max-w-4xl mx-auto text-center w-full">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Готовы автоматизировать свой бизнес?</h2>
            <p className="text-lg lg:text-xl mb-12 opacity-90">
              Оставьте заявку прямо сейчас, и наши специалисты свяжутся с вами для бесплатной консультации и подбора оптимального решения.
            </p>
            <ClientCalc />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 w-full">
        <div className="container mx-auto px-[10px] sm:px-4 lg:px-[40px] max-w-screen-xl w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Вечный ИИ</h3>
              <p className="text-gray-300">Умные ИИ-ассистенты для вашего бизнеса</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300 mb-2">Email: info@eternal-ai.kz</p>
              <p className="text-gray-300 mb-2"><a href="https://wa.me/77082414865">Телефон: +7 708 241 4865</a></p>
              <p className="text-gray-300"><a href="https://www.instagram.com/eternal_kz/">Instagram: @eternal_kz</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

