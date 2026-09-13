<h1 align="center">Island Of Taniti - D479 WGU</h1>

<h1 align="center">Project Set Up Pipeline</h1>

<h5 align="center">Workflow: Checkout Develop -> Commit & Push ->Checkout Main -> Merge Develop, Commit & Push -> Checkout gh-pages/dist -> Merge Main, Commit & Push custom Dist commands</h5>

- **Project Scope**
    - [x] Create a **timeline** for how long it would take to deliver parts of the project (research, personas, wireframes, prototypes, and minimum viable product / MVP)
      - At this step we can see if we can incorporate a current **brand Identity** or create a new one from scratch.
    - [x] Create a **reference/inspo board.** Include researched competitors, design systems that make sense for the brand, etc.
    - [x] Create **personas** for the target audiences that will use the product or need to be aware of the brand.
    - [x] We can then take the **writen content** and images/assets we have (Or brain storm what important, useful or fun information would be best to include in the design), and the personas we wrote and incorporate them into the next part of the pipeline.
      - [x] Decide if we are going to make different pages for different parts of the content (Home [Persona1] [Persona2] FAQ [Product Explanation] [Product Display/Showcase]) These could all be different pages providing more information to things in the landing page. Or a single page application approach.

- **Make a Design**
    - [x] Create a simple site map (Where do we start, where can we go?). This is were we can visualize a multipage application vs a single page one (re-render or anchored). 
    - [x] Make a quick sketch in Excalidraw, Canva, Photoshop or figma using simple shapes (Take containers and sections into account).
    - [x] Make a **low fidelity wireframe** that gives us an guide of the layout, images and possible text layout and sizes.
    - [x] Refine the low fidelity wireframe by creating a **mid fidelity wireframe** that integrates custom components/cards and designated sections (hero/landing page, social proof, reviews, cards/collections, explainers, call to actions).
    - [x] Create a **Design System** and then polish the design into a **High Fidelity wireframe.** We pick the colors using the 60% 30% 10% rule and take contrast into account for accents impacting pseudo elements (link, hover, visited, etc). Semantic elements can be implemented in notifications.
      - We iterate positioning, typography, negative space, composition, depth/parralax/layers
    - [x] Create an interactive prototype using figma (which requires creating master components, instances of master, variants for pseudo interactions, and navigational logic when clicking as well as possible animations)


- [x] **Set up Boilerplate & Scaffolding (Git Clone or push existing code "git init")**
    <details>
      <summary><strong>If we Git Clone (Fresh repo for a new project)</strong><span style="color: green; font-weight:bold;"> Click To Expand!</span></summary>
    <ul>
    <li>we can git clone the repo into our desired folder (this makes a new folder and git inits the repo code)</li>
    <li>It doesn't need any particular set up outside of the gh-pages branch.</li>
