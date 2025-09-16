import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background turkish-pattern">
      {/* Header Section */}
      <header className="bg-primary text-primary-foreground py-8 px-4 text-center shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-balance">
            WELCOME TO TURKEY123STREAMING.TR
          </h1>
          <div className="mt-4 flex justify-center items-center gap-4">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground text-xl">🇹🇷</span>
            </div>
            <p className="text-primary-foreground/90 text-lg font-medium">Your Gateway to Turkish Entertainment</p>
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground text-xl">🇹🇷</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Video Player Section */}
        <Card className="video-container bg-card p-8 mb-12">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              loop
              playsInline
              poster="/turkish-landscape-with-traditional-architecture.jpg"
            >
              <source src="/video.mp4" type="video/mp4" />
              {/* Placeholder content when video is not available */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-12 h-12 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-semibold text-foreground mb-2">Video Player Ready</p>
                  <p className="text-muted-foreground">Your video content will autoplay here</p>
                </div>
              </div>
            </video>
          </div>

          {/* Video Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors">
              ▶ Play
            </button>
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-medium transition-colors">
              ⏸ Pause
            </button>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors">
              🔊 Volume
            </button>
          </div>
        </Card>

        {/* Featured Content Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/turkish-drama-poster.png"
                alt="Turkish Drama"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Turkish Dramas</h3>
            <p className="text-muted-foreground">Experience the best of Turkish television</p>
          </Card>

          <Card className="bg-card p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/turkish-movie-cinema-poster.jpg"
                alt="Turkish Cinema"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Turkish Cinema</h3>
            <p className="text-muted-foreground">Discover award-winning Turkish films</p>
          </Card>

          <Card className="bg-card p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/turkish-documentary-about-culture-and-history.jpg"
                alt="Turkish Documentaries"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Documentaries</h3>
            <p className="text-muted-foreground">Explore Turkish culture and history</p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 text-center mt-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg font-medium mb-2">🇹🇷 TURKEY123STREAMING.TR 🇹🇷</p>
          <p className="text-primary-foreground/80">Bringing Turkish Entertainment to the World</p>
        </div>
      </footer>
    </div>
  )
}
