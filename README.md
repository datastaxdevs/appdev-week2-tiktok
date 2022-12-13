<!--- STARTEXCLUDE --->
# Astra DB TikTok Clone Workshop

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://github.com/datastaxdevs/workshop-social-media-tiktok) 
[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)

⏲️ **Duration :** 2 hours

🎓 **Level** Beginner to Intermediate

A simple Tik-Tok clone running on Astra DB that leverages the Document API. You can see the Demo [here](https://fanciful-licorice-ea1437.netlify.app)

![image](./screenshot.jpg)

> [🔖 Accessing HANDS-ON](#-start-hands-on)

## 📋 Table of contents

- **HouseKeeping**
  - [1. Objectives](#1---objectives)
  - [2. Frequently asked questions](#2---frequently-asked-questions)
  - [3. Materials for the Session](#3---materials-for-the-session)
  - [4. Homework](#4---homework)
- **[LAB 1 - Getting Started with Database](#lab-1---getting-started-with-database)**
  - [1.1 - Create Astra Account](#11---getting-started-with-database)
  - [1.2 - Create Astra Database](#11---getting-started-with-database)
- **[LAB 2 - Document API](#lab-2---document-api)**
  - [2.1 - Using Document API](#21-using-document-api)
  - [2.2 - Create Astra Credentials](#22---create-astra-credentials)
- **[LAB 3 - IDE Setup](#lab-3---ide-setup)**  
  - [3.1 - Netlify site setup](#31---netlify-site-setup)
  - [3.2 - Launch GitPod](#32---launch-gitpod)
  - [3.3 - Astra CLI Setup](#33---astra-cli-setup)
  - [3.4 - Netlify CLI Setup](#34---netlify-cli-setup)
  - [3.5 - Launch the application](#35-launch-your-app)
- **[LAB 4 - Coding Against DB](#lab-4---coding-against-db)**
  - [4.1 - Document API](#41---document-api)
  - [4.2 - AstraJS Client](#42---astrajs-client)
  - [4.3 - Serverless configuration](#43---serverless-configuration)
  - [4.4 - React Component](#44---react-component)
- **[LAB 5 - Netlify Deployments](#lab-5---netlify-deployments)**
  - [5.1 - Connect Netlify to your site](#51---connect-netlify-to-your-site)
  - [5.2 - Deploy to production](#52---deploy-to-production)

## Housekeeping

### 1 - Objectives

- 🎯 How to build a frontend application using React Components

- 🎯 How to build a backend with Javascript without Express.
 
- 🎯 Learn how to use the @astrajs document API to quickly and easily interact with JSON documents

- 🎯 Learn what is gitpod and how you can use it in your projects

### 2 - Frequently asked questions

<p/>
<details>
<summary><b> 1️⃣ Can I run this workshop on my computer?</b></summary>
<hr>
<p>There is nothing preventing you from running the workshop on your own machine. If you do so, you will need the following:
<ol>
<li><b>git installed on your local system</b>
<li><b>[node 15 and npm 7 or later](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/)</b>
</ol>
</p>
In this readme, we try to provide instructions for local development as well - but keep in mind that the main focus is development on Gitpod, hence <strong>we can't guarantee live support</strong> about local development in order to keep on track with the schedule. However, we will do our best to give you the info you need to succeed.
</details>
<p/>
<details>
<summary><b> 2️⃣ What other prerequisites are there?</b></summary>
<hr>
<ul>
<li>You will need an <b>Github account</b>
<li>You will need an <b>Astra account</b> don't worry, we'll work through that in the workshop
<li>You will need enough <i>real estate</i> on screen, we will ask you to open a few windows and it would not fit on mobiles (tablets should be OK)

</ul>
</p>
</details>
<p/>
<details>
<summary><b> 3️⃣ Do I need to pay for anything for this workshop?</b></summary>
<hr>
<b>No.</b> All tools and services we provide here are FREE. FREE not only during the session but also after.
</details>
<p/>
<details>
<summary><b> 4️⃣ Will I get a certificate if I attend this workshop?</b></summary>
<hr>
Attending the session is not enough. You need to complete the homework detailed below and you will get a nice badge that you can share on linkedin or anywhere else *(open badge specification)*
</details>
<p/>

### 3 - Materials for the Session

It doesn't matter if you join our workshop live or you prefer to do at your own pace, we have you covered. In this repository, you'll find everything you need for this workshop:

- [Slide deck](./slides/slides.pdf)
- [Discord chat](https://bit.ly/cassandra-workshop)
- [Questions and Answers](https://community.datastax.com/)
- [What is JamStack?](jamstack.md)
- [Video tutorial with Ania Kubow](#video-tutorial-with-ania-kubow)

### 4 - Homework

<img src="tutorial/images/tiktok-badge.png?raw=true" width="200" align="right" />

Don't forget to complete your work and get your verified skill badge! Finish and submit your homework!

1. Complete the practice steps from this repository as described below. Take a screenshot and show us your deployed production TikTok clone up in Netlify.
2. (Optional extra credit) Watch the 2 hour Ania video [HERE](#video-tutorial-with-ania-kubow), build the app yourself, and show us the completed app.
3. Submit your homework [here](https://docs.google.com/forms/d/1BV5qJstc2Z8CV4XamolOLe5UjuDFoIunbMgpi4_iiys)

That's it, you are done! Expect an email next week!
  
# 🏁 Start Hands-on

## LAB 1 - Getting Started with Database

### 1.1 - Getting Started with Database

_**`ASTRA`** is the simplest way to run both Cassandra and Pulsar with zero operations at all - just push the button and get your clusters. No credit card required_

#### `✅.1.1.a`- Create Astra Account

> ↗️ _Right Click and select open as a new Tab..._
> 
> [![image](./tutorial/images/create_astra_db.png?raw=true)](https://astra.dev/yt-12-14)

#### `✅.1.1.b`- Create Astra Database

- On the home page spot one of the 3 [Create Database] button. They are all doing the same thing.

![image](./tutorial/images/db-create-button.png?raw=true)

- Use the following values when creating the database:

| #  | Field Name         | Field Value                     |
|----|--------------------|---------------------------------|
| 1  | **Database Name**    | `workshops`                     |
| 2  | **Keyspace Name**  | `tiktok_keyspace`               |
| 3  | **Cloud Provider** | `Google Cloud Plaform`          |
| 4  | **Area**   | `North America`                 |
| 5  | **Region** | `Moncks Corner, South Carolina` |

> 🖥️ `Output`
>
> ![image](./tutorial/images/db-create.png?raw=true)

- Now click `[Create Database button]` that became blue.
- The database is initializing, wait for the DB the move from `[PENDING]` to `[ACTIVE]`

> 🖥️ `Output`
>
> ![image](./tutorial/images/db-pending.png?raw=true)

- Click `[Go to Database]`

#### `✅.1.1.c`- Database was already existing

Here are some special situations you might encounter.

> ℹ️ **Hibernated Database:**
> 
> If the DB workshops already exists but is hibernated (you have not use it for a while):  
> - Click the `[Resume Database]` button on the top right-hand corner.
> 
> ![image](./tutorial/images/db-resume.png?raw=true) 

> ℹ️ **Database already exists, create keyspace `tiktok_keyspace`**
>
> If DB exists and is active but `tiktok_keyspace` keyspace is not present you need to create the keyspace.
>
> - Click button `[Add Keyspace]` on the database dashboard (bottom right-hand corner)
> - Provide the keyspace name `tiktok_keyspace`
> - Click button `[Save]`. The database will switch in maintenance mode for a few seconds, you are set.
> 
> ![image](./tutorial/images/db-create-keyspace.png?raw=true)

## LAB 2 - Document API

### 2.1 Using Document API

#### `✅.2.1.a`- Open Swagger User Interface

- (1) -  Select your database in the left panel (if needed)
- (2) -  Select the tab `Connect`
- (3) -  Select the `Document API` bloc
- (4) -  In `Launch Swagger UI` right-click on the link to open in a new TAB

![image](tutorial/images/access-swagger.png?raw=true)

- You should access this screen

> 🖥️ `Swagger UI`
>
> ![image](tutorial/images/show-swagger.png?raw=true)

#### `✅.2.1.b`- Lists Collections

- (1) - Select the resource `GET/v2/namespaces/{namespace-id}/collections`

![image](tutorial/images/list-collections-1.png?raw=true)

- (2) - Click the `[Try It Out]` button

![image](tutorial/images/list-collections-2.png?raw=true)

- (3) - Populate the form with the following values

|Field| Value|
|---|---|
|**X-Cassandra-Token**| _autopopulated_ |
|**namespace-id**| `tiktok_keyspace` |

- (4) - Click on `[Execute]` button

The output is empty (expected):

```json
[]
```

#### `✅.2.1.c`- Create Collection `story`

- (1) - Select the resource `POST/v2/namespaces/{namespace-id}/collections`

- (2) - Click the `[Try It Out]` button

- (3) - Populate the form with the following values

|Field| Value|
|---|---|
|**X-Cassandra-Token**| _autopopulated_ |
|**namespace-id**| `tiktok_keyspace` |
|**body**| `{"name":"story"}` |

- (4) - Click on `[Execute]` button

- (5) - You can see the output with `201` (created) code

![image](tutorial/images/create-collection-1.png?raw=true)

- (6) - Following the steps in previous section list collections again, you should get 

> 🖥️ `Output`
> ```json
> {
>  "data": [
>    {
>      "name": "story",
>      "upgradeAvailable": false
>    }
>  ]
>}
>```

#### `✅.2.1.d`- Create a first document

With a document oriented API there is no strict schema to comply with. As such let us decide what a story could look like.

- (1) - Select the resource `POST/v2/namespaces/{namespace-id}/collections/{collection-id}` _Create a new Document_

- (2) - Click the `[Try It Out]` button

- (3) - Populate the form with the following values

|Field| Value|
|---|---|
|**X-Cassandra-Token**| _autopopulated_ |
|**namespace-id**| `tiktok_keyspace` |
|**collection-id**| `story` |

**body:** 
```json
{
  "name": "Mo Farooq",
  "username": "mofarooq32",
  "avatar": "https://i.imgur.com/9KYq7VG.png",
  "is_followed": true,
  "video": "https://i.imgur.com/FTBP02Y.mp4",
  "caption": "These ducks are MEGA cute",
  "likes": 10,
  "comments": 2,
  "button_visible": true
}
```

- (4) - Click on `[Execute]` button

- (5) - Should get a HTTP `201` (Created) and the output. A unique identifier has been created for our document.

> 🖥️ `Output`
> ```json
> {
>  "documentId": "8aa07632-4ffb-46e5-9d78-b32e21847221"
> }
> ```

#### `✅.2.1.e`- Search documents in a collections

- (1) - Select the resource `GET /v2/namespaces/{namespace-id}/collections/{collection-id}` _Search documents in a collection_

- (2) - Click the `[Try It Out]` button

- (3) - Populate the form with the following values

|Field| Value|
|---|---|
|**X-Cassandra-Token**| _autopopulated_ |
|**namespace-id**| `tiktok_keyspace` |
|**collection-id**| `story` |
|**where**|  `{"username": {"$eq": "mofarooq32"}}` | 

- (4) - Click on `[Execute]` button

- (5) - You should get a result

> 🖥️ `Output`
> ```json
> {
>  "data": {
>    "8aa07632-4ffb-46e5-9d78-b32e21847221": {
>      "avatar": "https://i.imgur.com/9KYq7VG.png",
>      "button_visible": true,
>      "caption": "These ducks are MEGA cute",
>      "comments": 2,
>      "is_followed": true,
>      "likes": 10,
>      "name": "Mo Farooq",
>      "username": "mofarooq32",
>      "video": "https://i.imgur.com/FTBP02Y.mp4"
>    }
>  }
>}
>```
> 

#### `✅.2.1.f`- Update a document

- (1) - Select the resource `PUT /v2/namespaces/{namespace-id}/collections/{collection-id}/{document-id}` _Create or update a document with the provided document-id_

- (2) - Click the `[Try It Out]` button

- (3) - Populate the form with the following values

|Field| Value|
|---|---|
|**X-Cassandra-Token**| _autopopulated_ |
|**namespace-id**| `tiktok_keyspace` |
|**collection-id**| `story` |
|**document-id**|  document you got before here `8aa07632-4ffb-46e5-9d78-b32e21847221` | 

**body:** 
```json
{
  "name": "New Name",
  "username": "mofarooq32",
  "avatar": "https://i.imgur.com/9KYq7VG.png",
  "is_followed": true,
  "video": "https://i.imgur.com/FTBP02Y.mp4",
  "caption": "These ducks are MEGA cute",
  "likes": 10,
  "comments": 2,
  "button_visible": true
}
```

- (4) - Click on `[Execute]` button

- (5) - You should get an updated document

#### `✅.2.1.g`- Delete a document

- (1) - Select the resource `DELETE /v2/namespaces/{namespace-id}/collections/{collection-id}/{document-id}
` _ Delete a document_

- (3) - Populate the form with the following values

|Field| Value|
|---|---|
|**X-Cassandra-Token**| _autopopulated_ |
|**namespace-id**| `tiktok_keyspace` |
|**collection-id**| `story` |
|**document-id**|  document you got before here `8aa07632-4ffb-46e5-9d78-b32e21847221` | 

- (4) - Click on `[Execute]` button

- (5) - You should get a result code of `204`

> 🖥️ `Output`
> ```
> Code 204
> access-control-allow-credentials: true 
> access-control-allow-origin: https://50b31120-2303-4f45-a9dd-1cfb03e24ff1-us-east1.apps.astra.datastax.com 
> access-control-expose-headers: Date 
> date: Mon,12 Dec 2022 18:12:43 GMT 
> vary: Origin 
> ```

### 2.2 - Create Astra Credentials

When using swagger in the user interface, you are already authenticated against the API. When using a third party application you will need a token. 

#### `✅.2.2.a`- Create Astra Credentials

> ℹ️ _Skip this step is you already have a token. You can reuse the same token in our other workshops, too._

- (1) - Go the `Organization Settings`
- (2) - Go to `Token Management`
- (3) - Pick the role `Database Admnistrator` on the select box
- (4) - Click `Generate token`

![image](./tutorial/images/astra-create-token.gif?raw=true)

#### `✅.2.2.b`- Download Astra Credentials

- Click the **`Download CSV`** button. You are going to need these values here in a moment.

![image](./tutorial/images/astra-token.png?raw=true)

> **⚠️ Important**
> ```
> The instructor will show you on screen how to create a token 
> but will have to destroy to token immediately for security reasons.
> ```

Notice the clipboard icon at the end of each value.
- `Client ID:` We will *not* use this during this workshop
- `Client Secret:` We will *not* use this during this workshop
- `Token:` ***This is your token!*** We will use it as a api Key to interact with APIS

## LAB 3 - IDE Setup

### 3.1 - Netlify Site Setup

- (1) Click the button to deploy.

> ↗️ _Right Click and select open as a new Tab..._
>
> [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/datastaxdevs/workshop-astra-tik-tok)

- (2) - Authenticate with your github Account

- (3) - Select an account and the github repository where to clone

![image](./tutorial/images/deploy-to-netlify.gif?raw=true)
    
- (4) - In netlify user interface click on `Site deploy in progress` 

> <img src="tutorial/images/deploy-1.png" />

- (5) - Click the top deploy link to see the build process.

> <img src="tutorial/images/deploy-2.png" />

- (6) - Wait until the build complete `Netlify Build Complete`,  **When you see Pushing to repository** you're ready to move on.

> <img src="tutorial/images/deploy-3.png" />

- (7) Scroll up to the top and click on the site name (it'll be after {yourlogin}'s Team next to the Netlify button).

> <img src="tutorial/images/deploy-4.png" />

- (8) - Click on the `GitHub` in `Deploys from GitHub` to get back to your new repository.  Scroll to where you were in the README.

> <img src="tutorial/images/deploy-5.png" />

### 3.2 - Launch GitPod

#### `✅.3.2.a`- Open YOUR GITHUB REPOSITORY README 

- Click the button to launch the GitPod IDE from **YOUR** repository.

#### WAIT! Before moving on ensure you are working out of YOUR repository, not the datastaxdevs repository.

![correct notcorrect](tutorial/images/correct-not-correct.png?raw=true)

If you are still using the `datastaxdevs` repo please ensure to follow the previous step, [step3](#3-clone-your-github-repository) to get to your repo.

#### `✅.3.2.b`- Open Gitpod IDE

> Last time, be certain to click this when you MOVED TO YOUR REPOSITORY  (not `datastaxdevs`)
> 
> ↗️ _Right Click and select open as a new Tab..._
> 
> [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

#### `✅.3.2.c`- Validating your not using `datastaxdevs`

- From your GitPod terminal execute the following command

```bash
git remote -v
```

> 🖥️ `Output`
> ```
> origin  https://github.com/clun/workshop-astra-tik-tok.git (fetch)
> origin  https://github.com/clun/workshop-astra-tik-tok.git (push)
>If the result returned from the command displays **`datastaxdevs`** then you are not in the correct repository. If this is the case please [repeat step 3 above](#3-access-your-github-repository), otherwise just move on to the next step.
> ```
> 
### 3.3 - Astra CLI Setup

#### `✅.3.3.a`- Save your token

Locate an open terminal and enter the following command replacing `<YOUR_TOKEN>` by the one we created before starting with `AstraCS:..` it should be in the CSV we download before

```
astra setup -t <YOUR_TOKEN>
```

#### `✅.3.3.b`- Validate your configuration

- In the terminal panel in gitpod enter the following command:

```
astra user list
```

> 🖥️ `Output`
>
> ```
> gitpod /workspace/workshop-astra-tik-tok (master) $ astra user list
> +--------------------------------------+-----------------------------+---------------------+
> | User Id                              | User Email                  | Status              |
> +--------------------------------------+-----------------------------+---------------------+
> | b665658a-ae6a-4f30-a740-2342a7fb469c | cedrick.lunven@datastax.com | active              |
> +--------------------------------------+-----------------------------+---------------------+
> ```

#### `✅.3.3.c`- List Database to see  `workshops`

- In the terminal panel in gitpod enter the following command:

```
astra db list
```

> 🖥️ `Output`
>
> ```
> +---------------------+--------------------------------------+---------------------+----------------+
> | Name                | id                                   | Default Region      | Status         |
> +---------------------+--------------------------------------+---------------------+----------------+
> | mtg                 | dde308f5-a8b0-474d-afd6-81e5689e3e25 | eu-central-1        | ACTIVE         |
> | workshops           | 50b31120-2303-4f45-a9dd-1cfb03e24ff1 | us-east1            | ACTIVE         |
> +---------------------+--------------------------------------+---------------------+----------------+
> ```

#### `✅.3.3.d`- Get db details

- In the terminal panel in gitpod enter the following command:

```
astra db get workshops
```

> 🖥️ `Output`
>
> ```
> gitpod /workspace/workshop-astra-tik-tok (master) $ astra db get workshops
> +------------------------+-----------------------------------------+
> | Attribute              | Value                                   |
> +------------------------+-----------------------------------------+
> | Name                   | workshops                               |
> | id                     | 50b31120-2303-4f45-a9dd-1cfb03e24ff1    |
> | Status                 | ACTIVE                                  |
> | Default Cloud Provider | GCP                                     |
> | Default Region         | us-east1                                |
> | Default Keyspace       | tiktok_keyspace                         |
> | Creation Time          | 2022-12-12T11:14:58Z                    |
> |                        |                                         |
> | Keyspaces              | [0] tiktok_keyspace                     |
> |                        |                                         |
> |                        |                                         |
> | Regions                | [0] us-east1                            |
> |                        |                                         |
> +------------------------+-----------------------------------------+
> ```

#### `✅.3.3.e`- Create configuration file

 - Create `.env` file

```
astra db create-dotenv workshops -k tiktok_keyspace -r us-east1
```

- Show content

```
cat .env
```

> 🖥️ `Output`
>
> ```
> ASTRA_DB_APPLICATION_TOKEN="AstraCS:gfYSGwpaFNGmUZnZTvaCp......"
> ASTRA_DB_GRAPHQL_URL="https://.....-us-east1.apps.astra.datastax.com/api/graphql/tiktok_keyspace"
> ASTRA_DB_GRAPHQL_URL_ADMIN="https://.....-us-east1.apps.astra.datastax.com/api/graphql-admin"
> ASTRA_DB_GRAPHQL_URL_PLAYGROUND="https://.....-us-east1.apps.astra.datastax.com/api/playground"
> ASTRA_DB_GRAPHQL_URL_SCHEMA="https://.....-us-east1.apps.astra.datastax.com/api/graphql-schema"
> ASTRA_DB_ID="....."
> ASTRA_DB_KEYSPACE="tiktok_keyspace"
> ASTRA_DB_REGION="us-east1"
> ASTRA_DB_REST_URL="https://.....-us-east1.apps.astra.datastax.com/api/rest"
> ASTRA_DB_REST_URL_SWAGGER="https://.....-us-east1.apps.astra.datastax.com/api/rest/swagger-ui/"
> ASTRA_DB_SECURE_BUNDLE_PATH="/home/gitpod/.astra/scb/scb_....._us-east1.zip"
> ASTRA_DB_SECURE_BUNDLE_URL="secured_url"
> ASTRA_ORG_ID="f9460f14-9879-4ebe-83f2-48d3f3dce13c"
> ASTRA_ORG_NAME="cedrick.lunven@datastax.com"
> ASTRA_ORG_TOKEN="AstraCS:gfYSGwpaFNGmUZnZT....."
> ```

### 3.4 - Netlify CLI Setup

#### `✅.3.4.a`- Install the package 

In the `workshop-astra-tik-tok` directory run the following command to install the netlify-cli

```
npm install -g netlify-cli
```

> 🖥️ `Output`
>
> <img src="tutorial/images/netlify-install-cli.png?raw=true" />


### 3.5 Launch your app

#### `✅.3.5.a`- Start application

```
netlify dev
```

The application should automatically launch in the GitPod preview pane. You might see an error in the log for this firt launch, some data is inserted to the database.

> 🖥️ `Output`

```
◈ Netlify Dev ◈
◈ Ignored general context env var: LANG (defined in process)
◈ Injected .env file env var: ASTRA_DB_APPLICATION_TOKEN
◈ Injected .env file env var: ASTRA_DB_GRAPHQL_URL
◈ Injected .env file env var: ASTRA_DB_GRAPHQL_URL_ADMIN
◈ Injected .env file env var: ASTRA_DB_GRAPHQL_URL_PLAYGROUND
◈ Injected .env file env var: ASTRA_DB_GRAPHQL_URL_SCHEMA
◈ Injected .env file env var: ASTRA_DB_ID
◈ Injected .env file env var: ASTRA_DB_KEYSPACE
◈ Injected .env file env var: ASTRA_DB_REGION
◈ Injected .env file env var: ASTRA_DB_REST_URL
◈ Injected .env file env var: ASTRA_DB_REST_URL_SWAGGER
◈ Injected .env file env var: ASTRA_DB_SECURE_BUNDLE_PATH
◈ Injected .env file env var: ASTRA_DB_SECURE_BUNDLE_URL
◈ Injected .env file env var: ASTRA_ORG_ID
◈ Injected .env file env var: ASTRA_ORG_NAME
◈ Injected .env file env var: ASTRA_ORG_TOKEN
◈ Loaded function add http://localhost:8888/.netlify/functions/add.
◈ Loaded function addData http://localhost:8888/.netlify/functions/addData.
◈ Loaded function edit http://localhost:8888/.netlify/functions/edit.
◈ Loaded function posts http://localhost:8888/.netlify/functions/posts.
◈ Functions server is listening on 36661
◈ Setting up local development server

────────────────────────────────────────────────────────────────
  Netlify Build                                                 
────────────────────────────────────────────────────────────────

❯ Version
  @netlify/build 28.4.5

❯ Flags
  {}

❯ Current directory
  /workspace/workshop-astra-tik-tok

❯ Config file
  /workspace/workshop-astra-tik-tok/netlify.toml

❯ Context
  dev

────────────────────────────────────────────────────────────────
  1. Run command for local development                          
────────────────────────────────────────────────────────────────

◈ Starting Netlify Dev with Create React App

> tik-tok-stargate@0.1.0 start
> react-scripts start

ℹ ｢wds｣: Project is running at http://10.0.5.2/
ℹ ｢wds｣: webpack output is served from 
ℹ ｢wds｣: Content not from webpack is served from /workspace/workshop-astra-tik-tok/public
ℹ ｢wds｣: 404s will fallback to /
Starting the development server...

Compiled successfully!

You can now view tik-tok-stargate in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.5.2:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

✔ Waiting for framework port 3000. This can be configured using the 'targetPort' property in the netlify.toml

(dev.command completed in 9.4s)

   ┌─────────────────────────────────────────────────┐
   │                                                 │
   │   ◈ Server now ready on http://localhost:8888   │
   │                                                 │
   └─────────────────────────────────────────────────┘

⠦ Setting up the Edge Functions environment. This may take a couple of minutes.Request from ::ffff:192.168.9.75: POST /.netlify/functions/addData
⠧ Setting up the Edge Functions environment. This may take a couple of minutes.Request from ::ffff:192.168.9.75: GET /.netlify/functions/posts
⠙ Setting up the Edge Functions environment. This may take a couple of minutes.Response with status 200 in 341 ms.
⠦ Setting up the Edge Functions environment. This may take a couple of minutes.Response with status 200 in 1609 ms.
✔ Setting up the Edge Functions environment. This may take a couple of minutes.
```

![start](./tutorial/images/netlify-start.png?raw=true)

## LAB 4 - Coding Against DB

### 4.1 - Document API

Using same instruction as #2.1 execute the following operation with the Document Api using swagger UI.

#### `✅.4.1.a`- Reopen Swagger

Now that we have locally deployed our TikTok app, let's take a look at this in our database. Head to your [Astra DB dashboard](astra.datastax.com) and click the `Connect` button next to your database ('workshops').

![db_connect](./tutorial/images/db_connect.png?raw=true)

Then scroll down to the section called 'Launching SwaggerUI' and click the link. We'll be using SwaggerUI to make api calls to our database and see the results.

![swaggerui_link](./tutorial/images/swaggerui_link.png?raw=true)

#### `✅.4.1.a`- List Collections

Open up the first section labelled "List collections in namespace" and click the button "Try it out".

![swaggerui_link](./tutorial/images/swaggerui_listcollections_02.png?raw=true)

- Execture with `[Execute]` button

> 🖥️ `Output`
>
> ```json
> {
>   "data": [
>     {
>       "name": "story",
>       "upgradeAvailable": false
>     },
>     {
>       "name": "tktkposts",
>       "upgradeAvailable": false
>     }
>   ]
> }
> ```

#### `✅.4.1.b`- List Documents of `tktkposts`

- Open resource `GET /v2/namespaces/{namespace-id}/collections/{collection-id}` _Search documents in a collection_

![swaggerui_link](./tutorial/images/swaggerui_searchdocuments_02.png?raw=true)

- Populate the form with the following values

|Field| Value|
|---|---|
|**X-Cassandra-Token**| _autopopulated_ |
|**namespace-id**| `tiktok_keyspace` |
|**collection-id**| `tktkposts` |

Let the rest of the fields untouched. You can see that every query is paged and default page size is `3`.And we see all of the documents stored in our database.

![swaggerui_link](./tutorial/images/swaggerui_searchdocuments_04.png?raw=true)

> 🖥️ `Output`
>
> ```json
> {
>   "pageState": "ATIA8H_____wf____w==",
>   "data": {
>     "0": {
>       "avatar": "https://i.imgur.com/jONHmE5.png",
>       "button_visible": true,
>       "caption": "Art is for everyone",
>       "comments": 20,
>       "id": 0,
>       "is_followed": true,
>       "likes": 231,
>       "name": "Lana Del Mont",
>       "timestamp": "2020-09-10T09:08:31.020Z",
>       "username": "lana_del_away",
>       "video": "https://i.imgur.com/H9UX0Jm.mp4"
>     },
>     "2": {
>       "avatar": "https://i.imgur.com/eX3hkoc.png",
>       "button_visible": true,
>       "caption": "Happiest of Birthdays my Angel",
>       "comments": 4,
>       "id": 2,
>       "is_followed": true,
>       "likes": 2,
>       "name": "Angela Lee",
>       "timestamp": "2020-04-10T09:08:31.020Z",
>       "username": "angiecakes",
>       "video": "https://i.imgur.com/al6MLay.mp4"
>     },
>     "3": {
>       "avatar": "https://i.imgur.com/IigY4Hm.png",
>       "button_visible": true,
>       "caption": "The new normal",
>       "comments": 2,
>       "id": 3,
>       "is_followed": false,
>       "likes": 10,
>       "name": "Nina Xen",
>       "timestamp": "2020-05-10T09:08:31.020Z",
>       "username": "nina_lina",
>       "video": "https://i.imgur.com/Kzvbeup.mp4"
>     }
>   }
> }
> ```

### 4.2 - AstraJS Client

#### `✅.4.2.1` - Initialization 

We are using the `@astrajs/collections` library to make the connection using the Document API. To do so, we start by creating a `client`. 

(See: [functions/utils/astraClient.js](./functions/utils/astraClient.js))

```javascript
const { createClient } = require("@astrajs/collections");

let astraClient = null;

const getAstraClient = async () => {
  if (astraClient === null) {
    astraClient = await createClient(
      {
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
      },
      30000
    );
  }
  return astraClient;
};
```

Here we are defining a new method called `getAstraClient` that uses the `createClient` method from our `astrajs` library to create a connection to our database. We then provide it the needed database credentials we added to our environment variables earlier;

- `ASTRA_DB_ID` _(unique identifier for a db)_
- `ASTRA_DB_REGION` _(cloud region, here `us-east1`)_
- `ASTRA_DB_APPLICATION_TOKEN` _(credentials)_

Then we return the `astraClient` we can then use in our API calls.

We also need to create a document collection to store our data.

``` javascript
const getCollection = async () => {
  const documentClient = await getAstraClient();
  return documentClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection("tktkposts");
};
```

In this method, we are using our previously created `getAstraClient` method to initialize the database connection, and then create a collection in the keyspace we defined in our environment variables;

- `ASTRA_DB_KEYSPACE` (for us `tiktok_keyspace`)

We will call the collection **tktkposts**.

#### `✅.4.2.b` - Create document with `@astrajs/collections`  

For our TikTok app, we will not be dealing with the Document API directly. Instead `@astrajs/collections` does that for us, and provides us with easy to use methods.

If you want a comprehensive list of the capabilities of `@astrajs/collections`, check out this documentation: [AstraJS Collections](https://docs.datastax.com/en/astra/docs/astra-collection-client.html)

The `create` method is used when we want to add documents to our collection. For example, in **`functions/add.js`** we get our collection from the database using our `getCollection` method.

``` javascript
const users = await getCollection();
```

Then we use the `create` method to create a document, providing the _id_ and _body_ of the document.

``` javascript
try {
    const user = await users.create(id, event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
}
```

#### `✅.4.2.c` - Update document with `@astrajs/collections`  

The `update` method is used to update portions of existing documents. Take a look at **`functions/edit.js`**. Again we use `getCollection()` to get our collection from the database, then we use the `update` method, provide it with an id for the document we want to edit, and the data that needs updating.

``` javascript
try {
    users.update(body.userId, body.data);
    return {
      statusCode: 200,
    };
  }
```

#### `✅.4.2.d` - Search document with `@astrajs/collections`  

And finally the `find` method is used to retrieve documents. In **`functions/posts.js`** we are again using `getCollections()` and using the `find` method on the result.

``` javascript
try {
    const res = await users.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(Object.keys(res).map((i) => res[i])),
    };
  }
```

In this case, we are passing an empty object to retrieve all documents. In a real-world scenario, we would pass a qualifier to get only the documents relevant to a specific user.

### 4.3 - Serverless configuration

Take a look at `netlify.toml`.

```init
[build]
command = "npm run build"
functions = "functions"
publish = "build"
```

This is the configuration file we include in our codebase that tells Netlify how to build our app. In our case it's really simple. First we give the `build` command to build our app: `npm run build`. Then we tell Netlify where to find our serverless functions, and finally where to find the resulting app after build.

So Netlify will create endpoints for our serverless functions based on the files it finds in our functions folder.

For example, we have a function called `posts.js`. As we saw before, this function returns all of the current posts in our database. Netlify will see that file in our `functions` directory and dynamically create an endpoint at [/.netlify/functions/posts](./functions/posts.js)

```javascript
// Declaring 'getCollection'
const { getCollection } = require("./utils/astraClient");

// Function exported as a REST API
exports.handler = async function () {
  // Accessing the collection tkt
  const tktkpostsCollection = await getCollection();
  try {
    // Access POST
    const res = await tktkpostsCollection.find({});
    return {
      // Return POSTS in the body
      statusCode: 200,
      body: JSON.stringify(Object.keys(res).map((i) => res[i])),
      
[...]
```

✅ We can see these functions in our Netlify account.
- Go to netlify.com and sign in.
- Select your site from the list.
- Select the "Functions" tab at the top.

![netlify_functions](./tutorial/images/netlify_functions_tab.gif)

From here we can see all our functions and get direct links as well as watch real time logs.

We can also see this in action by manually going to the endpoint on our Netlify site: `[your-site-url]/.netlify/functions/posts`.

![netlify_endpoint](./tutorial/images/netlify_endpoint_nav.gif)

### 4.4 - React Component

The front end leverages on React. The code is organized in pages and each pages import a list of components.

#### `✅.4.4.a` - React Router

There are 2 pages `updload` and `Home` and describe in [index.js](./src/index.js)

```xml
<Switch>
  <Route path= "/upload" component={Upload}/>
  <Route path= "/" component={Home}/>
</Switch>
```

![netlify_endpoint](./tutorial/images/pages-all.png)

#### `✅.4.4.b` - Upload Page

Access through the `cloud` icon of directly on `/upload` it is a static HTML form to create new posts.

![netlify_endpoint](./tutorial/images/page-upload.png)

As you can see [Upload.js](./src/pages/Upload.js) there are no component used.

```html
<form onSubmit={handleSubmit}>
    <div className='section'>
<!-- rest is omitted --> 
```

- Function to post to backend

```javascript
 const handleSubmit = async (e) => {
 e.preventDefault()
 // Create payload
 const data =  {
        id: id,
        name: name,
        username: username,
        avatar: avatar,
        is_followed: false,
        video: video,
        caption: caption,
        likes: 0,
        comments: 0,
        timestamp: timestamp,
        button_visible: false  
  }
  // Post Payload to Netlify functions
  axios.post('/.netlify/functions/add', data)
       .then((response) => { console.log(response)})
       .catch((err) => { console.error(err)})
```

#### `✅.4.4.b` - Home Page

The page load data coming from the collection in Astra and push the information to multiple components that renders sections of the page.

![netlify_endpoint](./tutorial/images/react-components.png)

More on [Home.js](./src/pages/Home.js).

## LAB 5 - Netlify Deployments

### 5.1 - Connect Netlify to your site

Execute each of the commands below to link your code to your Netlify deployment.
  * First thing, we'll need to **STOP** the `netlify dev` command we issued a moment ago. In the terminal where you executed the netlify command issue a `CTRL-C` (control key + the C key) in order to stop the process.
  * Then continue with the following commands
  * This will pop up a browser to authenticate with netlify

#### `✅.5.1.a` - Authenticate in Netlify

```
netlify login
```

_Note, when using GitPod the preview pane will not display this properly. You must click the "open in a new window" button in the very top right of the preview pane._

![swaggerui_link](./tutorial/images/netlify_login.png)

> 🖥️ `Output`
> 
> ```bash
> Logging into your Netlify account...
> Opening https://app.netlify.com/authorize?response_type=ticket&ticket=774701161c326912e718b3a86096f375
> You are now logged into your Netlify account!
> Run netlify status for account details
> To see all available commands run: netlify help
> ```

- Link your workspace to the associated site with the command Below

```
netlify link
```

- It will display a MENU where you can move UP and DOWN with arrows. Pick first choice

```
> Use current git remote origin (https://github ...`
```

![swaggerui_link](./tutorial/images/netlify-link.png?raw=true)

> 🖥️ `Output`
> ```bash
> netlify link will connect this folder to a site on Netlify
> ? How do you want to link this folder to a site? Use current git remote origin (https://github.com/clun/workshop-astra-tik-tok)
> Looking for sites connected to 'https://github.com/clun/workshop-astra-tik-tok'...
> Directory Linked
> Admin url: https://app.netlify.com/sites/fanciful-licorice-ea1437
> Site url:  https://fanciful-licorice-ea1437.netlify.app
> You can now run other `netlify` cli commands in this directory
>```

#### `✅.5.1.b` - Import configuration in site

* This will take the `.env` file created by astra-setup and upload it to netlify

```
netlify env:import .env
```

### 5.2 - Deploy to production

Now that you've hooked everything up, time to deploy to production.

* Run

```
netlify build
```


> 🖥️ `Output`
> ```
> ────────────────────────────────────────────────────────────────
>   Netlify Build                                                 
> ────────────────────────────────────────────────────────────────
>
> ❯ Version
>   @netlify/build 28.4.5
>
> ❯ Flags
>   dry: false
>   offline: false
>
> ❯ Current directory
>   /workspace/workshop-astra-tik-tok
>
> ❯ Config file
>   /workspace/workshop-astra-tik-tok/netlify.toml
>
> ❯ Context
>   production
>
> ────────────────────────────────────────────────────────────────
>   1. build.command from netlify.toml                            
> ────────────────────────────────────────────────────────────────
>
> $ npm run build
> 
> tik-tok-stargate@0.1.0 build
> react-scripts build
>
> Creating an optimized production build...
> Compiled successfully.
>
> File sizes after gzip:
>
>   616.87 KB  build/static/js/2.82b8325c.chunk.js
>   2.32 KB    build/static/js/main.fd7c93f3.chunk.js
>   966 B      build/static/css/main.9d8c5499.chunk.css
>   780 B      build/static/js/runtime-main.f09b770f.js
>
> The project was built assuming it is hosted at /.
> You can control this with the homepage field in your package.json.
> 
> The build folder is ready to be deployed.
> You may serve it with a static server:
>
>  npm install -g serve
>  serve -s build
>
> Find out more about deployment here:
>
>   https://cra.link/deployment
>
>
> (build.command completed in 35.1s)
>
> ────────────────────────────────────────────────────────────────
>   2. Functions bundling                                         
> ────────────────────────────────────────────────────────────────
>
> Packaging Functions from functions directory:
>  - add.js
>  - addData.js
>  - edit.js
>  - posts.js
>
>
> (Functions bundling completed in 6.1s)
>
> ────────────────────────────────────────────────────────────────
>   Netlify Build Complete                                        
> ────────────────────────────────────────────────────────────────
>
> (Netlify Build completed in 41.3s)
> ```

- Then run

```
netlify deploy --prod
```

> 🖥️ `Output`
> ```
> Deploy path:        /workspace/workshop-astra-tik-tok/build
> Functions path:     /workspace/workshop-astra-tik-tok/functions
> Configuration path: /workspace/workshop-astra-tik-tok/netlify.toml
> Deploying to main site URL...
> ✔ Deploying functions from cache (use --skip-functions-cache to override)
> ✔ Finished hashing 17 files and 4 functions
> ✔ CDN requesting 0 files and 4 functions
> ✔ Finished uploading 4 assets
> ✔ Deploy is live!
>
> Logs:              https://app.netlify.com/sites/fanciful-licorice-ea1437/deploys/63974804721fc334dc247455
> Unique Deploy URL: https://63974804721fc334dc247455--fanciful-licorice-ea1437.netlify.app
> Website URL:       https://fanciful-licorice-ea1437.netlify.app
> gitpod /workspace/workshop-astra-tik-tok (master) $ 
```

- Then finally run

```
netlify open:site
```

> 🖥️ `Output`
> ```
> Opening "fanciful-licorice-ea1437" site url:
> https://fanciful-licorice-ea1437.netlify.app
> ```

## Extra Resources

#### Video tutorial with Ania Kubow

Thank you to our wonderful friend Ania Kubow for producing the TikTok clone. If you are not aware of Ania and love learning about coding you should absolutely check out her YouTube channel listed below.

While we focused on getting you up and running to production with Astra DB and Netlify, Ania's video will dig into more details on the app itself. Check it out to dig in more.

#### Running Astra DB Tik-Tok
We're using Create-React-App and the Astra DB Document API to create a simple Tik-Tok clone.  Follow along in this video tutorial: [https://youtu.be/IATOicvih5A](https://youtu.be/IATOicvih5A).

Follow the instructions below to get started.

#### If you did like this video, please hit the Like and Subscribe button so I know to make more!
- Twitter: https://twitter.com/ania_kubow
- YouTube: https://youtube.com/aniakubow
- Instagram: https://instagram.com/aniakubow
