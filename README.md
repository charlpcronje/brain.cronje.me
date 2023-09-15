# Synthiq - Multi-Embedded AI Smart Storage

## Important

When installing this app and running the frontend and backend on different domain or sub-domains - Make sure to update the cors exceptions in

```sh
backend
|- middlewares
| |- cors.py
```

Update to look like

```py
// cors.py
origins = [
    "https://sub.domain.com",
    "https://sub.domain.com:5050",
    "https://sub.domain.com:5051",
    "https://sub.domain.com",
    "http://www.sub.domain.com",
    "*"
]
```



This application is like having Chat GPT but trained on whatever data you choose to train it on

## Key Features

- **Universal Data Acceptance**: Synthiq can handle almost any type of data you throw at it. Text, images, code snippets, we've got you covered.
- **Generative AI**: Synthiq employs advanced AI to assist you in generating and retrieving information.
- **Fast and Efficient**: Designed with speed and efficiency at its core. Synthiq ensures rapid access to your data.
- **Secure**: Your data, your control. Always.
- **OS Compatible**: Linux
- **File Compatibility**: 
  - Text
  - Markdown
  - PDF
  - Powerpoint
  - Csv
  - Word
  - Audio
  - Video

## Getting Started:

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you proceed, ensure you have the following installed:

- Docker
- Docker Compose

Additionally, you'll need a [Supabase](https://supabase.com/) account for:

- Creating a new Supabase project
- Supabase Project API key
- Supabase Project URL

### Installation Steps 

- **Step 1**: Clone the repository using **one** of these commands:

  - If you don't have an SSH key set up:
  
  ```bash
  mkdir synthiq && cd synthiq
  git clone https://github.com/charl-zestcode/synthiq.git .
  ```
  - If you have an SSH key set up or want to add it ([guide here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account))
  
  ```bash
  mkdir brain && cd brain
  git clone git@github.com:charl-zestcode/synthiq.git .
  ```

- **Step 2**: Use the install helper

You can use the install_helper.sh script to setup your env files

```bash
brew install gum # Windows (via Scoop) scoop install charm-gum

chmod +x install_helper.sh
./install_helper.sh
```

- **Step 2 - Bis**: Copy the `.XXXXX_env` files

```bash
cp .backend_env.example backend/.env
cp .frontend_env.example frontend/.env
```

- **Step 3**: Update the `backend/.env` and `frontend/.env` file 

> _Your `supabase_service_key` can be found in your Supabase dashboard under Project Settings -> API. Use the `anon` `public` key found in the `Project API keys` section._


> _Your  `JWT_SECRET_KEY`can be found in your supabase settings under Project Settings -> API -> JWT Settings -> JWT Secret_

> _To activate vertexAI with PaLM from GCP follow the instructions [here](https://python.langchain.com/en/latest/modules/models/llms/integrations/google_vertex_ai_palm.html) and update `backend/.env`- It is an advanced feature, please be expert in GCP before trying to use it_

- [ ] Change variables in `backend/.env`
- [ ] Change variables in `frontend/.env`

- **Step 4**: Run the following migration scripts on the Supabase database via the web interface (SQL Editor -> `New query`)

Use the `migration.sh` script to run the migration scripts

```bash
chmod +x migration.sh
./migration.sh
```

And choose either create_scripts if it's your first time or migrations if you are updating your database.


All the scripts can be found in the [scripts](scripts/) folde

- **Step 5**: Launch the app

```bash
docker compose -f docker-compose.yml up --build
```

- **Step 6**: Navigate to `localhost:3000` in your browser

- **Step 7**: Want to contribute to the project? 

```
docker compose -f docker-compose.dev.yml up --build
```
