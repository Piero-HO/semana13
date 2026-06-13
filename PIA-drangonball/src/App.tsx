import { useState } from 'react';
import { Flame, Swords, Database, Search, Menu, Globe, Info, Zap } from 'lucide-react';

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

// New imports
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import { Terminal, ChevronsUpDown, User, LogOut, Settings } from 'lucide-react';

const characters = [
  { name: 'Goku', race: 'Saiyan', power: 9000, img: 'https://cdn.iconscout.com/icon/free/png-256/free-goku-icon-download-in-svg-png-gif-file-formats--dragon-ball-z-anime-pack-culture-icons-533479.png', maxPower: 10000 },
  { name: 'Vegeta', race: 'Saiyan', power: 8500, img: 'https://cdn.iconscout.com/icon/free/png-256/free-vegeta-icon-download-in-svg-png-gif-file-formats--dragon-ball-z-anime-pack-culture-icons-533481.png', maxPower: 10000 },
  { name: 'Piccolo', race: 'Namekian', power: 5000, img: 'https://cdn.iconscout.com/icon/free/png-256/free-piccolo-icon-download-in-svg-png-gif-file-formats--dragon-ball-z-anime-pack-culture-icons-533478.png', maxPower: 10000 },
  { name: 'Frieza', race: 'Frieza Race', power: 8000, img: 'https://cdn.iconscout.com/icon/free/png-256/free-frieza-icon-download-in-svg-png-gif-file-formats--dragon-ball-z-anime-pack-culture-icons-533483.png', maxPower: 10000 },
  { name: 'Cell', race: 'Android', power: 8200, img: 'https://cdn.iconscout.com/icon/free/png-256/free-cell-icon-download-in-svg-png-gif-file-formats--dragon-ball-z-anime-pack-culture-icons-533484.png', maxPower: 10000 },
];

