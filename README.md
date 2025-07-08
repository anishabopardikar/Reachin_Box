**📬 Reachinbox: AI-Powered Email Intelligence Platform**

Reachinbox is an intelligent full-stack email system that fetches, categorizes, and manages your inbox using Groq's LLaMA-3 model. It supports real-time IMAP syncing, Elasticsearch-based search, AI-generated suggested replies, and a modern frontend interface.

**🌐 Live Demo**
When running locally, the frontend is accessible at:
http://localhost:3000/emails

**✨ Key Features**
🔁 Real-Time IMAP Syncing using IDLE (no cron jobs!)
🧠 AI-Powered Email Categorization with Groq's LLaMA-3
🤖 AI-Suggested Replies using LLM
🔍 Full-text Search via Elasticsearch
📨 Slack + Webhook Notifications for Interested leads
✅ Duplicate-safe indexing using UID-based hashes
🧭 Filters: By Account, AI Label, Sort Order
🧑‍💻 Frontend: Modern responsive UI with modals and reply generation

**🛠 Requirements**
Node.js v18+
Docker (for Elasticsearch)
Gmail accounts with IMAP and app passwords
Groq API key (get from https://console.groq.com)
Optional: Slack webhook for real-time alerts

**⚙️ Setup Instructions**
🧱 1. Start Elasticsearch (Docker)
docker run -p 9200:9200 \
  -e "discovery.type=single-node" \
  -e "xpack.security.enabled=false" \
  elasticsearch:8.11.1
Verify at: http://localhost:9200

🧠 2. Backend Setup (email-onebox)
cd email-onebox
cp .env.example .env
npm install
npm run dev
Update .env:

PORT=5070

GROQ_API_KEY=your_groq_api_key
ELASTIC_NODE=http://localhost:9200
SLACK_WEBHOOK_URL=https://hooks.slack.com/...

ACCOUNT_1_HOST=imap.gmail.com
ACCOUNT_1_PORT=993
ACCOUNT_1_TLS=true
ACCOUNT_1_USER=youremail@gmail.com
ACCOUNT_1_PASS=your_app_password

ACCOUNT_2_HOST=imap.gmail.com
ACCOUNT_2_PORT=993
ACCOUNT_2_TLS=true
ACCOUNT_2_USER=yourotheremail@gmail.com
ACCOUNT_2_PASS=your_app_password
💻 3. Frontend Setup (reachinbox-frontend)
cd reachinbox-frontend
cp .env.local.example .env.local
npm install
npm run dev
.env.local:

NEXT_PUBLIC_API_BASE_URL=http://localhost:5070
Frontend will run at: http://localhost:3000/emails

**📡 API Endpoints**
GET /emails?q=* – Search emails
POST /suggest-reply – Generate reply from body
DELETE /emails – Delete all indexed emails
🔍 AI Email Categories
Emails are labeled into:

Interested
Meeting Booked
Not Interested
Spam
Out of Office
Unlabelled
✅ Additional Notes
Real-time fetch is handled using client.idle() with ImapFlow
Duplicate emails are avoided using sha256(account:folder:uid)
Emails are sorted from newest to oldest in the UI
All emails are indexed into Elasticsearch for fast querying
🧹 Dev Utilities
Clear all emails (locally):

curl -X DELETE http://localhost:5070/emails
Ping backend:

curl http://localhost:5070/ping


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Frontend UI served at: http://localhost:3000/emails
