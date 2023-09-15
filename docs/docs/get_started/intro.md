---
sidebar_position: 1
title: Getting Started
---

# Intro


Synthiq, your second brain, utilizes the power of GenerativeAI to store and retrieve unstructured information. Think of it as Obsidian, but turbocharged with AI capabilities.

## Key Features 🎯

- **Universal Data Acceptance**: Synthiq can handle almost any type of data you throw at it. Text, images, code snippets, we've got you covered.
- **Generative AI**: Synthiq employs advanced AI to assist you in generating and retrieving information.
- **Fast and Efficient**: Designed with speed and efficiency at its core. Synthiq ensures rapid access to your data.
- **Secure**: Your data, your control. Always.
- **File Compatibility**: 
  - Text
  - Markdown
  - PDF
  - Powerpoint
  - Excel
  - Word
  - Audio
  - Video
- **Open Source**: Freedom is beautiful, so is Synthiq. Open source and free to use.

## Getting Started: 🚀

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

You can find everything on the documentation [here](https://brain.synthiq.app/)

### Prerequisites 📋

Before you proceed, ensure you have the following installed:

- Docker
- Docker Compose

Additionally, you'll need a [Supabase](https://supabase.com/) account for:

- Creating a new Supabase project
- Supabase Project API key
- Supabase Project URL

### Installation Steps 💽

- **Step 1**: Clone the repository using **one** of these commands:

  - If you don't have an SSH key set up:
  
  ```bash
  git clone https://github.com/charlpcronje/brain.cronje.me.git && cd brain.cronje.me
  ```
  - If you have an SSH key set up or want to add it ([guide here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account))
  
  ```bash
  git clone git@github.com:charlpcronje/brain.cronje.me.git && cd Synthiq
  ```

- **Step 2**: Copy the `.XXXXX_env` files

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

[Creation Script 1](https://github.com/charlpcronje/brain.cronje.me/scripts/tables.sql)

> _If you come from an old version of Synthiq, run the scripts in [migration script](https://github.com/charlpcronje/brain.cronje.me/scripts/) to migrate your data to the new version in the order of date_

- **Step 5**: Launch the app

```bash
docker compose -f docker-compose.yml up --build
```

- **Step 6**: Navigate to `localhost:3000` in your browser

- ** Step 7**: Want to contribute to the project? 

```
docker compose -f docker-compose.dev.yml up --build
```
## License 📄

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/charlpcronje/brain.cronje.me/LICENSE.md) file for details