function App() {
  const [powerFilter, setPowerFilter] = useState<number | readonly number[]>([5000]);
  const [selectedTab, setSelectedTab] = useState("curl");

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
        
        {/* Compact Top Navigation */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-14 items-center">
              
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground p-1 rounded-lg">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg tracking-tight hidden sm:inline">DB<span className="text-primary">API</span></span>
              </div>
              
              <div className="hidden lg:flex items-center space-x-1">
                <Button variant="ghost" size="sm" className="text-xs h-8"><span>Characters</span></Button>
                <Button variant="ghost" size="sm" className="text-xs h-8"><span>Docs</span></Button>
                <Button variant="ghost" size="sm" className="text-xs h-8"><span>Pricing</span></Button>
              </div>

              <div className="flex items-center gap-2">
                <Sheet>
                  <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden h-8 w-8" />}>
                    <Menu className="h-4 w-4" />
                  </SheetTrigger>
                  <SheetContent side="right" className="w-56">
                    <div className="flex flex-col gap-3 mt-6">
                      <Button variant="ghost" className="justify-start text-sm h-9">Characters</Button>
                      <Button variant="ghost" className="justify-start text-sm h-9">API Docs</Button>
                      <Button variant="ghost" className="justify-start text-sm h-9">Pricing</Button>
                      <Button variant="ghost" className="justify-start text-sm h-9">FAQ</Button>
                      <Separator />
                      <Button size="sm" className="w-full text-xs h-8">Get API Key</Button>
                    </div>
                  </SheetContent>
                </Sheet>

                <DropdownMenu>
                  <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="h-8 w-8" />}>
                    <Avatar className="w-6 h-6 border border-border">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel className="text-xs">Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-xs"><User className="mr-2 h-3 w-3" /> Profile</DropdownMenuItem>
                    <DropdownMenuItem className="text-xs"><Settings className="mr-2 h-3 w-3" /> Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500 text-xs"><LogOut className="mr-2 h-3 w-3" /> Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Compact Info Section */}
          <section className="border-b border-border bg-muted/30 py-6">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-primary">Now Available</p>
                    <p className="text-sm text-foreground">New planets and transformations API endpoints live.</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2 flex-shrink-0">Learn</Button>
              </div>
            </div>
          </section>

          {/* Hero Grid Layout */}
          <section className="py-12 bg-background">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                
                {/* Left: Content */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="text-xs px-2 py-1 w-fit">
                      <Flame className="w-2.5 h-2.5 mr-1" />
                      v2.0 Beta
                    </Badge>
                    
                    <h1 className="text-3xl font-bold tracking-tight">
                      Dragon Ball<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Knowledge Base</span>
                    </h1>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Access 78+ characters, power stats, affiliations, and transformation data through a clean, fast REST API.
                    </p>

                    <div className="flex gap-2 pt-2">
                      <AlertDialog>
                        <AlertDialogTrigger render={<Button size="sm" className="text-xs h-8 px-3" />}>
                          Get Started
                        </AlertDialogTrigger>
                        <AlertDialogContent className="sm:max-w-[425px]">
                          <AlertDialogHeader>
                            <AlertDialogTitle>Generate Your API Key</AlertDialogTitle>
                            <AlertDialogDescription className="text-xs">
                              Get instant access to the full Dragon Ball database. Free tier includes 10k requests/month.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="text-xs h-8">Cancel</AlertDialogCancel>
                            <AlertDialogAction className="text-xs h-8">Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <Button variant="outline" size="sm" className="text-xs h-8 px-3">
                        <Database className="w-3 h-3 mr-1" />
                        Docs
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Middle & Right: Cards Grid */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-border/50 p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Swords className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold">78 Characters</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Complete fighter database</p>
                      </div>
                    </Card>
                    <Card className="border-border/50 p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold">RESTful API</span>
                        </div>
                        <p className="text-xs text-muted-foreground">JSON responses</p>
                      </div>
                    </Card>
                    <Card className="border-border/50 p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Flame className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold">Real-time Data</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Always up to date</p>
                      </div>
                    </Card>
                    <Card className="border-border/50 p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold">Lightning Fast</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Sub-100ms response</p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="opacity-30" />

          {/* Quick Stats Section */}
          <section className="py-12 bg-muted/20">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold mb-6">Explore & Filter</h2>
              
              <Tabs defaultValue="search" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="search" className="text-xs h-8">Search</TabsTrigger>
                  <TabsTrigger value="filters" className="text-xs h-8">Filters</TabsTrigger>
                  <TabsTrigger value="advanced" className="text-xs h-8">Advanced</TabsTrigger>
                </TabsList>

                <TabsContent value="search" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 border-border/50">
                      <Label className="text-xs font-semibold mb-3 block">Character Name</Label>
                      <Input placeholder="Search by name..." className="text-sm h-8" />
                    </Card>
                    <Card className="p-4 border-border/50">
                      <Label className="text-xs font-semibold mb-3 block">Race Type</Label>
                      <Select>
                        <SelectTrigger className="h-8 text-sm">
                          <SelectValue placeholder="All races" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saiyan">Saiyan</SelectItem>
                          <SelectItem value="human">Human</SelectItem>
                          <SelectItem value="namekian">Namekian</SelectItem>
                          <SelectItem value="android">Android</SelectItem>
                          <SelectItem value="god">God</SelectItem>
                        </SelectContent>
                      </Select>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="filters" className="space-y-4">
                  <Card className="p-4 border-border/50">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-3">
                          <Label className="text-xs font-semibold">Power Level Range</Label>
                          <span className="text-xs text-muted-foreground font-mono">Over {Array.isArray(powerFilter) ? powerFilter[0] : powerFilter}</span>
                        </div>
                        <Slider
                          defaultValue={[5000]}
                          max={10000}
                          step={100}
                          onValueChange={setPowerFilter}
                          className="py-4"
                        />
                      </div>
                      <Separator className="opacity-30" />
                      <div className="flex items-center space-x-2">
                        <Switch id="canon" defaultChecked />
                        <Label htmlFor="canon" className="text-xs font-normal cursor-pointer">Show only canon characters</Label>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-4">
                  <Card className="p-4 border-border/50">
                    <Label className="text-xs font-semibold mb-3 block">Affiliation</Label>
                    <Select>
                      <SelectTrigger className="h-8 text-sm mb-4">
                        <SelectValue placeholder="Select affiliation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="z-fighters">Z Fighters</SelectItem>
                        <SelectItem value="frieza-force">Frieza Force</SelectItem>
                        <SelectItem value="red-ribbon">Red Ribbon Army</SelectItem>
                      </SelectContent>
                    </Select>

                    <Collapsible className="border rounded-md p-3 bg-background/50 text-sm">
                      <CollapsibleTrigger className="flex items-center justify-between w-full font-medium text-xs">
                        <span>Additional Options</span>
                        <ChevronsUpDown className="h-3 w-3" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-3 space-y-2 border-t pt-3 text-xs">
                        <p className="text-muted-foreground">More filtering options coming soon...</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Characters Grid */}
          <section id="characters" className="py-12 bg-background border-b border-border">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Fighters Directory</h2>
                <Button variant="outline" size="sm" className="text-xs h-7 px-2">View All</Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {characters.map((char, index) => (
                  <Card key={index} className="overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-md cursor-pointer group">
                    <div className="h-24 bg-muted/50 flex justify-center items-center p-2 overflow-hidden">
                      <img src={char.img} alt={char.name} className="h-full object-contain drop-shadow group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-3 space-y-2">
                      <div>
                        <h3 className="font-semibold text-sm leading-tight">{char.name}</h3>
                        <p className="text-xs text-muted-foreground">{char.race}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Power</span>
                          <span className="font-mono font-medium">{char.power}</span>
                        </div>
                        <Progress value={(char.power / char.maxPower) * 100} className="h-1.5" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* API Documentation */}
          <section id="api" className="py-12 bg-muted/20 border-b border-border">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" /> Quick Start
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Code Examples */}
                <Card className="border-border/50 overflow-hidden">
                  <CardHeader className="bg-muted border-b border-border/50 py-3">
                    <CardTitle className="text-sm">Integration Examples</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                      <TabsList className="grid w-full grid-cols-3 rounded-none border-b border-border/30 bg-transparent">
                        <TabsTrigger value="curl" className="text-xs h-8 rounded-none border-b-2 data-[state=active]:border-primary">cURL</TabsTrigger>
                        <TabsTrigger value="node" className="text-xs h-8 rounded-none border-b-2 data-[state=active]:border-primary">Node</TabsTrigger>
                        <TabsTrigger value="python" className="text-xs h-8 rounded-none border-b-2 data-[state=active]:border-primary">Python</TabsTrigger>
                      </TabsList>
                      <div className="p-3">
                        <TabsContent value="curl" className="mt-0">
                          <pre className="bg-zinc-950 text-zinc-50 p-3 rounded text-xs overflow-x-auto">
{`curl -X GET \\
  "https://dragonball-api.com/api/characters" \\
  -H "Authorization: Bearer YOUR_KEY"`}
                          </pre>
                        </TabsContent>
                        <TabsContent value="node" className="mt-0">
                          <pre className="bg-zinc-950 text-zinc-50 p-3 rounded text-xs overflow-x-auto">
{`const res = await fetch(
  "https://dragonball-api.com/api/characters"
);
const data = await res.json();`}
                          </pre>
                        </TabsContent>
                        <TabsContent value="python" className="mt-0">
                          <pre className="bg-zinc-950 text-zinc-50 p-3 rounded text-xs overflow-x-auto">
{`import requests
res = requests.get(
  "https://dragonball-api.com/api/characters"
)
print(res.json())`}
                          </pre>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Response Example */}
                <Card className="border-border/50 overflow-hidden">
                  <CardHeader className="bg-muted border-b border-border/50 py-3 flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-sm">Response Sample</CardTitle>
                    <Badge variant="outline" className="text-xs px-2 py-0.5">JSON</Badge>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="h-[220px] w-full">
                      <pre className="text-xs p-3 font-mono text-zinc-300 bg-zinc-950">
{`{
  "items": [
    {
      "id": 1,
      "name": "Goku",
      "race": "Saiyan",
      "gender": "Male",
      "affiliation": "Z Fighter",
      "ki": "60.000.000",
      "maxKi": "90 Septillion"
    }
  ],
  "meta": {
    "totalItems": 78,
    "itemCount": 1,
    "totalPages": 8,
    "currentPage": 1
  }
}`}
                      </pre>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card className="p-4 border-border/50">
                  <h4 className="font-semibold text-sm mb-2">Base URL</h4>
                  <p className="text-xs text-muted-foreground font-mono">https://dragonball-api.com/api</p>
                </Card>
                <Card className="p-4 border-border/50">
                  <h4 className="font-semibold text-sm mb-2">Rate Limit</h4>
                  <p className="text-xs text-muted-foreground">1000 req/hour (Free)</p>
                </Card>
                <Card className="p-4 border-border/50">
                  <h4 className="font-semibold text-sm mb-2">Response Time</h4>
                  <p className="text-xs text-muted-foreground">&lt;100ms avg</p>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-12 bg-background">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold mb-6">Common Questions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-border/50 p-4">
                  <h4 className="font-semibold text-sm mb-2">Is it really free?</h4>
                  <p className="text-xs text-muted-foreground">Yes! Free tier includes 10k requests/month. No credit card required.</p>
                </Card>

                <Card className="border-border/50 p-4">
                  <h4 className="font-semibold text-sm mb-2">What series are covered?</h4>
                  <p className="text-xs text-muted-foreground">DB, DBZ, DB GT, DB Super, and upcoming Daima series included.</p>
                </Card>

                <Card className="border-border/50 p-4">
                  <h4 className="font-semibold text-sm mb-2">How accurate are power levels?</h4>
                  <p className="text-xs text-muted-foreground">Official Daizenshuu data for early arcs, fan-calculated estimates for later ones.</p>
                </Card>

                <Card className="border-border/50 p-4">
                  <h4 className="font-semibold text-sm mb-2">Can I contribute data?</h4>
                  <p className="text-xs text-muted-foreground">Absolutely! GitHub PRs accepted. Community-driven database.</p>
                </Card>
              </div>

              <Card className="mt-6 p-4 border-border/50">
                <h3 className="font-semibold text-sm mb-3">Still need help?</h3>
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs font-semibold mb-2 block">Send Feedback</Label>
                    <Textarea placeholder="Your message..." className="text-xs min-h-[80px]" />
                  </div>
                  <Button size="sm" className="text-xs h-7 px-3">Submit</Button>
                </div>
              </Card>
            </div>
          </section>
        </main>

        {/* Minimal Footer */}
        <footer className="bg-muted/50 border-t border-border py-6">
          <div className="max-w-full px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-primary" />
                  <span className="font-bold text-sm">DB API</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  v2.0 Beta
                </div>
              </div>
              
              <Separator className="opacity-30" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <p className="font-semibold mb-2">Product</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><Button variant="link" className="h-auto p-0 text-xs">Features</Button></li>
                    <li><Button variant="link" className="h-auto p-0 text-xs">Pricing</Button></li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Docs</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><Button variant="link" className="h-auto p-0 text-xs">API Ref</Button></li>
                    <li><Button variant="link" className="h-auto p-0 text-xs">Guide</Button></li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Community</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><Button variant="link" className="h-auto p-0 text-xs">GitHub</Button></li>
                    <li><Button variant="link" className="h-auto p-0 text-xs">Discord</Button></li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Legal</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><Button variant="link" className="h-auto p-0 text-xs">Terms</Button></li>
                    <li><Button variant="link" className="h-auto p-0 text-xs">Privacy</Button></li>
                  </ul>
                </div>
              </div>

              <Separator className="opacity-30" />
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <p>© {new Date().getFullYear()} Dragon Ball API. Fan project, not affiliated with Toei Animation.</p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-6 w-6"><Globe className="h-3 w-3" /></Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6"><Globe className="h-3 w-3" /></Button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}

export default App;