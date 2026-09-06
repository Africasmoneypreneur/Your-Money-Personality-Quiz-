/**
 * Africa's Moneypreneur — Money Personality Quiz
 * Data file: questions + result types.
 * Edit this file to change wording without touching the app logic in script.js.
 */

const QUESTIONS = [
  {
    text: "You receive an unexpected RWF 500,000 (or your local equivalent). What do you do?",
    options: [
      { letter: "A", text: "Buy something I've wanted and enjoy myself." },
      { letter: "B", text: "Put all of it straight into savings." },
      { letter: "C", text: "Save some, invest some, and enjoy a little." },
      { letter: "D", text: "Look for the highest-return investment opportunity." },
      { letter: "E", text: "Leave it in my account and decide what to do later." }
    ]
  },
  {
    text: "How often do you check your bank balance?",
    options: [
      { letter: "A", text: "Only when I need to buy something." },
      { letter: "B", text: "Very frequently — I like knowing exactly how much I have." },
      { letter: "C", text: "Regularly, as part of managing my money." },
      { letter: "D", text: "Mostly when making investment decisions." },
      { letter: "E", text: "Honestly? I sometimes avoid checking it." }
    ]
  },
  {
    text: "Which statement sounds most like you?",
    options: [
      { letter: "A", text: "\u201cI work hard, so I deserve to enjoy my money.\u201d" },
      { letter: "B", text: "\u201cYou can never be too careful with money.\u201d" },
      { letter: "C", text: "\u201cI want to enjoy life while building wealth.\u201d" },
      { letter: "D", text: "\u201cNo risk, no reward.\u201d" },
      { letter: "E", text: "\u201cThinking about money stresses me out.\u201d" }
    ]
  },
  {
    text: "Your friends invite you on an expensive weekend trip. You...",
    options: [
      { letter: "A", text: "Say yes immediately — I'll figure out the money later." },
      { letter: "B", text: "Say no because it wasn't in my savings plan." },
      { letter: "C", text: "Check my budget before deciding." },
      { letter: "D", text: "Consider whether I can make the money back through an investment." },
      { letter: "E", text: "Avoid making a decision until the last minute." }
    ]
  },
  {
    text: "How do you feel about investing?",
    options: [
      { letter: "A", text: "I know I should invest, but I haven't made it a priority." },
      { letter: "B", text: "Investing feels risky — I prefer keeping my money safe." },
      { letter: "C", text: "It's an important part of my long-term financial plan." },
      { letter: "D", text: "I actively look for opportunities with strong returns." },
      { letter: "E", text: "I find investing confusing, so I usually avoid it." }
    ]
  },
  {
    text: "When you lose money, you usually...",
    options: [
      { letter: "A", text: "Try not to think about it and move on." },
      { letter: "B", text: "Feel upset and become even more cautious." },
      { letter: "C", text: "Review what happened and adjust my strategy." },
      { letter: "D", text: "Take another opportunity to recover the loss." },
      { letter: "E", text: "Feel overwhelmed and avoid dealing with it." }
    ]
  },
  {
    text: "What does your monthly budgeting look like?",
    options: [
      { letter: "A", text: "I usually don't stick to a budget." },
      { letter: "B", text: "I carefully control almost every expense." },
      { letter: "C", text: "I have a budget that allows for both goals and enjoyment." },
      { letter: "D", text: "I focus more on growing money than tracking every expense." },
      { letter: "E", text: "I don't really have a system for tracking my money." }
    ]
  },
  {
    text: "Your ideal relationship with money is...",
    options: [
      { letter: "A", text: "Freedom to enjoy life today." },
      { letter: "B", text: "Security and peace of mind." },
      { letter: "C", text: "Financial freedom and steady growth." },
      { letter: "D", text: "Wealth, growth, and big opportunities." },
      { letter: "E", text: "Less stress — I don't want money problems." }
    ]
  },
  {
    text: "If your income increased tomorrow, you would most likely...",
    options: [
      { letter: "A", text: "Upgrade my lifestyle." },
      { letter: "B", text: "Save as much as possible." },
      { letter: "C", text: "Increase my savings and investments while maintaining my lifestyle." },
      { letter: "D", text: "Invest aggressively to grow the extra income." },
      { letter: "E", text: "Probably not make a clear plan for it." }
    ]
  },
  {
    text: "Which is your biggest money challenge?",
    options: [
      { letter: "A", text: "Controlling impulse spending." },
      { letter: "B", text: "Taking enough investment risk." },
      { letter: "C", text: "Knowing when to accelerate my wealth-building." },
      { letter: "D", text: "Managing risk and emotional decisions." },
      { letter: "E", text: "Getting started and staying consistent." }
    ]
  },
  {
    text: "When you think about your financial future, what feels most natural?",
    options: [
      { letter: "A", text: "I prefer enjoying life now rather than worrying too much about the future." },
      { letter: "B", text: "I want to make sure I always have enough money saved." },
      { letter: "C", text: "I have clear goals and try to balance today with tomorrow." },
      { letter: "D", text: "I think about how I can multiply my money faster." },
      { letter: "E", text: "I know I should plan, but I keep putting it off." }
    ]
  },
  {
    text: "You see an investment opportunity promising strong returns. What do you do?",
    options: [
      { letter: "A", text: "I might invest if it sounds exciting and everyone is talking about it." },
      { letter: "B", text: "I probably avoid it because I don't want to lose my money." },
      { letter: "C", text: "I research it, assess the risks, and decide whether it fits my plan." },
      { letter: "D", text: "I'm interested immediately and willing to take the risk for higher returns." },
      { letter: "E", text: "I feel overwhelmed and don't take any action." }
    ]
  },
  {
    text: "How do you normally approach debt?",
    options: [
      { letter: "A", text: "I may borrow if it helps me afford something I want now." },
      { letter: "B", text: "I avoid debt as much as possible." },
      { letter: "C", text: "I use debt carefully when it supports a clear financial goal." },
      { letter: "D", text: "I'm comfortable using debt if I believe it can help me build wealth." },
      { letter: "E", text: "I sometimes ignore debt until I have to deal with it." }
    ]
  },
  {
    text: "How prepared are you for a financial emergency?",
    options: [
      { letter: "A", text: "I would probably use my next salary, credit, or borrow from someone." },
      { letter: "B", text: "Very prepared — I keep a strong emergency fund." },
      { letter: "C", text: "I have emergency savings while also investing for long-term goals." },
      { letter: "D", text: "I may have some savings, but most of my money is working in investments or opportunities." },
      { letter: "E", text: "I haven't really thought about what I would do." }
    ]
  },
  {
    text: "Which statement best describes what happens on payday?",
    options: [
      { letter: "A", text: "I immediately start thinking about what I can buy or enjoy." },
      { letter: "B", text: "My priority is moving money into savings." },
      { letter: "C", text: "I divide my money between bills, savings, investments, and enjoyment." },
      { letter: "D", text: "I look for ways to put as much money as possible into investments or my business." },
      { letter: "E", text: "Money comes in, bills get paid, and I'm often unsure where the rest went." }
    ]
  }
];

