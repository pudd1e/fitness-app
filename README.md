# Fitness App 💪

A modern, beautiful fitness tracking web application to log your daily workouts, track streaks, and monitor your progress with achievements and levels.

## Features

✨ **Core Features:**
- 🔐 PIN-Protected Access (4-digit PIN)
- 📝 Daily Workout Logging (exercises, sets, reps, weight, to-failure toggle)
- 🔥 Streak Counter with visual celebrations
- 🏆 Achievement System (6 unique badges to unlock)
- ⚡ Level System with progression
- 📊 Statistics Dashboard with charts and personal records
- 📅 Calendar view showing workout history
- ⚖️ Weight tracking with progress visualization
- 🎨 Dark/Light mode with red glow theme
- 📱 Fully responsive (works on mobile & desktop)
- 🌐 PWA Support (install as app on phone/PC)
- 🔄 Real-time data sync across devices
- ⚙️ Settings with data management and reset options

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/pudd1e/fitness-app.git
cd fitness-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Usage

### PIN Access
- Default PIN: `0802`
- You can change this by editing the `CORRECT_PIN` constant in `src/components/PINLogin.js`

### Logging Workouts
1. Navigate to the **Log** tab
2. Select an exercise or add a custom one
3. Enter sets, reps, and optional weight
4. Toggle "To Failure" if applicable
5. Optionally log your body weight
6. Submit to save

### Tracking Progress
- **Dashboard**: View current streak, level, and achievements
- **Stats**: See detailed charts, personal records, and weight progress
- **Calendar**: View workout history organized by date

### Settings
- **Theme**: Toggle between dark and light mode
- **Weight Goal**: Set your target weight (lose or gain)
- **Reset Data**: Selectively delete your data with confirmation

## Deployment

### Free Hosting Options

#### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Option 2: Netlify
1. Connect your GitHub repo to Netlify
2. Netlify will auto-deploy on every push
3. Build command: `npm run build`
4. Publish directory: `build`

#### Option 3: GitHub Pages
Edit `package.json` and add:
```json
"homepage": "https://pudd1e.github.io/fitness-app"
```

Then:
```bash
npm install gh-pages
npm run build
npm run deploy
```

## Tech Stack

- **Frontend**: React 18, Hooks, CSS3
- **Charts**: Recharts
- **Icons**: Lucide React
- **Storage**: LocalStorage (future: Firebase)
- **Responsive**: Mobile-first design

## Data Structure

### Workout Data
```javascript
{
  id: timestamp,
  date: "2026-05-06",
  exercise: "Bench Press",
  sets: [
    { reps: 10, weight: 50, toFailure: false },
    { reps: 8, weight: 52, toFailure: true }
  ]
}
```

### Weight Data
```javascript
{
  date: "2026-05-06",
  weight: 75.5
}
```

## Achievements

1. 🎯 **Getting Started** - Log your first workout
2. ⚔️ **Week Warrior** - Complete 7 days of workouts
3. 👹 **Monthly Monster** - Complete 30 days of workouts
4. 💪 **Fifty Strong** - Complete 50 total workouts
5. 🔥 **Fortnight Fighter** - Achieve a 14-day streak
6. 💯 **Century Club** - Complete 100 sets

## Future Enhancements

- 📧 Email/Password authentication
- 🔄 Cloud sync with Firebase
- 🔔 Push notifications
- 📈 Advanced analytics
- 🎯 Workout templates
- 👥 Social features
- 🌍 Multi-language support

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this for personal projects

## Contributing

Feel free to fork and submit pull requests for any improvements!

---

**Made with ❤️ for fitness enthusiasts** 💪

Happy lifting! 🏋️
