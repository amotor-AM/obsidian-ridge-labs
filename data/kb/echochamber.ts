import { KnowledgeBase } from "../../types";

export const echochamberKb: KnowledgeBase = {
  appId: "echochamber",
  appName: "Echo Chamber",
  accent: "#5cc8e6",
  status: "ready",
  intro:
    "Welcome to Echo Chamber help. Whatever you are trying to capture, transcribe, or share, these guides walk you through it in plain, friendly steps.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Set up Echo Chamber and make your first recording in a couple of minutes.",
      icon: "sparkles",
    },
    {
      id: "recording",
      title: "Recording & transcription",
      description: "Capture audio anywhere and turn it into accurate, searchable text.",
      icon: "mic",
    },
    {
      id: "ai",
      title: "Summaries, chat & action items",
      description: "Turn a transcript into notes, answers, and to-dos, all on your device.",
      icon: "bot",
    },
    {
      id: "library",
      title: "Organizing, searching & exporting",
      description: "Find any recording instantly, keep things tidy, and share in the format you need.",
      icon: "folder",
    },
    {
      id: "sync-devices",
      title: "Syncing & your devices",
      description: "Use Echo Chamber across iPhone, iPad, Mac, and Apple Watch, with optional encrypted iCloud sync.",
      icon: "cloud",
    },
    {
      id: "privacy",
      title: "Privacy & security",
      description: "Exactly what stays on your device, and how App Lock and encryption work.",
      icon: "shield-check",
    },
    {
      id: "billing",
      title: "Plans & billing",
      description: "What is free, what Pro adds, and how to restore a purchase.",
      icon: "key",
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      description: "Quick fixes for accuracy, recovery, offline use, and storage.",
      icon: "lightbulb",
    },
  ],
  articles: [
    /* ───────────────────────── Getting started ───────────────────────── */
    {
      id: "welcome",
      title: "Welcome to Echo Chamber",
      description: "A quick tour of what Echo Chamber does and why it stays on your device.",
      category: "getting-started",
      keywords: ["overview", "intro", "what is", "tour", "getting started"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Echo Chamber records the moments that matter, turns them into clean text in seconds, and helps you do something useful with that text, all on your iPhone, iPad, Mac, or Apple Watch.",
        },
        {
          type: "paragraph",
          content:
            "There is no account to create and no sign-in. You open the app and you can record. The transcription runs on the device in your hand, so your words stay with you.",
        },
        {
          type: "heading",
          level: 2,
          content: "What you can do",
        },
        {
          type: "list",
          items: [
            "Record from the app, the Lock Screen, Control Center, Siri, or your Apple Watch.",
            "Get a real-time transcript with speakers labeled automatically.",
            "Generate summaries, ask questions about a recording, and pull out action items.",
            "Search every transcript instantly, and organize with folders and favorites.",
            "Export to TXT, Markdown, PDF, or DOCX, and translate a transcript without an internet connection.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Your recordings are yours",
          content:
            "Echo Chamber has no servers of its own. Recording and transcription happen entirely on your device, and nothing is uploaded unless you choose to turn on iCloud sync, which stays inside your own iCloud account.",
        },
        {
          type: "paragraph",
          content: "Ready to begin? The next article walks you through your first recording.",
        },
      ],
      related: ["first-recording", "what-stays-on-device", "free-vs-pro"],
    },
    {
      id: "first-recording",
      title: "Make your first recording",
      description: "Start, watch, and save your first transcript in under a minute.",
      category: "getting-started",
      keywords: ["first", "start recording", "begin", "new recording", "microphone", "permissions"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Making a recording is the heart of Echo Chamber, and it takes one tap. The first time, you will be asked for microphone and speech recognition access, which the app needs to hear you and write your words down.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open the app and tap Record",
              description: "The big record button sits at the center of the main screen.",
            },
            {
              title: "Allow access when asked",
              description:
                "Tap Allow for Microphone and Speech Recognition. These are requested only the first time, and only so transcription can run on your device.",
            },
            {
              title: "Speak",
              description:
                "Watch the live waveform move and text appear as you talk. You can lock your screen or switch apps and it keeps recording.",
            },
            {
              title: "Tap Stop when you are done",
              description: "Your recording is saved automatically, with a finished transcript ready to read, search, and share.",
            },
          ],
        },
        {
          type: "image",
          src: "/images/echochamber/RecordScreen.png",
          alt: "Echo Chamber recording screen with a live waveform",
          caption: "Tap to record, and watch the waveform respond as you speak.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "First run downloads a model once",
          content:
            "The very first transcription may take a moment to download a speech model. This happens once. After that, transcription works offline, every time.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Which permissions will I be asked for?",
              a: "Microphone and Speech Recognition are required, so the app can hear you and transcribe on your device. Optional permissions, asked only in context, include Face ID, Notifications, Calendar, and Contacts. You can change any of them later in the iOS Settings app.",
            },
            {
              q: "Why does Speech Recognition appear if everything is on-device?",
              a: "Apple groups on-device speech features under that permission. Granting it lets transcription run locally; nothing about it sends your audio to a server.",
            },
          ],
        },
      ],
      related: ["welcome", "ways-to-record", "transcription-speed-accuracy"],
    },

    /* ───────────────────────── Recording & transcription ───────────────────────── */
    {
      id: "ways-to-record",
      title: "Every way to start a recording",
      description: "Record from the app, the Lock Screen, Control Center, Siri, or your Apple Watch.",
      category: "recording",
      keywords: ["lock screen", "control center", "siri", "shortcut", "widget", "background"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "The fastest recording is the one you do not have to dig for. Echo Chamber gives you several ways to start so you can capture a thought before it slips away.",
        },
        {
          type: "list",
          items: [
            "In the app, tap the record button on the main screen.",
            "From the Lock Screen, add the Echo Chamber widget and tap it to start without unlocking.",
            "From Control Center, add the Echo Chamber control and tap it from anywhere.",
            "With Siri, set up a Shortcut and say your phrase to begin hands-free.",
            "From your Apple Watch, tap record on the wrist and your iPhone does the transcribing.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Recording keeps going in the background",
          content:
            "Once a recording starts, you can lock your phone, check a message, or switch apps. Echo Chamber keeps capturing audio until you stop it, and a Live Activity keeps it visible on the Lock Screen and Dynamic Island.",
        },
        {
          type: "faq",
          items: [
            {
              q: "How do I add the Lock Screen or Control Center option?",
              a: "Touch and hold your Lock Screen to edit widgets, or pull open Control Center and tap the plus to add a control, then choose Echo Chamber.",
            },
            {
              q: "Can Siri start a recording for me?",
              a: "Yes. Echo Chamber supports Siri Shortcuts, so you can create a phrase like Start a recording and trigger it by voice.",
            },
          ],
        },
      ],
      related: ["first-recording", "apple-watch-widgets", "recording-in-meetings"],
    },
    {
      id: "recording-in-meetings",
      title: "Recording a meeting or lecture",
      description: "Capture longer conversations cleanly, with speakers labeled automatically.",
      category: "recording",
      keywords: ["meeting", "lecture", "interview", "long recording", "speakers", "class", "consent"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Echo Chamber is built for real conversations, not just quick notes. There is no bot that joins your call and no setup beyond pressing record.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Place your device where it can hear",
              description: "Set your phone on the table, screen up, roughly toward the people speaking.",
            },
            {
              title: "Start recording before things begin",
              description: "A few seconds of room tone at the start helps the transcript settle in.",
            },
            {
              title: "Let it run",
              description: "Background recording means you can take notes, check the time, or step out briefly without stopping.",
            },
            {
              title: "Stop and review",
              description: "When the meeting ends, tap Stop. Speakers are labeled automatically, and you can name them.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "On a Mac, let it offer to record",
          content:
            "If you are on a Mac, Echo Chamber can detect when you join Zoom, Teams, Google Meet, and more, and offer to record both sides of the call. See the Mac guide for details.",
        },
        {
          type: "callout",
          variant: "info",
          title: "A note on consent",
          content:
            "Laws about recording conversations vary by place. When others are involved, it is good practice, and sometimes required, to let everyone know they are being recorded.",
        },
      ],
      related: ["naming-speakers", "mac-meeting-detection", "transcription-speed-accuracy"],
    },
    {
      id: "transcription-speed-accuracy",
      title: "How transcription works, and how fast it is",
      description: "Parakeet TDT turns speech into private, offline-ready text after targeted pre-transcription enhancement.",
      category: "recording",
      keywords: ["accuracy", "word error rate", "speed", "real-time", "offline", "speech enhancement", "parakeet tdt"],
      updated: "2026-07-11",
      blocks: [
        {
          type: "paragraph",
          content:
            "Your words become text on your device with NVIDIA Parakeet TDT speech recognition, so the recording does not need to be uploaded to an Obsidian Ridge Labs server for transcription.",
        },
        {
          type: "paragraph",
          content:
            "Before Parakeet receives the audio, Echo Chamber applies a targeted, speech-focused filter designed for transcription. This is not generic normalization. The complete enhanced Echo Chamber pipeline has produced an internal observed word error rate of approximately 4.5% under tested conditions. Results vary with speakers, accents, acoustics, crosstalk, vocabulary, and source quality.",
        },
        {
          type: "paragraph",
          content:
            "Speed depends on your device and the length of the recording, but short notes are usually ready the moment you stop, and longer recordings finish processing quickly in the background.",
        },
        {
          type: "image",
          src: "/images/echochamber/TranscriptionDetailsScreen.png",
          alt: "A finished transcript with labeled speakers and timestamps",
          caption: "A finished transcript, with speakers labeled and words tied to timestamps.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Models download once",
          content:
            "The speech model downloads a single time over the internet. After that, recording and transcription keep working fully offline.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Why are a few words wrong?",
              a: "No transcription is perfect, especially with names, jargon, crosstalk, or background noise. You can fix any word by editing the transcript, and Custom Vocabulary helps the engine get specialized terms right.",
            },
            {
              q: "Does a longer recording need internet?",
              a: "No. Once the model is downloaded, even hour-long recordings transcribe on your device without a connection.",
            },
          ],
        },
      ],
      related: ["improving-accuracy", "edit-transcript", "offline-use", "translate-transcript"],
    },
    {
      id: "edit-transcript",
      title: "Edit a transcript, tap to play, and add vocabulary",
      description: "Fix any word inline, jump to that moment in the audio, and teach Echo Chamber your terms.",
      category: "recording",
      keywords: ["edit", "correct", "fix word", "timestamps", "playback", "seek", "custom vocabulary", "jargon"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "A transcript is yours to refine. Echo Chamber ties words to the audio with word-level timestamps, so you can check anything and clean up the few words that need it.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open the recording",
              description: "Tap any recording in your history to see its full transcript.",
            },
            {
              title: "Tap a word to hear it",
              description: "Because timestamps are word-level, tapping a word seeks the audio to that exact moment.",
            },
            {
              title: "Tap Edit to make changes",
              description: "Correct a misheard word, fix a name, or tidy punctuation directly in the text.",
            },
            {
              title: "Your edits save automatically",
              description: "Changes are kept with the recording and carried through when you export.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Teach it your words with Custom Vocabulary",
        },
        {
          type: "paragraph",
          content:
            "Every field has words a general speech model will not know, from product names to medical and legal terms. Add them in Settings under Custom Vocabulary, and future transcriptions favor your terms so they show up spelled correctly.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Fix it once, name it once",
          content:
            "If a specialized word keeps coming out wrong, adding it to Custom Vocabulary often solves it for every future recording, instead of correcting it each time.",
        },
      ],
      related: ["transcription-speed-accuracy", "improving-accuracy", "naming-speakers"],
    },
    {
      id: "naming-speakers",
      title: "Name the speakers in a recording",
      description: "Echo Chamber labels who spoke, and you can give each voice a real name.",
      category: "recording",
      keywords: ["speakers", "diarization", "who said what", "rename", "speaker library", "contacts"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "When more than one person speaks, Echo Chamber separates the voices and labels them automatically. Replacing a generic label with a real name makes the transcript far easier to read and share.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open a multi-speaker recording",
              description: "You will see labels like Speaker 1 and Speaker 2 beside what each person said.",
            },
            {
              title: "Tap a speaker label",
              description: "Choose to rename that voice.",
            },
            {
              title: "Type or pick a name",
              description: "If you have allowed Contacts, Echo Chamber can suggest names to tap instead of typing.",
            },
            {
              title: "It learns the voice",
              description: "Names are saved to your speaker library, so the same person can be recognized in future recordings.",
            },
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Names are applied, not baked in",
          content:
            "Speaker names live in your on-device speaker library and are resolved when you view or export. Your stored transcript text is never permanently overwritten with a name, and nothing about speakers is sent anywhere.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Will it remember a person across recordings?",
              a: "Yes. Once you name a voice, Echo Chamber can recognize that speaker in later recordings and suggest the same name.",
            },
            {
              q: "Do the names show up when I export?",
              a: "Yes. The names you assign are applied to the exported file, so a shared transcript reads clearly.",
            },
          ],
        },
      ],
      related: ["recording-in-meetings", "export-formats", "edit-transcript"],
    },
    {
      id: "import-audio-video",
      title: "Import audio and video to transcribe",
      description: "Bring in existing recordings, from MP3 to MP4, and get a transcript.",
      category: "recording",
      keywords: ["import", "upload", "audio file", "video file", "mp3", "mp4", "m4a", "mov", "noise"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "You do not have to record inside Echo Chamber to transcribe with it. Import audio or video files you already have and turn them into searchable text on your device.",
        },
        {
          type: "paragraph",
          content:
            "Common formats are supported, including MP3, WAV, M4A, AAC, MP4, and MOV, so a voice memo, a downloaded recording, or a video file all work.",
        },
        {
          type: "image",
          src: "/images/echochamber/UploadScreen.png",
          alt: "Importing an audio or video file to transcribe",
          caption: "Bring in a file and Echo Chamber transcribes it on your device.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open the import option",
              description: "Choose to add a file from the app.",
            },
            {
              title: "Pick your file",
              description: "Select an audio or video file from Files, the share sheet, or another app.",
            },
            {
              title: "Let it transcribe",
              description: "Echo Chamber processes the file on your device and produces a transcript you can edit, summarize, and export.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Enhancement built for transcription",
          content:
            "A recording with clear speech usually produces a cleaner transcript. Echo Chamber applies a targeted, speech-focused pre-transcription filter to prepare the signal for Parakeet TDT. It is not a generic normalization pass, which can erase details a recognizer needs.",
        },
      ],
      related: ["export-formats", "improving-accuracy", "transcription-speed-accuracy"],
    },

    /* ───────────────────────── Summaries, chat & action items ───────────────────────── */
    {
      id: "ai-summaries",
      title: "Summarize a recording",
      description: "Turn a transcript into Cornell notes, minutes, bullets, and more, on-device.",
      category: "ai",
      keywords: ["summary", "cornell notes", "meeting minutes", "bullet points", "outline", "executive summary"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "A summary turns a long transcript into something you can act on in seconds. Echo Chamber generates these on your device, so the content of your conversation never leaves it.",
        },
        {
          type: "heading",
          level: 2,
          content: "Summary styles you can choose",
        },
        {
          type: "list",
          items: [
            "Cornell notes, with cues, notes, and a summary, great for study and review.",
            "Meeting minutes, a structured record of decisions and discussion.",
            "Bullet points, the key takeaways at a glance.",
            "Outline, the structure of what was said.",
            "Q&A, the questions raised and answers given.",
            "Executive summary, the short version for someone who was not there.",
          ],
        },
        {
          type: "steps",
          items: [
            {
              title: "Open a recording and choose Summarize",
              description: "Find the AI options on the recording's detail screen.",
            },
            {
              title: "Pick a style",
              description: "Choose the format that fits, such as Cornell notes or bullet points.",
            },
            {
              title: "Read, copy, or export",
              description: "Use the summary in the app, or include it when you export the recording.",
            },
          ],
        },
        {
          type: "image",
          src: "/images/echochamber/AISummaryCornellNotes.png",
          alt: "Cornell-style notes generated on device",
          caption: "Cornell notes generated from a transcript, entirely on-device.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Summaries run on your device",
          content:
            "Summaries are generated on-device using Apple Intelligence on compatible devices, with bundled on-device Bonsai 1.7B as the local fallback on supported hardware without Apple Intelligence. Your transcript is not sent to an outside service.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Without Apple Intelligence",
          content:
            "On compatible devices, Apple Intelligence handles transcript intelligence. Supported hardware without Apple Intelligence uses the bundled on-device Bonsai 1.7B fallback. Either path keeps the work on your device.",
        },
      ],
      related: ["chat-with-transcript", "action-items", "free-vs-pro"],
    },
    {
      id: "chat-with-transcript",
      title: "Chat with a transcript",
      description: "Ask a recording questions and get answers drawn from what was actually said.",
      category: "ai",
      keywords: ["chat", "ask questions", "transcript chat", "q and a", "search meaning"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Sometimes you do not want to reread a whole transcript, you just want one answer. Chat lets you ask a recording a question in plain language and get a reply based on its contents.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open a recording",
              description: "Go to the recording you want to ask about.",
            },
            {
              title: "Open Chat",
              description: "Choose the chat option on the recording's detail screen.",
            },
            {
              title: "Ask anything",
              description: "Try questions like What did we decide about the budget, or Summarize the part about hiring.",
            },
          ],
        },
        {
          type: "image",
          src: "/images/echochamber/AIChat.png",
          alt: "Chatting with a transcript to find a specific answer",
          caption: "Ask a recording a question and get an answer from what was said.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Your questions stay on-device",
          content:
            "Chat is answered on your device. The recording, your questions, and the answers are not uploaded to any server.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Can it answer about something that was not discussed?",
              a: "Chat draws from what is in the recording. If a topic never came up, it cannot invent an answer for you, which is exactly what you want from a trustworthy transcript.",
            },
          ],
        },
      ],
      related: ["ai-summaries", "action-items", "search-transcripts"],
    },
    {
      id: "action-items",
      title: "Send action items to Reminders",
      description: "Pull the to-dos out of a recording and drop them into Apple Reminders.",
      category: "ai",
      keywords: ["action items", "tasks", "to-do", "reminders", "follow up", "next steps"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "The useful part of a meeting is often the list of who-does-what. Echo Chamber can extract those action items from a recording and send them straight to Apple Reminders.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open a recording and extract action items",
              description: "Choose the action items option on the recording's detail screen.",
            },
            {
              title: "Review the list",
              description: "Echo Chamber pulls out the tasks it found so you can check them.",
            },
            {
              title: "Send to Reminders",
              description: "Add the items to Apple Reminders with a tap, ready to check off later.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "You stay in control",
          content:
            "Action items are extracted on your device, and nothing is added to Reminders until you choose to send it. Review the list first, then commit the ones you want.",
        },
      ],
      related: ["ai-summaries", "chat-with-transcript", "recording-in-meetings"],
    },

    /* ───────────────────────── Organizing, searching & exporting ───────────────────────── */
    {
      id: "search-transcripts",
      title: "Search every transcript instantly",
      description: "Find any word across all your recordings with fast, local full-text search.",
      category: "library",
      keywords: ["search", "find", "full-text", "keyword", "history"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Once you have a stack of recordings, search is how you find the one you need. Echo Chamber searches the full text of every transcript, instantly, right on your device.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open your history",
              description: "Go to the list of your recordings.",
            },
            {
              title: "Type in the search field",
              description: "Enter a name, a phrase, or any word that was spoken.",
            },
            {
              title: "Jump to the result",
              description: "Tap a match to open that recording at the relevant spot.",
            },
          ],
        },
        {
          type: "image",
          src: "/images/echochamber/HistoryScreen.png",
          alt: "Searchable history of recordings",
          caption: "Search runs across the full text of every transcript.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Search never leaves your device",
          content:
            "Full-text search is performed locally. Your search terms and your transcripts are never sent anywhere to make this work.",
        },
      ],
      related: ["folders-favorites", "export-formats", "edit-transcript"],
    },
    {
      id: "folders-favorites",
      title: "Organize with folders, favorites, series, and dates",
      description: "Keep recordings tidy with folders, star the ones you revisit, and browse by day.",
      category: "library",
      keywords: ["folders", "favorites", "star", "series", "organize", "groups", "calendar", "date"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "A little structure goes a long way. Echo Chamber gives you folders to sort recordings, favorites to mark the important ones, and automatic series detection to group recordings that belong together.",
        },
        {
          type: "list",
          items: [
            "Folders let you group recordings by project, class, or client.",
            "Favorites star the recordings you come back to, so they are one tap away.",
            "Series detection notices related recordings, such as a recurring meeting, and groups them for you.",
            "The calendar view lets you find a recording by the day it was made.",
          ],
        },
        {
          type: "steps",
          items: [
            {
              title: "Create a folder",
              description: "From your history, make a new folder and give it a name.",
            },
            {
              title: "Move recordings in",
              description: "Add recordings to the folder to keep a topic together.",
            },
            {
              title: "Favorite the essentials",
              description: "Tap the star on any recording to find it quickly later.",
            },
            {
              title: "Browse by date",
              description: "Switch to the calendar view and tap a day to see what you recorded then.",
            },
          ],
        },
        {
          type: "image",
          src: "/images/echochamber/HistoryCalendarScreen.png",
          alt: "Calendar view of recordings organized by date",
          caption: "Jump to a day to see what you recorded then.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Let series do the sorting",
          content:
            "If you record the same weekly meeting, series detection can gather those sessions automatically so you do not have to file each one by hand.",
        },
      ],
      related: ["search-transcripts", "storage-management", "export-formats"],
    },
    {
      id: "export-formats",
      title: "Export a transcript in four useful formats",
      description: "Share clean text, Markdown, a PDF, or a Word document.",
      category: "library",
      keywords: ["export", "txt", "pdf", "word", "docx", "markdown"],
      updated: "2026-07-11",
      blocks: [
        {
          type: "paragraph",
          content:
            "When a transcript is ready, you decide where it goes and in what shape. Echo Chamber exports to four formats, from portable plain text to a polished document.",
        },
        {
          type: "heading",
          level: 2,
          content: "The four formats",
        },
        {
          type: "list",
          items: [
            "TXT, for clean plain text that opens almost anywhere.",
            "Markdown, for notes apps and documents.",
            "PDF, for a polished shareable document.",
            "DOCX, for an editable Microsoft Word document.",
          ],
        },
        {
          type: "steps",
          items: [
            {
              title: "Open a recording",
              description: "Go to the transcript you want to share.",
            },
            {
              title: "Tap Export and choose a format",
              description: "Pick the format that suits where the transcript is headed.",
            },
            {
              title: "Share or save",
              description: "Send it through the share sheet, save it to Files, or hand it to another app.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Check the export menu",
          content:
            "The export menu shows the formats available for the current app version and plan. Speaker names you assign are carried into the exported document.",
        },
      ],
      related: ["translate-transcript", "naming-speakers", "free-vs-pro"],
    },
    {
      id: "translate-transcript",
      title: "Translate a transcript",
      description: "Turn a finished transcript into another language, on your device.",
      category: "library",
      keywords: ["translate", "translation", "language", "multilingual", "on-device", "apple translation"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "A transcript should be useful to everyone who needs it. Echo Chamber transcribes in many languages, and it can translate a finished transcript using Apple's on-device Translation framework, so the text is rendered in another language without leaving your device.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open a recording",
              description: "Go to the transcript you want to translate.",
            },
            {
              title: "Choose Translate",
              description: "Select the translation option on the recording's detail screen.",
            },
            {
              title: "Pick a target language",
              description: "Choose the language you want, and the translated text appears.",
            },
          ],
        },
        {
          type: "image",
          src: "/images/echochamber/Translate.png",
          alt: "On-device translation of a transcript",
          caption: "Translate a transcript into another language, on-device.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Translation stays local",
          content:
            "Translation runs on your device through Apple's Translation framework. The first time you use a language pair it may download once, and after that it works offline.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Best results in a single language",
          content:
            "For the cleanest transcript and translation, try to keep one recording mostly in one language. Heavy switching between languages mid-sentence is harder for any model.",
        },
      ],
      related: ["export-formats", "transcription-speed-accuracy", "offline-use"],
    },

    /* ───────────────────────── Syncing & your devices ───────────────────────── */
    {
      id: "icloud-sync",
      title: "Turn on iCloud sync, and what it means",
      description: "Sync recordings across your devices with end-to-end encrypted iCloud, off by default.",
      category: "sync-devices",
      keywords: ["icloud", "sync", "encryption", "backup", "across devices", "aes"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "By default, your recordings live only on the device that made them. If you want them on all your devices, you can turn on iCloud sync, and it is built to keep your audio private.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Settings",
              description: "Find the sync section in the app's settings.",
            },
            {
              title: "Turn on iCloud sync",
              description: "Enable it to start keeping recordings consistent across your devices.",
            },
            {
              title: "Let it catch up",
              description: "Your recordings sync in the background. Newly recorded ones sync as you go.",
            },
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "How sync protects your audio",
          content:
            "Audio is encrypted on your device with AES-256-GCM before it syncs. The encryption key lives in your iCloud Keychain, everything stays inside your own iCloud account, and the developer has no servers and cannot read it.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Sync is a Pro feature",
          content:
            "iCloud sync is off by default. Unlimited encrypted iCloud sync is part of Echo Chamber Pro.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Can the developer see my synced recordings?",
              a: "No. The audio is encrypted before it leaves your device and the key stays in your iCloud Keychain. It travels only within your own iCloud account.",
            },
            {
              q: "What if I turn sync off?",
              a: "Your recordings remain on the device they are already on. Turning sync off simply stops new changes from propagating between devices.",
            },
          ],
        },
      ],
      related: ["what-stays-on-device", "free-vs-pro", "mac-meeting-detection"],
    },
    {
      id: "mac-meeting-detection",
      title: "Echo Chamber on Mac",
      description: "A menu-bar app that offers to record your video calls and captures system audio.",
      category: "sync-devices",
      keywords: ["mac", "macos", "zoom", "teams", "meet", "menu bar", "system audio", "screencapturekit"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "On a Mac, Echo Chamber lives in your menu bar and is built for calls. When you join a meeting, it can offer to record, capturing both what you say and what you hear.",
        },
        {
          type: "heading",
          level: 2,
          content: "Apps it can detect",
        },
        {
          type: "list",
          items: [
            "Zoom, Microsoft Teams, and Google Meet.",
            "Slack and Discord calls.",
            "FaceTime and Webex.",
          ],
        },
        {
          type: "steps",
          items: [
            {
              title: "Join a call as usual",
              description: "Start or join a meeting in one of the supported apps.",
            },
            {
              title: "Accept the offer to record",
              description: "Echo Chamber notices the call and asks if you want to record it.",
            },
            {
              title: "Choose per-app behavior",
              description: "Set each app to always record, ask first, or never, so it fits how you work.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Capturing both sides",
          content:
            "On Mac, Echo Chamber can capture system audio along with your microphone using ScreenCaptureKit, which is why it can transcribe everyone on the call. This needs Screen Recording permission, requested in context.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Light on your Mac",
          content:
            "The Mac app is designed for low CPU use, so it can sit in your menu bar and watch for calls without weighing your machine down.",
        },
      ],
      related: ["recording-in-meetings", "icloud-sync", "apple-watch-widgets"],
    },
    {
      id: "apple-watch-widgets",
      title: "Apple Watch, widgets, and Live Activities",
      description: "Record from your wrist and start faster from the Lock Screen, Home Screen, and Control Center.",
      category: "sync-devices",
      keywords: ["apple watch", "watch", "wrist", "widget", "live activity", "dynamic island", "control center"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Echo Chamber meets you where you already are. Your Apple Watch can capture a moment when your phone is away, and widgets put recording one tap from your Home Screen or Lock Screen.",
        },
        {
          type: "heading",
          level: 2,
          content: "On your Apple Watch",
        },
        {
          type: "list",
          items: [
            "Start and stop a recording from the wrist.",
            "Use playback controls to review on your watch.",
            "Transcription happens on the paired iPhone, so the watch stays light.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Widgets and Live Activities",
        },
        {
          type: "list",
          items: [
            "Add a Lock Screen or Home Screen widget to start recording instantly.",
            "Add the Control Center control for a recording button you can reach from anywhere.",
            "Watch a Live Activity show your recording in progress on the Lock Screen and Dynamic Island.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Keep your iPhone nearby",
          content:
            "Because transcription runs on the paired iPhone, keeping your phone within range gives your watch the smoothest experience.",
        },
      ],
      related: ["ways-to-record", "first-recording", "icloud-sync"],
    },

    /* ───────────────────────── Privacy & security ───────────────────────── */
    {
      id: "what-stays-on-device",
      title: "Does my audio ever leave my device?",
      description: "An honest, plain account of exactly what stays local and the only times the network is used.",
      category: "privacy",
      keywords: ["privacy", "audio", "upload", "on-device", "network", "tracking", "analytics", "permissions"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "This is the question that matters most, so here is the straight answer. Recording, transcription, summaries, chat, search, and translation all happen on your device. The developer runs no servers for any of it.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "The only times the network is used",
          content:
            "Two, and only two. First, a one-time download of the speech model so transcription can run offline afterward. Second, iCloud sync, but only if you turn it on, and even then your audio is encrypted and stays inside your own iCloud account.",
        },
        {
          type: "heading",
          level: 2,
          content: "What Echo Chamber does not do",
        },
        {
          type: "list",
          items: [
            "No account and no sign-in.",
            "No analytics, no telemetry, and no tracking.",
            "No ads and no advertising identifier.",
            "No bot that joins your meetings.",
            "No server owned by the developer that holds your recordings.",
          ],
        },
        {
          type: "heading",
          level: 3,
          content: "Permissions, and why they are asked",
        },
        {
          type: "paragraph",
          content:
            "Permissions are requested only in context. Microphone and Speech Recognition are required so the app can hear you and transcribe on-device. Face ID, Notifications, Calendar, and Contacts are optional conveniences, and Screen Recording applies to Mac only. Declining the optional ones never limits recording or transcription.",
        },
        {
          type: "faq",
          items: [
            {
              q: "If I never enable iCloud sync, does any recording leave my device?",
              a: "No. With sync off, your recordings stay on the device that made them. The only network use is the one-time speech model download.",
            },
            {
              q: "Are summaries and chat sent somewhere?",
              a: "No. They are generated on your device using Apple Intelligence on compatible devices, or bundled on-device Bonsai 1.7B on supported hardware without Apple Intelligence.",
            },
          ],
        },
      ],
      related: ["icloud-sync", "app-lock", "free-vs-pro"],
    },
    {
      id: "app-lock",
      title: "Lock the app with Face ID",
      description: "Add a layer of privacy so only you can open your recordings.",
      category: "privacy",
      keywords: ["face id", "app lock", "biometric", "passcode", "privacy", "lock"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Your recordings can be personal, so Echo Chamber lets you put them behind Face ID. With App Lock on, the app asks for your face before it opens.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Settings",
              description: "Find the App Lock or Face ID setting in the app's settings.",
            },
            {
              title: "Turn on Face ID lock",
              description: "Enable it, and grant Face ID access if asked.",
            },
            {
              title: "Test it",
              description: "Close and reopen Echo Chamber. It should ask for Face ID before showing your recordings.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Optional, and on-device",
          content:
            "App Lock is optional and uses your device's built-in biometrics. Your face data never reaches Echo Chamber, it is handled by your device, as Apple designed it.",
        },
      ],
      related: ["what-stays-on-device", "icloud-sync", "first-recording"],
    },

    /* ───────────────────────── Plans & billing ───────────────────────── */
    {
      id: "free-vs-pro",
      title: "What is free and what Pro adds",
      description: "A clear breakdown of the free app and Echo Chamber Pro monthly, yearly, and Lifetime purchase options.",
      category: "billing",
      keywords: ["pricing", "free", "pro", "subscription", "monthly", "yearly", "lifetime", "one-time purchase", "cost", "upgrade"],
      updated: "2026-07-11",
      blocks: [
        {
          type: "paragraph",
          content:
            "Echo Chamber is free to download and use. Echo Chamber Pro unlocks unlimited recording length, every AI feature, audio and video upload, batch enhancement, and priority support. Choose monthly or yearly access, or buy Lifetime once because a great app should not require another subscription.",
        },
        {
          type: "heading",
          level: 2,
          content: "Start free",
        },
        {
          type: "list",
          items: [
            "Record and transcribe locally within the current free recording-length allowance.",
            "Full-text search, folders, and favorites.",
            "Speaker labels and the core searchable recording library.",
            "Export in the formats shown for the current plan.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Echo Chamber Pro adds",
        },
        {
          type: "list",
          items: [
            "Unlimited recording length.",
            "All AI features.",
            "Audio and video file upload.",
            "Batch enhancement and priority support.",
          ],
        },
        {
          type: "heading",
          level: 3,
          content: "Pro pricing",
        },
        {
          type: "list",
          items: [
            "Monthly, 2.99 US dollars per month.",
            "Yearly, 29.99 US dollars per year.",
            "Lifetime, 79.99 US dollars one time.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Already paid on another device?",
          content:
            "If you have bought Pro before, you do not pay again. See Restore a purchase to bring it back.",
        },
      ],
      related: ["restore-purchase", "icloud-sync", "ai-summaries"],
    },
    {
      id: "restore-purchase",
      title: "Restore a purchase",
      description: "Bring back Pro on a new device or after reinstalling, at no extra cost.",
      category: "billing",
      keywords: ["restore", "purchase", "pro", "reinstall", "new device", "apple id"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Your Pro purchase is tied to your Apple Account, not a single device. If you reinstall the app or set up a new device, you can restore Pro without paying again.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Sign in with the same Apple Account",
              description: "Use the Apple Account you used when you bought Pro.",
            },
            {
              title: "Open Settings in Echo Chamber",
              description: "Go to the app's settings.",
            },
            {
              title: "Tap Restore Purchases",
              description: "Echo Chamber checks with the App Store and re-enables your Pro features.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Billing is managed by Apple",
          content:
            "To change or cancel a monthly or yearly subscription, open the App Store, tap your profile, and choose Subscriptions. Lifetime is a one-time purchase and does not renew.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Restore did not bring Pro back, what now?",
              a: "Confirm you are signed in with the exact Apple Account used for the purchase, then make sure you have a connection so the App Store can verify it. If it still does not appear, try again in a few minutes.",
            },
          ],
        },
      ],
      related: ["free-vs-pro", "icloud-sync"],
    },

    /* ───────────────────────── Troubleshooting ───────────────────────── */
    {
      id: "improving-accuracy",
      title: "Why a word is wrong, and how to improve accuracy",
      description: "Practical ways to get cleaner transcripts and fix the words that slip through.",
      category: "troubleshooting",
      keywords: ["accuracy", "word error rate", "wrong word", "mistake", "improve", "noise", "vocabulary", "speech enhancement", "parakeet tdt"],
      updated: "2026-07-11",
      blocks: [
        {
          type: "paragraph",
          content:
            "Parakeet TDT is highly capable, but no speech recognizer is flawless. Names, acronyms, crosstalk, accents, and background noise are common reasons a word comes out wrong. Echo Chamber applies a targeted, speech-focused filter before transcription, and the complete enhanced pipeline has produced an internal observed word error rate of approximately 4.5% under tested conditions. Your result can vary with the recording.",
        },
        {
          type: "list",
          items: [
            "Record closer to the speaker and away from noisy machines.",
            "Use Echo Chamber's speech-focused enhancement to prepare the audio for transcription. It is deliberately different from generic normalization.",
            "Add specialized terms to Custom Vocabulary so they transcribe correctly.",
            "Edit any word inline, and the fix stays with the recording and its exports.",
            "For imported files, start with the clearest source audio you have.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Fix it once, name it once",
          content:
            "When a name keeps coming out wrong, adding it to Custom Vocabulary often solves it for every future recording, instead of correcting it each time.",
        },
      ],
      related: ["transcription-speed-accuracy", "edit-transcript", "import-audio-video"],
    },
    {
      id: "recording-recovery",
      title: "My recording was interrupted",
      description: "How Echo Chamber recovers a recording after a call, crash, or low battery.",
      category: "troubleshooting",
      keywords: ["recovery", "interrupted", "crash", "phone call", "battery", "lost recording"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Life interrupts. A phone call, a low battery, or an unexpected restart can cut a recording short. Echo Chamber is built to recover what was captured up to that point so your work is not lost.",
        },
        {
          type: "list",
          items: [
            "If a recording is interrupted, Echo Chamber saves what it captured rather than discarding it.",
            "When you reopen the app, it can offer to recover an interrupted recording.",
            "The recovered audio transcribes like any other recording.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Give long sessions a charge",
          content:
            "For long meetings, keep your device charged or plugged in. Recovery protects you if something goes wrong, but a full battery is the surest way to capture the whole thing.",
        },
        {
          type: "faq",
          items: [
            {
              q: "A recording disappeared, can I get it back?",
              a: "Reopen Echo Chamber and look for a recovery prompt. The app preserves interrupted recordings so they can be restored when you return.",
            },
          ],
        },
      ],
      related: ["recording-in-meetings", "offline-use", "storage-management"],
    },
    {
      id: "offline-use",
      title: "Using Echo Chamber offline",
      description: "What works without internet, and the one thing that needs it first.",
      category: "troubleshooting",
      keywords: ["offline", "no internet", "airplane mode", "model download", "no signal"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Echo Chamber is designed to work on a plane, in a basement, or anywhere without a signal. The only thing that needs the internet is the one-time speech model download.",
        },
        {
          type: "heading",
          level: 2,
          content: "Works fully offline",
        },
        {
          type: "list",
          items: [
            "Recording from any source.",
            "Transcription, once the model has downloaded.",
            "Full-text search across your transcripts.",
            "Editing, summaries, chat, and export.",
            "Translation, once a language pair has downloaded.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Download before you go",
          content:
            "Make one recording while you are on Wi-Fi to trigger the model download. After that, transcription keeps working offline forever.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Transcription is stuck while I am offline, why?",
              a: "If the speech model has not finished downloading yet, transcription waits. Connect to the internet once to complete the download, then offline use works as expected.",
            },
          ],
        },
      ],
      related: ["transcription-speed-accuracy", "translate-transcript", "what-stays-on-device"],
    },
    {
      id: "storage-management",
      title: "Managing storage",
      description: "See what your recordings use and free up space when you need to.",
      category: "troubleshooting",
      keywords: ["storage", "space", "delete", "manage", "size", "full"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Audio takes space, and over time a library of recordings adds up. Echo Chamber keeps everything on your device by default, so managing storage is straightforward and in your hands.",
        },
        {
          type: "list",
          items: [
            "Delete recordings you no longer need from your history.",
            "Use folders to spot large groups of recordings you can clear out.",
            "If iCloud sync is on, your recordings also count toward your iCloud storage.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Deleting is permanent on this device",
          content:
            "Removing a recording deletes its audio and transcript from this device. If you might want it later, export it first. With iCloud sync on, a delete can propagate to your other devices too.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Export before you delete",
          content:
            "If you want the words but not the audio, export the transcript to text or PDF first, then delete the recording to reclaim the space.",
        },
      ],
      related: ["folders-favorites", "export-formats", "icloud-sync"],
    },
  ],
};

export default echochamberKb;
