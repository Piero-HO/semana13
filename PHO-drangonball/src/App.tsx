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

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
        
        {/* Navigation */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              
              <div className="flex items-center gap-2">
                <Sheet>
                  <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
                    <Menu className="h-5 w-5" />
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>DragonBall API</SheetTitle>
                      <SheetDescription>Explore the ultimate knowledge base.</SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 mt-6">
                      <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
                      <a href="#characters" className="text-sm font-medium hover:text-primary">Characters</a>
                      <a href="#api" className="text-sm font-medium hover:text-primary">API Docs</a>
                      <a href="#faq" className="text-sm font-medium hover:text-primary">FAQ</a>
                      <Separator />
                      <Button className="w-full">Get API Key</Button>
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="bg-primary text-primary-foreground p-1.5 rounded-full">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="font-bold text-xl tracking-tight hidden sm:block">Dragon<span className="text-primary">Ball</span> API</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-6 w-[400px]">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2 flex items-center gap-2"><Swords className="w-4 h-4 text-primary" /> Characters</h4>
                              <p className="text-sm text-muted-foreground">Find detailed stats, races, and affiliations for all fighters.</p>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> Planets</h4>
                              <p className="text-sm text-muted-foreground">Journey through different universes and worlds.</p>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#api">
                        Documentation
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className="flex items-center gap-4">
                <Tooltip>
                  <TooltipTrigger render={<Button variant="ghost" size="icon" />}>
                    <Globe className="w-5 h-5" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Website</p>
                  </TooltipContent>
                </Tooltip>

                <AlertDialog>
                  <AlertDialogTrigger render={<Button variant="default" size="sm" className="hidden sm:flex" />}>
                    Get Started
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Ready to harness the API?</AlertDialogTitle>
                      <AlertDialogDescription>
                        You will be redirected to the developer portal to generate your free API key. Rate limits apply to the free tier.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue to Portal</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="w-8 h-8 cursor-pointer border border-border">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><User className="mr-2 h-4 w-4" /> Profile</DropdownMenuItem>
                    <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500"><LogOut className="mr-2 h-4 w-4" /> Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Breadcrumb section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
             <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Landing</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <Alert className="mt-6 border-primary/50 bg-primary/10">
              <Terminal className="h-4 w-4 text-primary" />
              <AlertTitle className="text-primary font-bold">New endpoints available!</AlertTitle>
              <AlertDescription>
                We've just released the new planets and transformations API. Check out the documentation for more details.
              </AlertDescription>
            </Alert>
          </div>

          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] overflow-hidden -z-10 opacity-30 pointer-events-none">
              <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
              <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/30 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Badge variant="outline" className="mb-6 px-3 py-1 text-sm border-primary/30 text-primary bg-primary/10 backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 mr-1" />
                <span>v2.0 Beta Now Live</span>
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto mb-6">
                The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Dragon Ball</span> Knowledge Base
              </h1>
              
              <p className="mt-4 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Explore character stats, power levels, planets, and epic transformations from the entire Dragon Ball universe.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Dialog>
                  <DialogTrigger render={<Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 rounded-full shadow-lg shadow-primary/25" />}>
                    <Zap className="w-4 h-4 mr-2" />
                    Quick Try
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Test the API</DialogTitle>
                      <DialogDescription>
                        Try a quick request to see the response format.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="endpoint">Endpoint</Label>
                        <Input id="endpoint" defaultValue="GET /api/characters/1" readOnly />
                      </div>
                      <ScrollArea className="h-[200px] w-full rounded-md border p-4 bg-muted">
                        <pre className="text-sm">
                          {JSON.stringify({
                            id: 1,
                            name: "Goku",
                            race: "Saiyan",
                            ki: "60.000.000",
                            maxKi: "90 Septillion"
                          }, null, 2)}
                        </pre>
                      </ScrollArea>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 rounded-full">
                  <Database className="w-4 h-4 mr-2" />
                  Read API Docs
                </Button>
              </div>
            </div>
          </section>

          <Separator className="max-w-4xl mx-auto opacity-50" />

          {/* Search & Filter Section */}
          <section className="py-16 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="border-border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Search className="w-5 h-5 text-primary" /> Advanced Search</CardTitle>
                  <CardDescription>Filter characters to find exactly who you need.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="search">Character Name</Label>
                      <Input id="search" placeholder="e.g. Broly" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="race">Race</Label>
                      <Select>
                        <SelectTrigger id="race">
                          <SelectValue placeholder="Select a race" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saiyan">Saiyan</SelectItem>
                          <SelectItem value="human">Human</SelectItem>
                          <SelectItem value="namekian">Namekian</SelectItem>
                          <SelectItem value="android">Android</SelectItem>
                          <SelectItem value="god">God</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Min Power Level</Label>
                        <span className="text-xs text-muted-foreground font-mono">Over {Array.isArray(powerFilter) ? powerFilter[0] : powerFilter}!</span>
                      </div>
                      <Slider
                        defaultValue={[5000]}
                        max={10000}
                        step={100}
                        onValueChange={setPowerFilter}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-6">
                    <Switch id="canon" defaultChecked />
                    <Label htmlFor="canon">Only Canon Series (DB, DBZ, DBS, Daima)</Label>
                  </div>
                  
                  <Collapsible className="mt-4 border rounded-md p-4 bg-background/50">
                    <CollapsibleTrigger className="flex items-center justify-between w-full font-medium text-sm">
                      <span>More Filters</span>
                      <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="affiliation">Affiliation</Label>
                        <Select>
                          <SelectTrigger id="affiliation">
                            <SelectValue placeholder="Select an affiliation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="z-fighters">Z Fighters</SelectItem>
                            <SelectItem value="frieza-force">Frieza Force</SelectItem>
                            <SelectItem value="red-ribbon">Red Ribbon Army</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Characters Carousel Section */}
          <section id="characters" className="py-20 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight">Popular Fighters</h2>
                <p className="text-muted-foreground mt-2">Swipe through to view basic stats.</p>
              </div>

              <Carousel className="w-full max-w-4xl mx-auto" opts={{ align: "start" }}>
                <CarouselContent>
                  {characters.map((char, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden border-border/60 hover:border-primary/50 transition-colors">
                          <div className="h-32 bg-muted/50 flex justify-center items-center p-4">
                            {/* Placeholder for character image */}
                            <img src={char.img} alt={char.name} className="h-full object-contain drop-shadow-lg opacity-80" />
                          </div>
                          <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-xl">{char.name}</CardTitle>
                              <Badge variant="secondary" className="text-xs">{char.race}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <div className="mt-4 space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Power Level</span>
                                <span className="font-mono font-medium">{char.power}</span>
                              </div>
                              <Progress value={(char.power / char.maxPower) * 100} className="h-2" />
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 pt-0">
                            <Button variant="ghost" className="w-full text-xs h-8">View Details</Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden border-border/60">
                          <div className="h-32 bg-muted/50 flex justify-center items-center p-4">
                            <Skeleton className="h-24 w-24 rounded-full" />
                          </div>
                          <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-start">
                              <Skeleton className="h-6 w-24" />
                              <Skeleton className="h-5 w-16" />
                            </div>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <div className="mt-4 space-y-2">
                              <div className="flex justify-between text-sm">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-4 w-12" />
                              </div>
                              <Skeleton className="h-2 w-full" />
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 pt-0">
                            <Skeleton className="h-8 w-full" />
                          </CardFooter>
                        </Card>
                      </div>
                    </CarouselItem>
                </CarouselContent>
                <div className="hidden sm:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
          </section>

          {/* API Docs Section */}
          <section id="api" className="py-20 bg-muted/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Developer Friendly</h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Integrate the Dragon Ball universe into your applications in minutes. We provide SDKs and clean JSON responses.
                  </p>
                  
                  <Tabs defaultValue="curl" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="curl">cURL</TabsTrigger>
                      <TabsTrigger value="node">Node.js</TabsTrigger>
                      <TabsTrigger value="python">Python</TabsTrigger>
                    </TabsList>
                    <TabsContent value="curl">
                      <Card>
                        <CardContent className="p-4 font-mono text-sm bg-zinc-950 text-zinc-50 rounded-md overflow-x-auto">
                          curl -X GET "https://dragonball-api.com/api/characters"<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="node">
                      <Card>
                        <CardContent className="p-4 font-mono text-sm bg-zinc-950 text-zinc-50 rounded-md overflow-x-auto">
                          const res = await fetch("https://dragonball-api.com/api/characters");<br />
                          const data = await res.json();<br />
                          console.log(data);
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="python">
                      <Card>
                        <CardContent className="p-4 font-mono text-sm bg-zinc-950 text-zinc-50 rounded-md overflow-x-auto">
                          import requests<br />
                          res = requests.get("https://dragonball-api.com/api/characters")<br />
                          print(res.json())
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10" />
                  <Card className="border-border shadow-xl">
                    <CardHeader className="bg-muted border-b border-border py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-xs text-muted-foreground font-mono">Response: 200 OK</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-[300px] w-full p-4 font-mono text-xs">
                        <pre>
{`{
  "items": [
    {
      "id": 1,
      "name": "Goku",
      "ki": "60.000.000",
      "maxKi": "90 Septillion",
      "race": "Saiyan",
      "gender": "Male",
      "description": "The main protagonist...",
      "image": "https://...",
      "affiliation": "Z Fighter",
      "deletedAt": null
    }
  ],
  "meta": {
    "totalItems": 78,
    "itemCount": 1,
    "itemsPerPage": 10,
    "totalPages": 8,
    "currentPage": 1
  }
}`}
                        </pre>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 bg-background">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-2">
                  <Info className="w-6 h-6 text-primary" /> Frequently Asked Questions
                </h2>
              </div>
              
              <Accordion className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is the API totally free to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes! The basic tier is completely free and requires no credit card. It includes up to 10,000 requests per month. For heavier usage, we offer affordable pro plans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Which series are covered?</AccordionTrigger>
                  <AccordionContent>
                    We cover the original Dragon Ball, Dragon Ball Z, Dragon Ball GT, Dragon Ball Super, and the upcoming Dragon Ball Daima series. Movies and specials are also included.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How accurate are the power levels?</AccordionTrigger>
                  <AccordionContent>
                    Power levels up to the Frieza saga are taken directly from the Daizenshuu official guides. For later sagas where official numbers aren't provided, we use the most widely accepted fan-calculated estimates based on multipliers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I contribute to the database?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Our database is community-driven. You can submit pull requests on our GitHub repository or use the contribution form in the developer portal once logged in.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="message">Send us a message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[100px]" />
                  </div>
                  <Button type="button">Submit Feedback</Button>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-muted border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Flame className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl">DB API</span>
              </div>
              <div className="flex items-center space-x-4">
                <Input placeholder="Subscribe to newsletter" className="w-64 bg-background" />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
            
            <Separator className="mb-8" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Dragon Ball API. This is a fan project, not affiliated with Toei Animation or Akira Toriyama.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}

export default App;