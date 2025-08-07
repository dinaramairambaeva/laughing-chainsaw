import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowLeft, AlertTriangle, Settings, Check, X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const ClientCalc = () => {
  const [activeTab, setActiveTab] = useState('development');
  const [employees, setEmployees] = useState('');
  const [monthlySalary, setMonthlySalary] = useState('');
  const [results, setResults] = useState({
    totalHumanCostMonthly: 0,
    totalHumanCostAnnual: 0,
    annualSavings: 0,
    monthlySavings: 0,
    roi: 0,
    isProfit: true
  });
  const [isCalculated, setIsCalculated] = useState(false);

  const [socialNetworks, setSocialNetworks] = useState({
    instagram: false,
    telegram: false,
    threads: false,
    whatsapp: false
  });
  const [imageProcessing, setImageProcessing] = useState(false);
  const [googleSheets, setGoogleSheets] = useState(false);
  const [crmIntegration, setCrmIntegration] = useState(false);
  const [salesAnalysis, setSalesAnalysis] = useState(false);
  const [showBonusMessage, setShowBonusMessage] = useState(false);
  const [bonusUnlocked, setBonusUnlocked] = useState(false);


  const handleReset = () => {
    setEmployees('');
    setMonthlySalary('');
    setResults({
      totalHumanCostMonthly: 0,
      totalHumanCostAnnual: 0,
      annualSavings: 0,
      monthlySavings: 0,
      roi: 0,
      isProfit: true
    });
    setIsCalculated(false);
  };

  const calculateDevelopmentCost = () => {
    let totalCost = 0;

    const selectedNetworks = Object.values(socialNetworks).filter(Boolean).length;
    if (selectedNetworks > 0) {
      totalCost += 200000;
      if (selectedNetworks > 1) totalCost += 100000;
      if (selectedNetworks > 2) totalCost += 50000;
      if (selectedNetworks > 3) totalCost += 50000;
    }

    if (imageProcessing) totalCost += 70000;
    if (googleSheets) totalCost += 50000;
    if (crmIntegration) totalCost += 70000;

    return totalCost;
  };

  useEffect(() => {
    const totalCost = calculateDevelopmentCost();
    if (totalCost >= 400000 && !bonusUnlocked) {
      setBonusUnlocked(true);
      setShowBonusMessage(true);
      const timer = setTimeout(() => {
        setShowBonusMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (totalCost < 400000) {
      setBonusUnlocked(false);
      setSalesAnalysis(false);
      setShowBonusMessage(false);
    }
  }, [socialNetworks, imageProcessing, googleSheets, crmIntegration, bonusUnlocked]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Math.abs(num));
  };

  const handleSocialNetworkChange = (network, checked) => {
    setSocialNetworks(prev => ({
      ...prev,
      [network]: checked
    }));
  };

  const selectedNetworksCount = Object.values(socialNetworks).filter(Boolean).length;
  const developmentCost = calculateDevelopmentCost();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 text-black">
        <div className="flex items-center mb-6">
          <Calculator className="mr-3 text-brand-orange w-8 h-8" />
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-darkBlue">Калькулятор ИИ-решений</h2>
        </div>
        <div className="mb-6 flex gap-2 ">          
          <h3 className="text-xl font-semibold text-center mb-2">Стоимость разработки</h3>
        </div>
        
        {activeTab === 'development' && (
          <div>
            <div className="mb-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                    <label className="block mb-3 font-medium text-gray-800">Интеграции с соцсетями</label>
                    <div className="space-y-3">
                        {['instagram', 'telegram', 'whatsapp'].map((network) => (
                        <div key={network} className="flex items-center gap-2">
                            <Checkbox
                            checked={socialNetworks[network]}
                            onCheckedChange={checked => handleSocialNetworkChange(network, checked)}
                            id={network}
                            />
                            <label htmlFor={network} className="text-gray-700 capitalize">{network}</label>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div>
                    <label className="block mb-3 font-medium text-gray-800">Дополнительные функции</label>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                        <Checkbox checked={imageProcessing} onCheckedChange={setImageProcessing} id="imageProcessing" />
                        <label htmlFor="imageProcessing" className="text-gray-700">Обработка изображений</label>
                        </div>
                        <div className="flex items-center gap-2">
                        <Checkbox checked={googleSheets} onCheckedChange={setGoogleSheets} id="googleSheets" />
                        <label htmlFor="googleSheets" className="text-gray-700">Google Sheets</label>
                        </div>
                        <div className="flex items-center gap-2">
                        <Checkbox checked={crmIntegration} onCheckedChange={setCrmIntegration} id="crmIntegration" />
                        <label htmlFor="crmIntegration" className="text-gray-700">CRM интеграция</label>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="mb-6">
                <label className="block mb-3 font-medium text-gray-800">Бонус</label>
                <div className="flex items-center gap-3">                    
                    {showBonusMessage && (
                    <span className="ml-3 text-yellow-600 flex items-center animate-pulse">
                        <Gift className="w-4 h-4 mr-1" /> Бонус разблокирован: Анализ продаж!
                    </span>
                    )}
                </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center text-lg">
                    <span className="font-medium text-gray-800">Итоговая стоимость разработки:</span>
                    <span className="font-bold text-brand-darkBlue text-xl">{formatNumber(developmentCost)} ₸</span>
                </div>
                {!bonusUnlocked && (
                    <div className="flex items-center text-gray-500 text-sm mt-3">
                    <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" />
                    Для разблокировки бонуса выберите функций на сумму 400 000 ₸ и более.
                    </div>
                )}
                </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ClientCalc;