- [ ] **Create The Inital Project Files With a Bundler (VITE)**
    - [ ] run the command "npm create vite@latest ./" to make all the files in the git folder we are working on (or run npm install to download the needed files from our package.json file)
      - We can choose to create a Javascript or React project. I'm currently creating a vanilla JavaScript project and down the line converting sections and elements into React components with JSX.
      - If you want to be more direct you can use:
        - "npm create vite@latest my-js-app -- --template vanilla"
        - "npm create vite@latest my-react-app -- --template react"
        - "npm create vite@latest my-react-ts-app -- --template react-ts"
    </ul>
    </details>

    <hr style="margin: 4px;">

    <details>
      <summary><strong>If we Git Init (uploading WIP or old project into a new repo)</strong><span style="color: green; font-weight:bold;"> Click To Expand!</span></summary>
    <ul>
    <li>We can git init (to start git versioning on that specific folder)</li>
    <li>We need to add a .gitignore file and add the common files and folders</li>
    <li>We can create it using the "touch .gitignore command" (touch filename.filetype[index, css, jsx, etc])</li>
    
    ```text
    # logs
    logs
    *.log
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    pnpm-debug.log*
    lerna-debug.log*

    node_modules
    dist
    dist-ssr
    *.local

    # Editor directories and files
    .vscode/*
    !.vscode/extensions.json
    .idea
    .DS_Store
    *.suo
    *.ntvs*
    *.njsproj
    *.sln
    *.sw?
    ```
    <li>git add . or * (To start staging files for the repo) And if we accidentally added something that is not supposed to go to the repo we can use "git rm -r --cached ." or delete the .git file if we put it in the wrong place</li>
    <li>git commit -m "Initial commit"</li>
    <li>git branch -M main (this changes the default name of the branch "Master" to main)</li>
    <li>git remote add origin git@github.com:username/repository.git (git repo link)</li>
    <li>At this point we are going to get an error because we haven't fethed the remote commits. So we need to use the command <strong>"git pull --rebase origin main"</strong></li>
    <li>if there are files out of sync we can run <strong>"git fetch --all" & "git reset --hard origin/main"</strong></li>
    <li>And sync repos with "git pull origin main"</li>
    <li>To remove any deleted files we can use "rm --cache filename.eg" (This is only needed if the readMe file glitches)</li>
    <li>To confirm the commit history we can use the command <strong>"git log > commit_history.txt"</strong> and check out the history (If this doesn't work we can force a commit but it will undo the git history which is not good practice)</li>
    <li><strong>git push -u origin main</strong> (the -u links the local repo to the remote when pushing changes)</li>
    </ul>
    </details>
- To make the Vite server easier to use and avoid the vscode browser from opening we can add the open chrome setting to the node package script. (These are useful if we installed vite by itself and we have to add the scripts by hand so we don't rely on npx)
    ```text
    "scripts": {
    "dev": "vite --open chrome",
    "build": "vite build",
    "preview": "vite preview"
  },
    ```
- [x] **Set Up Develop Branch So We Can Make Changes Without Worrying About Main**
  - We can use git branch develop
  - Then use git checkout develop to switch over to that branch
  - If we want to push any changes to this branch for the first time then we need to use **"git push --set-upstream origin develop"**
  - When making changes we want to merge the develop branch to main and then also to gh-pages
    - Using the general **git** **workflow**:
      - git status
      - git add |Files...| or * (all)
      - git status again to double check staging
      - git commit -m "A message that describes the changes/additions"
      - git push to the remote repo 

- [x] **Set Up gh-pages Branch To Isolate The dist Files**
    - Create the gh-pages branch and go to it using **git branch && git checkout gh-pages**
    - After making sure that the gh-pages branch is up to date we can run the bundler to get a dist folder
    - which if npm installed correctly should be "npm run build" giving all our files default names according to the vite config.
    - You can always preview what the dist folder looks like using the vite command "npm run preview"
    - If we don't have a Vite config file we can create one using **"touch vite.config.js"**
    - Inside we add:
    ```text
    import { defineConfig } from 'vite'

    // Replace with the exact repository name from github link.. Only the forward slashes and repo name
    export default defineConfig({
    base: '/your-github-repo-name/',
    // ... rest of your config
    })
    ```

    - Then we can use **git add dist -f && git commit -m "Github pages commit"**
    - Then use **git subtree push --prefix dist origin gh-pages** (Push only the commits from the dist folder into the branch)
      - If we previously merged to main and then merged main to gh-pages then we might get a nano/vim terminal to manually submit the commit message. We can write one and then save and quit using **":wq"** or cancel the commit using **"git merge --abort"**
      - If the one above doesn't work then we kind of need to reset the gh-pages branch using "git push origin `git subtree split --prefix dist main`:gh-pages --force"
      - or "git push origin --delete gh-pages" (to delete the branch) then "git subtree push --prefix dist origin gh-pages" again to rebuild it
    - git checkout develop (go back to our development environment)

- **Analyzing The Figma Designs & Building The Project:**
    - [x] Download all asset images used in the design.
      - Remember that the currently checked out branch will have their files displayed in the explorer folder. So we can add images to the develop branch in the src/assets if we want to optimize them (this is a little bit of a hurdle) because we need to import them properly for bundling (or we can just create a public folder on the vite project root and then put the assets folder there and link images from **src="/assets/picture.png"**). And finally Stage them and commit them. Because if we checkout before doing so the files won't transfer over and it could cause glitches.
    - [x] Collect all of the design system colors, spacing, font families & sizes, semantic colors/toasts, badges, icons and if possible add them to the Read Me so It's easier to copy and pase in the same location. (the snip tool "SHIFT + WINDOWS KEY + S" has a built in color picker to get the hexadecimal value of a color on screen if we don't have a value for a color)
    - [x] Reset the CSS to make the design cross compatible between browsers and also easier to work with and also include any variables if needed
      - Reset The CSS default properties with "box-sizing: border-box;", and adding "margin: 0;" & "padding: 0;"
      - Make Variables of anything that will be re-used in the design, custom uility classes (think tailwind) and or semantic rules and sizes we are going to use for colors, fonts, etc. 
    - [x] Create the HTML components to outline the nested elements and build up the sections according to the design. (nav, containers, sections, forms, cards, & footer) 
      - We can work on our website with hot reload using vite running the command "npm run dev"
      - We can bundle our website with the vite command "npm run build" (Remember to update vite config)
      - And preview the bundled website with "npm run preview"
      - We can use the web dev tools F12 in chrome to find HTML elements faster and shift values around with the visualizing tools "styles" & "computed". You can find a value and change it using the up and down arrows and holding alt to shift by 1 or .1,  shift to move by 10's and control to move by 100's.
        - Another gotcha is that the chrome web dev preview sometimes looks like it has a broken gap but when you load the website on the actual devices it doesn't show up.
      - [x] Break down a design into layout sections and components. (we can iterate faster in sites like codepen to not see as much clutter code)
      - [x] Organize and comment out the  site sections and components in HTML
      - [x] Plan and execute how CSS FlexBox and CSS Grid will take up space in the containers we defined and how we can position them to fit the design. (we can visualize the layout by using temporary boxes and lorem ipsum text that take out the space of the HTML elements).
      - [x] Give them the proper properties (color, texture, font, alignment, borders/corners, spacing, background, opacity, shadows, Form inputs and semantic colors, images, links buttons, etc).
    - [x] Fill the HTML layout sections & components with the downloaded images, brand assets, icons, etc.
    - [ ] Make media queries for the average breaking point screen sizes (Min-width: >= after this use this CSS & max-width: <= before this and smaller use this CSS)
      - [ ] Create a new CSS file for each screen to be better organized and link it in the main JS file so we can bundle and ship correctly.
- **END**
---
 
<h1 align="center">Design System</h1>

- **Colors (From Brightest to Darkest):**
  - Neutral Scale (Black and White):
    - Tone Value 1 `#f0f1f1` <span style="color:#f0f1f1">Example</span>.
    - Tone Value 2 `#d5d5d8` <span style="color:#d5d5d8">Example</span>.
    - Tone Value 3 `#adaeb3` <span style="color:#adaeb3">Example</span>.
    - Tone Value 4 `#87888f` <span style="color:#87888f">Example</span>.
    - Tone Value 5 `#63646c` <span style="color:#63646c">Example</span>.
    - Tone Value 6 `#424248` <span style="color:#424248">Example</span>.
    - Tone Value 7 `#232327` <span style="color:#232327">Example</span>.
  
  - Brand Colors:
    - Main Brand color 1 `#eef0fd` <span style="color:#eef0fd">Example</span>.
    - Main Brand color 2 `#cdd4f9` <span style="color:#cdd4f9">Example</span>.
    - Main Brand color 3 `#9aaaf4` <span style="color:#9aaaf4">Example</span>.
    - Main Brand color 4 `#6182EE` <span style="color:#6182EE">Example</span>.
    - Main Brand color 5 `#2f5dcc` <span style="color:#2f5dcc">Example</span>.
    - Main Brand color 6 `#1d3d8c` <span style="color:#1d3d8c">Example</span>.
    - Main Brand color 7 `#0c2050` <span style="color:#0c2050">Example</span>.

    - Complementary Contrast to Main Color 1 `#fcf0d4` <span style="color:#fcf0d4">Example</span>.
    - Complementary Contrast to Main Color 2 `#EECD61` <span style="color:#EECD61">Example</span>.
    - Complementary Contrast to Main Color 3 `#c2a64d` <span style="color:#c2a64d">Example</span>.
    - Complementary Contrast to Main Color 4 `#97813b` <span style="color:#97813b">Example</span>.
    - Complementary Contrast to Main Color 5 `#6e5e29` <span style="color:#6e5e29">Example</span>.
    - Complementary Contrast to Main Color 6 `#483d18` <span style="color:#483d18">Example</span>.
    - Complementary Contrast to Main Color 7 `#251f09` <span style="color:#251f09">Example</span>.

  - The Semantic accent color 1: Links `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 2: Calls To Actions/Buttons `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 3: Success `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 4: Error/Failed `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 5: Warning/Alerts `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 6: Disabled `#000000` <span style="color:#000000">Example</span>.

- **Font Sizes & Families: (The Font Size on Figma is the same in Pixels)**
  - Nav Bar: font-size: 45px; = font-family: Roboto;
  - Title: font-size: 160px; = font-family: Roboto;
  - Sub-Headings under titles: font-size: 32pxpx = font-family: Roboto
  - Cards and body text: font-size: 42px; = font-family: Roboto;
  - Food & Activities Sections: font-size: 42px; = font-family: Roboto Condensed Extrabold Italic;
  - FAQ & Form: font-size: 21px; = font-family: 

---

<h1 align="center">Project Specific Reminders</h1>

- [x] Fix Sticky Nav bar
- [x] Fix navbar inset shadow
- [x] Fix text sizes (font-size, weight, spacing, family)
- [x] Fix visit us image sizes to match design
- [x] Fix Input form size on larger screens