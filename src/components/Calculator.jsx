import React, { useState, useEffect } from "react";

const departments = [
  { value: "finance", label: "Финансовый отдел" },
  { value: "sales", label: "Отдел продаж" },
  { value: "marketing", label: "Маркетинговый отдел" },
  { value: "it", label: "IT-отдел" },
  { value: "hr", label: "HR-отдел" },
  { value: "legal", label: "Юридический отдел" },
  { value: "rnd", label: "Отдел исследований и разработок (R&D)" },
  { value: "production", label: "Производственный отдел" },
  { value: "logistics", label: "Логистический отдел" },
  { value: "procurement", label: "Отдел закупок" },
  { value: "customer_support", label: "Отдел клиентской поддержки" },
  { value: "quality", label: "Отдел качества" },
  { value: "admin", label: "Административный отдел" },
  { value: "pr", label: "PR-отдел" },
  { value: "internal_audit", label: "Отдел внутреннего аудита" },
  { value: "security", label: "Отдел безопасности" },
  { value: "risk_management", label: "Отдел управления рисками" },
  { value: "hr_work", label: "Отдел по работе с персоналом" },
  { value: "analytics", label: "Отдел аналитики" },
  { value: "corp_communications", label: "Отдел корпоративных коммуникаций" },
  { value: "project_management", label: "Отдел управления проектами" },
  { value: "export_import", label: "Отдел экспорта и импорта" },
  { value: "service", label: "Сервисный отдел" },
  { value: "planning", label: "Отдел планирования" },
  { value: "operations", label: "Отдел эксплуатации" },
  { value: "hse", label: "Отдел по охране труда и технике безопасности" },
  { value: "logistics_warehousing", label: "Отдел логистики и складирования" },
  { value: "foreign_trade", label: "Отдел внешнеэкономической деятельности (ВЭД)" },
  { value: "innovation", label: "Отдел инноваций" },
  { value: "supply_chain", label: "Отдел по управлению цепочками поставок" },
  { value: "asset_management", label: "Отдел управления активами" },
  { value: "transaction_support", label: "Отдел сопровождения сделок" },
  { value: "quality_control", label: "Отдел контроля качества" }
];

function Calculator() {
  const [selectedDepartment, setSelectedDepartment] = useState("sales");
  const [employees, setEmployees] = useState(50);
  const [salary, setSalary] = useState(250000);
  const [results, setResults] = useState({
    annualSalary: 0,
    efficiency: 20,
    potentialBenefitPerEmployee: 0,
    potentialBenefitAll: 0,
    finalBenefit: 0,
    roi: 0,
    profitStartDate: ""
  });

  const calculateResults = () => {
    const annualSalary = employees * salary * 12;
    const potentialBenefitPerEmployee = salary * 12 * 0.2; // 20% экономия времени
    const potentialBenefitAll = potentialBenefitPerEmployee * employees;
    const developmentCost = 500000;
    const platformCost = 180000;
    const totalCost = developmentCost + platformCost;
    const finalBenefit = potentialBenefitAll - totalCost;
    const roi = Math.round((finalBenefit / totalCost) * 100);
    
    // Дата начала получения выгоды (через 3 месяца)
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() + 3);
    const profitStartDate = startDate.toLocaleDateString("ru-RU");

    setResults({
      annualSalary,
      efficiency: 20,
      potentialBenefitPerEmployee,
      potentialBenefitAll,
      finalBenefit,
      roi,
      profitStartDate
    });
  };

  useEffect(() => {
    calculateResults();
  }, [employees, salary]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat("ru-RU").format(Math.round(num));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-2xl">🧮</span>
          <span className="px-4 py-2 bg-blue-500/20 text-blue-500 rounded-full text-sm font-semibold">
            Калькулятор экономии
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-800">
          Рассчитайте выгоду от внедрения ИИ
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Узнайте, сколько ваша компания сэкономит с ИИ-ассистентом
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Левая часть - настройки */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Параметры расчёта</h3>
          
          {/* Выбор отдела */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Наименование отдела
            </label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              {departments.map((dept) => (
                <option key={dept.value} value={dept.value}>
                  {dept.label}
                </option>
              ))}
            </select>
          </div>

          {/* Количество сотрудников */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Кол-во сотрудников в отделе: <span className="text-blue-500">{employees}</span>
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Зарплата */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Средний уровень заработной платы одного сотрудника <span className="text-gray-500">(в рублях)</span>: <span className="text-blue-500">{formatNumber(salary)}</span>
            </label>
            <div className="relative">
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10 000</span>
                <span>500 000</span>
              </div>
            </div>
          </div>

          <button
            onClick={calculateResults}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Рассчитать
          </button>
        </div>

        {/* Правая часть - результаты */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>Результат:</span>
          </h3>

          <div className="space-y-4">
            {/* Годовая зарплата */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Годовая зарплата сотрудников отдела:</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-800">{formatNumber(results.annualSalary)}</span>
                <span className="text-sm text-gray-500">₽/год</span>
              </div>
            </div>

            {/* Экономия времени */}
            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Экономия времени с AI-ботом:</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-blue-600">{results.efficiency}</span>
                <span className="text-sm text-gray-500">%</span>
              </div>
            </div>

            {/* Потенциальная выгода на 1 сотрудника */}
            <div className="bg-green-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Потенциальная выгода на 1 сотрудника с AI-ботом, в год:</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-green-600">{formatNumber(results.potentialBenefitPerEmployee)}</span>
                <span className="text-sm text-gray-500">₽/год</span>
              </div>
            </div>

            {/* Потенциальная выгода на всех */}
            <div className="bg-green-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Потенциальная выгода на всех сотрудников с AI-ботом, в год:</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-green-600">{formatNumber(results.potentialBenefitAll)}</span>
                <span className="text-sm text-gray-500">₽/год</span>
              </div>
            </div>

            {/* Стоимость разработки */}
            <div className="bg-orange-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Стоимость разработки AI-бота «ПОД КЛЮЧ»:</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-orange-500">500 000</span>
                <span className="text-sm text-gray-500">₽</span>
              </div>
            </div>

            {/* Тариф платформы */}
            <div className="bg-purple-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Тариф «Стоимость доступа к платформе», в год:</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-purple-500">180 000</span>
                <span className="text-sm text-gray-500">₽/год</span>
              </div>
            </div>

            {/* Итоговая выгода */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600">✓</span>
                <h4 className="text-sm font-semibold text-green-700">Итоговая выгода в год:</h4>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-green-600">{formatNumber(results.finalBenefit)}</span>
                <span className="text-sm text-gray-500">₽/год</span>
              </div>
            </div>

            {/* ROI */}
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl p-4 border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-600">✓</span>
                <h4 className="text-sm font-semibold text-purple-700">ROI, %:</h4>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-purple-600">{results.roi}</span>
                <span className="text-sm text-gray-500">%</span>
              </div>
            </div>

            {/* Дата старта */}
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-4 border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600">✓</span>
                <h4 className="text-sm font-semibold text-blue-700">Возможный старт получения выгоды:</h4>
              </div>
              <div className="text-2xl font-bold text-blue-600">{results.profitStartDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

