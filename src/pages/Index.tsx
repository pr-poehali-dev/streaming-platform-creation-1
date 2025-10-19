import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const categories = [
  { name: 'Valorant', viewers: '245K', icon: '🎯' },
  { name: 'CS2', viewers: '189K', icon: '🔫' },
  { name: 'Dota 2', viewers: '156K', icon: '⚔️' },
  { name: 'GTA V', viewers: '134K', icon: '🚗' },
  { name: 'Minecraft', viewers: '98K', icon: '⛏️' },
  { name: 'League of Legends', viewers: '87K', icon: '🛡️' },
];

const streams = [
  {
    id: 1,
    streamer: 'ProGamer_RU',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    title: 'Поднимаемся в Радиант | Valorant',
    game: 'Valorant',
    viewers: 12453,
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop',
    isLive: true,
    subscribed: false,
  },
  {
    id: 2,
    streamer: 'CyberQueen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    title: 'Турнир! $10000 Prize Pool',
    game: 'CS2',
    viewers: 8721,
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop',
    isLive: true,
    subscribed: true,
  },
  {
    id: 3,
    streamer: 'StrategyMaster',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    title: 'Учу играть в Дота 2 с нуля',
    game: 'Dota 2',
    viewers: 5234,
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop',
    isLive: true,
    subscribed: false,
  },
  {
    id: 4,
    streamer: 'NightGamer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    title: 'Ночной стрим | Relaxing gameplay',
    game: 'Minecraft',
    viewers: 3892,
    thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=450&fit=crop',
    isLive: true,
    subscribed: false,
  },
  {
    id: 5,
    streamer: 'EpicStreamer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    title: 'Захватываем Лос-Сантос',
    game: 'GTA V',
    viewers: 2156,
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=450&fit=crop',
    isLive: true,
    subscribed: true,
  },
  {
    id: 6,
    streamer: 'LeagueKing',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eve',
    title: 'Challenger gameplay | АМА',
    game: 'League of Legends',
    viewers: 1847,
    thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&h=450&fit=crop',
    isLive: true,
    subscribed: false,
  },
];

const chatMessages = [
  { user: 'User123', message: 'Привет всем! 👋', color: '#9b87f5' },
  { user: 'GamerPro', message: 'Топовый стрим!', color: '#D946EF' },
  { user: 'Viewer456', message: 'Когда начнем?', color: '#8B5CF6' },
  { user: 'StreamFan', message: 'Подписался!', color: '#9b87f5' },
];

export default function Index() {
  const [selectedStream, setSelectedStream] = useState(streams[0]);
  const [subscribedStreams, setSubscribedStreams] = useState<number[]>([2, 5]);
  const [notifications, setNotifications] = useState<number[]>([2]);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState(chatMessages);

  const handleSubscribe = (streamId: number) => {
    if (subscribedStreams.includes(streamId)) {
      setSubscribedStreams(subscribedStreams.filter(id => id !== streamId));
      toast.success('Вы отписались от канала');
    } else {
      setSubscribedStreams([...subscribedStreams, streamId]);
      toast.success('Вы подписались на канал!');
    }
  };

  const handleNotification = (streamId: number) => {
    if (notifications.includes(streamId)) {
      setNotifications(notifications.filter(id => id !== streamId));
      toast.info('Уведомления отключены');
    } else {
      setNotifications([...notifications, streamId]);
      toast.success('Уведомления включены! 🔔');
    }
  };

  const handleDonate = () => {
    toast.success('Донат отправлен! 💰 Спасибо за поддержку!');
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setMessages([...messages, { user: 'Вы', message: chatInput, color: '#9b87f5' }]);
      setChatInput('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Icon name="Tv" size={28} />
                StreamHub
              </h1>
              <nav className="hidden md:flex gap-6">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Главная
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                  Каталог
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                  Стримеры
                </Button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block">
                <Input
                  placeholder="Поиск..."
                  className="w-64 bg-muted border-border"
                />
                <Icon name="Search" size={18} className="absolute right-3 top-2.5 text-muted-foreground" />
              </div>
              <Button variant="outline" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar className="hover-glow cursor-pointer">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="Flame" size={24} className="text-primary" />
            Популярные категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="p-4 hover-glow cursor-pointer transition-all hover:scale-105 bg-card border-border"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <Icon name="Users" size={12} />
                    {category.viewers}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-card border-border overflow-hidden mb-6">
              <div className="relative">
                <img
                  src={selectedStream.thumbnail}
                  alt={selectedStream.title}
                  className="w-full aspect-video object-cover"
                />
                {selectedStream.isLive && (
                  <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground pulse-live">
                    <Icon name="Radio" size={14} className="mr-1" />
                    LIVE
                  </Badge>
                )}
                <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  {selectedStream.viewers.toLocaleString()}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage src={selectedStream.avatar} />
                      <AvatarFallback>{selectedStream.streamer[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-bold text-lg">{selectedStream.title}</h2>
                      <p className="text-muted-foreground">{selectedStream.streamer}</p>
                      <Badge variant="outline" className="mt-1">
                        {selectedStream.game}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant={subscribedStreams.includes(selectedStream.id) ? 'default' : 'outline'}
                    onClick={() => handleSubscribe(selectedStream.id)}
                    className="flex-1"
                  >
                    <Icon
                      name={subscribedStreams.includes(selectedStream.id) ? 'UserCheck' : 'UserPlus'}
                      size={18}
                      className="mr-2"
                    />
                    {subscribedStreams.includes(selectedStream.id) ? 'Подписан' : 'Подписаться'}
                  </Button>
                  <Button
                    variant={notifications.includes(selectedStream.id) ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => handleNotification(selectedStream.id)}
                  >
                    <Icon
                      name={notifications.includes(selectedStream.id) ? 'BellRing' : 'Bell'}
                      size={18}
                    />
                  </Button>
                  <Button variant="secondary" onClick={handleDonate}>
                    <Icon name="DollarSign" size={18} className="mr-2" />
                    Донат
                  </Button>
                </div>
              </div>
            </Card>

            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                Рекомендуемые стримы
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {streams.slice(1).map((stream) => (
                  <Card
                    key={stream.id}
                    className="overflow-hidden hover-glow cursor-pointer transition-all hover:scale-105 bg-card border-border"
                    onClick={() => setSelectedStream(stream)}
                  >
                    <div className="relative">
                      <img
                        src={stream.thumbnail}
                        alt={stream.title}
                        className="w-full aspect-video object-cover"
                      />
                      {stream.isLive && (
                        <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground pulse-live text-xs">
                          LIVE
                        </Badge>
                      )}
                      <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs flex items-center gap-1">
                        <Icon name="Users" size={12} />
                        {stream.viewers.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={stream.avatar} />
                          <AvatarFallback>{stream.streamer[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm truncate">{stream.title}</h3>
                          <p className="text-xs text-muted-foreground">{stream.streamer}</p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {stream.game}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-card border-border h-[600px] flex flex-col">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold flex items-center gap-2">
                  <Icon name="MessageSquare" size={20} className="text-primary" />
                  Чат стрима
                </h3>
              </div>
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-3">
                  {messages.map((msg, idx) => (
                    <div key={idx} className="text-sm">
                      <span className="font-semibold" style={{ color: msg.color }}>
                        {msg.user}:
                      </span>{' '}
                      <span className="text-foreground">{msg.message}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    placeholder="Написать сообщение..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="bg-muted border-border"
                  />
                  <Button size="icon" onClick={handleSendMessage}>
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
