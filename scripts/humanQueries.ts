/**
 * Human-like search query generators
 * Run with: npx ts-node scripts/humanQueries.ts
 */

// Natural query patterns that real humans use
const QUERY_TEMPLATES = [
  // Questions
  "how to {topic}",
  "what is {topic}",
  "why does {topic}",
  "when is {topic}",
  "where to {topic}",
  "best way to {topic}",
  "how do i {topic}",
  "can you {topic}",
  
  // Problem solving
  "fix {topic}",
  "solve {topic}",
  "troubleshoot {topic}",
  "{topic} not working",
  "{topic} error",
  "how to fix {topic}",
  
  // Learning
  "learn {topic}",
  "tutorial {topic}",
  "guide {topic}",
  "{topic} for beginners",
  "{topic} basics",
  "{topic} tips",
  
  // Shopping/research
  "best {topic} 2024",
  "top {topic} reviews",
  "{topic} vs {topic2}",
  "cheap {topic}",
  "{topic} deals",
  "{topic} sale",
  
  // Local/service
  "{topic} near me",
  "{topic} in {city}",
  "{topic} open now",
  "{topic} hours",
  "{topic} phone number",
  
  // Tech
  "{topic} download",
  "{topic} update",
  "{topic} settings",
  "{topic} shortcut",
  "{topic} alternative",
  
  // Random curiosity
  "{topic} facts",
  "{topic} history",
  "{topic} meaning",
  "{topic} definition",
  "interesting {topic}",
];

const TOPICS = [
  "windows 11", "microsoft edge", "office 365", "outlook", "teams",
  "xbox game pass", "surface laptop", "azure", "visual studio", "github copilot",
  "python", "javascript", "react", "docker", "kubernetes",
  "ai tools", "chatgpt", "midjourney", "stable diffusion", "llm",
  "productivity", "time management", "focus", "note taking", "calendar",
  "health", "fitness", "nutrition", "sleep", "meditation",
  "cooking", "recipes", "meal prep", "kitchen tools", "air fryer",
  "travel", "flights", "hotels", "vacation", "backpacking",
  "finance", "investing", "budgeting", "crypto", "stocks",
  "gaming", "steam", "epic games", "rpg", "strategy games",
  "movies", "netflix", "streaming", "tv shows", "documentaries",
  "music", "spotify", "playlist", "concert", "headphones",
  "books", "kindle", "audiobooks", "reading list", "sci-fi",
  "photography", "camera", "lightroom", "composition", "editing",
  "cars", "electric vehicles", "tesla", "maintenance", "insurance",
  "home", "smart home", "alexa", "google home", "security",
  "gardening", "plants", "indoor plants", "vegetables", "landscaping",
  "pets", "dog training", "cat care", "vet", "pet food",
  "fashion", "shoes", "winter clothes", "backpack", "watch",
  "tech news", "science", "space", "nasa", "climate",
  "career", "resume", "interview", "linkedin", "remote work",
  "education", "online courses", "certification", "degree", "scholarship",
];

const CITIES = ["seattle", "san francisco", "new york", "chicago", "boston", "austin", "denver", "portland"];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuery(): string {
  const template = getRandomItem(QUERY_TEMPLATES);
  const topic = getRandomItem(TOPICS);
  const topic2 = getRandomItem(TOPICS.filter(t => t !== topic));
  const city = getRandomItem(CITIES);
  
  return template
    .replace(/{topic}/g, topic)
    .replace(/{topic2}/g, topic2)
    .replace(/{city}/g, city);
}

// Generate a day's worth of varied queries
function generateDailyQueries(count: number): string[] {
  const queries = new Set<string>();
  while (queries.size < count) {
    queries.add(generateQuery());
  }
  return Array.from(queries);
}

// Export for use in search managers
export { generateQuery, generateDailyQueries, QUERY_TEMPLATES, TOPICS };

// CLI
if (require.main === module) {
  const count = parseInt(process.argv[2]) || 30;
  const queries = generateDailyQueries(count);
  console.log(JSON.stringify(queries, null, 2));
}