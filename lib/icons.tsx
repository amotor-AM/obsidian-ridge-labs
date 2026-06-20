import {
  Shield, ShieldCheck, Lock, KeyRound, Fingerprint, Eye, EyeOff, WifiOff, Wifi,
  Cpu, Smartphone, Mic, AudioLines, Headphones, Languages, FileText, Folder,
  Star, Search, Calendar, Bell, BellRing, CloudOff, Cloud, Zap, Layers, List,
  ListChecks, Timer, Target, Wallet, PiggyBank, Receipt, ScanLine, CreditCard,
  Repeat, Bot, MessageCircle, Sparkles, BookOpen, Brain, Network, GitMerge,
  TrendingUp, LineChart, BarChart3, Database, HardDrive, ServerOff, Share2,
  Settings, Heart, Leaf, Mountain, Feather, Compass, Route, Map, Download,
  ArrowRight, ArrowUpRight, ChevronRight, ChevronDown, Plus, Minus, Check,
  CheckCheck, X, ExternalLink, Mail, Apple, Watch, Tablet, Laptop, Quote,
  Lightbulb, RefreshCw, ShieldAlert, Info, HelpCircle, Waves, PenLine,
  CalendarClock, Banknote, HandCoins, Gauge, Sprout, Moon, Activity,
  Menu, ArrowLeft, BatteryCharging, Globe, Clock, Pause,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { CSSProperties } from 'react';

const REGISTRY: Record<string, LucideIcon> = {
  shield: Shield, 'shield-check': ShieldCheck, 'shield-alert': ShieldAlert,
  lock: Lock, key: KeyRound, fingerprint: Fingerprint, eye: Eye, 'eye-off': EyeOff,
  'wifi-off': WifiOff, wifi: Wifi, cpu: Cpu, smartphone: Smartphone, mic: Mic,
  audio: AudioLines, waves: Waves, headphones: Headphones, languages: Languages,
  'file-text': FileText, folder: Folder, star: Star, search: Search,
  calendar: Calendar, 'calendar-clock': CalendarClock, bell: Bell, 'bell-ring': BellRing,
  'cloud-off': CloudOff, cloud: Cloud, zap: Zap, layers: Layers, list: List,
  'list-checks': ListChecks, timer: Timer, target: Target, wallet: Wallet,
  'piggy-bank': PiggyBank, receipt: Receipt, scan: ScanLine, 'credit-card': CreditCard,
  repeat: Repeat, bot: Bot, 'message-circle': MessageCircle, sparkles: Sparkles,
  book: BookOpen, brain: Brain, network: Network, 'git-merge': GitMerge,
  'trending-up': TrendingUp, 'line-chart': LineChart, 'bar-chart': BarChart3,
  database: Database, 'hard-drive': HardDrive, 'server-off': ServerOff, share: Share2,
  settings: Settings, heart: Heart, leaf: Leaf, mountain: Mountain, feather: Feather,
  compass: Compass, route: Route, map: Map, download: Download, 'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight, 'chevron-right': ChevronRight, 'chevron-down': ChevronDown,
  plus: Plus, minus: Minus, check: Check, 'check-check': CheckCheck, x: X,
  'external-link': ExternalLink, mail: Mail, apple: Apple, watch: Watch, tablet: Tablet,
  laptop: Laptop, quote: Quote, lightbulb: Lightbulb, refresh: RefreshCw, info: Info,
  help: HelpCircle, pen: PenLine, banknote: Banknote, 'hand-coins': HandCoins,
  gauge: Gauge, sprout: Sprout, moon: Moon, activity: Activity, menu: Menu,
  'arrow-left': ArrowLeft, 'battery-charging': BatteryCharging, globe: Globe,
  clock: Clock, pause: Pause,
};

export interface IconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
  style?: CSSProperties;
}

/** Render a lucide icon by string name (keeps data files free of JSX). */
export function Icon({ name, className, size = 20, strokeWidth = 1.6, style }: IconProps) {
  const Cmp = REGISTRY[name] || Sparkles;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} style={style} aria-hidden="true" />;
}

export default Icon;
