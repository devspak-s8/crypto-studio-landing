"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bitcoin,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Rocket,
  Menu,
  X,
  ChevronDown,
  Coins,
  BarChart3,
  CheckCircle,
  MessageCircle,
  Trophy,
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYenIcon as Yen,
  Activity,
  Globe,
  LineChart,
  PieChart,
  AlertTriangle,
  Calendar,
  Smartphone,
  Monitor,
  Bot,
  Brain,
} from "lucide-react"
import Link from "next/link"
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart as RechartsPieChart,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function CryptoStudioLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [cryptoPrice, setCryptoPrice] = useState(45234.67)
  const [priceChange, setPriceChange] = useState(2.34)
  const [forexRates, setForexRates] = useState({
    EURUSD: 1.0856,
    GBPUSD: 1.2734,
    USDJPY: 149.23,
    AUDUSD: 0.6543,
  })

  // Sample chart data
  const cryptoChartData = [
    { time: "00:00", BTC: 43000, ETH: 2400, BNB: 320 },
    { time: "04:00", BTC: 43500, ETH: 2450, BNB: 325 },
    { time: "08:00", BTC: 44200, ETH: 2380, BNB: 318 },
    { time: "12:00", BTC: 45100, ETH: 2520, BNB: 335 },
    { time: "16:00", BTC: 44800, ETH: 2480, BNB: 328 },
    { time: "20:00", BTC: 45234, ETH: 2510, BNB: 332 },
  ]

  const forexChartData = [
    { time: "Mon", EURUSD: 1.082, GBPUSD: 1.268, USDJPY: 148.5 },
    { time: "Tue", EURUSD: 1.0835, GBPUSD: 1.271, USDJPY: 148.8 },
    { time: "Wed", EURUSD: 1.0845, GBPUSD: 1.2725, USDJPY: 149.1 },
    { time: "Thu", EURUSD: 1.0856, GBPUSD: 1.2734, USDJPY: 149.23 },
    { time: "Fri", EURUSD: 1.0862, GBPUSD: 1.2745, USDJPY: 149.45 },
  ]

  const portfolioData = [
    { name: "Bitcoin", value: 45, color: "#F7931A" },
    { name: "Ethereum", value: 25, color: "#627EEA" },
    { name: "Forex", value: 20, color: "#00D4AA" },
    { name: "Stocks", value: 10, color: "#FF6B6B" },
  ]

  const tradingSignalsData = [
    { pair: "BTC/USD", signal: "BUY", strength: 85, profit: "+12.5%" },
    { pair: "EUR/USD", signal: "SELL", strength: 78, profit: "+8.3%" },
    { pair: "ETH/USD", signal: "BUY", strength: 92, profit: "+15.7%" },
    { pair: "GBP/USD", signal: "HOLD", strength: 65, profit: "+3.2%" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Simulate live price updates
    const priceInterval = setInterval(() => {
      setCryptoPrice((prev) => prev + (Math.random() - 0.5) * 100)
      setPriceChange((Math.random() - 0.5) * 5)

      setForexRates((prev) => ({
        EURUSD: prev.EURUSD + (Math.random() - 0.5) * 0.01,
        GBPUSD: prev.GBPUSD + (Math.random() - 0.5) * 0.01,
        USDJPY: prev.USDJPY + (Math.random() - 0.5) * 0.5,
        AUDUSD: prev.AUDUSD + (Math.random() - 0.5) * 0.01,
      }))
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(priceInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
      {/* Enhanced Animated Background Elements with New Colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-2xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-500/8 rounded-full blur-3xl animate-pulse delay-4000"></div>
      </div>

      {/* Enhanced Floating Icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Bitcoin className="absolute top-20 left-10 w-8 h-8 text-yellow-400/20 animate-float" />
        <DollarSign className="absolute top-40 right-20 w-6 h-6 text-green-400/20 animate-float-delayed" />
        <Euro className="absolute bottom-40 left-20 w-7 h-7 text-blue-400/20 animate-float" />
        <PoundSterling className="absolute bottom-20 right-10 w-6 h-6 text-purple-400/20 animate-float-delayed" />
        <Yen className="absolute top-60 left-1/3 w-6 h-6 text-orange-400/20 animate-float" />
        <TrendingUp className="absolute bottom-60 right-1/3 w-7 h-7 text-emerald-400/20 animate-float-delayed" />
        <BarChart3 className="absolute top-1/3 right-1/4 w-5 h-5 text-pink-400/20 animate-float" />
        <LineChart className="absolute bottom-1/3 left-1/4 w-6 h-6 text-indigo-400/20 animate-float-delayed" />
      </div>

      {/* Enhanced Navigation with Multi-Asset Ticker */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-orange-600 rounded-lg flex items-center justify-center animate-glow">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              TradingStudio
            </span>
          </div>

          {/* Multi-Asset Price Ticker */}
          <div className="hidden lg:flex items-center space-x-4 text-sm overflow-hidden">
            <div className="flex items-center space-x-2 bg-black/30 px-3 py-1 rounded-full">
              <Bitcoin className="w-4 h-4 text-yellow-400" />
              <span>${cryptoPrice.toFixed(0)}</span>
              <span className={`${priceChange >= 0 ? "text-green-400" : "text-red-400"}`}>
                {priceChange >= 0 ? "+" : ""}
                {priceChange.toFixed(2)}%
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 px-3 py-1 rounded-full">
              <Euro className="w-4 h-4 text-blue-400" />
              <span>{forexRates.EURUSD.toFixed(4)}</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 px-3 py-1 rounded-full">
              <PoundSterling className="w-4 h-4 text-purple-400" />
              <span>{forexRates.GBPUSD.toFixed(4)}</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#trading" className="hover:text-emerald-400 transition-colors duration-300">
              Trading
            </Link>
            <Link href="#forex" className="hover:text-emerald-400 transition-colors duration-300">
              Forex
            </Link>
            <Link href="#analytics" className="hover:text-emerald-400 transition-colors duration-300">
              Analytics
            </Link>
            <Link href="#signals" className="hover:text-emerald-400 transition-colors duration-300">
              Signals
            </Link>
            <Button className="bg-gradient-to-r from-emerald-600 to-orange-600 hover:from-emerald-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300">
              Start Trading
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 animate-slide-down">
            <div className="px-6 py-4 space-y-4">
              <Link href="#trading" className="block hover:text-emerald-400 transition-colors">
                Trading
              </Link>
              <Link href="#forex" className="block hover:text-emerald-400 transition-colors">
                Forex
              </Link>
              <Link href="#analytics" className="block hover:text-emerald-400 transition-colors">
                Analytics
              </Link>
              <Link href="#signals" className="block hover:text-emerald-400 transition-colors">
                Signals
              </Link>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-orange-600">Start Trading</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 text-emerald-300 border-emerald-500/30 animate-pulse">
              🚀 Advanced Trading & Analytics Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Master Crypto &
              <br />
              <span className="animate-text-glow">Forex Markets</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-300">
              Professional trading platform with AI-powered analytics, real-time signals, and advanced charting tools
              for crypto, forex, and traditional markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-orange-600 hover:from-emerald-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              >
                Start Trading Now
                <Activity className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 bg-transparent"
              >
                <BarChart3 className="mr-2 w-5 h-5" />
                View Analytics
              </Button>
            </div>
          </div>

          {/* Enhanced Trading Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up delay-700">
            {[
              {
                number: "$50B+",
                label: "Daily Volume",
                icon: <Activity className="w-6 h-6" />,
                color: "from-emerald-400 to-green-400",
              },
              {
                number: "2M+",
                label: "Active Traders",
                icon: <Users className="w-6 h-6" />,
                color: "from-orange-400 to-red-400",
              },
              {
                number: "150+",
                label: "Trading Pairs",
                icon: <Coins className="w-6 h-6" />,
                color: "from-blue-400 to-cyan-400",
              },
              {
                number: "99.9%",
                label: "Uptime",
                icon: <Shield className="w-6 h-6" />,
                color: "from-purple-400 to-pink-400",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-2">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Live Trading Charts Section */}
      <section id="trading" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              Live Market Data
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time charts and analytics for crypto, forex, and traditional markets
            </p>
          </div>

          <Tabs defaultValue="crypto" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/20 border border-white/10">
              <TabsTrigger value="crypto" className="data-[state=active]:bg-emerald-600">
                Cryptocurrency
              </TabsTrigger>
              <TabsTrigger value="forex" className="data-[state=active]:bg-orange-600">
                Forex
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="data-[state=active]:bg-purple-600">
                Portfolio
              </TabsTrigger>
            </TabsList>

            <TabsContent value="crypto">
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bitcoin className="w-6 h-6 text-yellow-400" />
                    <span>Cryptocurrency Markets</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      BTC: { label: "Bitcoin", color: "#F7931A" },
                      ETH: { label: "Ethereum", color: "#627EEA" },
                      BNB: { label: "Binance Coin", color: "#F3BA2F" },
                    }}
                    className="h-[400px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={cryptoChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="time" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="BTC"
                          stackId="1"
                          stroke="#F7931A"
                          fill="#F7931A"
                          fillOpacity={0.3}
                        />
                        <Area
                          type="monotone"
                          dataKey="ETH"
                          stackId="2"
                          stroke="#627EEA"
                          fill="#627EEA"
                          fillOpacity={0.3}
                        />
                        <Area
                          type="monotone"
                          dataKey="BNB"
                          stackId="3"
                          stroke="#F3BA2F"
                          fill="#F3BA2F"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forex">
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-6 h-6 text-emerald-400" />
                    <span>Forex Markets</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      EURUSD: { label: "EUR/USD", color: "#10B981" },
                      GBPUSD: { label: "GBP/USD", color: "#F59E0B" },
                      USDJPY: { label: "USD/JPY", color: "#EF4444" },
                    }}
                    className="h-[400px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={forexChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="time" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="EURUSD" stroke="#10B981" strokeWidth={3} />
                        <Line type="monotone" dataKey="GBPUSD" stroke="#F59E0B" strokeWidth={3} />
                        <Line type="monotone" dataKey="USDJPY" stroke="#EF4444" strokeWidth={3} />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="portfolio">
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="w-6 h-6 text-purple-400" />
                    <span>Portfolio Allocation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <ChartContainer
                      config={{
                        Bitcoin: { label: "Bitcoin", color: "#F7931A" },
                        Ethereum: { label: "Ethereum", color: "#627EEA" },
                        Forex: { label: "Forex", color: "#00D4AA" },
                        Stocks: { label: "Stocks", color: "#FF6B6B" },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <RechartsPieChart data={portfolioData}>
                            {portfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </RechartsPieChart>
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="space-y-4">
                      {portfolioData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg">{item.value}%</div>
                            <div className="text-sm text-gray-400">$12,{(item.value * 100).toFixed(0)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trading Signals Section */}
      <section id="signals" className="py-20 px-6 bg-gradient-to-r from-emerald-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              AI Trading Signals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI algorithms analyze market patterns to provide high-accuracy trading signals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tradingSignalsData.map((signal, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">{signal.pair}</h3>
                    <Badge
                      className={`${
                        signal.signal === "BUY"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : signal.signal === "SELL"
                            ? "bg-red-500/20 text-red-400 border-red-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {signal.signal}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Strength</span>
                      <span className="font-bold">{signal.strength}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          signal.strength >= 80
                            ? "bg-green-500"
                            : signal.strength >= 60
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${signal.strength}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Profit</span>
                      <span className="font-bold text-green-400">{signal.profit}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-emerald-600 to-orange-600 hover:from-emerald-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300">
              <Brain className="mr-2 w-5 h-5" />
              Get Premium Signals
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section id="analytics" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              Advanced Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade tools for market analysis and risk management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Market Analysis",
                description:
                  "Machine learning algorithms analyze market sentiment and predict price movements with 85% accuracy.",
                color: "from-purple-400 to-pink-500",
                features: ["Sentiment Analysis", "Pattern Recognition", "Price Prediction"],
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Automated Trading Bots",
                description: "Deploy sophisticated trading bots with customizable strategies and risk management.",
                color: "from-emerald-400 to-cyan-500",
                features: ["Grid Trading", "DCA Strategies", "Arbitrage Bots"],
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "Risk Management",
                description: "Advanced risk assessment tools to protect your portfolio from market volatility.",
                color: "from-orange-400 to-red-500",
                features: ["Stop Loss", "Position Sizing", "Volatility Analysis"],
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Technical Analysis",
                description: "Comprehensive charting tools with 100+ indicators and drawing tools.",
                color: "from-blue-400 to-indigo-500",
                features: ["50+ Indicators", "Custom Scripts", "Multi-Timeframe"],
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Multi-Market Access",
                description: "Trade across crypto, forex, stocks, and commodities from a single platform.",
                color: "from-green-400 to-teal-500",
                features: ["200+ Markets", "Cross-Asset", "Global Access"],
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Trading",
                description: "Full-featured mobile app for trading on the go with real-time notifications.",
                color: "from-pink-400 to-rose-500",
                features: ["iOS & Android", "Push Alerts", "Offline Charts"],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market News & Calendar Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Market Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with real-time news, economic calendar, and market insights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Economic Calendar */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <span>Economic Calendar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: "09:30", event: "US GDP Release", impact: "High", currency: "USD" },
                    { time: "14:00", event: "ECB Interest Rate", impact: "High", currency: "EUR" },
                    { time: "16:30", event: "UK Employment Data", impact: "Medium", currency: "GBP" },
                    { time: "22:00", event: "China PMI", impact: "Medium", currency: "CNY" },
                  ].map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-sm font-mono text-gray-400">{event.time}</div>
                        <div>
                          <div className="font-medium">{event.event}</div>
                          <div className="text-sm text-gray-400">{event.currency}</div>
                        </div>
                      </div>
                      <Badge
                        className={`${
                          event.impact === "High"
                            ? "bg-red-500/20 text-red-400 border-red-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }`}
                      >
                        {event.impact}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market News */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                  <span>Market News</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Bitcoin Reaches New All-Time High", time: "2 hours ago", source: "CryptoNews" },
                    { title: "Fed Signals Rate Cut in Q2", time: "4 hours ago", source: "Reuters" },
                    { title: "EUR/USD Breaks Key Resistance", time: "6 hours ago", source: "ForexLive" },
                    { title: "Tesla Stock Surges on AI News", time: "8 hours ago", source: "Bloomberg" },
                  ].map((news, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <h4 className="font-medium mb-2 hover:text-emerald-400 transition-colors">{news.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{news.source}</span>
                        <span>{news.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              Why Choose TradingStudio?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional trading platform trusted by millions of traders worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Bank-Grade Security",
                  description: "Multi-layer security with cold storage, 2FA, and insurance coverage up to $100M.",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Lightning Fast Execution",
                  description: "Sub-millisecond order execution with 99.99% uptime and global server network.",
                  color: "from-yellow-500 to-orange-600",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "24/7 Expert Support",
                  description: "Dedicated support team available around the clock in 15+ languages.",
                  color: "from-blue-500 to-purple-600",
                },
                {
                  icon: <Trophy className="w-6 h-6" />,
                  title: "Award-Winning Platform",
                  description: "Recognized as 'Best Trading Platform 2024' by Financial Times and Forbes.",
                  color: "from-purple-500 to-pink-600",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-r from-emerald-600/20 to-orange-600/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-20 bg-gradient-to-r from-emerald-500/30 to-orange-500/30 rounded-lg animate-pulse`}
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-4 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded animate-pulse`}
                      style={{ animationDelay: `${i * 300}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-900/30 to-orange-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent animate-text-glow">
            Start Your Trading Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of traders who trust TradingStudio for their crypto, forex, and stock trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-orange-600 hover:from-emerald-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              Create Free Account
              <Rocket className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 bg-transparent"
            >
              <Monitor className="mr-2 w-5 h-5" />
              Try Demo Account
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Get Market Updates</h3>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-emerald-600 to-orange-600 hover:from-emerald-700 hover:to-orange-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
                  TradingStudio
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional trading platform for crypto, forex, and traditional markets with advanced analytics and
                AI-powered insights.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10 bg-transparent">
                  Twitter
                </Button>
                <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10 bg-transparent">
                  Telegram
                </Button>
                <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10 bg-transparent">
                  Discord
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Trading</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Cryptocurrency
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Forex
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Stocks
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Commodities
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Trading Bots
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Market Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Portfolio Tracker
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Risk Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Trading Academy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 TradingStudio. All rights reserved.</p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Markets Open</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>24/7 Trading</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