// Result definitions, keyed by dominant letter.
const RESULTS = {
  A: {
    emoji: "💸",
    title: "The Spender | Swipe Queen",
    short: "Swipe Queen",
    copy: "You love enjoying your money and may struggle with delayed gratification. Spending brings you real joy right now \u2014 the opportunity is building systems (automatic transfers, a simple budget) that let you enjoy today without borrowing from your future."
  },
  B: {
    emoji: "🐷",
    title: "The Saver | Piggy Baddie",
    short: "Piggy Baddie",
    copy: "Security is your priority, and your discipline is real. Being overly cautious, though, can quietly limit your long-term wealth growth. Consider gradually learning about low-risk investment options so your savings start working as hard as you do."
  },
  C: {
    emoji: "🏗️",
    title: "The Balanced Builder | Stacker Princess",
    short: "Stacker Princess",
    copy: "You have a healthy relationship with money \u2014 spending, saving and investing all have a place in your plan. Your next level is learning how to scale your wealth more intentionally, so growth becomes deliberate instead of incidental."
  },
  D: {
    emoji: "🤠",
    title: "The Risk Taker | Alpha Cowgirl",
    short: "Alpha Cowgirl",
    copy: "You see money as a tool for growth and you're comfortable taking risks to get there. Your biggest opportunity is strengthening risk management and diversification, so one bad bet can't undo your progress."
  },
  E: {
    emoji: "🙈",
    title: "The Avoider | Swipe & Pray Girlie",
    short: "Swipe & Pray Girlie",
    copy: "Money conversations and decisions can feel overwhelming, so you tend to delay dealing with them. Your first step is simple: start tracking your money and building basic financial habits \u2014 clarity first, strategy later."
  }
};

const LETTER_ORDER = ["A", "B", "C", "D", "E"];
