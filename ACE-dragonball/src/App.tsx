import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Swords, Database, Search, Menu, X, ChevronRight, Globe, Users, Zap } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-full">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Dragon<span className="text-primary">Ball</span> API</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#characters" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Characters</a>
              <a href="#api" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">API Docs</a>
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">Features</a>
              <a href="#characters" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">Characters</a>
              <a href="#api" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">API Docs</a>
              <div className="px-3 py-2">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 bg-background">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] overflow-hidden -z-10 opacity-30 dark:opacity-10 pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/30 blur-[120px]" />
            <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-400/30 blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-6 px-3 py-1 text-sm border-blue-500/30 text-blue-500 bg-blue-500/10 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 mr-1" />
              <span>v2.0 Beta Now Live</span>
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto mb-6">
              The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Dragon Ball</span> Knowledge Base
            </h1>
            
            <p className="mt-4 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore character stats, power levels, planets, and epic transformations from the entire Dragon Ball universe through our comprehensive API.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 rounded-full border-0 bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/40">
                Explore Characters
                <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 rounded-full border-2 transition-colors duration-300 hover:border-primary hover:text-primary">
                <Database className="w-4 h-4 mr-2" />
                Read API Docs
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">500+</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" /> Personajes
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">12</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4" /> Universos
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">7</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Swords className="w-4 h-4" /> Sagas
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">1000+</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4" /> Transformaciones
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Everything you need to know
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our platform provides detailed and accurate data curated for the biggest fans and developers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card text-card-foreground rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Search</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Find any character across all sagas: DB, Z, GT, Super, and DAIMA. Filter by race, affiliation, and more.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-card text-card-foreground rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <Swords className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Power Levels & Battles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compare stats and transformations. Access data on the most epic battles and techniques used by fighters.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-card text-card-foreground rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Planets & Universes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Journey through different planets and the 12 universes. Learn about the Gods of Destruction and Angels.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg">DB API</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dragon Ball API. This is a fan project, not affiliated with Toei Animation or Akira Toriyama.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;